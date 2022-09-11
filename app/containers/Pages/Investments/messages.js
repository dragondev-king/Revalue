import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Investments';

export default defineMessages({
  investmentsTitle: {
    id: `${scope}.investmentsTitle`,
    defaultMessage: 'Investments',
  },
  analysisTitle: {
    id: `${scope}.analysisTitle`,
    defaultMessage: 'Analysis',
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
  condominiumCostsMonthly: {
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
  multiRiskInsuranceMonthly: {
    id: `${scope}.multiRiskInsurance`,
    defaultMessage: 'Multi Risk Insurance (Monthly)',
  },
  multiRiskInsuranceInfo: {
    id: `${scope}.multiRiskInsuranceInfo`,
    defaultMessage: 'This insurance is mandatory for real estate',
  },
  lifeInsuranceMonthly: {
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
    defaultMessage: 'Current Irs Rate',
  },
  currentIrsRateInfo: {
    id: `${scope}.currentIrsRateInfo`,
    defaultMessage: 'Capital gains tax',
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
    defaultMessage: 'Capital Gains Tax Rate',
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
    defaultMessage: 'investments',
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
  capitalStructure: {
    id: `${scope}.capitalStructure`,
    defaultMessage: 'Capital Structure',
  },
  transactionPrice: {
    id: `${scope}.transactionPrice`,
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
  report: {
    id: `${scope}.report`,
    defaultMessage: 'Report',
  },
  // #####################
  acquisitionPrice: {
    id: `${scope}.acquisitionPrice`,
    defaultMessage: 'Acquisition Price',
  },
  acquisitionPriceInfo: {
    id: `${scope}.acquisitionPriceInfo`,
    defaultMessage:
      'Investor proposed acquisition Price. Value was calculated by multiplying the bid ask discount on the asking price',
  },
  profitAfterTaxInfo: {
    id: `${scope}.profitAfterTaxInfo`,
    defaultMessage: 'Profit after tax',
  },
  requiredInitialCapital: {
    id: `${scope}.requiredInitialCapital`,
    defaultMessage: 'Required Initial Capital',
  },
  requiredInitialCapitalInfo: {
    id: `${scope}.requiredInitialCapitalInfo`,
    defaultMessage: 'Required Initial Capital',
  },
  entryPriceInfo: {
    id: `${scope}.entryPriceInfo`,
    defaultMessage: 'entryPriceInfo',
  },
  bankCommission: {
    id: `${scope}.bankCommission`,
    defaultMessage: 'Bank Commission',
  },
  multipleOnInvestedCapital: {
    id: `${scope}.multipleOnInvestedCapital`,
    defaultMessage: 'Multiple On Invested Capital',
  },
  multipleOnInvestedCapitalInfo: {
    id: `${scope}.multipleOnInvestedCapitalInfo`,
    defaultMessage:
      'Multiple on invested Capital) measures how much value an investment generates. ' +
      'If the multiple is 1.5x the investment generate 50 cents per every euro invested',
  },
  entryPrice: {
    id: `${scope}.entryPrice`,
    defaultMessage: 'Entry Price',
  },
  capitalGain: {
    id: `${scope}.capitalGain`,
    defaultMessage: 'Capital Gain',
  },
  condominiumCosts: {
    id: `${scope}.condominiumCosts`,
    defaultMessage: 'Condominium Costs',
  },
  lifeInsurance: {
    id: `${scope}.lifeInsurance`,
    defaultMessage: 'Life Insurance',
  },
  multiRiskInsurance: {
    id: `${scope}.multiRiskInsurance`,
    defaultMessage: 'Multi Risk Insurance',
  },
  capitalGainInfo: {
    id: `${scope}.capitalGainInfo`,
    defaultMessage: '',
  },
  preferencesFor: {
    id: `${scope}.preferencesFor`,
    defaultMessage: 'Preferences For',
  },
  property: {
    id: `${scope}.property`,
    defaultMessage: 'Property',
  },
  investmentMetrics: {
    id: `${scope}.investmentMetrics`,
    defaultMessage: 'Investment Metrics',
  },
  capital: {
    id: `${scope}.capital`,
    defaultMessage: 'Capital',
  },
  returns: {
    id: `${scope}.return`,
    defaultMessage: 'Returns',
  },
  bedrooms: {
    id: `${scope}.bedrooms`,
    defaultMessage: 'Bedrooms',
  },
  bedroomsInfo: {
    id: `${scope}.bedroomsInfo`,
    defaultMessage: 'Number of bedrooms In the property',
  },
  askingPriceInfo: {
    id: `${scope}.askingPriceInfo`,
    defaultMessage: 'Seller asking price for the property',
  },
  timeForSale: {
    id: `${scope}.TimeForSale`,
    defaultMessage: 'Time to Sale',
  },
  timeForSaleInfo: {
    id: `${scope}.TimeForSaleInfo`,
    defaultMessage:
      'Holding Period in months between Entry and Exit of Investment',
  },
  requiredrequiredInitialCapital: {
    id: `${scope}.requiredrequiredInitialCapital`,
    defaultMessage: 'Entry Capital',
  },
  requiredrequiredInitialCapitalInfo: {
    id: `${scope}.requiredrequiredInitialCapitalInfo`,
    defaultMessage:
      'Required Capital for Investment. Acquisition Value - Acquisition Debt + Transfer Tax + Acquisition Stamp Duty + Registries + Bank Costs + Acquisition Stamp Duty',
  },
  requiredCapitalInvestment: {
    id: `${scope}.requiredCapitalInvestment`,
    defaultMessage: 'Required Capital over Period',
  },
  requiredCapitalInvestmentInfo: {
    id: `${scope}.requiredCapitalInvestmentInfo`,
    defaultMessage: 'Required Capital over Period',
  },
  totalRequired: {
    id: `${scope}.totalRequired`,
    defaultMessage: 'Total Required Capital over Period',
  },
  totalRequiredInfo: {
    id: `${scope}.totalRequiredInfo`,
    defaultMessage: 'Total Required Capital over Period',
  },
  profitInfo: {
    id: `${scope}.profitInfo`,
    defaultMessage: 'Investment estimated Profit After Tax',
  },
  criteria: {
    id: `${scope}.criteria`,
    defaultMessage: 'Criteria',
  },
  financingAssumptions: {
    id: `${scope}.financingAssumptions`,
    defaultMessage: 'Financing Assumptions',
  },
  capexFinanced: {
    id: `${scope}.capexFinanced`,
    defaultMessage: 'Capital expenditures Financed',
  },
  capex: {
    id: `${scope}.capex`,
    defaultMessage: 'Capital expenditures',
  },
  area: {
    id: `${scope}.area`,
    defaultMessage: 'Area',
  },
  grossArea: {
    id: `${scope}.grossArea`,
    defaultMessage: 'Gross Area',
  },
  acquisition: {
    id: `${scope}.acquisition`,
    defaultMessage: 'Acquisition',
  },
  operationAssumptions: {
    id: `${scope}.operationAssumptions`,
    defaultMessage: 'Operation Assumptions',
  },
  taxes: {
    id: `${scope}.taxes`,
    defaultMessage: 'Taxes',
  },
  transferTax: {
    id: `${scope}.transferTax`,
    defaultMessage: 'Transfer Tax',
  },
  acquisitionStampDuty: {
    id: `${scope}.acquisitionStampDuty`,
    defaultMessage: 'Acquisition Stamp Duty',
  },
  mortgageStampDuty: {
    id: `${scope}.mortgageStampDuty`,
    defaultMessage: 'Mortgage Stamp Duty',
  },
  interestStampDuty: {
    id: `${scope}.interestStampDuty`,
    defaultMessage: 'Interest Stamp Duty ',
  },
  type: {
    id: `${scope}.type`,
    defaultMessage: 'Type',
  },
  condition: {
    id: `${scope}.condition`,
    defaultMessage: 'Condition',
  },
  propertyStatus: {
    id: `${scope}.propertyStatus`,
    defaultMessage: 'Property Status',
  },
  analysisOverview: {
    id: `${scope}.analysisOverview`,
    defaultMessage: 'Analysis Overview',
  },
  typology: {
    id: `${scope}.typology`,
    defaultMessage: 'Typology',
  },
  sensitivityTable: {
    id: `${scope}.sensitivityTable`,
    defaultMessage: 'Estimated Profit Sensitivity Table',
  },
  forecast: {
    id: `${scope}.forecast`,
    defaultMessage: 'Forecast',
  },
  debt: {
    id: `${scope}.debt`,
    defaultMessage: 'Debt',
  },
  salesActivityHistory: {
    id: `${scope}.salesActivityHistory`,
    defaultMessage: 'Sales Activity History',
  },
  months: {
    id: `${scope}.months`,
    defaultMessage: 'Months',
  },
  totalRequiredCapitalOverPeriod: {
    id: `${scope}.totalRequiredCapitalOverPeriod`,
    defaultMessage: 'Total Required Capital Over Period',
  },
  requiredCapitalOverPeriod: {
    id: `${scope}.requiredCapitalOverPeriod`,
    defaultMessage: 'Required Capital Over Period',
  },
  or: {
    id: `${scope}.or`,
    defaultMessage: 'or',
  },
  acquisitionStampDutyFee: {
    id: `${scope}.acquisitionStampDutyFee`,
    defaultMessage: 'Acquisition Stamp Duty Fee',
  },
  acquisitionBrokerFee: {
    id: `${scope}.acquisitionBrokerFee`,
    defaultMessage: 'Acquisition Broker Fee',
  },
  mortgageStampDutyFee: {
    id: `${scope}.mortgageStampDutyFee`,
    defaultMessage: 'Mortgage Stamp Duty Fee',
  },
  acquisitionDebt: {
    id: `${scope}.acquisitionDebt`,
    defaultMessage: 'Acquisition Debt',
  },
  bopDebt: {
    id: `${scope}.bopDebt`,
    defaultMessage: 'Beginning of Period Debt',
  },
  capexDebt: {
    id: `${scope}.capexDebt`,
    defaultMessage: ' Capital Expenditures Debt',
  },
  interests: {
    id: `${scope}.interests`,
    defaultMessage: 'Interests',
  },
  eopDebt: {
    id: `${scope}.eopDebt`,
    defaultMessage: 'End of Period Debt',
  },
  operating: {
    id: `${scope}.operating`,
    defaultMessage: 'Operating',
  },
  propertyTax: {
    id: `${scope}.propertyTax`,
    defaultMessage: 'Property Tax',
  },
  marketValue: {
    id: `${scope}.marketValue`,
    defaultMessage: 'Market Value',
  },
  loanEarlyRepaymentFee: {
    id: `${scope}.loanEarlyRepaymentFee`,
    defaultMessage: 'Loan Early Repayment Fee',
  },
  exitBrokerFee: {
    id: `${scope}.exitBrokerFee`,
    defaultMessage: 'Exit Broker Fee',
  },
  capitalGainsTax: {
    id: `${scope}.capitalGainsTax`,
    defaultMessage: 'Capital Gains Tax',
  },
  profitBeforeTax: {
    id: `${scope}.profitBeforeTax`,
    defaultMessage: 'Profit Before Tax',
  },
  totalAcquisition: {
    id: `${scope}.totalAcquisition`,
    defaultMessage: 'Total Acquisition',
  },
  notary: {
    id: `${scope}.notary`,
    defaultMessage: 'Notary',
  },
  asking: {
    id: `${scope}.asking`,
    defaultMessage: 'Asking',
  },
  month: {
    id: `${scope}.month`,
    defaultMessage: 'Month',
  },
  totalOperatingCosts: {
    id: `${scope}.totalOperatingCosts`,
    defaultMessage: 'Total Operating Costs',
  },
  netExit: {
    id: `${scope}.netExit`,
    defaultMessage: 'Net Exit',
  },
  exit: {
    id: `${scope}.exit`,
    defaultMessage: 'Exit',
  },
  empty: {
    id: `${scope}.empty`,
    defaultMessage: ' ',
  },
  inputNumber: {
    id: `${scope}.inputNumber`,
    defaultMessage: 'Input must be a number.',
  },
  inputRequired: {
    id: `${scope}.inputRequired`,
    defaultMessage: 'Input is required.',
  },
});
