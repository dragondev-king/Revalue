import { defineMessages } from 'react-intl';

export const scope = 'app.containers.FixAndFlip';

export default defineMessages({
  fixAndFlipTitle: {
    id: `${scope}.fixAndFlipTitle`,
    defaultMessage: 'Fix And Flip',
  },
  propertyLocation: {
    id: `${scope}.propertyLocation`,
    defaultMessage: 'propertyLocation',
  },
  property: {
    id: `${scope}.property`,
    defaultMessage: 'property',
  },
  proposal: {
    id: `${scope}.proposal`,
    defaultMessage: 'proposal',
  },
  financing: {
    id: `${scope}.financing`,
    defaultMessage: 'financing',
  },
  lease: {
    id: `${scope}.lease`,
    defaultMessage: 'lease',
  },
  operatingCosts: {
    id: `${scope}.operatingCosts`,
    defaultMessage: 'operatingCosts',
  },
  tax: {
    id: `${scope}.tax`,
    defaultMessage: 'tax',
  },
  sale: {
    id: `${scope}.sale`,
    defaultMessage: 'sale',
  },
  capital: {
    id: `${scope}.capital`,
    defaultMessage: 'capital',
  },
  financingRate: {
    id: `${scope}.financingRate`,
    defaultMessage: 'Financing Rate',
  },
  financingRateInfo: {
    id: `${scope}.financingRateInfo`,
    defaultMessage:
      'Financing rate to acquisition price. Example: if the property acquisition price is 100.000€ and financing rate is 50%, financing will be 50.000€.',
  },
  bidAskRate: {
    id: `${scope}.bidAskRate`,
    defaultMessage: 'Bid Ask Rate',
  },
  bidAskRateInfo: {
    id: `${scope}.bidAskRateInfo`,
    defaultMessage:
      'The acquisition price will be the discount on the asking price. Example: If the asking price is 100.000€ and the bid ask is 5%, the acquisition price will be 95.000€.',
  },
  minProfit: {
    id: `${scope}.minProfit`,
    defaultMessage: 'Minimum Profit',
  },
  minProfitInfo: {
    id: `${scope}.minProfitInfo`,
    defaultMessage:
      'Minimum required profit to be filtered in all the analysis. Example: If the minimum profit is 10.000€, only investments opportunities with a return higher than 10.000€ will be presented.',
  },
  housePriceIndexRate: {
    id: `${scope}.housePriceIndexRate`,
    defaultMessage: 'House Price Index Rate',
  },
  housePriceIndexRateInfo: {
    id: `${scope}.housePriceIndexRateInfo`,
    defaultMessage:
      'Property value grows per year. Example: If house price index is 2% and the market value is 100.000€ at the moment of the acquisition, one year after the market value will be 102.000€ and in year 3 104.040€.',
  },
  minRequiredCapital: {
    id: `${scope}.minRequiredCapital`,
    defaultMessage: 'Minimum Required Capital',
  },
  minRequiredCapitalInfo: {
    id: `${scope}.minRequiredCapitalInfo`,
    defaultMessage:
      'Minimum required capital for the transaction to be filtered in all the analysis. Example: If minimum capital is 25.000€ and the required capital for an investment is 15.000€, this investment opportunity will not be presented.',
  },
  maxRequiredCapital: {
    id: `${scope}.maxRequiredCapital`,
    defaultMessage: 'Maximum Required Capital',
  },
  maxRequiredCapitalInfo: {
    id: `${scope}.maxRequiredCapitalInfo`,
    defaultMessage:
      'Maximum required capital for the transaction to be filtered in all the analysis. Example: If maxumim capital is 50.000€ and the required capital for the investment is 60.000€, this investment opportunity will not be presented.',
  },
  percentile: {
    id: `${scope}.Percentile`,
    defaultMessage: 'Percentile',
  },
  percentileInfo: {
    id: `${scope}.percentileInfo`,
    defaultMessage:
      'Property percentile for the exit value calculation. Properties with higher value should be compared with higher percentile properties in the market.',
  },
  propertyCondition: {
    id: `${scope}.propertyCondition`,
    defaultMessage: 'Property Condition',
  },
  propertyConditionInfo: {
    id: `${scope}.propertyConditionInfo`,
    defaultMessage: 'Property condition',
  },
  propertyType: {
    id: `${scope}.propertyType`,
    defaultMessage: 'Property Type',
  },
  propertyTypeInfo: {
    id: `${scope}.propertyTypeInfo`,
    defaultMessage: 'Property type',
  },
  propertyTypology: {
    id: `${scope}.propertyTypology`,
    defaultMessage: 'Property Typology',
  },
  propertyTypologyInfo: {
    id: `${scope}.propertyTypologyInfo`,
    defaultMessage: 'Property typology',
  },
  minAskingPrice: {
    id: `${scope}.minAskingPrice`,
    defaultMessage: 'Minimum Asking Price',
  },
  minAskingPriceInfo: {
    id: `${scope}.minAskingPriceInfo`,
    defaultMessage:
      'Minimum asking price to be filtered in all the analysis. Example: If minimum asking price is 250.000€, investment opportunities with asking values below will not be presented.',
  },
  maxAskingPrice: {
    id: `${scope}.maxAskingPrice`,
    defaultMessage: 'Maximum Asking Price',
  },
  maxAskingPriceInfo: {
    id: `${scope}.maxAskingPriceInfo`,
    defaultMessage:
      'Maximum asking price to be filtered in all the analysis. Example: If maximum asking price is 250.000€, investment opportunities with asking values above will not be presented.',
  },
  minUsefulArea: {
    id: `${scope}.minUsefulArea`,
    defaultMessage: 'Minimum Useful Area',
  },
  minUsefulAreaInfo: {
    id: `${scope}.minUsefulAreaInfo`,
    defaultMessage: 'Minimum useful area to be filtered in all the analysis.',
  },
  maxUsefulArea: {
    id: `${scope}.maxUsefulArea`,
    defaultMessage: 'Maximum Useful Area',
  },
  maxUsefulAreaInfo: {
    id: `${scope}.maxUsefulAreaInfo`,
    defaultMessage: 'Maximum useful area to be filtered in all the analysis.',
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
      'The property will be for Investment or as a primary residence? Acquisition real estate transfer tax and exit capital gains differ with acquisition type',
  },
  acquisitionBrokerRate: {
    id: `${scope}.acquisitionBrokerRate`,
    defaultMessage: 'Acquisition Broker Rate',
  },
  acquisitionBrokerRateInfo: {
    id: `${scope}.acquisitionBrokerRateInfo`,
    defaultMessage:
      'Is there a broker fee to be paid by the buyer? Typically this fee is paid by the seller however a broker can request a fee as buy side advisor.',
  },
  acquisitionBrokerRateVat: {
    id: `${scope}.acquisitionBrokerRateVat`,
    defaultMessage: 'Acquisition Broker Rate Vat',
  },
  acquisitionBrokerRateVatInfo: {
    id: `${scope}.acquisitionBrokerRateVatInfo`,
    defaultMessage:
      'Is there a broker fee to be paid by the buyer? Typically this fee is paid by the seller however a broker can request a fee as buy side advisor.',
  },
  acquisitionStampDutyRate: {
    id: `${scope}.acquisitionStampDutyRate`,
    defaultMessage: 'Acquisition Stamp Duty Rate',
  },
  acquisitionStampDutyRateInfo: {
    id: `${scope}.acquisitionStampDutyRateInfo`,
    defaultMessage:
      'Stamp duty for acquisition is 0.8% of the maximum value between acquisition and tax value.',
  },
  landRegistryInscription: {
    id: `${scope}.landRegistryInscription`,
    defaultMessage: 'Land Registry Inscription',
  },
  landRegistryInscriptionInfo: {
    id: `${scope}.landRegistryInscriptionInfo`,
    defaultMessage:
      'The public deed contract needs to be made by a recognized entity or person such as a public notary office, a lawyer or a solicitor. A popular choice is the “Casa Pronta” (Ready House) notary offices, where the process can be more streamlined and cheaper than normal.' +
      ' For this reason, the reference in terms of price is the Casa Pronta notary offices, where it normally costs 375,00 €, including both the preparation of the public deed contract and the registry. With mortgage normally will be 700€.',
  },
  realEstateTransferTax: {
    id: `${scope}.realEstateTransferTax`,
    defaultMessage: 'Real Estate Transfer Tax',
  },
  realEstateTransferTaxInfo: {
    id: `${scope}.realEstateTransferTaxInfo`,
    defaultMessage:
      'Real estate transfer tax (Imposto Municipal Sobre Transmissôes Onerosas de Imóveis – IMT) is paid by the buyer when there is a transfer of ownership of the real estate in Portugal. The percentage of tax charged can range from 1% to 8%, depending on the purchase price, the location of the property and whether it is the first or second home in Portugal.',
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
      'Bank fees vary, depending on the lender and loan amount. Details will be provided in the mortgage proposal document.',
  },
  mortgageStampDutyRate: {
    id: `${scope}.mortgageStampDutyRate`,
    defaultMessage: 'Stamp Duty Mortgage Rate',
  },
  mortgageStampDutyRateInfo: {
    id: `${scope}.mortgageStampDutyRateInfo`,
    defaultMessage:
      'The mortgage stamp duty is 0.60% of the final loan amount if the loan is for more than 5 years.',
  },
  interestStampDutyRate: {
    id: `${scope}.interestStampDutyRate`,
    defaultMessage: 'Stamp Duty Interest Rate',
  },
  interestStampDutyRateInfo: {
    id: `${scope}.interestStampDutyRateInfo`,
    defaultMessage:
      'The interest stamp duty is 4% of the interest of the period.',
  },
  interestRate: {
    id: `${scope}.interestRate`,
    defaultMessage: 'Interest Rate',
  },
  interestRateInfo: {
    id: `${scope}.interestRateInfo`,
    defaultMessage: 'Mortgage interest over period. Euribor + Spread.',
  },
  rehab: {
    id: `${scope}.rehab`,
    defaultMessage: 'rehab',
  },
  rehabInfo: {
    id: `${scope}.rehabInfo`,
    defaultMessage: 'rehabInfo',
  },
  rehabTaxRate: {
    id: `${scope}.rehabTaxRate`,
    defaultMessage: 'rehabTaxRate',
  },
  rehabTaxRateInfo: {
    id: `${scope}.rehabTaxRateInfo`,
    defaultMessage: 'rehabTaxRateInfo',
  },
  rehabFinancingRate: {
    id: `${scope}.rehabFinancingRate`,
    defaultMessage: 'rehabFinancingRate',
  },
  rehabFinancingRateInfo: {
    id: `${scope}.rehabFinancingRateInfo`,
    defaultMessage: 'rehabFinancingRateInfo',
  },
  rehabVat: {
    id: `${scope}.rehabVat`,
    defaultMessage: 'rehabVat',
  },
  rehabVatInfo: {
    id: `${scope}.rehabVatInfo`,
    defaultMessage: 'rehabVatInfo',
  },
  rent: {
    id: `${scope}.rent`,
    defaultMessage: 'rent',
  },
  rentInfo: {
    id: `${scope}.rentInfo`,
    defaultMessage: 'rentInfo',
  },
  rentBrokerFee: {
    id: `${scope}.rentBrokerFee`,
    defaultMessage: 'rentBrokerFee',
  },
  rentBrokerFeeInfo: {
    id: `${scope}.rentBrokerFeeInfo`,
    defaultMessage: 'rentBrokerFeeInfo',
  },
  rentBrokerFeeVat: {
    id: `${scope}.rentBrokerFeeVat`,
    defaultMessage: 'rentBrokerFeeVat',
  },
  rentBrokerFeeVatInfo: {
    id: `${scope}.rentBrokerFeeVatInfo`,
    defaultMessage: 'rentBrokerFeeVatInfo',
  },
  timeToRent: {
    id: `${scope}.timeToRent`,
    defaultMessage: 'timeToRent',
  },
  timeToRentInfo: {
    id: `${scope}.timeToRentInfo`,
    defaultMessage: 'timeToRentInfo',
  },
  contractPeriod: {
    id: `${scope}.contractPeriod`,
    defaultMessage: 'contractPeriod',
  },
  contractPeriodInfo: {
    id: `${scope}.contractPeriodInfo`,
    defaultMessage: 'contractPeriodInfo',
  },
  rentStampDutyRate: {
    id: `${scope}.rentStampDutyRate`,
    defaultMessage: 'rentStampDutyRate',
  },
  rentStampDutyRateInfo: {
    id: `${scope}.rentStampDutyRateInfo`,
    defaultMessage: 'rentStampDutyRateInfo',
  },
  rentTaxRate: {
    id: `${scope}.rentTaxRate`,
    defaultMessage: 'rentTaxRate',
  },
  rentTaxRateInfo: {
    id: `${scope}.rentTaxRateInfo`,
    defaultMessage: 'rentTaxRateInfo',
  },
  propertyManagerRate: {
    id: `${scope}.propertyManagerRate`,
    defaultMessage: 'propertyManagerRate',
  },
  propertyManagerRateInfo: {
    id: `${scope}.propertyManagerRateInfo`,
    defaultMessage: 'propertyManagerRateInfo',
  },
  loanEarlyRepaymentRate: {
    id: `${scope}.loanEarlyRepaymentRate`,
    defaultMessage: 'Early Repayment Fee Rate',
  },
  loanEarlyRepaymentRateInfo: {
    id: `${scope}.loanEarlyRepaymentRateInfo`,
    defaultMessage:
      'An early redemption penalty (also known as an early repayment charge or ERC) is a fee you may be required to make to a lender if you pay off a loan or mortgage before the scheduled term of the credit facility.',
  },
  amortization: {
    id: `${scope}.amortization`,
    defaultMessage: 'Amortization',
  },
  amortizationInfo: {
    id: `${scope}.amortizationInfo`,
    defaultMessage: 'Amortization period in years.',
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
    defaultMessage: 'Estimated monthly condominium costs.',
  },
  propertyTax: {
    id: `${scope}.propertyTax`,
    defaultMessage: 'Property Tax',
  },
  propertyTaxInfo: {
    id: `${scope}.propertyTaxInfo`,
    defaultMessage:
      'This tax value should be multiplied by a tax rate, differ by county, and be paid annually. Property tax is being estimated to be the tax value of the property 50% of the acquisition value.',
  },
  rehabPricePerSquareMeter: {
    id: `${scope}.rehabPricePerSquareMeter`,
    defaultMessage: 'Capital Expenditure',
  },
  rehabPricePerSquareMeterInfo: {
    id: `${scope}.rehabPricePerSquareMeterInfo`,
    defaultMessage:
      'This is the estimated work/renovations to be done on the property. This input is per square meter and is calculated according to the gross construction area of the property.',
  },
  multiRiskInsurance: {
    id: `${scope}.multiRiskInsurance`,
    defaultMessage: 'Multi Risk Insurance (Monthly)',
  },
  multiRiskInsuranceInfo: {
    id: `${scope}.multiRiskInsuranceInfo`,
    defaultMessage: 'This insurance is mandatory for real estate.',
  },
  lifeInsurance: {
    id: `${scope}.lifeInsurance`,
    defaultMessage: 'Life Insurance (Monthly)',
  },
  lifeInsuranceInfo: {
    id: `${scope}.lifeInsuranceInfo`,
    defaultMessage: 'This insurance is mandatory if there is a mortgage.',
  },
  maintenanceCosts: {
    id: `${scope}.maintenanceCosts`,
    defaultMessage: 'maintenanceCosts',
  },
  maintenanceCostsInfo: {
    id: `${scope}.maintenanceCostsInfo`,
    defaultMessage: 'maintenanceCostsInfo',
  },
  otherOperatingCosts: {
    id: `${scope}.otherOperatingCosts`,
    defaultMessage: 'otherOperatingCosts',
  },
  otherOperatingCostsInfo: {
    id: `${scope}.otherOperatingCostsInfo`,
    defaultMessage: 'otherOperatingCostsInfo',
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
    defaultMessage: 'Capital gains tax.',
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
      'Holding Period in months between entry and exit of the investment.',
  },
  exitBrokerRate: {
    id: `${scope}.exitBrokerRate`,
    defaultMessage: 'Exit Broker Rate',
  },
  exitBrokerRateInfo: {
    id: `${scope}.exitBrokerRateInfo`,
    defaultMessage: 'Broker fee to exit transaction',
  },
  exitBrokerRateVat: {
    id: `${scope}.exitBrokerRateVat`,
    defaultMessage: 'exitBrokerRateVat',
  },
  exitBrokerRateVatInfo: {
    id: `${scope}.exitBrokerRateVatInfo`,
    defaultMessage: 'exitBrokerRateVat',
  },
  capitalGainsTaxBaseRate: {
    id: `${scope}.capitalGainsTaxBaseRate`,
    defaultMessage: 'Capital Gains Tax Base Rate',
  },
  capitalGainsTaxBaseRateInfo: {
    id: `${scope}.capitalGainsTaxBaseRateInfo`,
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
      'If the useful area of the property is not available this will be the base area discount to the gross area to be used in the exit value calculation.',
  },
  floorRate: {
    id: `${scope}.floorRate`,
    defaultMessage: 'Floor Rate',
  },
  floorRateInfo: {
    id: `${scope}.floorRateInfo`,
    defaultMessage:
      'Maximum delta between asking value and Revalue exit value calculation for a lower value. Example: If the asking price is 1.000€ per square meter and Revalue Valuation is 800€ per square meter, the floor rate input will dictate how far can the Revalue valuation can be from the asking price per square meter. Considering a floor rate of 10% the minimum value that Revalue will give to this property per square meter will be ((1.000 *(1-10%)) = 900€.',
  },
  capRate: {
    id: `${scope}.capRate`,
    defaultMessage: 'Cap Rate',
  },
  capRateInfo: {
    id: `${scope}.capRateInfo`,
    defaultMessage:
      'Maximum delta between the asking value and Revalue exit value calculation for a higher value.  Example: If the asking price is 1.000€ per square meter and Revalue valuation is 1.200€ per square meter, the cap rate input will dictate how far can the Revalue valuation can be from the asking price per square meter. Considering a cap rate of 10%, the maximum value that Revalue will give to this property per square meter will be ((1.000 *(1+10%)) = 1.100€',
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
      'Required initial capital for the investment after all acquisition costs and debt.',
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
      'Is the expected compound annual rate of return that will be earned on a project or investment. An investment with a 10% IRR (Internal Rate of Return) earned a 10% compound annual growth rate.',
  },
  profitAfterTax: {
    id: `${scope}.profitAfterTax`,
    defaultMessage: 'Profit After Tax',
  },
  profitAfterTaxInfo: {
    id: `${scope}.profitAfterTaxInfo`,
    defaultMessage: 'Investment profit after taxes and costs assumptions.',
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
  mainInvestmentInformation: {
    id: `${scope}.mainInvestmentInformation`,
    defaultMessage: 'mainInvestmentInformation',
  },
});
