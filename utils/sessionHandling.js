// utils/sessionHandling.js
import { chromium } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { LoginPage } from '../pageObject/loginPage.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env') });

export async function saveLoginState() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  const loginPage = new LoginPage(page);

  await loginPage.browse();
  await loginPage.validLogin(
    process.env.STAGING_MOBILE_NUMBER,
    process.env.STAGING_PASSWORD
  );

  await page.waitForURL('**/dashboard');

  // ✅ Save session state for later test reuse
  await context.storageState({ path: 'storageState.json' });

  await browser.close();
  console.log('✅ Login state saved to storageState.json');
}
