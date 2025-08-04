import { expect, test } from "@nuxt/test-utils/playwright";

test.describe("Overall Visuals", () => {
  test("should match the homepage screenshot", async ({ page, goto }) => {
    // Navigate to the root of the site
    await goto("/", { waitUntil: "hydration" });
    // Assert that the page matches the saved screenshot.
    // The first time you run this, it will create a "golden" snapshot.
    await expect(page).toHaveScreenshot("homepage.png", { fullPage: true });
  });
  test("should match the links page screenshots", async ({ page, goto }) => {
    // Navigate to the Links page
    await goto("/links", { waitUntil: "hydration" });
    await expect(page).toHaveScreenshot("links.png", { fullPage: true });
    // Hover on a link item
    await page.getByTestId("blog-link").hover();
    await expect(page).toHaveScreenshot("link-hover.png", { fullPage: true });
  });
  test("should match the card screenshot", async ({ page, goto }) => {
    // Navigate to the Ørsted card page
    await goto("/cards/orsted", { waitUntil: "hydration" });
    await expect(page).toHaveScreenshot("card-orsted.png", { fullPage: true });
  });
});
