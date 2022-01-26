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
    defaultMessage: 'Property Location',
  },
  locationInfo: {
    id: `${scope}.locationInfo`,
    defaultMessage: 'Property Location',
  },
  GCA: {
    id: `${scope}.gca`,
    defaultMessage: 'Gross Area',
  },
  gcaInfo: {
    id: `${scope}.gcaInfo`,
    defaultMessage:
      'Gross Construction area corresponds to the sum of Private Gross Area and Dependent Area',
  },
  GPA: {
    id: `${scope}.gpa`,
    defaultMessage: 'Useful Area',
  },
  gpaInfo: {
    id: `${scope}.gpaInfo`,
    defaultMessage:
      'Gross Private Area is area measured by the outer perimeter and axes of the walls',
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
    id: `${scope}.AcquisitionPrice`,
    defaultMessage: 'Acquisition Price',
  },
  proposedEntryPriceInfo: {
    id: `${scope}.AcquisitionPrice`,
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
      'Required Capital for Investment. Acquistion Value - Acquisition Debt + Transfer Tax + Acquisition Stamp Duty + Registries + Bank Costs + Acquisition Stamp Duty',
  },
  requiredCapitalInvestment: {
    id: `${scope}.requiredCapitalInvestment`,
    defaultMessage: 'Required Capital over Perioid',
  },
  requiredCapitalInvestmentInfo: {
    id: `${scope}.requiredCapitalInvestmentInfo`,
    defaultMessage: 'Required Capital over Period',
  },
  totalRequierd: {
    id: `${scope}.totalRequierd`,
    defaultMessage: 'Total Requierd Capita over Period',
  },
  totalRequierdInfo: {
    id: `${scope}.totalRequierdInfo`,
    defaultMessage: 'Total Requierd Capita over Period',
  },
  // returns
  moic: {
    id: `${scope}.moic`,
    defaultMessage: 'MoIC',
  },
  moicInfo: {
    id: `${scope}.moic Info`,
    defaultMessage: 'MoIC',
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
});
