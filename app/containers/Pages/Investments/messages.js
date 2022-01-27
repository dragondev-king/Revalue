import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Investments';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Investments container!',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Investments',
  },
  tooltip: {
    id: `${scope}.tooltip`,
    defaultMessage: 'Info',
  },
  // Property Information
  propertyInformation: {
    id: `${scope}.propertyInformation`,
    defaultMessage: 'Property Information',
  },
  location: {
    id: `${scope}.location`,
    defaultMessage: 'Property Location*',
  },
  status: {
    id: `${scope}.status`,
    defaultMessage: 'Property Status',
  },
  type: {
    id: `${scope}.type`,
    defaultMessage: 'Property Typology',
  },
  typology: {
    id: `${scope}.typology`,
    defaultMessage: 'Typology',
  },
  condition: {
    id: `${scope}.condition`,
    defaultMessage: 'Property Condition',
  },
  minAskingPrice: {
    id: `${scope}.minAskingPrice`,
    defaultMessage: 'Min Price',
  },
  maxAskingPrice: {
    id: `${scope}.maxAskingPrice`,
    defaultMessage: 'Max Price',
  },
  minUsefulArea: {
    id: `${scope}.minUsefulArea`,
    defaultMessage: 'Min Useful Area',
  },
  maxUsefulArea: {
    id: `${scope}.maxUsefulArea`,
    defaultMessage: 'Max Useful Area',
  },
  // Investment Information
  investmentInformation: {
    id: `${scope}.investmentInformation`,
    defaultMessage: 'Investment Information',
  },
  minCapital: {
    id: `${scope}.minCapital`,
    defaultMessage: 'Min Capital',
  },
  maxCapital: {
    id: `${scope}.maxCapital`,
    defaultMessage: 'Max Capital',
  },
  bidAsk: {
    id: `${scope}.bidAsk`,
    defaultMessage: 'Bid Ask *',
  },
  housePriceIndex: {
    id: `${scope}.housePriceIndex`,
    defaultMessage: 'House Price Index *',
  },
  minProfit: {
    id: `${scope}.minProfit`,
    defaultMessage: 'Min Profit *',
  },
  financingRate: {
    id: `${scope}.financingRate`,
    defaultMessage: 'Financing Rate *',
  },
  // Other Investment Information
  otherInvestmentInformation: {
    id: `${scope}.otherInvestmentInformation`,
    defaultMessage: 'Other Investment Information',
  },
  // Acquisition Assumptions
  acquisitionAssumptions: {
    id: `${scope}.acquisitionAssumptions`,
    defaultMessage: 'Acquisition Assumptions',
  },
  acquisitionType: {
    id: `${scope}.acquisitionType`,
    defaultMessage: 'Acquisition Type *',
  },
  entryFee: {
    id: `${scope}.entryFee`,
    defaultMessage: 'Entry Broker Fee',
  },
  stampDuty: {
    id: `${scope}.stampDuty`,
    defaultMessage: 'Stamp Duty',
  },
  stampDutyInfo: {
    id: `${scope}.stampDutyInfo`,
    defaultMessage:
      'As a buyer, you need to pay stamp duty (Imposto de Selo) on deeds, contracts, bank mortgages and loans, documents, and titles. ' +
      'The rate changes according to the type and value of the property. The rate depending on the type of deed/operation is between 0.4% and 0.8%.\n' +
      'When buying a house, you pay stamp duty to the notary while signing the deed of sale. The rate of this stamp duty is 0.8%.',
  },
  landRegistryWithMortgage: {
    id: `${scope}.landRegistryWithMortgage`,
    defaultMessage: 'Land Registry Inscription With Mortgage',
  },
  landRegistryWithoutMortgage: {
    id: `${scope}.landRegistryWithoutMortgage`,
    defaultMessage: 'Land Registry Inscription without Mortgage',
  },
  // Finance Assumptions
  financeAssumptions: {
    id: `${scope}.financeAssumptions`,
    defaultMessage: 'Finance Assumptions',
  },
  interestRate: {
    id: `${scope}.interestRate`,
    defaultMessage: 'Interest Rate *',
  },
  bankCommission: {
    id: `${scope}.bankCommission`,
    defaultMessage: 'Bank Commission',
  },
  bankCommissionInfo: {
    id: `${scope}.bankCommissionInfo`,
    defaultMessage:
      'Bank fees vary, depending on the lender and loan amount. Details will be provided in the mortgage proposal document',
  },
  amortization: {
    id: `${scope}.amortization`,
    defaultMessage: 'Amortization',
  },
  stampDutyMortgage: {
    id: `${scope}.stampDutyMortgage`,
    defaultMessage: 'Stamp Duty Mortgage',
  },
  stampDutyMortgageInfo: {
    id: `${scope}.stampDutyMortgageInfo`,
    defaultMessage: 'The mortgage stamp duty is 0.60% of the final loan amount',
  },
  stampDutyInterests: {
    id: `${scope}.stampDutyInterests`,
    defaultMessage: 'Stamp Duty Interests',
  },
  capexFinancing: {
    id: `${scope}.capexFinancing`,
    defaultMessage: 'CAPEX Financed'
  },
  capex: {
    id: `${scope}.capex`,
    defaultMessage: 'Capex',
  },
  // Operating Assumptions
  operatingAssumptions: {
    id: `${scope}.operatingAssumptions`,
    defaultMessage: 'Operating Assumptions',
  },
  condominiumCosts: {
    id: `${scope}.condominiumCosts`,
    defaultMessage: 'Condominium Costs',
  },
  condominiumCostsInfo: {
    id: `${scope}.condominiumCostsInfo`,
    defaultMessage: 'Estimated Condominium Costs',
  },
  propertyTaxRate: {
    id: `${scope}.propertyTaxRate`,
    defaultMessage: 'Property Tax Rate',
  },
  // Exit Assumptions
  exitAssumptions: {
    id: `${scope}.exitAssumptions`,
    defaultMessage: 'Exit Assumptions',
  },
  timeToSale: {
    id: `${scope}.timeToSale`,
    defaultMessage: 'Time to Sale *',
  },
  timeToSaleInfo: {
    id: `${scope}.timeToSaleInfo`,
    defaultMessage:
      'Period in months between acquistion and exit',
  },
  irsRate: {
    id: `${scope}.irsRate`,
    defaultMessage: 'IRS Rate *',
  },
  exitBrokerFee: {
    id: `${scope}.exitBrokerFee`,
    defaultMessage: 'Exit Broker Rate',
  },
  exitBrokerFeeInfo: {
    id: `${scope}.exitBrokerFeeInfo`,
    defaultMessage:'Broker fee to exit transaction',
  },
  loanEarlyRepaymentFee: {
    id: `${scope}.loanEarlyRepaymentFee`,
    defaultMessage: 'Early Repayment Fee',
  },
  loanEarlyRepaymentFeeInfo: {
    id: `${scope}.loanEarlyRepaymentFeeInfo`,
    defaultMessage:
      'An Early Redemption Penalty (also known as an Early Repayment Charge or ERC) is a fee you may be required to make to a lender if you pay off a loan or mortgage before the scheduled term of the credit facility, also sometimes referred to as a Redemption Penalty.',
  },
  capitalGainsTaxBase: {
    id: `${scope}.capitalGainsTaxBase`,
    defaultMessage: 'Capital gains Tax Base',
  },
  // Valuation Model Configuration
  valuationModelConfiguration: {
    id: `${scope}.valuationModelConfiguration`,
    defaultMessage: 'Valuation Model Configuration',
  },
  grossAreaToUsefulArea: {
    id: `${scope}.grossAreaToUsefulArea`,
    defaultMessage: 'Gross Area To Useful Area',
  },
  floor: {
    id: `${scope}.floor`,
    defaultMessage: 'Floor',
  },
  floorInfo: {
    id: `${scope}.floorInfo`,
    defaultMessage:
      'Min Delta between Asking Value and Confidencial Imobiliario Data Base',
  },
  cap: {
    id: `${scope}.cap`,
    defaultMessage: 'Cap',
  },
  capInfo: {
    id: `${scope}.capInfo`,
    defaultMessage:
      'Max Delta between Asking Value and Confidencial Imobiliario Data Base',
  },
  confidencialImobiliarioPercentile: {
    id: `${scope}.confidencialImobiliarioPercentile`,
    defaultMessage: 'Percentile *',
  },
  confidencialImobiliarioPercentileInfo: {
    id: `${scope}.confidencialImobiliarioPercentileInfo`,
    defaultMessage:
      'Confidencial Imobiliario Percentile for Exit Value Calculation',
  },
  minObservationsForPercentile: {
    id: `${scope}.minObservationsForPercentile`,
    defaultMessage: 'Min Percentile',
  },
  minAskingPriceInfo: {
    id: `${scope}.minAskingPriceInfo`,
    defaultMessage: 'Min Asking Price',
  },
  maxAskingPriceInfo: {
    id: `${scope}.maxAskingPriceInfo`,
    defaultMessage: 'Max Asking Price',
  },
  minUsefulAreaInfo: {
    id: `${scope}.minUsefulAreaInfo`,
    defaultMessage: 'Min Useful Area',
  },
  maxUsefulAreaInfo: {
    id: `${scope}.maxUsefulAreaInfo`,
    defaultMessage: 'Max Useful Area',
  },
  investmentInformationInfo: {
    id: `${scope}.investmentInformationInfo`,
    defaultMessage: 'Investment Information',
  },
  minCapitalInfo: {
    id: `${scope}.minCapitalInfo`,
    defaultMessage: 'Minimium Required Capital for the Transaction to be filter in the analysis',
  },
  maxCapitalInfo: {
    id: `${scope}.maxCapitalInfo`,
    defaultMessage: 'Maximum Required Capital for the Transaction to be filter in the analysis',
  },
  bidAskInfo: {
    id: `${scope}.bidAskInfo`,
    defaultMessage: 'Discount to Seller asking price',
  },
  housePriceIndexInfo: {
    id: `${scope}.housePriceIndexInfo`,
    defaultMessage: 'Property value grow per year',
  },
  financingRateInfo: {
    id: `${scope}.financingRateInfo`,
    defaultMessage: 'Financing Rate to acquition Price',
  },
  minProfitInfo: {
    id: `${scope}.financingRateInfo`,
    defaultMessage: 'Minimium Required Profit to be filter in the analysis',
  },
  otherInvestmentInformationInfo: {
    id: `${scope}.otherInvestmentInformationInfo`,
    defaultMessage: 'Other Investment Information',
  },
  acquisitionAssumptionsInfo: {
    id: `${scope}.acquisitionAssumptionsInfo`,
    defaultMessage: 'Acquisition Assumptions',
  },
  acquisitionTypeInfo: {
    id: `${scope}.acquisitionTypeInfo`,
    defaultMessage: 'Property will be for Investment or as a primary residence?',
  },
  entryFeeInfo: {
    id: `${scope}.entryFeeInfo`,
    defaultMessage: 'Is there a broker fee to be paid the buyer?',
  },
  landRegistryWithMortgageInfo: {
    id: `${scope}.landRegistryWithMortgageInfo`,
    defaultMessage: 'The public deed contract , needs to be made by a recognized entity or person such as a public notary office, a lawyer or solicitor. A popular choice are the “Casa Pronta” (Ready House) notary offices, where the process can be more streamlined and cheaper than normal.For this reason, the reference in terms of price are the Casa Pronta notary offices, where it normally costs 375,00 €, including both the preparation of the public deed contract and the registry. With Mortgage normally will be 700€.',
  },
  landRegistryWithoutMortgageInfo: {
    id: `${scope}.landRegistryWithoutMortgageInfo`,
    defaultMessage: 'The public deed contract , needs to be made by a recognized entity or person such as a public notary office, a lawyer or solicitor. A popular choice are the “Casa Pronta” (Ready House) notary offices, where the process can be more streamlined and cheaper than normal.For this reason, the reference in terms of price are the Casa Pronta notary offices, where it normally costs 375,00 €, including both the preparation of the public deed contract and the registry.',
  },
  interestRateInfo: {
    id: `${scope}.interestRateInfo`,
    defaultMessage: 'Mortgage Interest over Period',
  },
  amortizationInfo: {
    id: `${scope}.amortizationInfo`,
    defaultMessage: 'Amortization Period in years',
  },
  stampDutyInterestsInfo: {
    id: `${scope}.stampDutyInterestsInfo`,
    defaultMessage: 'Stamp Duty Interests',
  },
  propertyTaxRateInfo: {
    id: `${scope}.propertyTaxRateInfo`,
    defaultMessage: 'Property Tax Rate',
  },
  irsRateInfo: {
    id: `${scope}.irsRateInfo`,
    defaultMessage: 'IRS Rate with capital gains',
  },
  capitalGainsTaxBaseInfo: {
    id: `${scope}.capitalGainsTaxBaseInfo`,
    defaultMessage: 'IRS Rate on base Profit',
  },
  grossAreaToUsefulAreaInfo: {
    id: `${scope}.grossAreaToUsefulAreaInfo`,
    defaultMessage: 'If Gross Private area not available this will be the base area for Exit value calculation',
  },
  minObservationsForPercentileInfo: {
    id: `${scope}.minObservationsForPercentileInfo`,
    defaultMessage: 'Min Observations for Percentile',
  },
  btnLabel: {
    id: `${scope}.btnLabel`,
    defaultMessage: 'Analyze',
  },
  // Table
  investments: {
    id: `${scope}.investments`,
    defaultMessage: 'investments',
  },
  id: {
    id: `${scope}.id`,
    defaultMessage: 'ID',
  },
  inputNumber: {
    id: `${scope}.inputNumber`,
    defaultMessage: 'Input must be a number.',
  },
  inputRequired: {
    id: `${scope}.inputRequired`,
    defaultMessage: 'Input is required.',
  },
  asking: {
    id: `${scope}.asking`,
    defaultMessage: 'Asking',
  },
  capital: {
    id: `${scope}.capital`,
    defaultMessage: 'Capital',
  },
  costs: {
    id: `${scope}.costs`,
    defaultMessage: 'Costs',
  },
  price: {
    id: `${scope}.price`,
    defaultMessage: 'Price',
  },
  irr: {
    id: `${scope}.irr`,
    defaultMessage: 'Irr',
  },
  profit: {
    id: `${scope}.profit`,
    defaultMessage: 'Profit',
  },
  report: {
    id: `${scope}.report`,
    defaultMessage: 'Report',
  },
});
