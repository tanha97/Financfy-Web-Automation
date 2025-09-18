import { expect } from '@playwright/test'
import { TAX_OPTIONS } from '../tests/utils/enum.js'

export class BasePage {
  constructor(page, baseURL) {
    this.page = page
    this.baseURL = baseURL
    this.transactionMenu = page.locator('#Transactions')
    this.amountField = page.locator("input[name='amount']")
    this.taxField = page.locator(
      "//div[@data-name='tax_id']//div[contains(@class,'standard-select-dropdown__control')]"
    )
    this.contactField = page.locator(
      "//div[@data-name='contact_id']//div[contains(@class,'standard-select-dropdown__control')]"
    )
    this.paymentModeField = page.locator(
      "//div[@data-name='payment_mode_id']//div[contains(@class,'standard-select-dropdown__control')]"
    )
    this.categoryField = page.locator(
      "//div[@data-name='category_id']//div[contains(@class,'standard-select-dropdown__control')]"
    )
    this.optionsLocator = page.locator(
      "//div[@role='listbox']//div[@role='option']"
    )
    this.referenceField = page.locator("input[name='reference_no']")
    this.saveButton = page.locator("//div[@class='combo-btn separated']")
    this.toastMessage = page.locator('div[role="alert"]')
  }

  // Navigation
  async goto(path = '/') {
    const url = this.baseURL ? new URL(path, this.baseURL).toString() : path
    await this.page.goto(url)
  }

  async getToastText(timeout = 5000) {
    await this.toastMessage.waitFor({ state: 'visible', timeout })
    return await this.toastMessage.textContent()
  }

  // Element actions

  async waitAndClick(locator) {
    await expect(locator).toBeVisible()
    await locator.click()
  }
  async waitAndFill(locator, text) {
    await expect(locator).toBeVisible()
    await locator.fill(text)
  }

  async getText(locator) {
    return await locator.textContent()
  }

  async isVisible(locator) {
    return await locator.isVisible()
  }

  //Dropdown selection

  async selectTaxOptions(option) {

    if (!Object.values(TAX_OPTIONS).includes(option)) {
      throw new Error(
        `Invalid Tax Option: "${option}". 
         Allowed options are: ${Object.values(TAX_OPTIONS).join(', ')}`
      )
    }
    await this.waitAndClick(this.taxField)
    await this.optionsLocator.first().waitFor({ state: 'visible' })
    const optionsCount = await this.optionsLocator.count()
    for (let i = 0; i < optionsCount; i++) {
      const text = await this.optionsLocator.nth(i).innerText()
      if (text.toLowerCase().includes(option.toLowerCase())) {
        await this.optionsLocator.nth(i).click()
        return
      }
    }
    throw new Error(`Tax option containing "${optionPartialText}" not found`)
  }

  async selectContactOptions(optionPartialText) {
    await this.waitAndClick(this.contactField)
    await this.optionsLocator.first().waitFor({ state: 'visible' })
    const optionsCount = await this.optionsLocator.count()
    for (let i = 0; i < optionsCount; i++) {
      const text = await this.optionsLocator.nth(i).innerText()
      if (text.toLowerCase().includes(optionPartialText.toLowerCase())) {
        await this.optionsLocator.nth(i).click()
        return
      }
    }
    throw new Error(
      `Contact option containing "${optionPartialText}" not found`
    )
  }

  async selectPaymentModeOptions(optionPartialText) {
    await this.waitAndClick(this.paymentModeField)
    await this.optionsLocator.first().waitFor({ state: 'visible' })
    const optionsCount = await this.optionsLocator.count()
    for (let i = 0; i < optionsCount; i++) {
      const text = await this.optionsLocator.nth(i).innerText()
      if (text.toLowerCase().includes(optionPartialText.toLowerCase())) {
        await this.optionsLocator.nth(i).click()
        return
      }
    }
    throw new Error(
      `Payment mode option containing "${optionPartialText}" not found`
    )
  }

  async selectCategoryOptions(optionPartialText) {
    await this.waitAndClick(this.categoryField)
    await this.optionsLocator.first().waitFor({ state: 'visible' })
    const optionsCount = await this.optionsLocator.count()
    for (let i = 0; i < optionsCount; i++) {
      const text = await this.optionsLocator.nth(i).innerText()
      if (text.toLowerCase().includes(optionPartialText.toLowerCase())) {
        await this.optionsLocator.nth(i).click()
        return
      }
    }
    throw new Error(
      `Category option containing "${optionPartialText}" not found`
    )
  }

  // Utility
  async wait(ms) {
    await this.page.waitForTimeout(ms)
  }
}
