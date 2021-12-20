import produce from 'immer';
import {
  GET_LOCATIONS,
  GET_LOCATIONS_SUCCESS,
  SET_LOCATION,
  GET_TYPES,
  GET_TYPES_SUCCESS,
  SET_TYPE,
  GET_TYPOLOGIES,
  GET_TYPOLOGIES_SUCCESS,
  SET_TYPOLOGY,
  GET_CONDITIONS,
  GET_CONDITIONS_SUCCESS,
  SET_CONDITION,
  SET_MINPRICE,
  SET_MAXPRICE,
  SET_MINAREA,
  SET_MAXAREA,
  SET_MINCAPITAL,
  SET_MAXCAPITAL,
  SET_BIDASK,
  SET_FINANCINGRATE,
  SET_GCPA,
  SET_FLOOR,
  SET_CAP,
  GET_CIPS,
  GET_CIPS_SUCCESS,
  SET_CIP,
  SET_MOP,
  GET_ACQUISITIONTYPES,
  GET_ACQUISITIONTYPES_SUCCESS,
  SET_ACQUISITIONTYPE,
  SET_ENTRYFEE,
  SET_STAMPDUTY,
  SET_LRWITHM,
  SET_LRWITHOUTM,
  SET_INTERESTRATE,
  SET_BANKCOMMISSION,
  SET_AMORTIZATION,
  SET_STAMPDUTYMORTGAGE,
  SET_STAMPDUTYINTERESTS,
  SET_CONDOMINIUMCOSTS,
  SET_PROPERTYTAXRATE,
  SET_TIMETOSALE,
  SET_IRSRATE,
  SET_EXITBROKERFEE,
  SET_LOANEARLYREPAYMENTFEE,
  SET_CAPITALGAINSTAXBASE,
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
  location:
    JSON.parse(localStorage.getItem('location')) === null
      ? 'All'
      : JSON.parse(localStorage.getItem('location')),
  isGettingLocations: false,
  types: setValueOrEmptyArray(JSON.parse(localStorage.getItem('types'))),
  type:
    JSON.parse(localStorage.getItem('type')) === null
      ? 'All'
      : JSON.parse(localStorage.getItem('type')),
  isGettingTypes: false,
  typologies: setValueOrEmptyArray(
    JSON.parse(localStorage.getItem('typologies')),
  ),
  typology:
    JSON.parse(localStorage.getItem('typology')) === null
      ? 'All'
      : JSON.parse(localStorage.getItem('typology')),
  isGettingTypologies: false,
  conditions: setValueOrEmptyArray(
    JSON.parse(localStorage.getItem('conditions')),
  ),
  condition:
    JSON.parse(localStorage.getItem('condition')) === null
      ? 'All'
      : JSON.parse(localStorage.getItem('condition')),
  isGettingConditions: false,
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
  acquisitiontypes: setValueOrEmptyArray(
    JSON.parse(localStorage.getItem('acquisitiontypes')),
  ),
  acquisitiontype:
    JSON.parse(localStorage.getItem('acquisitiontype')) === null
      ? 'Investment'
      : JSON.parse(localStorage.getItem('acquisitiontype')),
  isGettingAcquisitionTypes: false,
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
    localStorage.getItem('floor') === null ? 10 : localStorage.getItem('floor'),
  cap: localStorage.getItem('cap') === null ? 10 : localStorage.getItem('cap'),
  cips: setValueOrEmptyArray(JSON.parse(localStorage.getItem('cips'))),
  cip:
    JSON.parse(localStorage.getItem('cip')) === null
      ? '5%'
      : JSON.parse(localStorage.getItem('cip')),
  isGettingCips: false,
  mop: localStorage.getItem('mop') === null ? 100 : localStorage.getItem('mop'),
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
      case SET_LOCATION:
        draft.location = action.payload;
        break;
      case GET_TYPES:
        draft.isGettingTypes = true;
        break;
      case GET_TYPES_SUCCESS:
        draft.types = action.payload;
        draft.isGettingTypes = false;
        break;
      case SET_TYPE:
        draft.type = action.payload;
        break;
      case GET_TYPOLOGIES:
        draft.isGettingTypologies = true;
        break;
      case GET_TYPOLOGIES_SUCCESS:
        draft.typologies = action.payload;
        draft.isGettingTypologies = false;
        break;
      case SET_TYPOLOGY:
        draft.typology = action.payload;
        break;
      case GET_CONDITIONS:
        draft.isGettingConditions = true;
        break;
      case GET_CONDITIONS_SUCCESS:
        draft.conditions = action.payload;
        draft.isGettingConditions = false;
        break;
      case SET_CONDITION:
        draft.condition = action.payload;
        break;
      case SET_MINPRICE:
        draft.minprice = action.payload;
        break;
      case SET_MAXPRICE:
        draft.maxprice = action.payload;
        break;
      case SET_MINAREA:
        draft.minarea = action.payload;
        break;
      case SET_MAXAREA:
        draft.maxarea = action.payload;
        break;
      case SET_MINCAPITAL:
        draft.mincapital = action.payload;
        break;
      case SET_MAXCAPITAL:
        draft.maxcapital = action.payload;
        break;
      case SET_BIDASK:
        draft.bidask = action.payload;
        break;
      case SET_FINANCINGRATE:
        draft.financingrate = action.payload;
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
      case SET_ACQUISITIONTYPE:
        draft.acquisitiontype = action.payload;
        break;
      case SET_ENTRYFEE:
        draft.entryfee = action.payload;
        break;
      case SET_STAMPDUTY:
        draft.stampduty = action.payload;
        break;
      case SET_LRWITHM:
        draft.lrwithm = action.payload;
        break;
      case SET_LRWITHOUTM:
        draft.lrwithoutm = action.payload;
        break;
      // Finance Assumptions
      case SET_INTERESTRATE:
        draft.interestrate = action.payload;
        break;
      case SET_BANKCOMMISSION:
        draft.bankcommission = action.payload;
        break;
      case SET_AMORTIZATION:
        draft.amortization = action.payload;
        break;
      case SET_STAMPDUTYMORTGAGE:
        draft.stampdutymortgage = action.payload;
        break;
      case SET_STAMPDUTYINTERESTS:
        draft.stampdutyinterests = action.payload;
        break;
      // Operating Assumptions
      case SET_CONDOMINIUMCOSTS:
        draft.condominiumcosts = action.payload;
        break;
      case SET_PROPERTYTAXRATE:
        draft.propertytaxrate = action.payload;
        break;
      // Exit Assumptions
      case SET_TIMETOSALE:
        draft.timetosale = action.payload;
        break;
      case SET_IRSRATE:
        draft.irsrate = action.payload;
        break;
      case SET_EXITBROKERFEE:
        draft.exitbrokerfee = action.payload;
        break;
      case SET_LOANEARLYREPAYMENTFEE:
        draft.loanearlyrepaymentfee = action.payload;
        break;
      case SET_CAPITALGAINSTAXBASE:
        draft.capitalgainstaxbase = action.payload;
        break;
      // Valuation Model Configuration
      case SET_GCPA:
        draft.gcpa = action.payload;
        break;
      case SET_FLOOR:
        draft.floor = action.payload;
        break;
      case SET_CAP:
        draft.cap = action.payload;
        break;
      case GET_CIPS:
        draft.isGettingCips = true;
        break;
      case GET_CIPS_SUCCESS:
        draft.cips = action.payload;
        draft.isGettingCips = false;
        break;
      case SET_CIP:
        draft.cip = action.payload;
        break;
      case SET_MOP:
        draft.mop = action.payload;
        break;
    }
  });

export default analysisReducer;
