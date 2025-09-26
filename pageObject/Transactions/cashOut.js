import { BasePage } from "../basePage.js"

export class CashOut extends BasePage{
   constructor(page){
    super(page)
    this.cashOutTab = page.locator("#tour_transactions_tab_Cashout")

   }


    async cashOutCreate(amount, tax, contact, paymentMode, category, reference) {
    await this.goto('/')
    //await this.page.waitForLoadState('networkidle')
    await this.waitAndClick(this.transactionMenu)
    await this.waitAndClick(this.cashOutTab)
    await this.waitAndFill(this.amountField, amount)
    await this.selectTaxOptions(tax)
    await this.selectContactOptions(contact)
    await this.selectCategoryOptions(category)
    await this.selectPaymentModeOptions(paymentMode)
    await this.waitAndFill(this.referenceField, reference)
    await this.waitAndClick(this.saveButton)
  }
}


