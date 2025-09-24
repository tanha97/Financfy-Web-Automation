import { BasePage } from '../basePage.js'

export class BulkEntries extends BasePage {
  constructor(page) {
    super(page)
    this.bulkEntriesTab = page.locator("//div[@id='bulk-entries']")
    this.tableRows = page.locator('table tbody tr')

    //Column mapping
    this.columnMap = {
      amount: 2,
      type: 3,
      contact: 4,
      category: 5,
      paymentMode: 6,
      remarks: 7,
    }
  }

  //Locator for Input field inside a row

  rowInput(rowIndex, columnKey) {
    const columnIndex = this.columnMap[columnKey]
    return this.page.locator(`//table//tr[${rowIndex}]//td[${columnIndex}]//input[@type="text"]`)
  }

  // Locator for dropdown inside a row
  rowDropdown(rowIndex, columnKey) {
    const columnIndex = this.columnMap[columnKey]
    return this.page.locator(
      `//table//tr[${rowIndex}]//td[${columnIndex}]//div[contains(@class,'standard-select-dropdown__control')]`
    )
  }

   // Dropdown option by visible text
  typeOption(optionText) {
    return this.page.locator(`//div[contains(@class,'standard-select-dropdown__option')][normalize-space(.)="${optionText}"]`)
  }

   // Select dropdown
  async selectTypeOptions(rowIndex, columnKey, optionText) {
    const dropdown = this.rowDropdown(rowIndex, columnKey)
    await this.waitAndClick(dropdown)
    await this.typeOption(optionText).waitFor({ state: "visible" })
    console.log(await this.page.locator("//div[contains(@class,'standard-select-dropdown__option')]").allTextContents())

    await this.typeOption(optionText).click()
  }

  // Fill a single row
  async fillRow(rowIndex, { amount, type, contact, category, paymentMode, remarks }) {
    if (amount) await this.waitAndFill(this.rowInput(rowIndex,'amount'), amount)
    if (type) await this.selectTypeOptions(rowIndex, 'type', type)
    if (contact) await this.selectTypeOptions(rowIndex, 'contact', contact)
    if (category) await this.selectTypeOptions(rowIndex, 'category', category)
    if (paymentMode) await this.selectTypeOptions(rowIndex, 'paymentMode', paymentMode)
    if (remarks) await this.waitAndFill(this.rowInput(rowIndex, 'remarks'), remarks)
  }


   // Fill multiple rows
  async bulkEntriesCreate(rowsData) {
    await this.goto('/')
    await this.page.waitForLoadState('networkidle')
    await this.waitAndClick(this.transactionMenu)
    await this.waitAndClick(this.bulkEntriesTab)

    for (let i = 0; i < rowsData.length; i++) {
      await this.fillRow(i + 1, rowsData[i])
    }
    await this.waitAndClick(this.saveButton)
  }
}

  

