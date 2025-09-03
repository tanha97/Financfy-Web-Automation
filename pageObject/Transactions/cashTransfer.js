import { BasePage } from '../basePage.js'
export class CashTransfer extends BasePage {
  constructor(page) {
    super(page)
    this.transactionMenu= page.locator('#Transactions')
    this.cashbookField = page.locator("//div[contains(@class,'standard-select-dropdown__option') and .//div[text()='Staging-Business']]")
    this.cashTransferTab= page.locator('#cash-transfer')
    this.addcashTransferButton = page.locator('#tour_add_advance_requisition')
    this.amountField = page.locator("input[name='amount']")
    this.remarksField = page.locator('#remarks_text_area')
    this.saveButton = page.locator("button[type='submit']")
    this.toastMessage = page.locator('div[role="alert"] >> text=Successfully transferred cash.')

  }

  async createCashTransfer(amount, remarks) {
    await this.goto('/')
    await this.waitAndClick(this.transactionMenu)
    await this.waitAndClick(this.cashTransferTab)
    await this.waitAndClick(this.addcashTransferButton)
    await this.waitAndFill(this.amountField, amount)
    await this.waitAndFill(this.remarksField, remarks)
    await this.waitAndClick(this.saveButton)
  }
}
