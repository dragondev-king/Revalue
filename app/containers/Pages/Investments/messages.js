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
    defaultMessage: 'Location *',
  },
  status: {
    id: `${scope}.status`,
    defaultMessage: 'Status',
  },
  type: {
    id: `${scope}.type`,
    defaultMessage: 'Type',
  },
  typology: {
    id: `${scope}.typology`,
    defaultMessage: 'Typology',
  },
  condition: {
    id: `${scope}.condition`,
    defaultMessage: 'Condition',
  },
  minAskingPrice: {
    id: `${scope}.minAskingPrice`,
    defaultMessage: 'Min Asking Price',
  },
  maxAskingPrice: {
    id: `${scope}.maxAskingPrice`,
    defaultMessage: 'Max Asking Price',
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
    defaultMessage: 'Entry Fee',
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
    defaultMessage: 'Land Registry with Mortgage',
  },
  landRegistryWithoutMortgage: {
    id: `${scope}.landRegistryWithoutMortgage`,
    defaultMessage: 'Land Registry without Mortgage',
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
    defaultMessage: 'Estimated Condominium Costs Per Month',
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
      'Holding Period in months between Entry and Exit of Investment',
  },
  irsRate: {
    id: `${scope}.irsRate`,
    defaultMessage: 'IRS Rate *',
  },
  exitBrokerFee: {
    id: `${scope}.exitBrokerFee`,
    defaultMessage: 'Exit Broker Fee',
  },
  exitBrokerFeeInfo: {
    id: `${scope}.exitBrokerFeeInfo`,
    defaultMessage:
      'Commission paid to the broker by the buyer. % of the selling price',
  },
  loanEarlyRepaymentFee: {
    id: `${scope}.loanEarlyRepaymentFee`,
    defaultMessage: 'Loan Early Repayment Fee',
  },
  loanEarlyRepaymentFeeInfo: {
    id: `${scope}.loanEarlyRepaymentFeeInfo`,
    defaultMessage:
      'The early redemption penalty for a variable acquisition mortgage is 0.50% (as per the rule of the Bank of Portugal) and 2% for a fixed rate mortgage.',
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
    defaultMessage: 'Confidencial Imobiliario Percentile *',
  },
  confidencialImobiliarioPercentileInfo: {
    id: `${scope}.confidencialImobiliarioPercentileInfo`,
    defaultMessage:
      'Confidencial Imobiliario Percentile for Exit Value Calculation',
  },
  minObservationsForPercentile: {
    id: `${scope}.minObservationsForPercentile`,
    defaultMessage: 'Min Observations for Percentile',
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
    defaultMessage: 'Min Capital',
  },
  maxCapitalInfo: {
    id: `${scope}.maxCapitalInfo`,
    defaultMessage: 'Max Capital',
  },
  bidAskInfo: {
    id: `${scope}.bidAskInfo`,
    defaultMessage: 'Bid Ask',
  },
  financingRateInfo: {
    id: `${scope}.financingRateInfo`,
    defaultMessage: 'Financing Rate',
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
    defaultMessage: 'Acquisition Type',
  },
  entryFeeInfo: {
    id: `${scope}.entryFeeInfo`,
    defaultMessage: 'Entry Fee',
  },
  landRegistryWithMortgageInfo: {
    id: `${scope}.landRegistryWithMortgageInfo`,
    defaultMessage: 'Land Registry with Mortgage',
  },
  landRegistryWithoutMortgageInfo: {
    id: `${scope}.landRegistryWithoutMortgageInfo`,
    defaultMessage: 'Land Registry without Mortgage',
  },
  interestRateInfo: {
    id: `${scope}.interestRateInfo`,
    defaultMessage: 'Interest Rate',
  },
  amortizationInfo: {
    id: `${scope}.amortizationInfo`,
    defaultMessage: 'Amortization',
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
    defaultMessage: 'IRS Rate',
  },
  capitalGainsTaxBaseInfo: {
    id: `${scope}.capitalGainsTaxBaseInfo`,
    defaultMessage: 'Capital gains Tax Base',
  },
  grossAreaToUsefulAreaInfo: {
    id: `${scope}.grossAreaToUsefulAreaInfo`,
    defaultMessage: 'Gross Area To Useful Area',
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
