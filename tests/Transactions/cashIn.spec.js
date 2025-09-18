import { test, expect } from '../../pageObject/baseTest.js'

test('Cash In Create', async ({ cashInPage, data }) => {
  await cashInPage.cashInCreate(
    data.cashIn.amount,
    data.cashIn.tax,
    data.cashIn.contact,
    data.cashIn.paymentMode,
    data.cashIn.category,
    data.cashIn.reference
  )
  const toastText = await cashInPage.getToastText(5000)
  await expect(toastText).toContain('Cash in successful')
  console.log('Message says:', toastText)
})
