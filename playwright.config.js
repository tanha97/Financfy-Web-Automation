// import { defineConfig, devices } from '@playwright/test';
// import * as dotenv from 'dotenv';
// import path, { resolve } from 'path';
// import { fileURLToPath } from 'url';

// // Handle __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Load env variables
// dotenv.config({ path: resolve(__dirname, '.env') });

// // Select environment (default: staging)
// const ENV = process.env.ENV || 'staging';

// const configMap = {
//   staging: {
//     baseURL: process.env.STAGING_URL,
//     mobileNumber: process.env.MOBILE_NUMBER,
//     password: process.env.PASSWORD,
//   },
//   production: {
//     baseURL: process.env.PROD_URL,
//     mobileNumber: process.env.MOBILE_NUMBER,
//     password: process.env.PASSWORD,
//   },
// };

// export default defineConfig({
//   testDir: './tests',

//   // Run tests in parallel
//   fullyParallel: true,

//   forbidOnly: !!process.env.CI,
//   retries: 1,
//   workers: 1,

//   reporter: [
//     ['line'],               // console
//     ['html'],               // HTML report
//     ['allure-playwright'],  // Allure report
//   ],

//   // 🔑 Runs before tests → generate storageState.json
//   globalSetup: resolve(__dirname, './tests/setup/globalSetup.js'),

//   use: {
//     baseURL: configMap[ENV].baseURL,
//     headless: false,
//     trace: 'on-first-retry',
//     storageState: resolve(__dirname, 'storageState.json'),
//     screenshot: 'only-on-failure',
//     video: 'retain-on-failure',
//     testMatch: ['**/*.spec.js'],
//   },

//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },
//     // Enable others if needed:
//     // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
//     // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
//   ],

//   outputDir: 'test-results/',
// });





import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config()
const ENV= process.env.ENV||'staging'

const configMap={
  staging: {
    baseURL: process.env.STAGING_URL,
    mobileNumber: process.env.MOBILE_NUMBER,
    password: process.env.PASSWORD,
  },
  production: {
    baseURL: process.env.PROD_URL,
    mobileNumber: process.env.MOBILE_NUMBER,
    password: process.env.PASSWORD,
  }
}



/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  retries: 1,
  workers: 1,

  reporter: [
    ['line'],                 // for console output
    ['html'],                 // built-in HTML report
    ['allure-playwright']   // Allure report
  ],

  globalSetup: path.resolve(__dirname, './tests/setup/globalSetup.js'),

  use: {
    
    baseURL: configMap[ENV].baseURL,
    trace: 'on-first-retry',
    headless: false,
    storageState: 'storageState.json',
    testMatch: ['**/*.spec.js'], //'**/utils/*.js'
    screenshot: 'on',   // capture screenshot if test fails
    video: 'on',
  },

  /* Configure projects for major browsers */

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },

  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   },

  //  /* Test against mobile viewports*/

  //   {
  //      name: 'Mobile Chrome',
  //      use: { ...devices['Pixel 5'] },
  //    },
  //    {
  //      name: 'Mobile Safari',
  //      use: { ...devices['iPhone 12'] },
  //    },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    //},
 ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

