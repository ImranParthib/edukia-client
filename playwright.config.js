import { defineConfig } from "@playwright/test";

export default defineConfig({
  webServer: {
    command: "npm run start",
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
});
