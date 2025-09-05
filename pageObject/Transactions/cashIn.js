import { BasePage } from "../basePage.js";
import { CashTransfer } from"../Transactions/cashTransfer.js"

export class CashIn extends BasePage{
    constructor(page){
       super(page)
       this.cashInTab= page.locator("#tour_transactions_tab_Cashin")
       this.taxField = page.locator("//div[@data-name='tax_id']//div[@class='simple-selector__value-container css-1iruww9']")
       this.taxOptionsLocator =page.locator("//div[@class='simple-selector__menu-list css-6qxrco']//div")
       this.contactField = page.locator("//div[@id='tour_cashout_contact@cash-in']//div[@class='simple-selector__value-container css-1iruww9']")
       this.contactOptionsLocator = page.locator("//div[@class='simple-selector__menu-list css-6qxrco']//div")
       
    }

     async selectTaxOptions(optionPartialText){
        await this.waitAndClick(this.taxField)
        await taxOptionsLocator.first().waitfor({state: 'visible'})
        const optionsCount = await taxOptionsLocator.count()
        for (let i=0; i<optionsCount; i++){
            const text = await taxOptionsLocator.nth(i).innerText()
            if(text.toLowerCase().includes(optionPartialText.toLowerCase())){
                await taxOptionsLocator.nth(i).click()
                return
            }
        }
        throw new Error(`Tax option containing "${optionPartialText}" not found`)

     }

     async selectContactOptions(optionPartialText){
        await this.waitAndClick(this.contactField)
        await this.contactOptionsLocator.first().waitfor({state: 'visible'})
        const optionsCount= await this.contactOptionsLocator.count()
        for (let i=0; i<optionsCount; i++){
            const text = await this.contactOptionsLocator.nth(i).innerText()
            if(text.toLowerCase().includes(optionPartialText.toLowerCase())){
                await this.contactOptionsLocator.nth(i).click()
                return
            }
        }
        throw new Error(`Contact option containing "${optionPartialText}" not found`)


     }
}