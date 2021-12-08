import produce from 'immer';
import { GET_VENDOR_SCRIPTS_SUCCESS } from './constants';

export const initialState = {
  isVendorScriptsLoaded: false,
};

/* eslint-disable default-case, no-param-reassign */
const dashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_VENDOR_SCRIPTS_SUCCESS:
        draft.isVendorScriptsLoaded = true;
        break;
    }
  });

export default dashboardReducer;
