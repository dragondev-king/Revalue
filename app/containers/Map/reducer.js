import produce from 'immer';
import {
  GET_LOCATION_BOUNDARIES,
  GET_LOCATION_BOUNDARIES_ERROR,
  GET_LOCATION_BOUNDARIES_SUCCESS,
} from './constants';

const getPosition = (boundaries, location) => {
  let position = {
    lat: 38.722603473238365,
    lng: -9.139389231324786,
  };
  const currentLocation = location.split(', ')[0];
  boundaries.forEach(boundary => {
    if (boundary.name === currentLocation) {
      position = {
        lat: boundary.geometry.coordinates[1],
        lng: boundary.geometry.coordinates[0],
      };
    }
  });
  return position;
};

export const initialState = {
  center: {
    zoom: 13,
    position: {
      lat: 38.722603473238365,
      lng: -9.139389231324786,
    },
    key: null,
  },
  boundaries: [],
  isGettingBoundaries: false,
  errorGettingBoundaries: false,
};

/* eslint-disable default-case, no-param-reassign */
const mapReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_LOCATION_BOUNDARIES:
        draft.isGettingBoundaries = true;
        break;
      case GET_LOCATION_BOUNDARIES_SUCCESS:
        draft.center.position = getPosition(
          action.payload.boundaries,
          action.payload.location,
        );
        draft.boundaries = action.payload.boundaries;
        draft.isGettingBoundaries = false;
        break;
      case GET_LOCATION_BOUNDARIES_ERROR:
        draft.errorGettingBoundaries = action.payload;
        draft.isGettingBoundaries = false;
        break;
    }
  });

export default mapReducer;
