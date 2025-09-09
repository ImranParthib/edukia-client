import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  // Run tests in parallel for faster execution
  workers: process.env.CI ? 2 : undefined,

  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,

  // Retry on CI only
  retries: process.env.CI ? 2 : 0,

  // Reporter for CI
  reporter: process.env.CI ? "github" : "html",

  // Use minimal browser instances for speed
  use: {
    // Faster browser launch
    headless: true,
    // Faster page loads
    viewport: { width: 1280, height: 720 },
    // Reduce timeout for faster feedback
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,
  },

  // Configure projects for faster testing
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  webServer: {
    command: "npm run build && npm run start",
    port: 3000,
    timeout: 90 * 1000, // Reduced timeout
    reuseExistingServer: !process.env.CI,
  },
});
