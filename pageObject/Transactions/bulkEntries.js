import { BasePage } from '../basePage.js'

export class BulkEntries extends BasePage{
    constructor(page){
        super(page)
        this.bulEntriesTab = page.locator("//div[@id='bulk-entries']")
        this.amountcolumn= page.locator("//table//tr[1]//td[2]//div[contains(@class,'simple-input-field')]//input[@type='text']")
        this.typeColumn= page.locator("//div[@data-name='type_mfp9vd4g-4v2clphu']//div[contains(@class,'standard-select-dropdown__control')]")
        this.contactCoulmn = page.locator("//div[@data-name='contact_mfpfof5e-k77qpaaa']//div[contains(@class,'standard-select-dropdown__control')]")
        this.categoryColumn= page.locator("//div[@data-name='category_mfpfof5e-k77qpaaa']//div[contains(@class,'standard-select-dropdown__control')]")
        this.paymentColumn= page.locator("//div[@data-name='mode_mfpfof5e-k77qpaaa']//div[contains(@class,'standard-select-dropdown__control')]")
        this.remarksColumn= page.locator("//div[@data-name='remarks_mfpfof5e-k77qpaaa']//div[contains(@class,'standard-select-dropdown__control')]")
    }
async selectTypeOptions(optionPartialText) {
    await this.waitAndClick(this.typeColumn)
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
      `Type option containing "${optionPartialText}" not found`
    )
  }

  async selectContactOptions(optionPartialText) {
    await this.waitAndClick(this.contactCoulmn)
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
    await this.waitAndClick(this.paymentColumn)
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
    await this.waitAndClick(this.categoryColumn)
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
    async bulkEntriesCreate(amount,type,contact,category,paymentMode,remarks){
        await this.goto('/')
        //await this.page.waitForLoadState('networkidle')
        await this.waitAndClick(this.transactionMenu)
        await this.waitAndClick(this.bulEntriesTab)
        await this.waitAndFill(this.amountcolumn, amount)
        await this.selectTypeOptions(type)
        await this.selectContactOptions(contact)
        await this.selectCategoryOptions(category)
        await this.selectPaymentModeOptions(paymentMode)
        await this.waitAndFill(remarks)
        await this.waitAndClick(this.saveButton)


    }
        
    
}