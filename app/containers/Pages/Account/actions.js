import { ApiClient } from '../../ApiClient';
import {
  UPDATE_ACCOUNT,
  UPDATE_ACCOUNT_ERROR,
  UPDATE_ACCOUNT_SUCCESS,
  GET_ACCOUNT,
  GET_ACCOUNT_ERROR,
  GET_ACCOUNT_SUCCESS,
} from './constants';

export const updateAccount = (info, onSuccess) => async dispatch => {
  const accountManagerClient = new ApiClient('ACCOUNT_MANAGER');
  dispatch({
    type: UPDATE_ACCOUNT,
  });
  await accountManagerClient
    .put(`/accounts`, info)
    .then(response => {
      dispatch({
        type: UPDATE_ACCOUNT_SUCCESS,
        payload: response.data,
      });
      onSuccess();
    })
    .catch(e => {
      dispatch({
        type: UPDATE_ACCOUNT_ERROR,
        payload: e.response.data.message,
      });
    });
};

export const getAccountByUsername = username => async dispatch => {
  const accountManagerClient = new ApiClient('ACCOUNT_MANAGER');
  dispatch({
    type: GET_ACCOUNT,
  });
  await accountManagerClient
    .get(`/accounts/${username}`)
    .then(response => {
      dispatch({
        type: GET_ACCOUNT_SUCCESS,
        payload: response.data,
      });
    })
    .catch(e => {
      dispatch({
        type: GET_ACCOUNT_ERROR,
        payload: e.response.data.message,
      });
    });
};
