import { test, expect } from '../../pageObject/baseTest.js'

test('Cash Transfer create', async ({ cashTransferPage }) => {
  await cashTransferPage.createCashTransfer('1000', 'Transfer Done')
  const toastText = await cashTransferPage.getToastText(5000)
  await expect(toastText).toContain('Successfully transferred cash.')
  console.log('Message says:', toastText)
})
