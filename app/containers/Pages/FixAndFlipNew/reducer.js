import produce from 'immer';
import { formatNumber } from 'utils/formatNumber';
import {
  GET_PROPERTY_LOCATIONS,
  SET_PROPERTY_LOCATION,
  GET_PROPERTY_LOCATIONS_SUCCESS,
  GET_PROPERTY_TYPES,
  GET_PROPERTY_TYPES_SUCCESS,
  GET_PROPERTY_TYPOLOGIES,
  GET_PROPERTY_TYPOLOGIES_SUCCESS,
  GET_PROPERTY_CONDITIONS,
  GET_PROPERTY_CONDITIONS_SUCCESS,
  GET_ACQUISITION_TYPES,
  GET_ACQUISITION_TYPES_SUCCESS,
  GET_PERCENTILES,
  GET_PERCENTILES_SUCCESS,
  GET_ANALYSIS,
  GET_ANALYSIS_SUCCESS,
  GET_ANALYSIS_ERROR,
  SET_ANALYZE_BUTTON_DISABLED,
  SET_INPUT_ERROR,
  SET_INPUT_VALUE,
  GET_IRS_CATEGORIES_SUCCESS,
  GET_IRS_CATEGORIES,
  GET_IRS_DEPENDENTS_LIST,
  GET_IRS_CATEGORY_REGIONS,
  GET_IRS_CATEGORY_REGIONS_SUCCESS,
  GET_IRS_DEPENDENTS_LIST_SUCCESS,
} from './constants';

export function setValueOrEmptyArray(value) {
  if (value) {
    return value;
  }
  return [];
}

export function extractInputValueFromLocalStorage(value, defaultValue) {
  return JSON.parse(localStorage.getItem('inputs')) &&
    JSON.parse(localStorage.getItem('inputs'))[value] &&
    JSON.parse(localStorage.getItem('inputs'))[value] !== null
    ? JSON.parse(localStorage.getItem('inputs'))[value]
    : defaultValue;
}
export const initialState = {
  analyzeButtonDisabled: false,
  propertyLocations: setValueOrEmptyArray(
    JSON.parse(localStorage.getItem('propertyLocations')),
  ),
  isGettingPropertyLocations: false,
  propertyTypes: setValueOrEmptyArray(
    JSON.parse(localStorage.getItem('propertyTypes')),
  ),
  isGettingPropertyTypes: false,
  propertyTypologies: setValueOrEmptyArray(
    JSON.parse(localStorage.getItem('propertyTypologies')),
  ),
  isGettingPropertyTypologies: false,
  propertyConditions: setValueOrEmptyArray(
    JSON.parse(localStorage.getItem('propertyConditions')),
  ),
  isGettingPropertyConditions: false,
  acquisitionTypes: setValueOrEmptyArray(
    JSON.parse(localStorage.getItem('acquisitionTypes')),
  ),
  isGettingAcquisitionTypes: false,
  irsCategories: setValueOrEmptyArray(
    JSON.parse(localStorage.getItem('irsCategories')),
  ),
  isGettingIrsCategories: false,
  irsCategoryRegions: setValueOrEmptyArray(
    JSON.parse(localStorage.getItem('irsCategoryRegions')),
  ),
  isGettingIrsCategoryRegions: false,
  irsDependentsList: setValueOrEmptyArray(
    JSON.parse(localStorage.getItem('irsDependentsList')),
  ),
  isGettingIrsDependentsList: false,
  percentiles: setValueOrEmptyArray(
    JSON.parse(localStorage.getItem('percentiles')),
  ),
  isGettingPercentiles: false,
  analysis: setValueOrEmptyArray(JSON.parse(localStorage.getItem('analysis'))),
  isGettingAnalysis: false,
  errors: {
    acquisitionType: '',
    amortization: '',
    bankCommissionRate: '',
    bidAskRate: '',
    rehabFinancingRate: '',
    rehabPricePerSquareMeter: '',
    capitalGainsTaxBaseRate: '',
    percentile: '',
    condominiumCosts: '',
    currentIrsRate: '',
    loanEarlyRepaymentRate: '',
    acquisitionBrokerRate: '',
    exitBrokerRate: '',
    financingRate: '',
    housePriceIndexRate: '',
    interestRate: '',
    grossSalary: '',
    irsCategory: '',
    irsCategoryRegion: '',
    irsDependents: '',
    landRegistryInscription: '',
    lifeInsurance: '',
    maxAskingPrice: '',
    maxRequiredCapital: '',
    maxUsefulArea: '',
    minAskingPrice: '',
    minRequiredCapital: '',
    minProfit: '',
    minUsefulArea: '',
    multiRiskInsurance: '',
    otherOperatingCosts: '',
    maintenanceCosts: '',
    propertyCondition: '',
    propertyLocation: '',
    propertyTax: true,
    propertyType: '',
    propertyTypology: '',
    interestStampDutyRate: '',
    mortgageStampDutyRate: '',
    acquisitionStampDutyRate: '',
    taxResidentInPortugal: '',
  },
  inputs: {
    propertyLocation: extractInputValueFromLocalStorage(
      'propertyLocation',
      'Arroios, Lisboa, Lisboa, Portugal',
    ),
    propertyCondition: extractInputValueFromLocalStorage(
      'propertyCondition',
      'all',
    ),
    propertyType: extractInputValueFromLocalStorage('propertyType', 'all'),
    propertyTypology: extractInputValueFromLocalStorage(
      'propertyTypology',
      'all',
    ),
    minAskingPrice: extractInputValueFromLocalStorage('minAskingPrice', null),
    maxAskingPrice: extractInputValueFromLocalStorage('maxAskingPrice', null),
    minUsefulArea: extractInputValueFromLocalStorage('minUsefulArea', null),
    maxUsefulArea: extractInputValueFromLocalStorage('maxUsefulArea', null),
    bidAskRate: extractInputValueFromLocalStorage('bidAskRate', 5),
    realEstateTransferTax: extractInputValueFromLocalStorage(
      'realEstateTransferTax',
      true,
    ),
    acquisitionBrokerRate: extractInputValueFromLocalStorage(
      'acquisitionBrokerRate',
      0,
    ),
    acquisitionBrokerRateVat: extractInputValueFromLocalStorage(
      'acquisitionBrokerRateVat',
      0,
    ),
    acquisitionStampDutyRate: extractInputValueFromLocalStorage(
      'acquisitionStampDutyRate',
      0.8,
    ),
    landRegistryInscription: extractInputValueFromLocalStorage(
      'landRegistryInscription',
      700,
    ),
    financing: extractInputValueFromLocalStorage('financing', true),
    financingRate: extractInputValueFromLocalStorage('financingRate', 80),
    interestRate: extractInputValueFromLocalStorage('interestRate', 4),
    amortization: extractInputValueFromLocalStorage('amortization', 30),
    multiRiskInsurance: extractInputValueFromLocalStorage(
      'multiRiskInsurance',
      15,
    ),
    lifeInsurance: extractInputValueFromLocalStorage('lifeInsurance', 15),
    bankCommissionRate: extractInputValueFromLocalStorage(
      'bankCommissionRate',
      1,
    ),
    loanEarlyRepaymentRate: extractInputValueFromLocalStorage(
      'loanEarlyRepaymentRate',
      0.5,
    ),
    mortgageStampDutyRate: extractInputValueFromLocalStorage(
      'mortgageStampDutyRate',
      0.6,
    ),
    interestStampDutyRate: extractInputValueFromLocalStorage(
      'interestStampDutyRate',
      4,
    ),
    rehab: extractInputValueFromLocalStorage('rehab', true),
    rehabPricePerSquareMeter: extractInputValueFromLocalStorage(
      'rehabPricePerSquareMeter',
      100,
    ),
    rehabFinancingRate: extractInputValueFromLocalStorage(
      'rehabFinancingRate',
      80,
    ),
    rehabVat: extractInputValueFromLocalStorage('rehabVat', null),
    rent: extractInputValueFromLocalStorage('rent', true),
    timeToRent: extractInputValueFromLocalStorage('timeToRent', 2),
    contractPeriod: extractInputValueFromLocalStorage('contractPeriod', 2),
    propertyManagerRate: extractInputValueFromLocalStorage(
      'propertyManagerRate',
      2,
    ),
    rentBrokerFee: extractInputValueFromLocalStorage('rentBrokerFee', 2),
    rentBrokerFeeVat: extractInputValueFromLocalStorage('rentBrokerFeeVat', 2),
    rentTaxRate: extractInputValueFromLocalStorage('rentTaxRate', 2),
    rentStampDutyRate: extractInputValueFromLocalStorage(
      'rentStampDutyRate',
      2,
    ),
    condominiumCosts: extractInputValueFromLocalStorage('condominiumCosts', 30),
    propertyTax: extractInputValueFromLocalStorage('propertyTax', true),
    maintenanceCosts: extractInputValueFromLocalStorage('maintenanceCosts', 15),
    otherOperatingCosts: extractInputValueFromLocalStorage(
      'otherOperatingCosts',
      15,
    ),
    taxResidentInPortugal: extractInputValueFromLocalStorage(
      'taxResidentInPortugal',
      true,
    ),
    irsCategory: extractInputValueFromLocalStorage('irsCategory', null),
    irsCategoryRegion: extractInputValueFromLocalStorage(
      'irsCategoryRegion',
      null,
    ),
    irsDependents: extractInputValueFromLocalStorage('irsDependents', null),
    grossSalary: extractInputValueFromLocalStorage('grossSalary', null),
    currentIrsRate: extractInputValueFromLocalStorage('currentIrsRate', 20),
    acquisitionType: extractInputValueFromLocalStorage(
      'acquisitionType',
      'acquisition.type.investment',
    ),
    capitalGainsTaxBaseRate: extractInputValueFromLocalStorage(
      'capitalGainsTaxBaseRate',
      100,
    ),
    rehabTaxRate: extractInputValueFromLocalStorage('rehabTaxRate', 100),
    timeToSale: extractInputValueFromLocalStorage('timeToSale', 12),
    percentile: extractInputValueFromLocalStorage(
      'percentile',
      'percentile.average',
    ),
    housePriceIndexRate: extractInputValueFromLocalStorage(
      'housePriceIndexRate',
      5,
    ),
    exitBrokerRate: extractInputValueFromLocalStorage('exitBrokerRate', 5),
    exitBrokerRateVat: extractInputValueFromLocalStorage(
      'exitBrokerRateVat',
      5,
    ),
    minRequiredCapital: extractInputValueFromLocalStorage(
      'minRequiredCapital',
      null,
    ),
    maxRequiredCapital: extractInputValueFromLocalStorage(
      'maxRequiredCapital',
      null,
    ),
    minProfit: extractInputValueFromLocalStorage('minProfit', 10000),
  },
};

/* eslint-disable default-case, no-param-reassign */
const investmentReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_PROPERTY_LOCATIONS:
        draft.isGettingPropertyLocations = true;
        break;
      case SET_PROPERTY_LOCATION:
        localStorage.setItem(
          'inputs',
          JSON.stringify({ ...draft.inputs, propertyLocation: action.payload }),
        );
        draft.inputs.propertyLocation = action.payload;
        break;
      case GET_PROPERTY_LOCATIONS_SUCCESS:
        draft.propertyLocations = action.payload;
        draft.isGettingPropertyLocations = false;
        break;
      case GET_PROPERTY_TYPES:
        draft.isGettingPropertyTypes = true;
        break;
      case GET_PROPERTY_TYPES_SUCCESS:
        draft.propertyTypes = action.payload;
        draft.isGettingPropertyTypes = false;
        break;
      case GET_PROPERTY_TYPOLOGIES:
        draft.isGettingPropertyTypologies = true;
        break;
      case GET_PROPERTY_TYPOLOGIES_SUCCESS:
        draft.propertyTypologies = action.payload;
        draft.isGettingPropertyTypologies = false;
        break;
      case GET_PROPERTY_CONDITIONS:
        draft.isGettingPropertyConditions = true;
        break;
      case GET_PROPERTY_CONDITIONS_SUCCESS:
        draft.propertyConditions = action.payload;
        draft.isGettingPropertyConditions = false;
        break;
      case GET_ACQUISITION_TYPES:
        draft.isGettingAcquisitionTypes = true;
        break;
      case GET_ACQUISITION_TYPES_SUCCESS:
        draft.acquisitionTypes = action.payload;
        draft.isGettingAcquisitionTypes = false;
        break;
      case GET_IRS_CATEGORIES:
        draft.isGettingIrsCategories = true;
        break;
      case GET_IRS_CATEGORIES_SUCCESS:
        draft.irsCategories = action.payload;
        draft.isGettingIrsCategories = false;
        break;
      case GET_IRS_CATEGORY_REGIONS:
        draft.isGettingIrsCategoryRegions = true;
        break;
      case GET_IRS_CATEGORY_REGIONS_SUCCESS:
        draft.irsCategoryRegions = action.payload;
        draft.isGettingIrsCategoryRegions = false;
        break;
      case GET_IRS_DEPENDENTS_LIST:
        draft.isGettingIrsDependentsList = true;
        break;
      case GET_IRS_DEPENDENTS_LIST_SUCCESS:
        draft.irsDependentsList = action.payload;
        draft.isGettingIrsDependentsList = false;
        break;
      case GET_PERCENTILES:
        draft.isGettingPercentiles = true;
        break;
      case GET_PERCENTILES_SUCCESS:
        draft.percentiles = action.payload;
        draft.isGettingPercentiles = false;
        break;
      case SET_INPUT_VALUE:
        draft.inputs[action.payload.input] = action.payload.value;
        localStorage.setItem('inputs', JSON.stringify(draft.inputs));
        break;
      case SET_INPUT_ERROR:
        draft.errors[action.payload.input] = action.payload.error;
        break;
      case GET_ANALYSIS:
        draft.isGettingAnalysis = true;
        break;
      case GET_ANALYSIS_SUCCESS:
        // eslint-disable-next-line prefer-const,no-case-declarations
        let formattedActionPayload = [];
        if (action.payload && Array.isArray(action.payload)) {
          action.payload.forEach((item, index) => {
            // eslint-disable-next-line prefer-const
            let formattedItem = {};
            // eslint-disable-next-line array-callback-return
            Object.entries(item).map(obj => {
              const key = obj[0];
              const value = obj[1];
              formattedItem[key] = formatNumber(value);
            });
            formattedActionPayload[index] = formattedItem;
          });
        }
        localStorage.setItem(
          'analysis',
          JSON.stringify(formattedActionPayload),
        );
        draft.analysis = formattedActionPayload;
        draft.isGettingAnalysis = false;
        break;
      case GET_ANALYSIS_ERROR:
        draft.isGettingAnalysis = false;
        break;
      case SET_ANALYZE_BUTTON_DISABLED:
        draft.analyzeButtonDisabled = action.payload;
        break;
    }
  });

export default investmentReducer;
