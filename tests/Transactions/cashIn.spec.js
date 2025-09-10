import { test, expect } from '../../pageObject/baseTest.js'

test('Cash In Create', async ({ cashInPage }) => {
  await cashInPage.cashInCreate(
    '7200',
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
