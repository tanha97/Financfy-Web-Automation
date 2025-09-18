import { test, expect } from '../../pageObject/baseTest.js'

test('Cash Out Create', async ({ cashOutPage, data }) => {
  await cashOutPage.cashOutCreate(
    data.cashOut.amount,
    data.cashOut.tax,
    data.cashOut.contact,
    data.cashOut.paymentMode,
    data.cashOut.category,
    data.cashOut.reference
  )
  const toastText = await cashOutPage.getToastText(5000)
  await expect(toastText).toContain('Cash out successful')
  console.log('Message says:', toastText)
})