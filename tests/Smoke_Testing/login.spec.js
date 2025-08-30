import { Login } from '../../pageObject/login.js'

test('Login test', async ({ page }) => {
  const login = new Login(page);
  await login.validLogin(process.env.MOBILE_NUMBER, process.env.PASSWORD);
})
