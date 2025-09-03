import {BasePage} from './basePage.js'
export class LoginPage extends BasePage{
    constructor(page){
        super(page)
        this.mobileNumber = page.locator("input[name='mobileNumber']")
        this.password = page.locator("input[name='password']")
        this.signinButton = page.locator("button[type='submit']")
    }

  
  async validLogin(mobilenumber, password) {
    await this.goto('/')
    await this.waitAndFill(this.mobileNumber, mobilenumber);
    await this.waitAndFill(this.password, password);
    await this.waitAndClick(this.signinButton);
  }
  
}

