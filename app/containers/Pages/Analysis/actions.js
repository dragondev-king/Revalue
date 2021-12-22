// import { ApiClient } from 'containers/ApiClient/index';
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
export const getTypes = () => async dispatch => {
  dispatch({
    type: GET_TYPES,
  });
  dispatch({
    type: GET_TYPES_SUCCESS,
    payload: ['Apartment', 'Dwelling', 'All'],
  });
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
export const getConditions = () => async dispatch => {
  dispatch({
    type: GET_CONDITIONS,
  });
  dispatch({
    type: GET_CONDITIONS_SUCCESS,
    payload: ['New', 'Used', 'All'],
  });
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

// Valuation Model Configuration
export const getCIPs = () => async dispatch => {
  dispatch({
    type: GET_CIPS,
  });
  dispatch({
    type: GET_CIPS_SUCCESS,
    payload: ['5%', '25%', '50%', '75%', '95%', 'Case by Case'],
  });
};

export const setValue = data => {
  localStorage.setItem('inputs', JSON.stringify(data));
  return {
    type: SET_VALUE,
    payload: data,
  };
};
