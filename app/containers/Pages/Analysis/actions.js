// import { ApiClient } from 'containers/ApiClient/index';
import {
  GET_LOCATIONS,
  GET_LOCATIONS_SUCCESS,
  SET_LOCATION,
  SET_TYPOLOGY,
} from './constants';

export const getLocations = () => async dispatch => {
  dispatch({
    type: GET_LOCATIONS,
  });
  dispatch({
    type: GET_LOCATIONS_SUCCESS,
    payload: ['Apartment', 'Dwelling', 'All'],
  });
};

export const setLocation = location => dispatch => {
  localStorage.setItem('location', JSON.stringify(location));
  dispatch({
    type: SET_LOCATION,
    payload: location,
  });
};

export const setTypology = typology => {
  localStorage.setItem('typology', JSON.stringify(typology));
  return {
    type: SET_TYPOLOGY,
    payload: typology,
  };
};
