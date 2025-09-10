import { BasePage } from "../basePage.js"

export class CashOut extends BasePage{
   constructor(page){
    super(page)
    this.cashOutTab = page.locator("#tour_transactions_tab_Cashout")

   }

}
