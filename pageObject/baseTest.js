import { test as base } from '@playwright/test'
import { LoginPage } from '../pageObject/loginPage.js'
import { Transactions } from '../pageObject/transactions.js'

// Extend base test
export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page)
    await use(loginPage)
  },

  transactionsPage: async ({ page }, use) => {
    const transactionsPage = new Transactions(page)
    await use(transactionsPage)
  },
})

// Keep the same expect so we don’t need to re-import
export { expect } from '@playwright/test'
