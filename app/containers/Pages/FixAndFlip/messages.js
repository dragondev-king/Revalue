import { defineMessages } from 'react-intl';

export const scope = 'app.containers.FixAndFlip';

export default defineMessages({
  fixAndFlipTitle: {
    id: `${scope}.fixAndFlipTitle`,
    defaultMessage: 'Fix And Flip',
  },
  MainInvestmentInformation: {
    id: `${scope}.mainInvestmentInformation`,
    defaultMessage: 'Main Investment Information',
  },
  propertyLocation: {
    id: `${scope}.propertyLocation`,
    defaultMessage: 'Property Location',
  },
  financingRate: {
    id: `${scope}.financingRate`,
    defaultMessage: 'Financing Rate',
  },
  financingRateInfo: {
    id: `${scope}.financingRateInfo`,
    defaultMessage:
      'Financing rate to acquisition price. ' +
      'Example: if the property acquisition price is 100.000€ and financing rate is 50%, financing will be 50.000€',
  },
  bidAskRate: {
    id: `${scope}.bidAskRate`,
    defaultMessage: 'Bid Ask Rate',
  },
  bidAskRateInfo: {
    id: `${scope}.bidAskRateInfo`,
    defaultMessage:
      'Acquisition price will be this discount to seller asking price. ' +
      'Example: If asking price is 100.000€ and bid ask is 5%, acquisition price will be 95.000€',
  },
  minProfit: {
    id: `${scope}.minProfit`,
    defaultMessage: 'Minimum Profit',
  },
  minProfitInfo: {
    id: `${scope}.minProfitInfo`,
    defaultMessage:
      'Minimum required profit to be filter in the analysis after tax. ' +
      'Example: If the min profit is 10.000€, only investments opportunities with a return higher than 10.000€ will be presented',
  },
  housePriceIndexRate: {
    id: `${scope}.housePriceIndexRate`,
    defaultMessage: 'House Price Index Rate',
  },
  housePriceIndexRateInfo: {
    id: `${scope}.housePriceIndexRateInfo`,
    defaultMessage:
      'Property value grow per year. ' +
      'Example: If house price index is 2% and the market value is 100.000€ at the moment of acquisition, one year after market value will be (100.000€ *(1 +2%)) = 102.000€ and in year 3 ((102.000*(1+2%)) = 104.040€',
  },
  minCapital: {
    id: `${scope}.minCapital`,
    defaultMessage: 'Minimum Required Capital',
  },
  minCapitalInfo: {
    id: `${scope}.minCapitalInfo`,
    defaultMessage:
      'Minimum Required Capital for the Transaction to be filter in the analysis. ' +
      'Example: If Min Capital is 25.000€ and the required capital after financing debt, Taxes and non financed Capital Expenditures is 15.000€, this investment opportunity would not be presented',
  },
  maxCapital: {
    id: `${scope}.maxCapital`,
    defaultMessage: 'Maximum Required Capital',
  },
  maxCapitalInfo: {
    id: `${scope}.maxCapitalInfo`,
    defaultMessage:
      'Maximum Required Capital for the Transaction to be filter in the analysis',
  },
  percentile: {
    id: `${scope}.Percentile`,
    defaultMessage: 'Percentile',
  },
  percentileInfo: {
    id: `${scope}.percentileInfo`,
    defaultMessage:
      'Property percentile for exit value calculation. ' +
      'Properties with higher value should be compared with higher percentile properties per square meter on the database, considering property type, condition and location',
  },
  propertyCondition: {
    id: `${scope}.propertyCondition`,
    defaultMessage: 'Property Condition',
  },
  propertyInformation: {
    id: `${scope}.propertyInformation`,
    defaultMessage: 'Property Information',
  },
  propertyType: {
    id: `${scope}.propertyType`,
    defaultMessage: 'Property Type',
  },
  propertyTypology: {
    id: `${scope}.propertyTypology`,
    defaultMessage: 'Property Typology',
  },
  minAskingPrice: {
    id: `${scope}.minAskingPrice`,
    defaultMessage: 'Minimum Asking Price',
  },
  minAskingPriceInfo: {
    id: `${scope}.minAskingPriceInfo`,
    defaultMessage:
      'Minimum asking price to be filter in the analysis. ' +
      'Example: If minimum price is 250.000€, investment opportunity with asking values bellow will not be presented',
  },
  maxAskingPrice: {
    id: `${scope}.maxAskingPrice`,
    defaultMessage: 'Maximum Asking Price',
  },
  maxAskingPriceInfo: {
    id: `${scope}.maxAskingPriceInfo`,
    defaultMessage:
      'Maximum asking price to be filter in the analysis. ' +
      'Example: If max price is 250.000€, investment opportunity with asking values above will not be presented',
  },
  minUsefulArea: {
    id: `${scope}.minUsefulArea`,
    defaultMessage: 'Minimum Useful Area',
  },
  minUsefulAreaInfo: {
    id: `${scope}.minUsefulAreaInfo`,
    defaultMessage: 'Minimum useful area to be filter in the analysis',
  },
  maxUsefulArea: {
    id: `${scope}.maxUsefulArea`,
    defaultMessage: 'Maximum Useful Area',
  },
  maxUsefulAreaInfo: {
    id: `${scope}.maxUsefulAreaInfo`,
    defaultMessage: 'Maximum useful area to be filter in the analysis',
  },
  acquisitionAssumptions: {
    id: `${scope}.acquisitionAssumptions`,
    defaultMessage: 'Acquisition Assumptions',
  },
  acquisitionType: {
    id: `${scope}.acquisitionType`,
    defaultMessage: 'Acquisition Type',
  },
  acquisitionTypeInfo: {
    id: `${scope}.acquisitionTypeInfo`,
    defaultMessage:
      'Property will be for investment or as a primary residence? ' +
      'Acquisition real estate transfer tax and exit Capital gains differ with acquisition type',
  },
  acquisitionBrokerRate: {
    id: `${scope}.acquisitionBrokerRate`,
    defaultMessage: 'Acquisition Broker Rate',
  },
  acquisitionBrokerRateInfo: {
    id: `${scope}.acquisitionBrokerRateInfo`,
    defaultMessage:
      'Is there a broker fee to be paid the buyer? ' +
      'Typically this fee is paid by the seller however a broker can request a fee as buy side advisor',
  },
  acquisitionStampDutyRate: {
    id: `${scope}.acquisitionStampDutyRate`,
    defaultMessage: 'Acquisition Stamp Duty Rate',
  },
  acquisitionStampDutyRateInfo: {
    id: `${scope}.acquisitionStampDutyRateInfo`,
    defaultMessage:
      'Stamp duty for acquisition is 0.8% of maximum value between acquisition and tax value',
  },
  landRegistryInscription: {
    id: `${scope}.landRegistryInscription`,
    defaultMessage: 'Land Registry Inscription',
  },
  landRegistryInscriptionInfo: {
    id: `${scope}.landRegistryInscriptionInfo`,
    defaultMessage:
      'The public deed contract, needs to be made by a recognized entity or person such as a public notary office, a lawyer or solicitor. ' +
      'A popular choice are the “Casa Pronta” (Ready House) notary offices, where the process can be more streamlined and cheaper than normal.' +
      'For this reason, the reference in terms of price are the Casa Pronta notary offices, where it normally costs 375,00 €, including both the preparation of the public deed contract and the registry. With Mortgage normally will be 700€',
  },
  realEstateTransferTax: {
    id: `${scope}.realEstateTransferTax`,
    defaultMessage: 'Real Estate Transfer Tax',
  },
  realEstateTransferTaxInfo: {
    id: `${scope}.realEstateTransferTax`,
    defaultMessage:
      'Property Transfer Tax (Imposto Municipal sobre Transmissôes Onerosas de Imóveis – IMT) is paid by the buyer when there is a transfer of ownership of real estate in Portugal. ' +
      'The percentage of tax charged can range from 1% to 8%, depending on the purchase price, the location of the property and whether it is first or second home in Portugal',
  },
  financeAssumptions: {
    id: `${scope}.financeAssumptions`,
    defaultMessage: 'Finance Assumptions',
  },
  bankCommissionRate: {
    id: `${scope}.bankCommissionRate`,
    defaultMessage: 'Bank Commission Rate',
  },
  bankCommissionRateInfo: {
    id: `${scope}.bankCommissionRateInfo`,
    defaultMessage:
      'Bank fees vary, depending on the lender and loan amount. ' +
      'Details will be provided in the mortgage proposal document',
  },
  stampDutyMortgageRate: {
    id: `${scope}.stampDutyMortgageRate`,
    defaultMessage: 'Stamp Duty Mortgage Rate',
  },
  stampDutyMortgageRateInfo: {
    id: `${scope}.stampDutyMortgageRateInfo`,
    defaultMessage:
      'The mortgage stamp duty is 0.60% of the final loan amount if the loan if for more than 5 years',
  },
  stampDutyInterestRate: {
    id: `${scope}.stampDutyInterestRate`,
    defaultMessage: 'Stamp Duty Interest Rate',
  },
  stampDutyInterestRateInfo: {
    id: `${scope}.stampDutyInterestRateInfo`,
    defaultMessage:
      'The interest stamp duty is 4% of the interest of the period',
  },
  interestRate: {
    id: `${scope}.interestRate`,
    defaultMessage: 'Interest Rate',
  },
  interestRateInfo: {
    id: `${scope}.interestRateInfo`,
    defaultMessage: 'Mortgage Interest over Period',
  },
  capexFinancingRate: {
    id: `${scope}.capexFinancingRate`,
    defaultMessage: 'Capital Expenditure Financing Rate',
  },
  capexFinancingRateInfo: {
    id: `${scope}.capexFinancingRateInfo`,
    defaultMessage:
      'Percentage of Capital Expenditure, remodel on the project, that will be financed',
  },
  earlyRepaymentRate: {
    id: `${scope}.earlyRepaymentRate`,
    defaultMessage: 'Early Repayment Fee Rate',
  },
  earlyRepaymentRateInfo: {
    id: `${scope}.earlyRepaymentRateInfo`,
    defaultMessage:
      'An Early Redemption Penalty (also known as an Early Repayment Charge or ERC) is a fee you may be required to make to a lender if you pay off a loan or mortgage before the scheduled term of the credit facility, also sometimes referred to as a Redemption Penalty',
  },
  amortization: {
    id: `${scope}.amortization`,
    defaultMessage: 'Amortization',
  },
  amortizationInfo: {
    id: `${scope}.amortizationInfo`,
    defaultMessage: 'Amortization Period in years',
  },
  year: {
    id: `${scope}.year`,
    defaultMessage: 'year',
  },
  operatingAssumptions: {
    id: `${scope}.operatingAssumptions`,
    defaultMessage: 'Operating Assumptions',
  },
  condominiumCosts: {
    id: `${scope}.condominiumCosts`,
    defaultMessage: 'Condominium Costs (Monthly)',
  },
  condominiumCostsInfo: {
    id: `${scope}.condominiumCostsInfo`,
    defaultMessage: 'Estimated Monthly Condominium Costs',
  },
  propertyTaxRate: {
    id: `${scope}.propertyTaxRate`,
    defaultMessage: 'Property Tax Rate',
  },
  propertyTaxRateInfo: {
    id: `${scope}.propertyTaxRateInfo`,
    defaultMessage:
      'This tax value should be multiplied by a tax rate, differ by county, and paid annually. ' +
      'Property Tax is being estimated being the tax value of the property 50% of the acquisition value.',
  },
  capexPerSquareMeter: {
    id: `${scope}.capexPerSquareMeter`,
    defaultMessage: 'Capital Expenditure',
  },
  capexPerSquareMeterInfo: {
    id: `${scope}.capexPerSquareMeterInfo`,
    defaultMessage:
      'Capex is capital expenditures - This is the estimated remodel/works to be done on the property. ' +
      'This input is per square meeter and is calculated according with the gross construction area of the property',
  },
  multiRiskInsurance: {
    id: `${scope}.multiRiskInsurance`,
    defaultMessage: 'Multi Risk Insurance (Monthly)',
  },
  multiRiskInsuranceInfo: {
    id: `${scope}.multiRiskInsuranceInfo`,
    defaultMessage: 'This insurance is mandatory for real estate',
  },
  lifeInsurance: {
    id: `${scope}.lifeInsurance`,
    defaultMessage: 'Life Insurance (Monthly)',
  },
  lifeInsuranceInfo: {
    id: `${scope}.lifeInsuranceInfo`,
    defaultMessage: 'This insurance is mandatory if there is a mortgage',
  },
  taxAssumptions: {
    id: `${scope}.taxAssumptions`,
    defaultMessage: 'Tax Assumptions',
  },
  currentIrsRate: {
    id: `${scope}.currentIrsRate`,
    defaultMessage: 'Irs Rate',
  },
  currentIrsRateInfo: {
    id: `${scope}.currentIrsRateInfo`,
    defaultMessage: 'Irs Rate',
  },
  taxResidentInPortugal: {
    id: `${scope}.taxResidentInPortugal`,
    defaultMessage: 'Tax Resident In Portugal',
  },
  irsCategory: {
    id: `${scope}.irsCategory`,
    defaultMessage: 'Irs Category',
  },
  irsCategoryRegion: {
    id: `${scope}.irsCategoryRegion`,
    defaultMessage: 'Region',
  },
  irsDependents: {
    id: `${scope}.irsDependents`,
    defaultMessage: 'Number of Dependents',
  },
  grossSalary: {
    id: `${scope}.grossSalary`,
    defaultMessage: 'Current Monthly salary',
  },
  irsRate: {
    id: `${scope}.irsRate`,
    defaultMessage: 'Irs Rate',
  },
  exitAssumptions: {
    id: `${scope}.exitAssumptions`,
    defaultMessage: 'Exit Assumptions',
  },
  timeToSale: {
    id: `${scope}.timeToSale`,
    defaultMessage: 'Time to Sale',
  },
  timeToSaleInfo: {
    id: `${scope}.timeToSaleInfo`,
    defaultMessage:
      'Holding Period in months between entry and exit of investment',
  },
  exitBrokerRate: {
    id: `${scope}.exitBrokerRate`,
    defaultMessage: 'Exit Broker Rate',
  },
  exitBrokerRateInfo: {
    id: `${scope}.exitBrokerRateInfo`,
    defaultMessage: 'Broker fee to exit transaction',
  },
  capitalGainsTaxRate: {
    id: `${scope}.capitalGainsTaxRate`,
    defaultMessage: 'Capital Gains Tax Base Rate',
  },
  capitalGainsTaxRateInfo: {
    id: `${scope}.capitalGainsTaxRate`,
    defaultMessage: 'Taxable Base Rate',
  },
  valuationModelConfiguration: {
    id: `${scope}.valuationModelConfiguration`,
    defaultMessage: 'Valuation Model Configuration',
  },
  grossAreaToUsefulAreaRate: {
    id: `${scope}.grossAreaToUsefulAreaRate`,
    defaultMessage: 'Gross Area To Useful Area Rate',
  },
  grossAreaToUsefulAreaRateInfo: {
    id: `${scope}.grossAreaToUsefulAreaRateInfo`,
    defaultMessage:
      'If useful area not available this will be the base area discount to gross area for exit value calculation',
  },
  floorRate: {
    id: `${scope}.floorRate`,
    defaultMessage: 'Floor Rate',
  },
  floorRateInfo: {
    id: `${scope}.floorRateInfo`,
    defaultMessage:
      'Maximum delta between asking price and exit calculation for lower value. ' +
      'Example: If asking price is 1.000€ per square meter and Revalue valuation is 800€ per square meter floor input will dictate how far can the Revalue valuation can be from asking. ' +
      'Considering a floor of 10% the minimum value that Revalue will give to this property per square meter will be ((1.000 *(1-10%)) = 900€',
  },
  capRate: {
    id: `${scope}.capRate`,
    defaultMessage: 'Cap Rate',
  },
  capRateInfo: {
    id: `${scope}.capRateInfo`,
    defaultMessage:
      'Maximum delta between asking price and exit calculation for higher value. ' +
      'Example: If asking is 1.000€ per square meter and Revalue valuation is 1.200€ per square meter cap input will dictate how far can the Revalue valuation can be from asking. ' +
      'Considering a cap of 10% the maximum value that Revalue will give to this property per square meter will be ((1.000 *(1+10%)) = 1.100€',
  },
  analyze: {
    id: `${scope}.analyze`,
    defaultMessage: 'analyze',
  },
  investments: {
    id: `${scope}.investments`,
    defaultMessage: 'Investments',
  },
  location: {
    id: `${scope}.location`,
    defaultMessage: 'Location',
  },
  id: {
    id: `${scope}.id`,
    defaultMessage: 'Id',
  },
  askingPrice: {
    id: `${scope}.askingPrice`,
    defaultMessage: 'Asking Price',
  },
  askingPriceInfo: {
    id: `${scope}.askingPriceInfo`,
    defaultMessage: 'Asking Price',
  },
  requiredInitialCapital: {
    id: `${scope}.requiredInitialCapital`,
    defaultMessage: 'Required Initial Capital',
  },
  requiredInitialCapitalInfo: {
    id: `${scope}.requiredInitialCapitalInfo`,
    defaultMessage:
      'Required capital for investment acquisition after acquisition costs and debt.',
  },
  transactionPrice: {
    id: `${scope}.transactionPrice`,
    defaultMessage: 'Selling Price',
  },
  transactionPriceInfo: {
    id: `${scope}.transactionPriceInfo`,
    defaultMessage: 'Selling Price',
  },
  internalRateOfReturn: {
    id: `${scope}.internalRateOfReturn`,
    defaultMessage: 'Internal Rate Of Return',
  },
  internalRateOfReturnInfo: {
    id: `${scope}.internalRateOfReturnInfo`,
    defaultMessage:
      'Is the expected compound annual rate of return that will be earned on a project or investment.' +
      ' An investment with a 10% IRR (Internal Rate of Return) earned a 10% compound annual growth rate.',
  },
  profitAfterTax: {
    id: `${scope}.profitAfterTax`,
    defaultMessage: 'Profit After Tax',
  },
  profitAfterTaxInfo: {
    id: `${scope}.profitAfterTaxInfo`,
    defaultMessage: 'Investment Profit after taxes and costs assumptions',
  },
  report: {
    id: `${scope}.report`,
    defaultMessage: 'Report',
  },
  month: {
    id: `${scope}.month`,
    defaultMessage: 'Month',
  },
  inputNumber: {
    id: `${scope}.inputNumber`,
    defaultMessage: 'Input must be a number.',
  },
  inputRequired: {
    id: `${scope}.inputRequired`,
    defaultMessage: 'Input is required.',
  },
  preferencesFor: {
    id: `${scope}.preferencesFor`,
    defaultMessage: 'Preferences For',
  },
});
