import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Analysis.table';

export default defineMessages({
  month: {
    id: `${scope}.month`,
    defaultMessage: 'Month',
  },
  acquisition: {
    id: `${scope}.acquisition`,
    defaultMessage: 'Acquisition',
  },
  acquisitionInfo: {
    id: `${scope}.acquisitionInfo`,
    defaultMessage: 'Acquisition',
  },
  acquisitionPrice: {
    id: `${scope}.acquisitionPrice`,
    defaultMessage: 'Acquisition Price',
  },
  acquisitionPriceInfo: {
    id: `${scope}.acquisitionPriceInfo`,
    defaultMessage: 'Acquisition value based on bid ask rate input.',
  },
  acquisitionBrokerFee: {
    id: `${scope}.acquisitionBrokerFee`,
    defaultMessage: 'Acquisition Broker Fee',
  },
  acquisitionBrokerFeeInfo: {
    id: `${scope}.acquisitionBrokerFeeInfo`,
    defaultMessage:
      'Is there a broker fee to be paid by the buyer? Typically this fee is paid by the seller however a broker can request a fee as buy side advisor.',
  },
  realEstateTransferTaxFee: {
    id: `${scope}.realEstateTransferTaxFee`,
    defaultMessage: 'Real Estate Transfer Tax Fee',
  },
  realEstateTransferTaxFeeInfo: {
    id: `${scope}.realEstateTransferTaxFeeInfo`,
    defaultMessage:
      'Real estate transfer tax (Imposto Municipal Sobre Transmissôes Onerosas de Imóveis – IMT) is paid by the buyer when there is a transfer of ownership of the real estate in Portugal. The percentage of tax charged can range from 1% to 8%, depending on the purchase price, the location of the property and whether it is the first or second home in Portugal.',
  },
  acquisitionStampDutyFee: {
    id: `${scope}.acquisitionStampDutyFee`,
    defaultMessage: 'Acquisition Stamp Duty Fee',
  },
  acquisitionStampDutyFeeInfo: {
    id: `${scope}.acquisitionStampDutyFeeInfo`,
    defaultMessage:
      'Stamp duty for acquisition is 0.8% of the maximum value between acquisition and tax value.',
  },
  landRegistryInscription: {
    id: `${scope}.landRegistryInscription`,
    defaultMessage: 'landRegistryInscription',
  },
  landRegistryInscriptionInfo: {
    id: `${scope}.landRegistryInscriptionInfo`,
    defaultMessage:
      'The public deed contract needs to be made by a recognized entity or person such as a public notary office, a lawyer or a solicitor. A popular choice is the “Casa Pronta” (Ready House) notary offices, where the process can be more streamlined and cheaper than normal.' +
      'For this reason, the reference in terms of price is the Casa Pronta notary offices, where it normally costs 375,00 €, including both the preparation of the public deed contract and the registry. With mortgage normally will be 700€.',
  },
  mortgageStampDutyFee: {
    id: `${scope}.mortgageStampDutyFee`,
    defaultMessage: 'Mortgage Stamp Duty Fee',
  },
  mortgageStampDutyFeeInfo: {
    id: `${scope}.mortgageStampDutyFeeInfo`,
    defaultMessage:
      'The mortgage stamp duty is 0.60% of the final loan amount if the loan is for more than 5 years.',
  },
  bankCommissionFee: {
    id: `${scope}.bankCommissionFee`,
    defaultMessage: 'Bank Commission Fee',
  },
  bankCommissionFeeInfo: {
    id: `${scope}.bankCommissionFeeInfo`,
    defaultMessage:
      'Bank fees vary, depending on the lender and loan amount. Details will be provided in the mortgage proposal document.',
  },
  totalAcquisition: {
    id: `${scope}.totalAcquisition`,
    defaultMessage: 'Total Acquisition',
  },
  totalAcquisitionInfo: {
    id: `${scope}.totalAcquisitionInfo`,
    defaultMessage:
      'Total acquisition price considering property price and acquisition costs.',
  },
  debt: {
    id: `${scope}.debt`,
    defaultMessage: 'Debt',
  },
  debtInfo: {
    id: `${scope}.debtInfo`,
    defaultMessage: 'Debt',
  },
  bopDebt: {
    id: `${scope}.bopDebt`,
    defaultMessage: 'Debt at the beginning of the period.',
  },
  bopDebtInfo: {
    id: `${scope}.bopDebtInfo`,
    defaultMessage: 'Debt on the beginning of the period',
  },
  acquisitionDebt: {
    id: `${scope}.acquisitionDebt`,
    defaultMessage: 'Acquisition Debt',
  },
  acquisitionDebtInfo: {
    id: `${scope}.acquisitionDebtInfo`,
    defaultMessage: 'Debt for property acquisition.',
  },
  rehabDebt: {
    id: `${scope}.rehabDebt`,
    defaultMessage: 'Capital Expenditures Debt',
  },
  rehabDebtInfo: {
    id: `${scope}.rehabDebtInfo`,
    defaultMessage: 'Debt for works/renovations on the property.',
  },
  amortization: {
    id: `${scope}.amortization`,
    defaultMessage: 'Amortization',
  },
  amortizationInfo: {
    id: `${scope}.amortizationInfo`,
    defaultMessage: 'Debt principal amortization.',
  },
  interest: {
    id: `${scope}.interest`,
    defaultMessage: 'Interest',
  },
  interestInfo: {
    id: `${scope}.interestInfo`,
    defaultMessage: 'Debt interest.',
  },
  eopDebt: {
    id: `${scope}.eopDebt`,
    defaultMessage: 'End of Period Debt',
  },
  eopDebtInfo: {
    id: `${scope}.eopDebtInfo`,
    defaultMessage:
      'Debt at the end of the period, after debt and amortization.',
  },
  debtService: {
    id: `${scope}.debtService`,
    defaultMessage: 'debtService',
  },
  debtServiceInfo: {
    id: `${scope}.debtServiceInfo`,
    defaultMessage: 'debtServiceInfo',
  },
  rent: {
    id: `${scope}.rent`,
    defaultMessage: 'rent',
  },
  rentInfo: {
    id: `${scope}.rentInfo`,
    defaultMessage: 'rentInfo',
  },
  operating: {
    id: `${scope}.operating`,
    defaultMessage: 'Operating',
  },
  operatingInfo: {
    id: `${scope}.operatingInfo`,
    defaultMessage: 'Operating',
  },
  rentStampDutyFee: {
    id: `${scope}.rentStampDutyFee`,
    defaultMessage: 'rentStampDutyFee',
  },
  rentStampDutyFeeInfo: {
    id: `${scope}.rentStampDutyFeeInfo`,
    defaultMessage: 'rentStampDutyFeeInfo',
  },
  rentBrokerFee: {
    id: `${scope}.rentBrokerFee`,
    defaultMessage: 'rentBrokerFee',
  },
  rentBrokerFeeInfo: {
    id: `${scope}.rentBrokerFeeInfo`,
    defaultMessage: 'rentBrokerFeeInfo',
  },
  propertyManagerFee: {
    id: `${scope}.propertyManagerFee`,
    defaultMessage: 'propertyManagerFee',
  },
  propertyManagerFeeInfo: {
    id: `${scope}.propertyManagerFeeInfo`,
    defaultMessage: 'propertyManagerFeeInfo',
  },
  maintenanceCosts: {
    id: `${scope}.maintenanceCosts`,
    defaultMessage: 'maintenanceCosts',
  },
  maintenanceCostsInfo: {
    id: `${scope}.maintenanceCostsInfo`,
    defaultMessage: 'maintenanceCostsInfo',
  },
  rehab: {
    id: `${scope}.rehab`,
    defaultMessage: 'Capital expenditures',
  },
  rehabInfo: {
    id: `${scope}.rehabInfo`,
    defaultMessage: 'Investment/works on the property.',
  },
  propertyTaxFee: {
    id: `${scope}.propertyTaxFee`,
    defaultMessage: 'Property Tax',
  },
  propertyTaxFeeInfo: {
    id: `${scope}.propertyTaxFeeInfo`,
    defaultMessage: 'Property Tax',
  },
  condominiumCosts: {
    id: `${scope}.condominiumCosts`,
    defaultMessage: 'Condominium Costs',
  },
  condominiumCostsInfo: {
    id: `${scope}.condominiumCostsInfo`,
    defaultMessage: 'Estimated monthly condominium costs.',
  },
  lifeInsurance: {
    id: `${scope}.lifeInsurance`,
    defaultMessage: 'Life Insurance',
  },
  lifeInsuranceInfo: {
    id: `${scope}.lifeInsuranceInfo`,
    defaultMessage: 'This insurance is mandatory if there is a mortgage.',
  },
  multiRiskInsurance: {
    id: `${scope}.multiRiskInsurance`,
    defaultMessage: 'Multi Risk Insurance',
  },
  multiRiskInsuranceInfo: {
    id: `${scope}.multiRiskInsuranceInfo`,
    defaultMessage: 'This insurance is mandatory for real estate.',
  },
  otherOperatingCosts: {
    id: `${scope}.otherOperatingCosts`,
    defaultMessage: 'otherOperatingCosts',
  },
  otherOperatingCostsInfo: {
    id: `${scope}.otherOperatingCostsInfo`,
    defaultMessage: 'otherOperatingCostsInfo',
  },
  totalOperatingCosts: {
    id: `${scope}.totalOperatingCosts`,
    defaultMessage: 'Total Operating Costs',
  },
  totalOperatingCostsInfo: {
    id: `${scope}.totalOperatingCostsInfo`,
    defaultMessage: 'Total investment operating costs.',
  },
  netOperatingIncome: {
    id: `${scope}.netOperatingIncome`,
    defaultMessage: 'netOperatingIncome',
  },
  netOperatingIncomeInfo: {
    id: `${scope}.netOperatingIncomeInfo`,
    defaultMessage: 'netOperatingIncomeInfo',
  },
  exit: {
    id: `${scope}.exit`,
    defaultMessage: 'Exit',
  },
  exitInfo: {
    id: `${scope}.exitInfo`,
    defaultMessage: 'Exit',
  },
  transactionPrice: {
    id: `${scope}.transactionPrice`,
    defaultMessage: 'Selling Price',
  },
  transactionPriceInfo: {
    id: `${scope}.transactionPriceInfo`,
    defaultMessage: 'Selling Price based on Revalue exit calculation.',
  },
  loanEarlyRepaymentFee: {
    id: `${scope}.loanEarlyRepaymentFee`,
    defaultMessage: 'Loan Early Repayment Fee',
  },
  loanEarlyRepaymentFeeInfo: {
    id: `${scope}.loanEarlyRepaymentFeeInfo`,
    defaultMessage:
      'An early redemption penalty (also known as an early repayment charge or ERC) is a fee you may be required to make to a lender if you pay off a loan or mortgage before the scheduled term of the credit facility.',
  },
  exitBrokerFee: {
    id: `${scope}.exitBrokerFee`,
    defaultMessage: 'Exit Broker Fee',
  },
  exitBrokerFeeInfo: {
    id: `${scope}.exitBrokerFeeInfo`,
    defaultMessage: 'Broker fee to exit transaction.',
  },
  netExit: {
    id: `${scope}.netExit`,
    defaultMessage: 'Net Exit',
  },
  netExitInfo: {
    id: `${scope}.netExitInfo`,
    defaultMessage: 'Selling price after costs before tax.',
  },
  profitBeforeTax: {
    id: `${scope}.profitBeforeTax`,
    defaultMessage: 'Profit Before Tax',
  },
  profitBeforeTaxInfo: {
    id: `${scope}.profitBeforeTaxInfo`,
    defaultMessage: 'Profit before capital gains tax.',
  },
  rentTax: {
    id: `${scope}.rentTax`,
    defaultMessage: 'rentTax',
  },
  rentTaxInfo: {
    id: `${scope}.rentTaxInfo`,
    defaultMessage: 'rentTaxInfo',
  },
  capitalGains: {
    id: `${scope}.capitalGains`,
    defaultMessage: 'Capital Gains ',
  },
  capitalGainsInfo: {
    id: `${scope}.capitalGainsInfo`,
    defaultMessage:
      'Capital gain = selling price - acquisition price - investment on the property',
  },
  capitalGainsTax: {
    id: `${scope}.capitalGainsTax`,
    defaultMessage: 'Capital Gains Tax',
  },
  capitalGainsTaxInfo: {
    id: `${scope}.capitalGainsTaxInfo`,
    defaultMessage:
      'Tax Rate: If Resident considers current tax rate and estimates new IRS Rate based on investment estimated profit. If Non Resident rate is 28%' +
      'Capital Gain Tax Based: Differ if property acquisition was for permanent housing or investment and if the capital gain will be reinvested.' +
      'Capital Gain  *  Tax Rate * Capital Gain Tax Base"',
  },
  profit: {
    id: `${scope}.profit`,
    defaultMessage: 'Profit',
  },
  profitAfterTax: {
    id: `${scope}.profitAfterTax`,
    defaultMessage: 'Profit After Tax',
  },
  profitAfterTaxInfo: {
    id: `${scope}.profitAfterTaxInfo`,
    defaultMessage: 'Profit after capital gains tax',
  },
  accumulatedProfit: {
    id: `${scope}.accumulatedProfit`,
    defaultMessage: 'Accumulated Profit',
  },
  accumulatedProfitInfo: {
    id: `${scope}.accumulatedProfitInfo`,
    defaultMessage: 'Accumulated Profit',
  },
  empty: {
    id: `${scope}.empty`,
    defaultMessage: ' ',
  },
  emptyInfo: {
    id: `${scope}.emptyInfo`,
    defaultMessage: ' ',
  },
  total: {
    id: `${scope}.total`,
    defaultMessage: 'Total',
  },
});
