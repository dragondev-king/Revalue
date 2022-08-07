import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Analysis';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Analysis container!',
  },
  property: {
    id: `${scope}.property`,
    defaultMessage: 'Property',
  },
  investmentKpi: {
    id: `${scope}.investmentKpi`,
    defaultMessage: 'Investment KPI',
  },
  capital: {
    id: `${scope}.capital`,
    defaultMessage: 'Capital',
  },
  returns: {
    id: `${scope}.return`,
    defaultMessage: 'Returns',
  },
  // property
  location: {
    id: `${scope}.location`,
    defaultMessage: 'Location',
  },
  locationInfo: {
    id: `${scope}.locationInfo`,
    defaultMessage: 'location',
  },
  propertyLocation: {
    id: `${scope}.propertyLocation`,
    defaultMessage: 'Property Location',
  },
  propertyLocationInfo: {
    id: `${scope}.propertyLocationInfo`,
    defaultMessage: 'Property Location',
  },
  bedrooms: {
    id: `${scope}.bedrooms`,
    defaultMessage: 'Bedrooms',
  },
  bedroomsInfo: {
    id: `${scope}.bedroomsInfo`,
    defaultMessage: 'Number of bedrooms In the property',
  },
  // investment KPI
  askingPrice: {
    id: `${scope}.askingPrice`,
    defaultMessage: 'Asking Price',
  },
  askingPriceInfo: {
    id: `${scope}.askingPriceInfo`,
    defaultMessage: 'Seller asking price for the property',
  },
  proposedEntryPrice: {
    id: `${scope}.proposedEntryPrice`,
    defaultMessage: 'Acquisition Price',
  },
  proposedEntryPriceInfo: {
    id: `${scope}.proposedEntryPriceInfo`,
    defaultMessage:
      'Investor proposed acquisition Price. Value was calculated by multiplying the user imput Bid Ask discount on the Asking Value',
  },
  estimatedExitPrice: {
    id: `${scope}.estimatedExitPrice`,
    defaultMessage: 'Selling Price',
  },
  estimatedExitPriceInfo: {
    id: `${scope}.estimatedExitPriceInfo`,
    defaultMessage:
      'Based on the price per sqm of Confidencial Imobiliario Data base for the property location, typology and condition multiplyed by the Gross Private Area this the is the current market selling price of the property',
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
  // capital
  requiredEntryCapital: {
    id: `${scope}.requiredEntryCapital`,
    defaultMessage: 'Entry Capital',
  },
  requiredEntryCapitalInfo: {
    id: `${scope}.requiredEntryCapitalInfo`,
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
  // returns
  moic: {
    id: `${scope}.moic`,
    defaultMessage: 'Entry Price',
  },
  moicInfo: {
    id: `${scope}.moicInfo`,
    defaultMessage: 'Acquisition Value + Acquisition Costs',
  },
  requiredInitialInvestment: {
    id: `${scope}.requiredInitialInvestment`,
    defaultMessage: 'Required Initial Investment',
  },
  requiredInitialInvestmentInfo: {
    id: `${scope}.requiredInitialInvestmentInfo`,
    defaultMessage: 'Required Initial Investment',
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
  profit: {
    id: `${scope}.profit`,
    defaultMessage: 'Profit After Tax',
  },
  profitInfo: {
    id: `${scope}.profitInfo`,
    defaultMessage: 'Investment estimated Profit After Tax',
  },
  irr: {
    id: `${scope}.irr`,
    defaultMessage: 'IRR',
  },
  irrInfo: {
    id: `${scope}.irrInfo`,
    defaultMessage:
      'The internal rate of return (IRR) is the annual rate of growth that an investment is expected to generate',
  },
  // assumptions under investment analysis
  // financing assumptions
  criteria: {
    id: `${scope}.criteria`,
    defaultMessage: 'Criteria',
  },
  financingAssumptions: {
    id: `${scope}.financingAssumptions`,
    defaultMessage: 'Financing Assumptions',
  },
  financingRate: {
    id: `${scope}.financingRate`,
    defaultMessage: 'financingRate',
  },
  financingRateInfo: {
    id: `${scope}.financingRateInfo`,
    defaultMessage: 'Financing Rate to acquisition Price',
  },
  capexFinanced: {
    id: `${scope}.capexFinanced`,
    defaultMessage: 'Capex Financed',
  },
  capexFinancedInfo: {
    id: `${scope}.capexFinancedInfo`,
    defaultMessage: 'Capex Financed Info',
  },
  interestRate: {
    id: `${scope}.interestRate`,
    defaultMessage: 'Interest',
  },
  interestRateInfo: {
    id: `${scope}.interestRateInfo`,
    defaultMessage: 'Interest Rate',
  },
  amortization: {
    id: `${scope}.amortization`,
    defaultMessage: 'Amortization',
  },
  amortizationInfo: {
    id: `${scope}.amortizationInfo`,
    defaultMessage: 'Debt Repayment to the lender',
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
  earlyRepaymentRate: {
    id: `${scope}.earlyRepaymentRate`,
    defaultMessage: 'Loan Early Repayment Fee',
  },
  earlyRepaymentRateInfo: {
    id: `${scope}.earlyRepaymentRateInfo`,
    defaultMessage:
      'The early redemption penalty for a variable acquisition mortgage is 0.50% (as per the rule of the Bank of Portugal) and 2% for a fixed rate mortgage.',
  },
  // Area
  area: {
    id: `${scope}.area`,
    defaultMessage: 'Area',
  },
  grossArea: {
    id: `${scope}.grossArea`,
    defaultMessage: 'Gross Area',
  },
  grossAreaInfo: {
    id: `${scope}.grossAreaInfo`,
    defaultMessage:
      'Gross Construction area corresponds to the sum of Private Gross Area and Dependent Area',
  },
  usefulArea: {
    id: `${scope}.usefulArea`,
    defaultMessage: 'Useful Area',
  },
  usefulAreaInfo: {
    id: `${scope}.usefulAreaInfo`,
    defaultMessage:
      'Gross Private Area is area measured by the outer perimeter and axes of the walls',
  },
  // Acquisition
  acquisition: {
    id: `${scope}.acquisition`,
    defaultMessage: 'Acquisition',
  },
  bidAskRate: {
    id: `${scope}.bidAskRate`,
    defaultMessage: 'Bis Ask',
  },
  bidAskRateInfo: {
    id: `${scope}.bidAskRateInfo`,
    defaultMessage: 'Discount to Seller asking price',
  },
  entryBrokerRate: {
    id: `${scope}.entryBrokerRate`,
    defaultMessage: 'Entry Broker Fee',
  },
  entryBrokerRateInfo: {
    id: `${scope}.entryBrokerRateInfo`,
    defaultMessage:
      'Commission paid to the broker by the buyer. Typically sale commission is paid by the seller',
  },
  // operation assumptions
  operationAssumptions: {
    id: `${scope}.operationAssumptions`,
    defaultMessage: 'Operation Assumptions',
  },
  capex: {
    id: `${scope}.Capex`,
    defaultMessage: 'Capex',
  },
  capexInfo: {
    id: `${scope}.CapexInfo`,
    defaultMessage: 'Capex Info',
  },
  condominiumCosts: {
    id: `${scope}.condominiumCosts`,
    defaultMessage: 'Condominium Costs',
  },
  condominiumCostsInfo: {
    id: `${scope}.condominiumCostsInfo`,
    defaultMessage: 'Estimated Condominium cost',
  },
  propertyTaxRate: {
    id: `${scope}.PropertyTaxRate`,
    defaultMessage: 'Property Tax Rate',
  },
  propertyTaxRateInfo: {
    id: `${scope}.PropertyTaxRateInfo`,
    defaultMessage: 'Property Tax Rate Info',
  },

  // taxes
  taxes: {
    id: `${scope}.taxes`,
    defaultMessage: 'Taxes',
  },
  transferTax: {
    id: `${scope}.transferTax`,
    defaultMessage: 'Transfer Tax',
  },
  transferTaxInfo: {
    id: `${scope}.transferTaxInfo`,
    defaultMessage: 'transferTaxInfo',
  },
  acquisitionStampDuty: {
    id: `${scope}.acquisitionStampDuty`,
    defaultMessage: 'Stamp Duty',
  },
  acquisitionStampDutyInfo: {
    id: `${scope}.acquisitionStampDutyInfo`,
    defaultMessage:
      'As a buyer, you need to pay stamp duty (Imposto de Selo) on deeds, contracts, bank mortgages and loans, documents, and titles. The rate changes according to the type and value of the property. The rate depending on the type of deed/operation is between 0.4% and 0.8%.When buying a house, you pay stamp duty to the notary while signing the deed of sale. The rate of this stamp duty is 0.8%.',
  },
  mortgageStampDuty: {
    id: `${scope}.mortgageStampDuty`,
    defaultMessage: 'Notary',
  },
  mortgageStampDutyInfo: {
    id: `${scope}.mortgageStampDutyInfo`,
    defaultMessage:
      'The public deed contract , needs to be made by a recognized entity or person such as a public notary office, a lawyer or solicitor. A popular choice are the “Casa Pronta” (Ready House) notary offices, where the process can be more streamlined and cheaper than normal.For this reason, the reference in terms of price are the Casa Pronta notary offices, where it normally costs 375,00 €, including both the preparation of the public deed contract and the registry.',
  },
  interestStampDuty: {
    id: `${scope}.interestStampDuty`,
    defaultMessage: 'Stamp Duty Interest',
  },
  interestStampDutyInfo: {
    id: `${scope}.interestStampDutyInfo`,
    defaultMessage: 'Stamp Duty',
  },
  landRegistryInscriptionWithMortgage: {
    id: `${scope}.landRegistryInscriptionWithMortgage`,
    defaultMessage: 'Land Registry Inscription With Mortgage',
  },
  landRegistryInscriptionWithMortgageInfo: {
    id: `${scope}.landRegistryInscriptionWithMortgageInfo`,
    defaultMessage:
      'The public deed contract , needs to be made by a recognized entity or person such as a public notary office, a lawyer or solicitor. A popular choice are the “Casa Pronta” (Ready House) notary offices, where the process can be more streamlined and cheaper than normal.For this reason, the reference in terms of price are the Casa Pronta notary offices, where it normally costs 375,00 €, including both the preparation of the public deed contract and the registry. With Mortgage normally will be 700€',
  },
  landRegistryInscriptionWithoutMortgage: {
    id: `${scope}.landRegistryInscriptionWithoutMortgage`,
    defaultMessage: 'Land Registry Inscription Without Mortgage',
  },
  landRegistryInscriptionWithoutMortgageInfo: {
    id: `${scope}.landRegistryInscriptionWithoutMortgageInfo`,
    defaultMessage:
      'The public deed contract , needs to be made by a recognized entity or person such as a public notary office, a lawyer or solicitor. A popular choice are the “Casa Pronta” (Ready House) notary offices, where the process can be more streamlined and cheaper than normal.For this reason, the reference in terms of price are the Casa Pronta notary offices, where it normally costs 375,00 €, including both the preparation of the public deed contract and the registry.',
  },
  irs: {
    id: `${scope}.irs`,
    defaultMessage: 'IRS Rate',
  },
  irsInfo: {
    id: `${scope}.irsInfo`,
    defaultMessage: 'IRS Rate with capital gains',
  },
  capitalGainsTaxRate: {
    id: `${scope}.capitalGainsTaxRate`,
    defaultMessage: 'Capital Gains Tax Rate',
  },
  capitalGainsTaxRateInfo: {
    id: `${scope}.capitalGainsTaxRateInfo`,
    defaultMessage: 'IRS Rate on base Profit',
  },
  // exit value calculation
  exitValueCalculation: {
    id: `${scope}.exitValueCalculation`,
    defaultMessage: 'Exit Value Calculation',
  },
  type: {
    id: `${scope}.type`,
    defaultMessage: 'Property Type',
  },
  typeInfo: {
    id: `${scope}.typeInfo`,
    defaultMessage: 'Please choose number of bedrooms for your analysis',
  },
  condition: {
    id: `${scope}.condition`,
    defaultMessage: 'Property Condition',
  },
  conditionInfo: {
    id: `${scope}.conditionInfo`,
    defaultMessage:
      'Please choose if properties should be new or used for your analysis    ',
  },
  percentile: {
    id: `${scope}.Percentile`,
    defaultMessage: 'Percentile',
  },
  percentileInfo: {
    id: `${scope}.percentileInfo`,
    defaultMessage:
      'Confidencial Imobiliario Percentile for Exit Value Calculation',
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
  floorRate: {
    id: `${scope}.Floor`,
    defaultMessage: 'Floor',
  },
  floorRateInfo: {
    id: `${scope}.Floor Info`,
    defaultMessage:
      'Min Delta between Asking Value and Confidencial Imobiliario Data Base',
  },
  hpi: {
    id: `${scope}.hpi`,
    defaultMessage: 'House Price Index    ',
  },
  hpiInfo: {
    id: `${scope}.hpiInfo`,
    defaultMessage: 'Property value grow per year',
  },
  timeToSale: {
    id: `${scope}.timeToSale`,
    defaultMessage: 'Time To Sale',
  },
  timeToSaleInfo: {
    id: `${scope}.timeToSaleInfo`,
    defaultMessage: 'Period in months between acquisition and exit',
  },
  exitValueOverride: {
    id: `${scope}.exitValueOverride`,
    defaultMessage: 'Exit Value Override',
  },
  exitValueOverrideInfo: {
    id: `${scope}.exitValueOverride Info`,
    defaultMessage: 'Exit Value Override Info',
  },
  exitBrokerRate: {
    id: `${scope}.exitBrokerRate`,
    defaultMessage: 'Exit Pricerate',
  },
  exitBrokerRateInfo: {
    id: `${scope}.exitBrokerRateInfo`,
    defaultMessage: 'Based on Exit Price',
  },

  // Estimated Profit
  estimatedProfit: {
    id: `${scope}.estimatedProfit`,
    defaultMessage: 'Estimated Profit',
  },
  // Valution Model
  valuationModel: {
    id: `${scope}.valuationModel`,
    defaultMessage: 'Valuation Model Configuration',
  },
  propertyStatus: {
    id: `${scope}.propertyStatus`,
    defaultMessage: 'Property Status',
  },
  parish: {
    id: `${scope}.parish`,
    defaultMessage: 'Parish',
  },
  soldUnits: {
    id: `${scope}.soldUnits`,
    defaultMessage: 'Sold Units',
  },
  forSale: {
    id: `${scope}.forSale`,
    defaultMessage: 'For Sale',
  },
  report: {
    id: `${scope}.report`,
    defaultMessage: 'Report',
  },
  analyticsOverview: {
    id: `${scope}.analyticsOverview`,
    defaultMessage: 'Analytics Overview',
  },
  entryPrice: {
    id: `${scope}.entryPrice`,
    defaultMessage: 'Entry Price',
  },
  profitAfterTax: {
    id: `${scope}.profitAfterTax`,
    defaultMessage: 'Profit After Tax',
  },
  typology: {
    id: `${scope}.typology`,
    defaultMessage: 'Typology',
  },
  type2: {
    id: `${scope}.type2`,
    defaultMessage: 'Type',
  },
  condition2: {
    id: `${scope}.condition2`,
    defaultMessage: 'Condition',
  },
  sensitivityTable: {
    id: `${scope}.sensitivityTable`,
    defaultMessage: 'Sensitivity Table',
  },
  forecast: {
    id: `${scope}.forecast`,
    defaultMessage: 'Forecast',
  },
  acuisition: {
    id: `${scope}.acuisition`,
    defaultMessage: 'Acuisition',
  },
  debt: {
    id: `${scope}.debt`,
    defaultMessage: 'Debt',
  },
  salesActivityHistory: {
    id: `${scope}.salesActivityHistory`,
    defaultMessage: 'Sales Activity History',
  },
});
