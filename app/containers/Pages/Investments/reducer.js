import produce from 'immer';
import {
  GET_LOCATIONS,
  SET_LOCATION,
  GET_LOCATIONS_SUCCESS,
  GET_TYPES,
  GET_TYPES_SUCCESS,
  GET_TYPOLOGIES,
  GET_TYPOLOGIES_SUCCESS,
  GET_CONDITIONS,
  GET_CONDITIONS_SUCCESS,
  GET_ACQUISITION_TYPES,
  GET_ACQUISITION_TYPES_SUCCESS,
  GET_CI_PERCENTILES,
  GET_CI_PERCENTILES_SUCCESS,
  GET_ANALYSIS_DATA,
  GET_ANALYSIS_DATA_SUCCESS,
  SET_ANALYZE_BUTTON_DISABLED,
  GET_STATUS_SUCCESS,
  GET_STATUS,
  SET_INPUT_ERROR,
  SET_INPUT_VALUE,
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
  // Property Information
  locations: setValueOrEmptyArray(
    JSON.parse(localStorage.getItem('locations')),
  ),
  isGettingLocations: false,
  types: setValueOrEmptyArray(JSON.parse(localStorage.getItem('types'))),
  isGettingTypes: false,
  typologies: setValueOrEmptyArray(
    JSON.parse(localStorage.getItem('typologies')),
  ),
  isGettingTypologies: false,
  conditions: setValueOrEmptyArray(
    JSON.parse(localStorage.getItem('conditions')),
  ),
  isGettingConditions: false,
  status: setValueOrEmptyArray(JSON.parse(localStorage.getItem('status'))),
  isGettingStatus: false,
  // Other Investment Information
  // Acquisition Assumptions
  acquisitionTypes: setValueOrEmptyArray(
    JSON.parse(localStorage.getItem('acquisitionTypes')),
  ),
  isGettingAcquisitionTypes: false,
  // Valuation Model Configuration
  ciPercentiles: setValueOrEmptyArray(
    JSON.parse(localStorage.getItem('ciPercentiles')),
  ),
  isGettingCiPercentiles: false,
  analysisData: [],
  isGettingAnalysisData: false,
  errors: {
    minAskingPrice: '',
    maxAskingPrice: '',
    minUsefulArea: '',
    maxUsefulArea: '',
    minCapital: '',
    maxCapital: '',
    bidAsk: '',
    financingRate: '',
    entryFee: '',
    stampDuty: '',
    landRegistryWithMortgage: '',
    landRegistryWithoutMortgage: '',
    interestRate: '',
    bankCommission: '',
    amortization: '',
    stampDutyMortgage: '',
    stampDutyInterests: '',
    condominiumCosts: '',
    propertyTaxRate: '',
    timeToSale: '',
    irsRate: '',
    exitBrokerFee: '',
    loanEarlyRepaymentFee: '',
    capitalGainsTaxBase: '',
    grossAreaToUsefulArea: '',
    floor: '',
    cap: '',
    mop: '',
  },
  inputs: {
    // Property Information
    location: extractInputValueFromLocalStorage('location', 'Lisboa, Portugal'),
    type: extractInputValueFromLocalStorage('type', 'All'),
    typology: extractInputValueFromLocalStorage('typology', 'All'),
    status: extractInputValueFromLocalStorage('status', 'All'),
    condition: extractInputValueFromLocalStorage('condition', 'All'),
    minAskingPrice: extractInputValueFromLocalStorage('minAskingPrice', null),
    maxAskingPrice: extractInputValueFromLocalStorage('maxAskingPrice', null),
    minUsefulArea: extractInputValueFromLocalStorage('minUsefulArea', null),
    maxUsefulArea: extractInputValueFromLocalStorage('maxUsefulArea', null),
    // Investment Information
    minCapital: extractInputValueFromLocalStorage('minCapital', null),
    maxCapital: extractInputValueFromLocalStorage('maxCapital', null),
    bidAsk: extractInputValueFromLocalStorage('bidAsk', 5),
    financingRate: extractInputValueFromLocalStorage('financingRate', 80),
    housePriceIndex: extractInputValueFromLocalStorage('housePriceIndex', 58),
    minProfit: extractInputValueFromLocalStorage('minProfit', 59),
    // Other Investment Information
    // Acquisition Assumptions
    acquisitionType: extractInputValueFromLocalStorage(
      'acquisitionType',
      'Investment',
    ),
    entryFee: extractInputValueFromLocalStorage('entryFee', 0),
    stampDuty: extractInputValueFromLocalStorage('stampDuty', 0.8),
    landRegistryWithMortgage: extractInputValueFromLocalStorage(
      'landRegistryWithMortgage',
      350,
    ),
    landRegistryWithoutMortgage: extractInputValueFromLocalStorage(
      'landRegistryWithoutMortgage',
      700,
    ),
    // Finance Assumptions
    interestRate: extractInputValueFromLocalStorage('interestRate', 1),
    bankCommission: extractInputValueFromLocalStorage('bankCommission', 1000),
    amortization: extractInputValueFromLocalStorage('amortization', 30),
    capexFinancing: extractInputValueFromLocalStorage('capexFinancing', 85),
    capex: extractInputValueFromLocalStorage('capex', 86),
    stampDutyInterests: extractInputValueFromLocalStorage(
      'stampDutyInterests',
      0.04,
    ),
    // Operating Assumptions
    condominiumCosts: extractInputValueFromLocalStorage('condominiumCosts', 30),
    propertyTaxRate: extractInputValueFromLocalStorage('propertyTaxRate', 0.3),
    // Exit Assumptions
    timeToSale: extractInputValueFromLocalStorage('timeToSale', 12),
    irsRate: extractInputValueFromLocalStorage('irsRate', 30),
    exitBrokerFee: extractInputValueFromLocalStorage('exitBrokerFee', 5),
    loanEarlyRepaymentFee: extractInputValueFromLocalStorage(
      'loanEarlyRepaymentFee',
      0.5,
    ),
    capitalGainsTaxBase: extractInputValueFromLocalStorage(
      'capitalGainsTaxBase',
      50,
    ),
    // Valuation Model Configuration
    grossAreaToUsefulArea: extractInputValueFromLocalStorage(
      'grossAreaToUsefulArea',
      80,
    ),
    floor: extractInputValueFromLocalStorage('floor', 10),
    cap: extractInputValueFromLocalStorage('cap', 10),
    ciPercentile: extractInputValueFromLocalStorage(
      'ciPercentile',
      'Case by Case',
    ),
    mop: extractInputValueFromLocalStorage('mop', 100),
  },
};

/* eslint-disable default-case, no-param-reassign */
const investmentReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // Property Information
      case GET_LOCATIONS:
        draft.isGettingLocations = true;
        break;
      case SET_LOCATION:
        draft.inputs.location = action.payload;
        break;
      case GET_LOCATIONS_SUCCESS:
        draft.locations = action.payload;
        draft.isGettingLocations = false;
        break;
      case GET_TYPES:
        draft.isGettingTypes = true;
        break;
      case GET_TYPES_SUCCESS:
        draft.types = action.payload;
        draft.isGettingTypes = false;
        break;
      case GET_TYPOLOGIES:
        draft.isGettingTypologies = true;
        break;
      case GET_TYPOLOGIES_SUCCESS:
        draft.typologies = action.payload;
        draft.isGettingTypologies = false;
        break;
      case GET_CONDITIONS:
        draft.isGettingConditions = true;
        break;
      case GET_CONDITIONS_SUCCESS:
        draft.conditions = action.payload;
        draft.isGettingConditions = false;
        break;
      case GET_STATUS:
        draft.isGettingStatus = true;
        break;
      case GET_STATUS_SUCCESS:
        draft.status = action.payload;
        draft.isGettingStatus = false;
        break;
      // Other Investment Information
      // Acquisition Assumptions
      case GET_ACQUISITION_TYPES:
        draft.isGettingAcquisitionTypes = true;
        break;
      case GET_ACQUISITION_TYPES_SUCCESS:
        draft.acquisitionTypes = action.payload;
        draft.isGettingAcquisitionTypes = false;
        break;
      // Valuation Model Configuration
      case GET_CI_PERCENTILES:
        draft.isGettingCiPercentiles = true;
        break;
      case GET_CI_PERCENTILES_SUCCESS:
        draft.ciPercentiles = action.payload;
        draft.isGettingCiPercentiles = false;
        break;
      case SET_INPUT_VALUE:
        draft.inputs[action.payload.input] = action.payload.value;
        break;
      case SET_INPUT_ERROR:
        draft.errors[action.payload.input] = action.payload.error;
        break;
      case GET_ANALYSIS_DATA:
        draft.isGettingAnalysisData = true;
        break;
      case GET_ANALYSIS_DATA_SUCCESS:
        draft.analysisData = action.payload;
        draft.isGettingAnalysisData = false;
        break;
      case SET_ANALYZE_BUTTON_DISABLED:
        draft.analyzeButtonDisabled = action.payload;
        break;
    }
  });

export default investmentReducer;
