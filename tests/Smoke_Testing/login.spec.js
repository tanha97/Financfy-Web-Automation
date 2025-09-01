import { test, expect } from '../../pageObject/baseTest.js'

import '../../utils/allureHooks.js'

// test.describe('Login without saved session', () => {
//   test.use({ storageState: undefined }); // ⬅️ disable session for this suite

test('Login test', async ({ loginPage }) => {
  await loginPage.browse()
  await loginPage.validLogin(
    process.env.STAGING_MOBILE_NUMBER,
    process.env.STAGING_PASSWORD
  )
})
//})
