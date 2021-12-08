import produce from 'immer';
import {
  UPDATE_ACCOUNT,
  UPDATE_ACCOUNT_ERROR,
  UPDATE_ACCOUNT_SUCCESS,
  GET_ACCOUNT,
  GET_ACCOUNT_ERROR,
  GET_ACCOUNT_SUCCESS,
} from './constants';

export const initialState = {
  account: {},
  errorUpdatingAccount: '',
  isUpdatingAccount: false,
  errorGettingAccount: '',
  isGettingAccount: false,
};

/* eslint-disable default-case, no-param-reassign */
const accountReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_ACCOUNT:
        draft.isUpdatingAccount = true;
        break;
      case UPDATE_ACCOUNT_SUCCESS:
        draft.account = action.payload;
        draft.isUpdatingAccount = false;
        break;
      case UPDATE_ACCOUNT_ERROR:
        draft.errorUpdatingAccount = action.payload;
        draft.isUpdatingAccount = false;
        break;
      case GET_ACCOUNT:
        draft.isGettingAccount = true;
        break;
      case GET_ACCOUNT_SUCCESS:
        draft.account = action.payload;
        draft.isGettingAccount = false;
        break;
      case GET_ACCOUNT_ERROR:
        draft.errorGettingAccount = action.payload;
        draft.isGettingAccount = false;
        break;
    }
  });

export default accountReducer;
