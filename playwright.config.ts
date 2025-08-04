import { fileURLToPath } from "node:url";
import { defineConfig, devices } from "@playwright/test";
import type { ConfigOptions } from "@nuxt/test-utils/playwright";
import { isCI, isWindows } from "std-env";

const devicesToTest = ["Desktop Chrome"] satisfies Array<
  string | (typeof devices)[string]
>;

export default defineConfig<ConfigOptions>({
  testDir: "./test/e2e",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!isCI,
  /* Retry on CI only */
  retries: isCI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  timeout: isWindows ? 60000 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    /* Nuxt configuration options */
    nuxt: {
      rootDir: fileURLToPath(new URL(".", import.meta.url)),
    },
  },
  projects: devicesToTest.map((p) =>
    typeof p === "string" ? { name: p, use: devices[p] } : p
  ),
});
