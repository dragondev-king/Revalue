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
  location: {
    id: `${scope}.location`,
    defaultMessage: 'Location',
  },
  // Property Information
  MainInvestmentInformation: {
    id: `${scope}.mainInvestmentInformation`,
    defaultMessage: 'Main Investment Information',
  },
  propertyInformation: {
    id: `${scope}.propertyInformation`,
    defaultMessage: 'Property Information',
  },
  propertyLocation: {
    id: `${scope}.propertyLocation`,
    defaultMessage: 'Property Location *',
  },
  propertyType: {
    id: `${scope}.propertyType`,
    defaultMessage: 'Property Type',
  },
  propertyTypology: {
    id: `${scope}.propertyTypology`,
    defaultMessage: 'Property Typology',
  },
  propertyCondition: {
    id: `${scope}.propertyCondition`,
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
  bidAskRate: {
    id: `${scope}.bidAskRate`,
    defaultMessage: 'Bid Ask *',
  },
  housePriceIndexRate: {
    id: `${scope}.housePriceIndexRate`,
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
  entryBrokerRate: {
    id: `${scope}.entryBrokerRate`,
    defaultMessage: 'Entry Broker Fee',
  },
  stampDutyRate: {
    id: `${scope}.stampDutyRate`,
    defaultMessage: 'Stamp Duty',
  },
  stampDutyRateInfo: {
    id: `${scope}.stampDutyRateInfo`,
    defaultMessage:
      'As a buyer, you need to pay stamp duty (Imposto de Selo) on deeds, contracts, bank mortgages and loans, documents, and titles. ' +
      'The rate changes according to the type and value of the property. The rate depending on the type of deed/operation is between 0.4% and 0.8%.\n' +
      'When buying a house, you pay stamp duty to the notary while signing the deed of sale. The rate of this stamp duty is 0.8%.',
  },
  landRegistryInscriptionWithMortgage: {
    id: `${scope}.landRegistryInscriptionWithMortgage`,
    defaultMessage: 'Land Registry Inscription With Mortgage',
  },
  landRegistryInscriptionWithoutMortgage: {
    id: `${scope}.landRegistryInscriptionWithoutMortgage`,
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
  stampDutyMortgageRate: {
    id: `${scope}.stampDutyMortgageRate`,
    defaultMessage: 'Stamp Duty Mortgage',
  },
  stampDutyMortgageRateInfo: {
    id: `${scope}.stampDutyMortgageRateInfo`,
    defaultMessage: 'The mortgage stamp duty is 0.60% of the final loan amount',
  },
  stampDutyInterestRate: {
    id: `${scope}.stampDutyInterestRate`,
    defaultMessage: 'Stamp Duty Interests',
  },
  capexFinancingRate: {
    id: `${scope}.capexFinancingRate`,
    defaultMessage: 'CAPEX Financed',
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
  multiRiskInsurance: {
    id: `${scope}.multiRiskInsurance`,
    defaultMessage: 'multiRiskInsurance',
  },
  lifeInsurance: {
    id: `${scope}.lifeInsurance`,
    defaultMessage: 'lifeInsurance',
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
    defaultMessage: 'Period in months between acquisition and exit',
  },
  irsRate: {
    id: `${scope}.irsRate`,
    defaultMessage: 'IRS Rate *',
  },
  exitBrokerRate: {
    id: `${scope}.exitBrokerRate`,
    defaultMessage: 'Exit Broker Rate',
  },
  exitBrokerRateInfo: {
    id: `${scope}.exitBrokerRateInfo`,
    defaultMessage: 'Broker fee to exit transaction',
  },
  earlyRepaymentRate: {
    id: `${scope}.earlyRepaymentRate`,
    defaultMessage: 'Early Repayment Fee',
  },
  earlyRepaymentRateInfo: {
    id: `${scope}.earlyRepaymentRateInfo`,
    defaultMessage:
      'An Early Redemption Penalty (also known as an Early Repayment Charge or ERC) is a fee you may be required to make to a lender if you pay off a loan or mortgage before the scheduled term of the credit facility, also sometimes referred to as a Redemption Penalty.',
  },
  capitalGainsTaxRate: {
    id: `${scope}.capitalGainsTaxRate`,
    defaultMessage: 'Capital gains Tax Base',
  },
  // Valuation Model Configuration
  valuationModelConfiguration: {
    id: `${scope}.valuationModelConfiguration`,
    defaultMessage: 'Valuation Model Configuration',
  },
  grossAreaToUsefulAreaRate: {
    id: `${scope}.grossAreaToUsefulAreaRate`,
    defaultMessage: 'Gross Area To Useful Area',
  },
  floorRate: {
    id: `${scope}.floorRate`,
    defaultMessage: 'Floor',
  },
  floorRateInfo: {
    id: `${scope}.floorRateInfo`,
    defaultMessage:
      'Min Delta between Asking Value and Confidencial Imobiliario Data Base',
  },
  capRate: {
    id: `${scope}.capRate`,
    defaultMessage: 'capRate',
  },
  capRateInfo: {
    id: `${scope}.capRateInfo`,
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
    defaultMessage:
      'Minimium Required Capital for the Transaction to be filter in the analysis',
  },
  maxCapitalInfo: {
    id: `${scope}.maxCapitalInfo`,
    defaultMessage:
      'Maximum Required Capital for the Transaction to be filter in the analysis',
  },
  bidAskRateInfo: {
    id: `${scope}.bidAskRateInfo`,
    defaultMessage: 'Discount to Seller asking price',
  },
  housePriceIndexRateInfo: {
    id: `${scope}.housePriceIndexRateInfo`,
    defaultMessage: 'Property value grow per year',
  },
  financingRateInfo: {
    id: `${scope}.financingRateInfo`,
    defaultMessage: 'Financing Rate to acquition Price',
  },
  minProfitInfo: {
    id: `${scope}.minProfitInfo`,
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
    defaultMessage:
      'Property will be for Investment or as a primary residence?',
  },
  entryBrokerRateInfo: {
    id: `${scope}.entryBrokerRateInfo`,
    defaultMessage: 'Is there a broker fee to be paid the buyer?',
  },
  landRegistryInscriptionWithMortgageInfo: {
    id: `${scope}.landRegistryInscriptionWithMortgageInfo`,
    defaultMessage:
      'The public deed contract , needs to be made by a recognized entity or person such as a public notary office, a lawyer or solicitor. A popular choice are the “Casa Pronta” (Ready House) notary offices, where the process can be more streamlined and cheaper than normal.For this reason, the reference in terms of price are the Casa Pronta notary offices, where it normally costs 375,00 €, including both the preparation of the public deed contract and the registry. With Mortgage normally will be 700€.',
  },
  landRegistryInscriptionWithoutMortgageInfo: {
    id: `${scope}.landRegistryInscriptionWithoutMortgageInfo`,
    defaultMessage:
      'The public deed contract , needs to be made by a recognized entity or person such as a public notary office, a lawyer or solicitor. A popular choice are the “Casa Pronta” (Ready House) notary offices, where the process can be more streamlined and cheaper than normal.For this reason, the reference in terms of price are the Casa Pronta notary offices, where it normally costs 375,00 €, including both the preparation of the public deed contract and the registry.',
  },
  interestRateInfo: {
    id: `${scope}.interestRateInfo`,
    defaultMessage: 'Mortgage Interest over Period',
  },
  amortizationInfo: {
    id: `${scope}.amortizationInfo`,
    defaultMessage: 'Amortization Period in years',
  },
  stampDutyInterestRateInfo: {
    id: `${scope}.stampDutyInterestRateInfo`,
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
  capitalGainsTaxRateInfo: {
    id: `${scope}.capitalGainsTaxRateInfo`,
    defaultMessage: 'IRS Rate on base Profit',
  },
  irs: {
    id: `${scope}.irs`,
    defaultMessage: 'IRS Rate',
  },
  grossAreaToUsefulAreaRateInfo: {
    id: `${scope}.grossAreaToUsefulAreaRateInfo`,
    defaultMessage:
      'If Gross Private area not available this will be the base area for Exit value calculation',
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
  currentMonthlySalary: {
    id: `${scope}.currentMonthlySalary`,
    defaultMessage: 'Current Monthly salary',
  },
  status: {
    id: `${scope}.status`,
    defaultMessage: 'Status',
  },
  reet: {
    id: `${scope}.reet`,
    defaultMessage: 'Reet',
  },
  iRSCategory: {
    id: `${scope}.iRSCategory`,
    defaultMessage: 'IRS Category',
  },
  numberOfDependents: {
    id: `${scope}.numberOfDependents`,
    defaultMessage: 'Number of dependents',
  },
  currentIRSRate: {
    id: `${scope}.currentIRSRate`,
    defaultMessage: 'Current IRS Rate',
  },
});
