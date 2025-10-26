// @ts-check
import { defineConfig, devices } from '@playwright/test'
import fs from 'fs'
import path from 'path'

/**
 * Load local .env only if it exists (for local dev)
 */
const envPath = path.resolve(__dirname, '.env')
if (fs.existsSync(envPath)) {
  console.log('Loading local .env file')
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config({ path: envPath })
}

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    // Use baseURL from environment variable
    baseURL: process.env.STAGING_URL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
})
