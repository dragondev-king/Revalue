import produce from 'immer';
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
  GET_CI_PERCENTILES,
  GET_CI_PERCENTILES_SUCCESS,
  GET_ANALYSIS_DATA,
  GET_ANALYSIS_DATA_SUCCESS,
  SET_ANALYZE_BUTTON_DISABLED,
  SET_INPUT_ERROR,
  SET_INPUT_VALUE,
  GET_ANALYSIS_DATA_ERROR,
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
    bidAskRate: '',
    financingRate: '',
    entryBrokerRate: '',
    stampDutyRate: '',
    landRegistryInscriptionWithMortgage: '',
    landRegistryInscriptionWithoutMortgage: '',
    interestRate: '',
    bankCommission: '',
    amortization: '',
    stampDutyMortgageRate: '',
    stampDutyInterestRate: '',
    condominiumCosts: '',
    propertyTaxRate: '',
    timeToSale: '',
    irsRate: '',
    exitBrokerRate: '',
    earlyRepaymentRate: '',
    capitalGainsTaxRate: '',
    grossAreaToUsefulAreaRate: '',
    floorRate: '',
    capRate: '',
    //  minObservationsForPercentile: '',
  },
  inputs: {
    // Property Information
    propertyLocation: extractInputValueFromLocalStorage(
      'propertyLocation',
      'Arroios, Lisboa, Lisboa, Portugal',
    ),
    propertyType: extractInputValueFromLocalStorage('propertyType', 'all'),
    propertyTypology: extractInputValueFromLocalStorage(
      'propertyTypology',
      'all',
    ),
    propertyCondition: extractInputValueFromLocalStorage(
      'propertyCondition',
      'all',
    ),
    minAskingPrice: extractInputValueFromLocalStorage('minAskingPrice', null),
    maxAskingPrice: extractInputValueFromLocalStorage('maxAskingPrice', null),
    minUsefulArea: extractInputValueFromLocalStorage('minUsefulArea', null),
    maxUsefulArea: extractInputValueFromLocalStorage('maxUsefulArea', null),
    // Investment Information
    minCapital: extractInputValueFromLocalStorage('minCapital', null),
    maxCapital: extractInputValueFromLocalStorage('maxCapital', null),
    bidAskRate: extractInputValueFromLocalStorage('bidAskRate', 5),
    financingRate: extractInputValueFromLocalStorage('financingRate', 80),
    housePriceIndexRate: extractInputValueFromLocalStorage(
      'housePriceIndexRate',
      2,
    ),
    minProfit: extractInputValueFromLocalStorage('minProfit', null),
    // Other Investment Information
    // Acquisition Assumptions
    acquisitionType: extractInputValueFromLocalStorage(
      'acquisitionType',
      'acquisition.type.permanent.housing',
    ),
    entryBrokerRate: extractInputValueFromLocalStorage('entryBrokerRate', 0),
    stampDutyRate: extractInputValueFromLocalStorage('stampDutyRate', 0.6),
    landRegistryInscriptionWithMortgage: extractInputValueFromLocalStorage(
      'landRegistryInscriptionWithMortgage',
      350,
    ),
    landRegistryInscriptionWithoutMortgage: extractInputValueFromLocalStorage(
      'landRegistryInscriptionWithoutMortgage',
      700,
    ),
    // Finance Assumptions
    interestRate: extractInputValueFromLocalStorage('interestRate', 1),
    bankCommission: extractInputValueFromLocalStorage('bankCommission', 1000),
    amortization: extractInputValueFromLocalStorage('amortization', 30),
    capexFinancingRate: extractInputValueFromLocalStorage(
      'capexFinancingRate',
      80,
    ),
    capex: extractInputValueFromLocalStorage('capex', 5000),
    stampDutyMortgageRate: extractInputValueFromLocalStorage(
      'stampDutyMortgageRate',
      0.6,
    ),
    stampDutyInterestRate: extractInputValueFromLocalStorage(
      'stampDutyInterestRate',
      0.04,
    ),
    // Operating Assumptions
    condominiumCosts: extractInputValueFromLocalStorage('condominiumCosts', 30),
    propertyTaxRate: extractInputValueFromLocalStorage('propertyTaxRate', 0.3),
    multiRiskInsurance: extractInputValueFromLocalStorage(
      'multiRiskInsurance',
      0,
    ),
    lifeInsurance: extractInputValueFromLocalStorage('lifeInsurance', 0),
    // Exit Assumptions
    timeToSale: extractInputValueFromLocalStorage('timeToSale', 6),
    irsRate: extractInputValueFromLocalStorage('irsRate', 30),
    exitBrokerRate: extractInputValueFromLocalStorage('exitBrokerRate', 5),
    earlyRepaymentRate: extractInputValueFromLocalStorage(
      'earlyRepaymentRate',
      0.5,
    ),
    capitalGainsTaxRate: extractInputValueFromLocalStorage(
      'capitalGainsTaxRate',
      50,
    ),
    // Valuation Model Configuration
    grossAreaToUsefulAreaRate: extractInputValueFromLocalStorage(
      'grossAreaToUsefulAreaRate',
      10,
    ),
    floorRate: extractInputValueFromLocalStorage('floorRate', 100),
    capRate: extractInputValueFromLocalStorage('capRate', 100),
    ciPercentile: extractInputValueFromLocalStorage('ciPercentile', '95'),
    // minObservationsForPercentile: extractInputValueFromLocalStorage('minObservationsForPercentile', 100),
  },
};

/* eslint-disable default-case, no-param-reassign */
const investmentReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // Property Information
      case GET_PROPERTY_LOCATIONS:
        draft.isGettingPropertyLocations = true;
        break;
      case SET_PROPERTY_LOCATION:
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
        localStorage.setItem('inputs', JSON.stringify(draft.inputs));
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
      case GET_ANALYSIS_DATA_ERROR:
        draft.isGettingAnalysisData = false;
        break;
      case SET_ANALYZE_BUTTON_DISABLED:
        draft.analyzeButtonDisabled = action.payload;
        break;
    }
  });

export default investmentReducer;
