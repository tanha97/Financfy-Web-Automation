export class BasePage {
  constructor(page, baseURL) {
    this.page = page;
    this.baseURL= baseURL
  }

  // Navigation
  async goto(path='/') {
    const url = this.baseURL ? new URL(path, this.baseURL).toString() : path;
    await this.page.goto(url);
  }

  // Element actions

   async waitAndClick(locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
   }
  async waitAndFill(locator, text) {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(text);
  }

  async getText(locator) {
    return await locator.textContent();
  }

  async isVisible(locator) {
    return await locator.isVisible();
  }

  

  // Utility
  async wait(ms) {
    await this.page.waitForTimeout(ms);
  }
}
