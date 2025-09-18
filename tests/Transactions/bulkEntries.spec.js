import {test, expect} from "../../pageObject/baseTest.js"

test.only("Bulk Transactions Create", async ({bulkEntriesPage,data}) => {
    await bulkEntriesPage.bulkEntriesCreate(
        data.cashIn.amount,
        data.cashIn.type,
        data.cashIn.contact,
        data.cashIn.category,
        data.cashIn.paymentMode,
        data.cashIn.remarks

    )

})