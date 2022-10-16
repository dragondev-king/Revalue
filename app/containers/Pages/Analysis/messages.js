import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Analysis';

export default defineMessages({
  analysisTitle: {
    id: `${scope}.analysisTitle`,
    defaultMessage: 'Analysis',
  },
  report: {
    id: `${scope}.report`,
    defaultMessage: 'Report',
  },
  analysisOverview: {
    id: `${scope}.analysisOverview`,
    defaultMessage: 'Analysis Overview',
  },
  acquisitionPriceInfo: {
    id: `${scope}.acquisitionPriceInfo`,
    defaultMessage:
      'Investor proposed acquisition Price, this value was calculated by multiplying the bid ask discount on the asking price',
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
  profitAfterTax: {
    id: `${scope}.profitAfterTax`,
    defaultMessage: 'Profit After Tax',
  },
  profitAfterTaxInfo: {
    id: `${scope}.profitAfterTaxInfo`,
    defaultMessage: 'Investment profit after taxes and costs assumptions',
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
  capitalGains: {
    id: `${scope}.capitalGains`,
    defaultMessage: 'Capital Gain',
  },
  capitalGainsInfo: {
    id: `${scope}.capitalGainsInfo`,
    defaultMessage:
      'Capital gain base, this rate will be applied to the capital gain tax base and then to irs Rate in order to calculate capital gain taxCapital gain base, this rate will be applied to the capital gain tax base and then to irs rate in order to calculate capital gain tax',
  },
  location: {
    id: `${scope}.location`,
    defaultMessage: 'Location',
  },
  area: {
    id: `${scope}.area`,
    defaultMessage: 'Area',
  },
  grossArea: {
    id: `${scope}.grossArea`,
    defaultMessage: 'Gross Area',
  },
  usefulArea: {
    id: `${scope}.usefulArea`,
    defaultMessage: 'Useful Area',
  },
  type: {
    id: `${scope}.type`,
    defaultMessage: 'Type',
  },
  condition: {
    id: `${scope}.condition`,
    defaultMessage: 'Condition',
  },
  typology: {
    id: `${scope}.typology`,
    defaultMessage: 'Typology',
  },
  source: {
    id: `${scope}.source`,
    defaultMessage: 'Source',
  },
  investmentMetrics: {
    id: `${scope}.investmentMetrics`,
    defaultMessage: 'Investment Metrics',
  },
  askingPrice: {
    id: `${scope}.askingPrice`,
    defaultMessage: 'Asking Price',
  },
  transactionPrice: {
    id: `${scope}.transactionPrice`,
    defaultMessage: 'Selling Price',
  },
  acquisitionPrice: {
    id: `${scope}.acquisitionPrice`,
    defaultMessage: 'Acquisition Price',
  },
  timeToSale: {
    id: `${scope}.timeToSale`,
    defaultMessage: 'Time to Sale',
  },
  months: {
    id: `${scope}.months`,
    defaultMessage: 'Months',
  },
  capitalStructure: {
    id: `${scope}.capitalStructure`,
    defaultMessage: 'Capital Structure',
  },
  requiredCapitalOverPeriod: {
    id: `${scope}.requiredCapitalOverPeriod`,
    defaultMessage: 'Required Capital Over Period',
  },
  totalRequiredCapitalOverPeriod: {
    id: `${scope}.totalRequiredCapitalOverPeriod`,
    defaultMessage: 'Total Required Capital Over Period',
  },
  sensitivityTable: {
    id: `${scope}.sensitivityTable`,
    defaultMessage: 'Estimated Profit Sensitivity Table',
  },
});
