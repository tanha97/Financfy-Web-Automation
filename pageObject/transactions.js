import { BasePage } from './basePage.js'
export class Transactions extends BasePage{
    constructor(page){
        super(page)
        this.url= process.env.STAGING_URL
    }

    get transactionMenu(){
        return this.page.locator("#Transactions")
    }
    get cashbookField() {
    return this.page.locator("//div[contains(@class,'standard-select-dropdown__option') and .//div[text()='Staging-Business']]");
}
get cashTransferMenu(){
    return this.page.locator("#cash-transfer")
}
get addcashTransferButton(){
    return this.page.locator("#tour_add_advance_requisition")
}
get amountField(){
    return this.page.locator("input[name='amount']")}

get remarksField(){
        return this.page.locator("#remarks_text_area")
    }
    get saveButton(){
        return this.page.locator("button[type='submit']")
    }
async open(){
    await this.goto(this.url)
}

async cashTransferTab(){
    await this.click(this.transactionMenu)
    await this.click(this.cashTransferMenu)
    await this.click(this.addcashTransferButton)
}
async cashTransferCreate(amount, remarks ){
    await this.type(this.amountField,amount)
    await this.type(this.remarksField,remarks)
    await this.click(this.saveButton)

}




}