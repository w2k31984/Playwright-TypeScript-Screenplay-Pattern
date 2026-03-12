import { defineConfig } from "@playwright/test";
import "dotenv/config";

export default defineConfig({
  testDir: "./src/tests",
  timeout: 55_000,
  retries: 1,
  reporter: [["list"], ["allure-playwright"]],
  use: {
    baseURL: process.env.PARABANK_BASE_URL
      ? `${process.env.PARABANK_BASE_URL}/index.htm`
      : "https://parabank.parasoft.com/parabank/index.htm",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",
  },
});
