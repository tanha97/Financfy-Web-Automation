// utils/sessionHandling.js
import { chromium } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { LoginPage } from '../pageObject/loginPage.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env') });

export async function saveLoginState() {
  const ENV = process.env.ENV || 'staging';

  const configMap = {
  staging: {
    baseURL: process.env.STAGING_URL,
    mobileNumber: process.env.STAGING_MOBILE_NUMBER,
    password: process.env.STAGING_PASSWORD,
  },
  production: {
    baseURL: process.env.PROD_URL,
    mobileNumber: process.env.PROD_MOBILE_NUMBER,
    password: process.env.PROD_PASSWORD,
  },
}
const { baseURL, mobileNumber, password } = configMap[ENV];
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ baseURL });
  const page = await context.newPage();
  

  const loginPage = new LoginPage(page);
// Navigate to correct URL for this environment
  await loginPage.goto(`${baseURL}/`);
  await loginPage.validLogin(mobileNumber, password );

  await page.waitForURL('**/dashboard');

  // ✅ Save session state for later test reuse
  await context.storageState({ path: 'storageState.json' });

  await browser.close();
  console.log(` Login state saved for ${ENV} environment to storageState.json`);
}
