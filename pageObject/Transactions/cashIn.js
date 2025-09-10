import { BasePage } from '../basePage.js'

export class CashIn extends BasePage {
  constructor(page) {
    super(page)
    this.cashInTab = page.locator('#tour_transactions_tab_Cashin')
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
