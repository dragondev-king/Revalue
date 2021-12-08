import {
  BOUNDARIES_ACTIVE,
  BOUNDARIES_HOVER,
  BOUNDARIES_INACTIVE,
  BOUNDARIES_LEVEL_REGION,
  BOUNDARIES_TYPE_REGION,
} from '../constants';

const config = {
  [BOUNDARIES_LEVEL_REGION]: {
    [BOUNDARIES_TYPE_REGION]: {
      [BOUNDARIES_ACTIVE]: {
        fillColor: '#3f51b5',
        fillOpacity: 0.1,
        strokeColor: '#3f51b5',
        strokeWeight: 1,
        cursor: 'hand',
        zIndex: 2,
      },

      [BOUNDARIES_INACTIVE]: {
        fillColor: '#bbb',
        fillOpacity: 0,
        strokeOpacity: 0,
        strokeColor: '#888',
        strokeWeight: 1,
        cursor: 'pointer',
        zIndex: 2,
      },
    },
  },
  [BOUNDARIES_HOVER]: {
    fillOpacity: 0.3,
    strokeOpacity: 1,
  },
};

export default config;
