import { test as base } from '@playwright/test'
import { LoginPage } from '../pageObject/loginPage.js'
import { CashTransfer } from './Transactions/cashTransfer.js'
import { CashIn } from './Transactions/cashIn.js'
import {ENV} from '../playwright.config.js'
import { testData} from '../tests/utils/testData.js'

// Extend base test
export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page)
    await use(loginPage)
  },

  data: async ({}, use)=>{
    const envData = testData[ENV]
    await use (envData)
  },

  cashTransferPage: async ({ page }, use) => {
    const cashTransferPage = new CashTransfer(page)
    await use(cashTransferPage)
  },

  cashInPage: async ({ page }, use) => {
    const cashInPage = new CashIn(page)
    await use(cashInPage)
  },
})

// Keep the same expect so we don’t need to re-import
export { expect } from '@playwright/test'
