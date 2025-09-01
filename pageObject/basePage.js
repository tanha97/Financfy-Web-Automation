export class BasePage {
  constructor(page) {
    this.page = page;
  }

  // Navigation
  async goto(url) {
    await this.page.goto(url);
  }

  // Element actions
  async click(locator) {
    await locator.click();
  }

  async type(locator, text) {
    await locator.fill(text);
  }

  async getText(locator) {
    return await locator.textContent();
  }

  async isVisible(locator) {
    return await locator.isVisible();
  }

  async waitForVisible(locator) {
    await locator.waitFor({ state: 'visible' });
  }

  // Utility
  async wait(ms) {
    await this.page.waitForTimeout(ms);
  }
}
