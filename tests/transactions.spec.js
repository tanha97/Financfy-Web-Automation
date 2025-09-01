import { test, expect } from '../pageObject/baseTest.js'

test.only('Cash Transfer create', async ({ transactionsPage }) => {
  await transactionsPage.open()
  await transactionsPage.cashTransferTab()
  await transactionsPage.cashTransferCreate('1000', 'Transfer Done')
  await expect(transactionsPage.page).toContainText(
    'Cash Transfer Successfully done'
  )
})
