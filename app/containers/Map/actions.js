import {
  GET_LOCATION_BOUNDARIES,
  GET_LOCATION_BOUNDARIES_ERROR,
  GET_LOCATION_BOUNDARIES_SUCCESS,
} from './constants';
import { ApiClient } from '../ApiClient';

export const getLocationBoundariesByLocation = location => async dispatch => {
  dispatch({
    type: GET_LOCATION_BOUNDARIES,
  });
  const propertyManagerClient = new ApiClient('PROPERTY_MANAGER');
  await propertyManagerClient
    .get(`/locations/${location}/boundaries`)
    .then(response => {
      dispatch({
        type: GET_LOCATION_BOUNDARIES_SUCCESS,
        payload: {
          boundaries: response.data,
          location,
        },
      });
    })
    .catch(e => {
      dispatch({
        type: GET_LOCATION_BOUNDARIES_ERROR,
        payload: e,
      });
    });
};
