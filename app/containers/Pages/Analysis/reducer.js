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
  inputs: {
    // Property Information
    location:
      JSON.parse(localStorage.getItem('location')) === null
        ? 'All'
        : JSON.parse(localStorage.getItem('location')),
    type:
      JSON.parse(localStorage.getItem('type')) === null
        ? 'All'
        : JSON.parse(localStorage.getItem('type')),
    typology:
      JSON.parse(localStorage.getItem('typology')) === null
        ? 'All'
        : JSON.parse(localStorage.getItem('typology')),
    condition:
      JSON.parse(localStorage.getItem('condition')) === null
        ? 'All'
        : JSON.parse(localStorage.getItem('condition')),
    minprice:
      localStorage.getItem('minprice') === null
        ? 500
        : localStorage.getItem('minprice'),
    maxprice:
      localStorage.getItem('maxprice') === null
        ? 1000
        : localStorage.getItem('maxprice'),
    minarea:
      localStorage.getItem('minarea') === null
        ? 100
        : localStorage.getItem('minarea'),
    maxarea:
      localStorage.getItem('maxarea') === null
        ? 300
        : localStorage.getItem('maxarea'),
    // Investment Information
    mincapital:
      localStorage.getItem('mincapital') === null
        ? 300
        : localStorage.getItem('mincapital'),
    maxcapital:
      localStorage.getItem('maxcapital') === null
        ? 1000
        : localStorage.getItem('maxcapital'),
    bidask:
      localStorage.getItem('bidask') === null
        ? 5
        : localStorage.getItem('bidask'),
    financingrate:
      localStorage.getItem('financingrate') === null
        ? 80
        : localStorage.getItem('financingrate'),
    // Other Investment Information
    // Acquisition Assumptions
    acquisitiontype:
      JSON.parse(localStorage.getItem('acquisitiontype')) === null
        ? 'Investment'
        : JSON.parse(localStorage.getItem('acquisitiontype')),
    entryfee:
      localStorage.getItem('entryfee') === null
        ? 0
        : localStorage.getItem('entryfee'),
    stampduty:
      localStorage.getItem('stampduty') === null
        ? 0.8
        : localStorage.getItem('stampduty'),
    lrwithm:
      localStorage.getItem('lrwithm') === null
        ? 350
        : localStorage.getItem('lrwithm'),
    lrwithoutm:
      localStorage.getItem('lrwithoutm') === null
        ? 700
        : localStorage.getItem('lrwithoutm'),
    // Finance Assumptions
    interestrate:
      localStorage.getItem('interestrate') === null
        ? 1
        : localStorage.getItem('interestrate'),
    bankcommission:
      localStorage.getItem('bankcommission') === null
        ? 1000
        : localStorage.getItem('bankcommission'),
    amortization:
      localStorage.getItem('amortization') === null
        ? 30
        : localStorage.getItem('amortization'),
    stampdutymortgage:
      localStorage.getItem('stampdutymortgage') === null
        ? 0.6
        : localStorage.getItem('stampdutymortgage'),
    stampdutyinterests:
      localStorage.getItem('stampdutyinterests') === null
        ? 0.04
        : localStorage.getItem('stampdutyinterests'),
    // Operating Assumptions
    condominiumcosts:
      localStorage.getItem('condominiumcosts') === null
        ? 30
        : localStorage.getItem('condominiumcosts'),
    propertytaxrate:
      localStorage.getItem('propertytaxrate') === null
        ? 0.3
        : localStorage.getItem('propertytaxrate'),
    // Exit Assumptions
    timetosale:
      localStorage.getItem('timetosale') === null
        ? 12
        : localStorage.getItem('timetosale'),
    irsrate:
      localStorage.getItem('irsrate') === null
        ? 30
        : localStorage.getItem('irsrate'),
    exitbrokerfee:
      localStorage.getItem('exitbrokerfee') === null
        ? 5
        : localStorage.getItem('exitbrokerfee'),
    loanearlyrepaymentfee:
      localStorage.getItem('loanearlyrepaymentfee') === null
        ? 0.5
        : localStorage.getItem('loanearlyrepaymentfee'),
    capitalgainstaxbase:
      localStorage.getItem('capitalgainstaxbase') === null
        ? 50
        : localStorage.getItem('capitalgainstaxbase'),
    // Valuation Model Configuration
    gcpa:
      localStorage.getItem('gcpa') === null ? 80 : localStorage.getItem('gcpa'),
    floor:
      localStorage.getItem('floor') === null
        ? 10
        : localStorage.getItem('floor'),
    cap:
      localStorage.getItem('cap') === null ? 10 : localStorage.getItem('cap'),
    cip:
      JSON.parse(localStorage.getItem('cip')) === null
        ? '5%'
        : JSON.parse(localStorage.getItem('cip')),
    mop:
      localStorage.getItem('mop') === null ? 100 : localStorage.getItem('mop'),
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
    }
  });

export default analysisReducer;
