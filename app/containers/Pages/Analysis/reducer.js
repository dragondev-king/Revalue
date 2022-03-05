import produce from 'immer';
import {
  GET_ANALYSIS_DATA_BY_ID,
  GET_ANALYSIS_DATA_SUCCESS_BY_ID,
  SET_LOCATION,
  GET_LOCATIONS,
  GET_LOCATIONS_SUCCESS,
  GET_TYPES,
  GET_TYPES_SUCCESS,
  GET_TYPOLOGIES,
  GET_TYPOLOGIES_SUCCESS,
  GET_STATUS,
  GET_STATUS_SUCCESS,
  GET_CONDITIONS,
  GET_CONDITIONS_SUCCESS,
  GET_ACQUISITION_TYPES,
  GET_ACQUISITION_TYPES_SUCCESS,
  GET_CI_PERCENTILES,
  GET_CI_PERCENTILES_SUCCESS,
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
  isGettingAnalysisById: false,
  isGettingLocations: false,
  analysis: {},
  columns: [],
  rows: [],
  criteria: {},
  inputs: {
    location: extractInputValueFromLocalStorage('location', 'Lisboa, Portugal'),
    type: extractInputValueFromLocalStorage('type', 'All'),
  },
  estimatedTableColumns: [],
  estimatedTableRows: [],
};

/* eslint-disable default-case, no-param-reassign */
const analysisReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ANALYSIS_DATA_BY_ID:
        draft.isGettingAnalysisById = true;
        break;
      case GET_ANALYSIS_DATA_SUCCESS_BY_ID:
        draft.analysis = action.payload.anaylysis;
        draft.columns = action.payload.breakdownTable.columns;
        draft.rows = action.payload.breakdownTable.rows;
        draft.criteria = action.payload.criteria;
        draft.estimatedTableColumns =
          action.payload.estimatedProfitTable.columns;
        draft.estimatedTableRows = action.payload.estimatedProfitTable.rows;
        draft.isGettingAnalysisById = false;
        break;
      case SET_LOCATION:
        draft.inputs.location = action.payload;
        break;
      case GET_LOCATIONS:
        draft.isGettingLocations = true;
        break;
      case GET_LOCATIONS_SUCCESS:
        draft.locations = action.payload;
        draft.isGettingLocations = false;
        break;
      case GET_CONDITIONS:
        draft.isGettingConditions = true;
        break;
      case GET_CONDITIONS_SUCCESS:
        draft.conditions = action.payload;
        draft.isGettingConditions = false;
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
      case GET_STATUS:
        draft.isGettingStatus = true;
        break;
      case GET_STATUS_SUCCESS:
        draft.status = action.payload;
        draft.isGettingStatus = false;
        break;
      case GET_ACQUISITION_TYPES:
        draft.isGettingAcquisitionTypes = true;
        break;
      case GET_ACQUISITION_TYPES_SUCCESS:
        draft.acquisitionTypes = action.payload;
        draft.isGettingAcquisitionTypes = false;
        break;
      case GET_CI_PERCENTILES:
        draft.isGettingCiPercentiles = true;
        break;
      case GET_CI_PERCENTILES_SUCCESS:
        draft.ciPercentiles = action.payload;
        draft.isGettingCiPercentiles = false;
        break;
    }
  });

export default analysisReducer;
