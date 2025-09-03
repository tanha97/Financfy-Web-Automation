import { test, expect } from '../pageObject/baseTest.js'

test.only('Cash Transfer create', async ({ cashTransferPage }) => {
  await cashTransferPage.createCashTransfer('1000', 'Transfer Done')
  await expect(cashTransferPage.toastMessage).toBeVisible()
})
