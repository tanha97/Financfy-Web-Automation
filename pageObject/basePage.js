import { expect } from "@playwright/test"

export class BasePage {
  constructor(page, baseURL) {
    this.page = page;
    this.baseURL= baseURL
    this.transactionMenu= page.locator('#Transactions')
    this.amountField = page.locator("input[name='amount']")
    this.saveButton = page.locator("button[type='submit']")
    this.toastMessage = page.locator('div[role="alert"]')
  }

  // Navigation
  async goto(path='/') {
    const url = this.baseURL ? new URL(path, this.baseURL).toString() : path;
    await this.page.goto(url);
  }

  

  // Element actions

   async waitAndClick(locator) {
    await expect(locator).toBeVisible()
    await locator.click();
   }
  async waitAndFill(locator, text) {
    await expect(locator).toBeVisible()
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
