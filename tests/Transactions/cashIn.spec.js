import { test, expect } from '../../pageObject/baseTest.js'

test('Cash In Create', async ({ cashInPage }) => {
  await cashInPage.cashInCreate(
    '6000',
    'vat',
    'Adiba',
    'Cash',
    'House rent',
    'Automation'
  )

})
