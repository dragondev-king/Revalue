// import { ApiClient } from 'containers/ApiClient/index';
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
// Property Information
export const getLocations = () => async dispatch => {
  dispatch({
    type: GET_LOCATIONS,
  });
  dispatch({
    type: GET_LOCATIONS_SUCCESS,
    payload: ['Apartment', 'Dwelling', 'All'],
  });
};
export const setLocation = location => {
  localStorage.setItem('location', JSON.stringify(location));
  return {
    type: SET_LOCATION,
    payload: location,
  };
};
export const getTypes = () => async dispatch => {
  dispatch({
    type: GET_TYPES,
  });
  dispatch({
    type: GET_TYPES_SUCCESS,
    payload: ['Apartment', 'Dwelling', 'All'],
  });
};
export const setType = type => {
  localStorage.setItem('type', JSON.stringify(type));
  return {
    type: SET_TYPE,
    payload: type,
  };
};
export const getTypologyies = () => async dispatch => {
  dispatch({
    type: GET_TYPOLOGIES,
  });
  dispatch({
    type: GET_TYPOLOGIES_SUCCESS,
    payload: ['Leased', 'Vacant', 'All'],
  });
};
export const setTypology = typology => {
  localStorage.setItem('typology', JSON.stringify(typology));
  return {
    type: SET_TYPOLOGY,
    payload: typology,
  };
};
export const getConditions = () => async dispatch => {
  dispatch({
    type: GET_CONDITIONS,
  });
  dispatch({
    type: GET_CONDITIONS_SUCCESS,
    payload: ['New', 'Used', 'All'],
  });
};
export const setCondition = condition => {
  localStorage.setItem('condition', JSON.stringify(condition));
  return {
    type: SET_CONDITION,
    payload: condition,
  };
};
export const setMinPrice = minprice => {
  localStorage.setItem('minprice', minprice);
  return {
    type: SET_MINPRICE,
    payload: minprice,
  };
};
export const setMaxPrice = maxprice => {
  localStorage.setItem('maxprice', maxprice);
  return {
    type: SET_MAXPRICE,
    payload: maxprice,
  };
};
export const setMinArea = minarea => {
  localStorage.setItem('minarea', minarea);
  return {
    type: SET_MINAREA,
    payload: minarea,
  };
};
export const setMaxArea = maxarea => {
  localStorage.setItem('maxarea', maxarea);
  return {
    type: SET_MAXAREA,
    payload: maxarea,
  };
};
export const setMinCapital = mincapital => {
  localStorage.setItem('mincapital', mincapital);
  return {
    type: SET_MINCAPITAL,
    payload: mincapital,
  };
};
export const setMaxCapital = maxacapital => {
  localStorage.setItem('maxcapital', maxacapital);
  return {
    type: SET_MAXCAPITAL,
    payload: maxacapital,
  };
};
export const setBidAsk = bidask => {
  localStorage.setItem('bidask', bidask);
  return {
    type: SET_BIDASK,
    payload: bidask,
  };
};
export const setFinancingRate = financingrate => {
  localStorage.setItem('financingrate', financingrate);
  return {
    type: SET_FINANCINGRATE,
    payload: financingrate,
  };
};

// Other Investment Information
// Acquisition Assumptions
export const getAcquisitionTypes = () => async dispatch => {
  dispatch({
    type: GET_ACQUISITIONTYPES,
  });
  dispatch({
    type: GET_ACQUISITIONTYPES_SUCCESS,
    payload: ['Investment', 'for Main Residence'],
  });
};
export const setAcquisitionType = acquisitiontype => {
  localStorage.setItem('acquisitiontype', JSON.stringify(acquisitiontype));
  return {
    type: SET_ACQUISITIONTYPE,
    payload: acquisitiontype,
  };
};
export const setEntryFee = entryfee => {
  localStorage.setItem('entryfee', entryfee);
  return {
    type: SET_ENTRYFEE,
    payload: entryfee,
  };
};
export const setStampDuty = stampduty => {
  localStorage.setItem('stampduty', stampduty);
  return {
    type: SET_STAMPDUTY,
    payload: stampduty,
  };
};
export const setLRwithM = lrwithm => {
  localStorage.setItem('lrwithm', lrwithm);
  return {
    type: SET_LRWITHM,
    payload: lrwithm,
  };
};
export const setLRwithoutM = lrwithoutm => {
  localStorage.setItem('lrwithoutm', lrwithoutm);
  return {
    type: SET_LRWITHOUTM,
    payload: lrwithoutm,
  };
};
// Finance Assumptions
export const setInterestRate = interestrate => {
  localStorage.setItem('interestrate', interestrate);
  return {
    type: SET_INTERESTRATE,
    payload: interestrate,
  };
};
export const setBankCommission = bankcommission => {
  localStorage.setItem('bankcommission', bankcommission);
  return {
    type: SET_BANKCOMMISSION,
    payload: bankcommission,
  };
};
export const setAmortization = amortization => {
  localStorage.setItem('amortization', amortization);
  return {
    type: SET_AMORTIZATION,
    payload: amortization,
  };
};
export const setStampDutyMortgage = stampdutymortgage => {
  localStorage.setItem('stampdutymortgage', stampdutymortgage);
  return {
    type: SET_STAMPDUTYMORTGAGE,
    payload: stampdutymortgage,
  };
};
export const setStampDutyInterests = stampdutyinterests => {
  localStorage.setItem('stampdutyinterests', stampdutyinterests);
  return {
    type: SET_STAMPDUTYINTERESTS,
    payload: stampdutyinterests,
  };
};
// Operating Assumptions
export const setCondominiumCosts = condominiumcosts => {
  localStorage.setItem('condominiumcosts', condominiumcosts);
  return {
    type: SET_CONDOMINIUMCOSTS,
    payload: condominiumcosts,
  };
};
export const setPropertyTaxRate = propertytaxrate => {
  localStorage.setItem('propertytaxrate', propertytaxrate);
  return {
    type: SET_PROPERTYTAXRATE,
    payload: propertytaxrate,
  };
};
// Exit Assumptions
export const setTimetoSale = timetosale => {
  localStorage.setItem('timetosale', timetosale);
  return {
    type: SET_TIMETOSALE,
    payload: timetosale,
  };
};
export const setIRSRate = irsrate => {
  localStorage.setItem('irsrate', irsrate);
  return {
    type: SET_IRSRATE,
    payload: irsrate,
  };
};
export const setExitBrokerFee = exitbrokerfee => {
  localStorage.setItem('exitbrokerfee', exitbrokerfee);
  return {
    type: SET_EXITBROKERFEE,
    payload: exitbrokerfee,
  };
};
export const setLoanEarlyRepaymentFee = loanearlyrepaymentfee => {
  localStorage.setItem('loanearlyrepaymentfee', loanearlyrepaymentfee);
  return {
    type: SET_LOANEARLYREPAYMENTFEE,
    payload: loanearlyrepaymentfee,
  };
};
export const setCapitalgainsTaxBase = capitalgainstaxbase => {
  localStorage.setItem('capitalgainstaxbase', capitalgainstaxbase);
  return {
    type: SET_CAPITALGAINSTAXBASE,
    payload: capitalgainstaxbase,
  };
};

// Valuation Model Configuration
export const setGCPA = gcpa => {
  localStorage.setItem('gcpa', gcpa);
  return {
    type: SET_GCPA,
    payload: gcpa,
  };
};
export const setFloor = floor => {
  localStorage.setItem('floor', floor);
  return {
    type: SET_FLOOR,
    payload: floor,
  };
};
export const setCap = cap => {
  localStorage.setItem('cap', cap);
  return {
    type: SET_CAP,
    payload: cap,
  };
};
export const getCIPs = () => async dispatch => {
  dispatch({
    type: GET_CIPS,
  });
  dispatch({
    type: GET_CIPS_SUCCESS,
    payload: ['5%', '25%', '50%', '75%', '95%', 'Case by Case'],
  });
};
export const setCIP = cip => {
  localStorage.setItem('cip', JSON.stringify(cip));
  return {
    type: SET_CIP,
    payload: cip,
  };
};
export const setMOP = mop => {
  localStorage.setItem('mop', mop);
  return {
    type: SET_MOP,
    payload: mop,
  };
};
