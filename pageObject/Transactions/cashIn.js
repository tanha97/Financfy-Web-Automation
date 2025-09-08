import { BasePage } from '../basePage.js'
import { CashTransfer } from '../Transactions/cashTransfer.js'

export class CashIn extends BasePage {
  constructor(page) {
    super(page)
    this.cashInTab = page.locator('#tour_transactions_tab_Cashin')
    this.taxField = page.locator("//div[@data-name='tax_id']//div[contains(@class,'standard-select-dropdown__control')]")
    this.optionsLocator = page.locator("//div[@role='listbox']//div[@role='option']")
    this.contactField = page.locator("//div[@id='tour_cashout_contact@cash-in']//div[contains(@class,'standard-select-dropdown__control')]")
    this.receiveModeField = page.locator("//div[@id='tour_cashin_paymentmode@cash-in']//div[contains(@class,'standard-select-dropdown__control')]")
    this.categoryField = page.locator("//div[@id='tour_cashin_category@cash-in']//div[contains(@class,'standard-select-dropdown__control')]")
    this.referenceField = page.locator('input[name=reference_no]')
  }

  async selectTaxOptions(optionPartialText) {
    await this.waitAndClick(this.taxField)
    await this.optionsLocator.first().waitFor({ state: 'visible' })
    const optionsCount = await this.optionsLocator.count()
    for (let i = 0; i < optionsCount; i++) {
      const text = await this.optionsLocator.nth(i).innerText()
      if (text.toLowerCase().includes(optionPartialText.toLowerCase())) {
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

  async selectReceiveModeOptions(optionPartialText) {
    await this.waitAndClick(this.receiveModeField)
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
      `Receive mode option containing "${optionPartialText}" not found`
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

  async cashInCreate(amount, tax, contact, receiveMode, category, reference) {
    await this.goto('/')
    await this.page.waitForLoadState('networkidle')
    await this.waitAndClick(this.transactionMenu)
    await this.waitAndClick(this.cashInTab)
    await this.waitAndFill(this.amountField, amount)
    await this.selectTaxOptions(tax)
    await this.selectContactOptions(contact)
    await this.selectCategoryOptions(category)
    await this.selectReceiveModeOptions(receiveMode)
    await this.waitAndFill(this.referenceField, reference)
    await this.waitAndClick(this.saveButton)
  }
}
