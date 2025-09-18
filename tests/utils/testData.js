
import {TAX_OPTIONS} from "./enum.js"

export const testData = {
  staging: {
    cashIn: {
      amount: '7500',
      tax: TAX_OPTIONS.VAT,
      contact: 'Adiba',
      paymentMode: 'Cash',
      category: 'House rent',
      reference: 'Automation'
    },
    cashOut: {
      amount: '5000',
      tax: TAX_OPTIONS.VAT,
      contact: 'Apon',
      paymentMode: 'Bank',
      category: 'Office rent',
      reference: 'QA Test'
    }
  },

  production: {
    cashIn: {
      amount: '8500',
      tax: TAX_OPTIONS.DRESS_TAX,
      contact: 'Doctor',
      paymentMode: 'Cheque',
      category: 'Mission',
      reference: 'Automation_By_Tanha'
    },
    cashOut: {
      amount: '4000',
      tax: TAX_OPTIONS.DRESS_TAX,
      contact: 'Cng',
      paymentMode: 'Cash',
      category: 'Loan',
      reference: 'Automation_at_Production'
    }
  }
}
