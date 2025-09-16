// tests/utils/testData.js

export const testData = {
  staging: {
    cashIn: {
      amount: '7500',
      tax: 'vat',
      contact: 'Adiba',
      paymentMode: 'Cash',
      category: 'House rent',
      reference: 'Automation'
    },
    // cashOut: {
    //   amount: '5000',
    //   tax: 'vat',
    //   contact: 'Tanvir',
    //   receiveMode: 'Bank',
    //   category: 'Office Expense',
    //   reference: 'QA Test'
    // }
  },

  production: {
    cashIn: {
      amount: '8500',
      tax: 'Dress Tax',
      contact: 'Doctor',
      paymentMode: 'Cheque',
      category: 'Mission',
      reference: 'Automation_By_Tanha'
    },
    // cashOut: {
    //   amount: '4000',
    //   tax: 'Gov Tax',
    //   contact: 'Jane Smith',
    //   receiveMode: 'Cash',
    //   category: 'Supplier Payment',
    //   reference: 'Automation'
    // }
  }
}
