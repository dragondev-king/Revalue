import { ApiClient } from 'containers/ApiClient/index';
import {
  GET_LOCATIONS,
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_ERROR,
  SET_LOCATION,
  GET_TYPOLOGIES,
  GET_TYPOLOGIES_SUCCESS,
  GET_TYPOLOGIES_ERROR,
  SET_TYPOLOGY,
} from './constants';

const setItemLocation = locations => {
  localStorage.setItem('locations', JSON.stringify(locations));
};

const setItemTypologies = typologies => {
  localStorage.setItem('typologies', JSON.stringify(typologies));
};

export const setLocation = location => {
  localStorage.setItem('location', JSON.stringify(location));
  return {
    type: SET_LOCATION,
    payload: location,
  };
};

export const setTypology = typology => {
  localStorage.setItem('typology', JSON.stringify(typology));
  return {
    type: SET_TYPOLOGY,
    payload: typology,
  };
};

export const getLocations = () => async dispatch => {
  const propertyManagerClient = new ApiClient('PROPERTY_MANAGER');
  dispatch({
    type: GET_LOCATIONS,
  });
  await propertyManagerClient
    .get('/locations/names')
    .then(response => {
      setItemLocation(response.data);
      dispatch({
        type: GET_LOCATIONS_SUCCESS,
        payload: response.data,
      });
    })
    // eslint-disable-next-line no-unused-vars
    .catch(e => {
      dispatch({
        type: GET_LOCATIONS_ERROR,
        payload: e,
      });
    });
};

export const getPropertyTypologies = () => async dispatch => {
  const propertyManagerClient = new ApiClient('PROPERTY_MANAGER');
  dispatch({
    type: GET_TYPOLOGIES,
  });
  await propertyManagerClient
    .get('/properties/typologies')
    .then(response => {
      setItemTypologies(response.data);
      dispatch({
        type: GET_TYPOLOGIES_SUCCESS,
        payload: response.data,
      });
    })
    .catch(e => {
      dispatch({
        type: GET_TYPOLOGIES_ERROR,
        payload: e,
      });
    });
};
