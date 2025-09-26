import { TAX_OPTIONS } from './enum.js'

export const testData = {
  staging: {
    cashIn: {
      type: 'Cash in',
      amount: '7500',
      tax: TAX_OPTIONS.VAT,
      contact: 'Adiba',
      paymentMode: 'Cash',
      category: 'House rent',
      reference: 'Automation',
    },
    cashOut: {
      amount: '5000',
      tax: TAX_OPTIONS.VAT,
      contact: 'Apon',
      paymentMode: 'Bank',
      category: 'Office rent',
      reference: 'QA Test',
    },

    bulkEntries: [
      {
        amount: '2000',
        type: 'Cash in',
        contact: 'Adiba',
        category: 'Discount',
        paymentMode: 'Cash',
        remarks: 'Staging Row 1',
      },

      {
        amount: '2800',
        type: 'Cash out',
        contact: 'Apon',
        category: 'Office rent',
        paymentMode: 'Bank',
        remarks: 'Staging Row 2',
      },
    ],
  },

  production: {
    cashIn: {
      amount: '8500',
      tax: TAX_OPTIONS.DRESS_TAX,
      contact: 'Doctor',
      paymentMode: 'Cheque',
      category: 'Mission',
      reference: 'Automation_By_Tanha',
    },
    cashOut: {
      amount: '4000',
      tax: TAX_OPTIONS.DRESS_TAX,
      contact: 'Cng',
      paymentMode: 'Cash',
      category: 'Loan',
      reference: 'Automation_at_Production',
    },
  },
}
