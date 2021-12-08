/*
 *
 * Authentication reducer
 *
 */

import produce from 'immer';
import {
  GET_AUTHENTICATION,
  GET_AUTHENTICATION_SUCCESS,
  GET_AUTHENTICATION_ERROR,
  REMOVE_AUTHENTICATION_SUCCESS,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from './constants';

export const initialState = {
  user: JSON.parse(localStorage.getItem('user')),
  authenticated: !!localStorage.getItem('token'),
  token: localStorage.getItem('token'),
  refresh_token: '',
  isGettingUser: false,
  isGettingAuthentication: false,
  errorUser: '',
  errorAuthentication: false,
};
/* eslint-disable default-case, no-param-reassign */
const authenticationReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_AUTHENTICATION:
        draft.isGettingAuthentication = true;
        break;
      case GET_AUTHENTICATION_SUCCESS:
        draft.authenticated = true;
        draft.token = action.payload.token;
        draft.refresh_token = action.payload.refresh_token;
        draft.isGettingAuthentication = false;
        break;
      case GET_AUTHENTICATION_ERROR:
        draft.authenticated = false;
        draft.token = null;
        draft.user = null;
        draft.errorAuthentication = action.payload;
        draft.isGettingAuthentication = false;
        break;
      case REMOVE_AUTHENTICATION_SUCCESS:
        draft.authenticated = false;
        draft.token = null;
        draft.user = null;
        draft.isGettingAuthentication = false;
        break;
      case GET_USER:
        draft.isGettingUser = true;
        break;
      case GET_USER_SUCCESS:
        draft.user = action.payload;
        draft.isGettingUser = false;
        break;
      case GET_USER_ERROR:
        draft.errorUser = action.payload;
        draft.isGettingUser = false;
        break;
      default:
        break;
    }
  });

export default authenticationReducer;
