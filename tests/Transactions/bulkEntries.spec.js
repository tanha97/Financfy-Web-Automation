import { test, expect } from '../../pageObject/baseTest.js'

test('Bulk Transactions Create', async ({ bulkEntriesPage, data }) => {
  await bulkEntriesPage.bulkEntriesCreate(data.bulkEntries)

  const toastText = await cashInPage.getToastText(5000)
  await expect(toastText).toContain('Successfully added 2 transactions')
  console.log('Message says:', toastText)
})
