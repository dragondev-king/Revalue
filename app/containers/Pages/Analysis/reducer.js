import produce from 'immer';
import {
  GET_LOCATIONS,
  GET_LOCATIONS_SUCCESS,
  GET_TYPES,
  GET_TYPES_SUCCESS,
  GET_TYPOLOGIES,
  GET_TYPOLOGIES_SUCCESS,
  GET_CONDITIONS,
  GET_CONDITIONS_SUCCESS,
  GET_ACQUISITIONTYPES,
  GET_ACQUISITIONTYPES_SUCCESS,
  GET_CIPS,
  GET_CIPS_SUCCESS,
  SET_VALUE,
  GET_ANALYSIS_DATA,
  GET_ANALYSIS_DATA_SUCCESS,
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
  // Other Investment Information
  // Acquisition Assumptions
  acquisitiontypes: setValueOrEmptyArray(
    JSON.parse(localStorage.getItem('acquisitiontypes')),
  ),
  isGettingAcquisitionTypes: false,
  // Valuation Model Configuration
  cips: setValueOrEmptyArray(JSON.parse(localStorage.getItem('cips'))),
  isGettingCips: false,
  analysisData: [],
  isGettingAnalysisData: false,
  inputs: {
    // Property Information
    location: extractInputValueFromLocalStorage('location', 'All'),
    type: extractInputValueFromLocalStorage('type', 'All'),
    typology: extractInputValueFromLocalStorage('typology', 'All'),
    condition: extractInputValueFromLocalStorage('condition', 'All'),
    minprice: extractInputValueFromLocalStorage('minprice', 500),
    maxprice: extractInputValueFromLocalStorage('maxprice', 1000),
    minarea: extractInputValueFromLocalStorage('minarea', 100),
    maxarea: extractInputValueFromLocalStorage('maxarea', 300),
    // Investment Information
    mincapital: extractInputValueFromLocalStorage('mincapital', 300),
    maxcapital: extractInputValueFromLocalStorage('maxcapital', 1000),
    bidask: extractInputValueFromLocalStorage('bidask', 5),
    financingrate: extractInputValueFromLocalStorage('financingrate', 80),
    // Other Investment Information
    // Acquisition Assumptions
    acquisitiontype: extractInputValueFromLocalStorage(
      'acquisitiontype',
      'Investment',
    ),
    entryfee: extractInputValueFromLocalStorage('entryfee', 0),
    stampduty: extractInputValueFromLocalStorage('stampduty', 0.8),
    lrwithm: extractInputValueFromLocalStorage('lrwithm', 1000),
    lrwithoutm: extractInputValueFromLocalStorage('lrwithoutm', 700),
    // Finance Assumptions
    interestrate: extractInputValueFromLocalStorage('interestrate', 1),
    bankcommission: extractInputValueFromLocalStorage('bankcommission', 1000),
    amortization: extractInputValueFromLocalStorage('amortization', 30),
    stampdutymortgage: extractInputValueFromLocalStorage(
      'stampdutymortgage',
      0.6,
    ),
    stampdutyinterests: extractInputValueFromLocalStorage(
      'stampdutyinterests',
      0.04,
    ),
    // Operating Assumptions
    condominiumcosts: extractInputValueFromLocalStorage('condominiumcosts', 30),
    propertytaxrate: extractInputValueFromLocalStorage('propertytaxrate', 0.3),
    // Exit Assumptions
    timetosale: extractInputValueFromLocalStorage('timetosale', 12),
    irsrate: extractInputValueFromLocalStorage('irsrate', 30),
    exitbrokerfee: extractInputValueFromLocalStorage('exitbrokerfee', 5),
    loanearlyrepaymentfee: extractInputValueFromLocalStorage(
      'loanearlyrepaymentfee',
      0.5,
    ),
    capitalgainstaxbase: extractInputValueFromLocalStorage(
      'capitalgainstaxbase',
      50,
    ),
    // Valuation Model Configuration
    gcpa: extractInputValueFromLocalStorage('gcpa', 80),
    floor: extractInputValueFromLocalStorage('floor', 10),
    cap: extractInputValueFromLocalStorage('cap', 10),
    cip: extractInputValueFromLocalStorage('cip', '5%'),
    mop: extractInputValueFromLocalStorage('mop', 100),
  },
};

/* eslint-disable default-case, no-param-reassign */
const analysisReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // Property Information
      case GET_LOCATIONS:
        draft.isGettingLocations = true;
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
      // Other Investment Information
      // Acquisition Assumptions
      case GET_ACQUISITIONTYPES:
        draft.isGettingAcquisitionTypes = true;
        break;
      case GET_ACQUISITIONTYPES_SUCCESS:
        draft.acquisitiontypes = action.payload;
        draft.isGettingAcquisitionTypes = false;
        break;
      // Valuation Model Configuration
      case GET_CIPS:
        draft.isGettingCips = true;
        break;
      case GET_CIPS_SUCCESS:
        draft.cips = action.payload;
        draft.isGettingCips = false;
        break;
      case SET_VALUE:
        draft.inputs = action.payload;
        break;
      case GET_ANALYSIS_DATA:
        draft.isGettingAnalysisData = true;
        break;
      case GET_ANALYSIS_DATA_SUCCESS:
        draft.analysisData = action.payload;
        draft.isGettingAnalysisData = false;
        break;
    }
  });

export default analysisReducer;
