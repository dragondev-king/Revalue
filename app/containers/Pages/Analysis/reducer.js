import produce from 'immer';
import {
  GET_ANALYSIS_BY_ID,
  GET_ANALYSIS_BY_ID_SUCCESS,
  GET_PROPERTY_TYPES,
  GET_PROPERTY_TYPES_SUCCESS,
  GET_PROPERTY_TYPOLOGIES,
  GET_PROPERTY_TYPOLOGIES_SUCCESS,
  GET_PROPERTY_CONDITIONS,
  GET_PROPERTY_CONDITIONS_SUCCESS,
  GET_PERCENTILES,
  GET_PERCENTILES_SUCCESS,
  GET_ACQUISITION_TYPES,
  GET_ACQUISITION_TYPES_SUCCESS,
  GET_ANALYSIS_BY_ID_ERROR,
  GET_IRS_CATEGORIES,
  GET_IRS_CATEGORIES_SUCCESS,
  GET_IRS_CATEGORY_REGIONS,
  GET_IRS_CATEGORY_REGIONS_SUCCESS,
  GET_IRS_DEPENDENTS_LIST,
  GET_IRS_DEPENDENTS_LIST_SUCCESS,
  SET_ANALYZE_BUTTON_DISABLED,
  SET_INPUT_ERROR,
  SET_INPUT_VALUE,
  GET_PROPERTY_ANALYSIS_BY_ID,
  GET_PROPERTY_ANALYSIS_BY_ID_ERROR,
  GET_PROPERTY_ANALYSIS_BY_ID_SUCCESS,
  SET_NEW_PROPERTY_ANALYSIS_PAGE_READY_NULL,
} from './constants';

export function setValueOrEmptyArray(value) {
  if (value) {
    return value;
  }
  return [];
}

export const initialState = {
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
  data: {},
  analyzeButtonDisabled: true,
  isGettingAnalysisById: true,
  inputs: {},
  errors: {
    acquisitionType: '',
    amortization: '',
    bankCommissionRate: '',
    bidAskRate: '',
    capRate: '',
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
    floorRate: '',
    grossAreaToUsefulAreaRate: '',
    housePriceIndexRate: '',
    interestRate: '',
    irsCategory: '',
    grossSalary: '',
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
  isGettingPropertyAnalysisById: false,
  newPropertyAnalysisPageReady: null,
};

/* eslint-disable default-case, no-param-reassign */
const analysisReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ANALYSIS_BY_ID:
        draft.isGettingAnalysisById = true;
        break;
      case GET_ANALYSIS_BY_ID_SUCCESS:
        draft.data = action.payload;
        draft.inputs = action.payload.criteria;
        draft.isGettingAnalysisById = false;
        break;
      case GET_ANALYSIS_BY_ID_ERROR:
        draft.isGettingAnalysisById = true;
        break;
      case GET_PROPERTY_ANALYSIS_BY_ID:
        draft.isGettingPropertyAnalysisById = true;
        break;
      case GET_PROPERTY_ANALYSIS_BY_ID_SUCCESS:
        draft.newPropertyAnalysisPageReady = action.payload.id;
        draft.analyzeButtonDisabled = true;
        draft.isGettingPropertyAnalysisById = false;
        break;
      case GET_PROPERTY_ANALYSIS_BY_ID_ERROR:
        draft.isGettingPropertyAnalysisById = false;
        break;
      case SET_NEW_PROPERTY_ANALYSIS_PAGE_READY_NULL:
        draft.newPropertyAnalysisPageReady = null;
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
        break;
      case SET_INPUT_ERROR:
        draft.errors[action.payload.input] = action.payload.error;
        break;
      case SET_ANALYZE_BUTTON_DISABLED:
        draft.analyzeButtonDisabled = action.payload;
        break;
    }
  });

export default analysisReducer;
