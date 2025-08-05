import fs from "node:fs";
import path from "node:path";
import { createInterface } from "node:readline/promises";
import { execa } from "execa";
import pkg from "../package.json" with { type: "json" };

// --- Configuration ---
const CHANGELOG_PATH = path.resolve(process.cwd(), "CHANGELOG.md");
const DRY_RUN = process.argv.includes("--dry-run");

// --- Helper Functions ---
const log = {
  info: (msg) => console.log(`\x1b[34mINFO\x1b[0m: ${msg}`),
  prompt: (msg) => `\x1b[33mPROMPT\x1b[0m: ${msg}`,
  error: (msg) => console.error(`\x1b[31mERROR\x1b[0m: ${msg}`),
  success: (msg) => console.log(`\x1b[32mSUCCESS\x1b[0m: ${msg}`),
};

async function run(command, args, options = {}) {
  if (DRY_RUN) {
    let commandToLog = `${command} ${args.join(" ")}`;
    let additionalLog;

    // Special handling for the 'gh release create' command to avoid verbose logging.
    if (command === "gh" && args.includes("--notes")) {
      const loggedArgs = [...args];
      const notesIndex = loggedArgs.indexOf("--notes");
      if (notesIndex !== -1 && loggedArgs.length > notesIndex + 1) {
        loggedArgs[notesIndex + 1] = "<release notes>";
        commandToLog = `${command} ${loggedArgs.join(" ")}`;
        additionalLog = "       ...and with the release notes as notes.";
      }
    }

    log.info(`[dry-run] Would run: ${commandToLog}`);
    if (additionalLog) {
      log.info(additionalLog);
    }

    return { stdout: "", stderr: "" };
  }
  return await execa(command, args, { stdio: "inherit", ...options });
}

async function askForConfirmation(question) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const answer = await rl.question(log.prompt(`${question} (y/N) `));
  rl.close();
  return answer.toLowerCase().trim();
}

// --- Main Script ---
async function main() {
  log.info("Starting release process...");
  if (DRY_RUN) {
    log.info("Running in dry-run mode. No commands will be executed.");
  }

  // 1. Check for staged changes
  const { stdout: stagedFiles } = await execa("git", [
    "diff",
    "--staged",
    "--name-only",
  ]);
  if (!stagedFiles) {
    log.error(
      "No staged changes to commit. Stage your changes for the release first (e.g., package.json, CHANGELOG.md).",
    );
    process.exit(1);
  }
  log.info(`Staged files for release: \n${stagedFiles}`);

  // 2. Get version and construct tag
  const { version } = pkg;
  if (!version) {
    log.error("Could not read version from package.json");
    process.exit(1);
  }
  const tag = `v${version}`;
  log.info(`Found version: ${version}`);

  // 3. Extract release notes from CHANGELOG.md
  log.info("Extracting release notes from CHANGELOG.md...");
  const changelog = fs.readFileSync(CHANGELOG_PATH, "utf-8");
  const lines = changelog.split("\n");

  const versionHeader = `## ${tag}`;
  const startIndex = lines.findIndex((line) => line.startsWith(versionHeader));

  if (startIndex === -1) {
    log.error(
      `Could not find release notes for version ${tag} in CHANGELOG.md.`,
    );
    process.exit(1);
  }

  // Find the end of the section for the current version
  let endIndex = lines.findIndex(
    (line, index) => index > startIndex && line.startsWith("## v"),
  );
  if (endIndex === -1) {
    endIndex = lines.length;
  }

  // Find the '[compare changes]' link to start the notes from there
  const sectionLines = lines.slice(startIndex, endIndex);
  const notesStartIndex = sectionLines.findIndex((line) =>
    line.startsWith("[compare changes]"),
  );

  if (notesStartIndex === -1) {
    log.error(
      `Could not find '[compare changes]' link for version ${tag} in CHANGELOG.md.`,
    );
    process.exit(1);
  }

  const releaseNotes = sectionLines.slice(notesStartIndex).join("\n").trim();

  if (!releaseNotes) {
    log.error("Extracted release notes are empty.");
    process.exit(1);
  }
  log.success("Successfully extracted release notes.");

  if (DRY_RUN) {
    log.info("--- Extracted Release Notes (for review) ---");
    const indentedNotes = releaseNotes
      .split("\n")
      .map((line) => `  ${line}`)
      .join("\n");
    console.log(indentedNotes);
    log.info("--------------------------------------------");
  }

  // 4. Commit the staged changes
  const commitMessage = `chore(release): ${tag}`;
  log.info(`Committing with message: "${commitMessage}"`);
  await run("git", ["commit", "-m", commitMessage]);

  // 5. Create an annotated tag
  log.info(`Creating annotated tag: ${tag}`);
  await run("git", ["tag", "-a", tag, "-m", tag]);

  log.success("Local commit and tag created successfully!");

  // 6. Ask to push
  if (!DRY_RUN) {
    const answer = await askForConfirmation("Push commit and tags to remote?");
    if (answer !== "y" && answer !== "yes") {
      log.info("Push aborted by user.");
      const revertAnswer = await askForConfirmation(
        "Revert local commit and tag?",
      );
      if (revertAnswer === "y" || revertAnswer === "yes") {
        log.info("Reverting local commit and tag...");
        await run("git", ["reset", "--soft", "HEAD~1"]);
        await run("git", ["tag", "-d", tag]);
        log.success("Local changes have been reverted.");
        log.info("Your staged files are preserved.");
      } else {
        log.info(
          'Local commit and tag were not reverted. Run "git push && git push --tags" manually to publish.',
        );
      }
      process.exit(0);
    }
  }

  // 7. Push to remote
  log.info("Pushing commit and tags to remote...");
  await run("git", ["push"]);
  await run("git", ["push", "--tags"]);
  log.success("Commit and tags pushed to remote.");

  // 8. Create a GitHub release
  log.info("Creating GitHub release...");
  await run("gh", [
    "release",
    "create",
    tag,
    "--title",
    tag,
    "--notes",
    releaseNotes,
  ]);

  log.success("Release process completed and published successfully!");
}

main().catch((err) => {
  log.error("An unexpected error occurred:");
  console.error(err);
  process.exit(1);
});
