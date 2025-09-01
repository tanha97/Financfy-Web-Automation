import {BasePage} from './basePage.js'
export class LoginPage extends BasePage{
    constructor(page){
        super(page)
        this.url= process.env.STAGING_URL
    }

    get mobileNumber(){
        return this.page.locator("input[name='mobileNumber']")
    }

    get password() {
    return this.page.locator("input[name='password']");
  }

  get signinButton() {
    return this.page.locator("button[type='submit']");
  }
  async open(){
    await this.goto(this.url)
  }
  async validLogin(mobilenumber, password) {
    await this.type(this.mobileNumber,mobilenumber);
    await this.type(this.password,password);
    await this.click(this.signinButton);
  }
  
}

