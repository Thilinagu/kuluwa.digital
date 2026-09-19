/**
 * Example Playwright end-to-end test. This is a starter scaffold, not wired
 * into package.json's "test" script (which runs Vitest unit tests) because
 * Playwright requires browser binaries not installed in this scaffold.
 *
 * To use:
 *   npm install -D @playwright/test
 *   npx playwright install
 *   npx playwright test
 */
import { test, expect } from "@playwright/test";

test("homepage has the primary hero CTA and nav", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Turning business challenges/i })).toBeVisible();
  await expect(page.getByRole("link", { name: "Start Your Project" }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Join the Network" })).toBeVisible();
});

test("start-project form shows validation errors on empty submit", async ({ page }) => {
  await page.goto("/start-project");
  await page.getByRole("button", { name: "Submit Project Enquiry" }).click();
  await expect(page.getByText("Please check the highlighted fields below.")).toBeVisible();
});
