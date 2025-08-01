const { test, expect } = require("@playwright/test");

test("homepage title contains Mohammadpur Mohila College", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Mohammadpur Mohila College/i);
});
