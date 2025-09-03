import { test as base } from '@playwright/test'
import { LoginPage } from '../pageObject/loginPage.js'
import { CashTransfer } from './Transactions/cashTransfer.js'

// Extend base test
export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page)
    await use(loginPage)
  },

  cashTransferPage: async ({ page }, use) => {
    const cashTransferPage = new CashTransfer(page)
    await use(cashTransferPage)
  },
})

// Keep the same expect so we don’t need to re-import
export { expect } from '@playwright/test'
