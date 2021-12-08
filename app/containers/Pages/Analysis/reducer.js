import produce from 'immer';
import {
  GET_LOCATIONS,
  GET_LOCATIONS_ERROR,
  GET_LOCATIONS_SUCCESS,
  GET_TYPOLOGIES,
  GET_TYPOLOGIES_ERROR,
  GET_TYPOLOGIES_SUCCESS,
  SET_LOCATION,
  SET_TYPOLOGY,
} from './constants';

export function setValueOrEmptyArray(value) {
  if (value) {
    return value;
  }
  return [];
}

export const initialState = {
  locations: setValueOrEmptyArray(
    JSON.parse(localStorage.getItem('locations')),
  ),
  location: JSON.parse(localStorage.getItem('location')),
  typologies: setValueOrEmptyArray(
    JSON.parse(localStorage.getItem('typologies')),
  ),
  typology: JSON.parse(localStorage.getItem('typology')),
  isGettingTypologies: false,
  isGettingLocations: false,
  errorLocations: false,
  errorTypologies: false,
};

/* eslint-disable default-case, no-param-reassign */
const analysisReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_LOCATIONS:
        draft.isGettingLocations = true;
        break;
      case GET_LOCATIONS_SUCCESS:
        draft.locations = action.payload;
        draft.isGettingLocations = false;
        break;
      case GET_LOCATIONS_ERROR:
        draft.errorLocations = action.payload;
        draft.isGettingLocations = false;
        break;
      case SET_LOCATION:
        draft.location = action.payload;
        break;
      case GET_TYPOLOGIES:
        draft.isGettingTypologies = true;
        break;
      case GET_TYPOLOGIES_SUCCESS:
        draft.typologies = action.payload;
        draft.isGettingTypologies = false;
        break;
      case GET_TYPOLOGIES_ERROR:
        draft.errorTypologies = action.payload;
        draft.isGettingTypologies = false;
        break;
      case SET_TYPOLOGY:
        draft.typology = action.payload;
        break;
    }
  });

export default analysisReducer;
