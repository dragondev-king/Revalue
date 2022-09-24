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
  GET_CI_PERCENTILES,
  GET_CI_PERCENTILES_SUCCESS,
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
  ciPercentiles: setValueOrEmptyArray(
    JSON.parse(localStorage.getItem('ciPercentiles')),
  ),
  isGettingCiPercentiles: false,
  analysis: setValueOrEmptyArray(JSON.parse(localStorage.getItem('analysis'))),
  isGettingAnalysis: false,
  errors: {
    acquisitionType: '',
    amortization: '',
    bankCommissionRate: '',
    bidAskRate: '',
    capRate: '',
    capexFinancingRate: '',
    capexPerSquareMeter: '',
    capitalGainsTaxRate: '',
    ciPercentile: '',
    condominiumCosts: '',
    currentIrsRate: '',
    earlyRepaymentRate: '',
    acquisitionBrokerRate: '',
    exitBrokerRate: '',
    financingRate: '',
    floorRate: '',
    grossAreaToUsefulAreaRate: '',
    housePriceIndexRate: '',
    interestRate: '',
    /* TODO IRS  grossSalary: '',
    irsCategory: '',
    irsCategoryRegion: '',
    irsDependents: '', */
    landRegistryInscription: '',
    lifeInsurance: '',
    maxAskingPrice: '',
    maxCapital: '',
    maxUsefulArea: '',
    minAskingPrice: '',
    minCapital: '',
    minProfit: '',
    minUsefulArea: '',
    multiRiskInsurance: '',
    propertyCondition: '',
    propertyLocation: '',
    propertyTaxRate: '',
    propertyType: '',
    propertyTypology: '',
    stampDutyInterestRate: '',
    stampDutyMortgageRate: '',
    acquisitionStampDutyRate: '',
    taxResidentInPortugal: '',
  },
  inputs: {
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
    minCapital: extractInputValueFromLocalStorage('minCapital', null),
    maxCapital: extractInputValueFromLocalStorage('maxCapital', null),
    bidAskRate: extractInputValueFromLocalStorage('bidAskRate', 5),
    financingRate: extractInputValueFromLocalStorage('financingRate', 80),
    housePriceIndexRate: extractInputValueFromLocalStorage(
      'housePriceIndexRate',
      2,
    ),
    minProfit: extractInputValueFromLocalStorage('minProfit', null),
    acquisitionType: extractInputValueFromLocalStorage(
      'acquisitionType',
      'acquisition.type.permanent.housing',
    ),
    acquisitionBrokerRate: extractInputValueFromLocalStorage(
      'acquisitionBrokerRate',
      0,
    ),
    acquisitionStampDutyRate: extractInputValueFromLocalStorage(
      'acquisitionStampDutyRate',
      0.6,
    ),
    landRegistryInscription: extractInputValueFromLocalStorage(
      'landRegistryInscription',
      700,
    ),
    interestRate: extractInputValueFromLocalStorage('interestRate', 1),
    bankCommissionRate: extractInputValueFromLocalStorage(
      'bankCommissionRate',
      10,
    ),
    amortization: extractInputValueFromLocalStorage('amortization', 30),
    capexFinancingRate: extractInputValueFromLocalStorage(
      'capexFinancingRate',
      80,
    ),
    capexPerSquareMeter: extractInputValueFromLocalStorage(
      'capexPerSquareMeter',
      10,
    ),
    stampDutyMortgageRate: extractInputValueFromLocalStorage(
      'stampDutyMortgageRate',
      0.6,
    ),
    stampDutyInterestRate: extractInputValueFromLocalStorage(
      'stampDutyInterestRate',
      0.04,
    ),
    condominiumCosts: extractInputValueFromLocalStorage('condominiumCosts', 30),
    propertyTaxRate: extractInputValueFromLocalStorage('propertyTaxRate', 0.3),
    multiRiskInsurance: extractInputValueFromLocalStorage(
      'multiRiskInsurance',
      0,
    ),
    lifeInsurance: extractInputValueFromLocalStorage('lifeInsurance', 0),
    timeToSale: extractInputValueFromLocalStorage('timeToSale', 6),
    exitBrokerRate: extractInputValueFromLocalStorage('exitBrokerRate', 5),
    earlyRepaymentRate: extractInputValueFromLocalStorage(
      'earlyRepaymentRate',
      0.5,
    ),
    capitalGainsTaxRate: extractInputValueFromLocalStorage(
      'capitalGainsTaxRate',
      50,
    ),
    taxResidentInPortugal: extractInputValueFromLocalStorage(
      'taxResidentInPortugal',
      true,
    ),
    /* TODO IRS irsCategory: extractInputValueFromLocalStorage('irsCategory', null),
    irsCategoryRegion: extractInputValueFromLocalStorage(
      'irsCategoryRegion',
      null,
    ),
    irsDependents: extractInputValueFromLocalStorage('irsDependents', null),
    grossSalary: extractInputValueFromLocalStorage('grossSalary', null), */
    currentIrsRate: extractInputValueFromLocalStorage('currentIrsRate', null),
    grossAreaToUsefulAreaRate: extractInputValueFromLocalStorage(
      'grossAreaToUsefulAreaRate',
      10,
    ),
    floorRate: extractInputValueFromLocalStorage('floorRate', 100),
    capRate: extractInputValueFromLocalStorage('capRate', 100),
    ciPercentile: extractInputValueFromLocalStorage('ciPercentile', '95'),
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
