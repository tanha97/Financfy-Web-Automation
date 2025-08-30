export class Login{
    constructor(page){
        this.page= page
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

  async validLogin(mobilenumber, password) {
    await this.mobileNumber.fill(mobilenumber);
    await this.password.fill(password);
    await this.signinButton.click();
  }
}

