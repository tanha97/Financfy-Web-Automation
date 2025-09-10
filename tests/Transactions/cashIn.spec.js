import { test, expect } from '../../pageObject/baseTest.js'

test.only('Cash In Create', async ({ cashInPage }) => {
  await cashInPage.cashInCreate(
    '6000',
    'vat',
    'Adiba',
    'Cash',
    'House rent',
    'Automation'
  )
  const toastText = await cashInPage.getToastText(5000)
  await expect(toastText).toContain("Cash in successful")
  console.log("Message says:", toastText)

})
