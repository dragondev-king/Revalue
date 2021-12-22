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
  GET_CIPS,
  GET_CIPS_SUCCESS,
  GET_ACQUISITIONTYPES,
  GET_ACQUISITIONTYPES_SUCCESS,
  SET_VALUE,
  GET_TABLEDATA,
  GET_TABLEDATA_SUCCESS,
  GET_LOADING,
} from './constants';

export function setValueOrEmptyArray(value) {
  if (value) {
    return value;
  }
  return [];
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
  isGettingTabledata: false,
  loading: false,
  inputs: {
    // Property Information
    location:
      JSON.parse(localStorage.getItem('inputs')).location === null
        ? 'All'
        : JSON.parse(localStorage.getItem('inputs')).location,
    type:
      JSON.parse(localStorage.getItem('inputs')).type === null
        ? 'All'
        : JSON.parse(localStorage.getItem('inputs')).type,
    typology:
      JSON.parse(localStorage.getItem('inputs')).typology === null
        ? 'All'
        : JSON.parse(localStorage.getItem('inputs')).typology,
    condition:
      JSON.parse(localStorage.getItem('inputs')).condition === null
        ? 'All'
        : JSON.parse(localStorage.getItem('inputs')).condition,
    minprice:
      JSON.parse(localStorage.getItem('inputs')).minprice === null
        ? 500
        : JSON.parse(localStorage.getItem('inputs')).minprice,
    maxprice:
      JSON.parse(localStorage.getItem('inputs')).maxprice === null
        ? 1000
        : JSON.parse(localStorage.getItem('inputs')).maxprice,

    minarea:
      JSON.parse(localStorage.getItem('inputs')).minarea === null
        ? 100
        : JSON.parse(localStorage.getItem('inputs')).minarea,
    maxarea:
      JSON.parse(localStorage.getItem('inputs')).maxarea === null
        ? 300
        : JSON.parse(localStorage.getItem('inputs')).maxarea,
    // Investment Information
    mincapital:
      JSON.parse(localStorage.getItem('inputs')).mincapital === null
        ? 300
        : JSON.parse(localStorage.getItem('inputs')).mincapital,
    maxcapital:
      JSON.parse(localStorage.getItem('inputs')).maxcapital === null
        ? 1000
        : JSON.parse(localStorage.getItem('inputs')).maxcapital,
    bidask:
      JSON.parse(localStorage.getItem('inputs')).bidask === null
        ? 5
        : JSON.parse(localStorage.getItem('inputs')).bidask,
    financingrate:
      JSON.parse(localStorage.getItem('inputs')).financingrate === null
        ? 80
        : JSON.parse(localStorage.getItem('inputs')).financingrate,
    // Other Investment Information
    // Acquisition Assumptions
    acquisitiontype:
      JSON.parse(localStorage.getItem('inputs')).acquisitiontype === null
        ? 'Investment'
        : JSON.parse(localStorage.getItem('inputs')).acquisitiontype,
    entryfee:
      JSON.parse(localStorage.getItem('inputs')).entryfee === null
        ? 0
        : JSON.parse(localStorage.getItem('inputs')).entryfee,
    stampduty:
      JSON.parse(localStorage.getItem('inputs')).stampduty === null
        ? 0.8
        : JSON.parse(localStorage.getItem('inputs')).stampduty,
    lrwithm:
      JSON.parse(localStorage.getItem('inputs')).lrwithm === null
        ? 350
        : JSON.parse(localStorage.getItem('inputs')).lrwithm,
    lrwithoutm:
      JSON.parse(localStorage.getItem('inputs')).lrwithoutm === null
        ? 700
        : JSON.parse(localStorage.getItem('inputs')).lrwithoutm,
    // Finance Assumptions
    interestrate:
      JSON.parse(localStorage.getItem('inputs')).interestrate === null
        ? 1
        : JSON.parse(localStorage.getItem('inputs')).interestrate,
    bankcommission:
      JSON.parse(localStorage.getItem('inputs')).bankcommission === null
        ? 1000
        : JSON.parse(localStorage.getItem('inputs')).bankcommission,
    amortization:
      JSON.parse(localStorage.getItem('inputs')).amortization === null
        ? 30
        : JSON.parse(localStorage.getItem('inputs')).amortization,
    stampdutymortgage:
      JSON.parse(localStorage.getItem('inputs')).stampdutymortgage === null
        ? 0.6
        : JSON.parse(localStorage.getItem('inputs')).stampdutymortgage,
    stampdutyinterests:
      JSON.parse(localStorage.getItem('inputs')).stampdutyinterests === null
        ? 0.04
        : JSON.parse(localStorage.getItem('inputs')).stampdutyinterests,
    // Operating Assumptions
    condominiumcosts:
      JSON.parse(localStorage.getItem('inputs')).condominiumcosts === null
        ? 30
        : JSON.parse(localStorage.getItem('inputs')).condominiumcosts,
    propertytaxrate:
      JSON.parse(localStorage.getItem('inputs')).propertytaxrate === null
        ? 0.3
        : JSON.parse(localStorage.getItem('inputs')).propertytaxrate,
    // Exit Assumptions
    timetosale:
      JSON.parse(localStorage.getItem('inputs')).timetosale === null
        ? 12
        : JSON.parse(localStorage.getItem('inputs')).timetosale,
    irsrate:
      JSON.parse(localStorage.getItem('inputs')).irsrate === null
        ? 30
        : JSON.parse(localStorage.getItem('inputs')).irsrate,
    exitbrokerfee:
      JSON.parse(localStorage.getItem('inputs')).exitbrokerfee === null
        ? 5
        : JSON.parse(localStorage.getItem('inputs')).exitbrokerfee,
    loanearlyrepaymentfee:
      JSON.parse(localStorage.getItem('inputs')).loanearlyrepaymentfee === null
        ? 0.5
        : JSON.parse(localStorage.getItem('inputs')).loanearlyrepaymentfee,
    capitalgainstaxbase:
      JSON.parse(localStorage.getItem('inputs')).capitalgainstaxbase === null
        ? 50
        : JSON.parse(localStorage.getItem('inputs')).capitalgainstaxbase,
    // Valuation Model Configuration
    gcpa:
      JSON.parse(localStorage.getItem('inputs')).gcpa === null
        ? 80
        : JSON.parse(localStorage.getItem('inputs')).gcpa,
    floor:
      JSON.parse(localStorage.getItem('inputs')).floor === null
        ? 10
        : JSON.parse(localStorage.getItem('inputs')).floor,
    cap:
      JSON.parse(localStorage.getItem('inputs')).cap === null
        ? 10
        : JSON.parse(localStorage.getItem('inputs')).cap,
    cip:
      JSON.parse(localStorage.getItem('inputs')).cip === null
        ? '5%'
        : JSON.parse(localStorage.getItem('inputs')).cip,
    mop:
      JSON.parse(localStorage.getItem('inputs')).mop === null
        ? 100
        : JSON.parse(localStorage.getItem('inputs')).mop,
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
      case GET_TABLEDATA:
        draft.isGettingTableData = true;
        break;
      case GET_TABLEDATA_SUCCESS:
        draft.tabledata = action.payload;
        draft.isGettingTableData = false;
        break;
      case GET_LOADING:
        draft.loading = action.payload;
        break;
    }
  });

export default analysisReducer;
