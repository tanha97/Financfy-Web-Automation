import { BasePage } from '../basePage.js'

export class BulkEntries extends BasePage{
    constructor(page){
        super(page)
        this.amountcolumn= page.locator("//div[@data-name='amount_mfp9vd4g-4v2clphu']")
        this.typeColumn= page.locator("//div[@data-name='type_mfp9vd4g-4v2clphu']//div[contains(@class,'standard-select-dropdown__control')]")
        

    }
}