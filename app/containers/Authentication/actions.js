import qs from 'qs';
// eslint-disable-next-line import/no-cycle
import { ApiClient } from 'containers/ApiClient/index';
import {
  GET_AUTHENTICATION,
  GET_AUTHENTICATION_ERROR,
  GET_AUTHENTICATION_SUCCESS,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  REMOVE_AUTHENTICATION_SUCCESS,
} from './constants';

const setToken = token => {
  localStorage.setItem('token', token);
  localStorage.setItem('authentication3DSComplete', 'false');
};

const setUser = user => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const logIn = args => async dispatch => {
  const authenticatorApiClient = new ApiClient('AUTHENTICATOR_API');
  dispatch({
    type: GET_AUTHENTICATION,
  });
  await authenticatorApiClient
    .post(
      '/auth/realms/project/protocol/openid-connect/token',
      qs.stringify({
        ...args,
        grant_type: 'password',
      }),
    )
    .then(response => {
      setToken(response.data.access_token);
      dispatch({
        type: GET_AUTHENTICATION_SUCCESS,
        payload: response.data,
      });
    })
    .catch(e => {
      if (e.toString().includes('401')) {
        dispatch({
          type: GET_AUTHENTICATION_ERROR,
          payload: e.response.data.error_description,
        });
      } else {
        dispatch({
          type: GET_AUTHENTICATION_ERROR,
          payload: 'Login failed: Could not reach the server',
        });
      }
    });
};

export const logOut = push => async (dispatch, getState) => {
  const authenticatorClient = new ApiClient('AUTHENTICATOR_API');
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  const data = qs.stringify({
    refresh_token: getState().authentication.refresh_token,
  });
  await authenticatorClient
    .post('/auth/realms/project/protocol/openid-connect/logout', data, config)
    .then(() => {
      push('/login');
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      dispatch({
        type: REMOVE_AUTHENTICATION_SUCCESS,
      });
    })
    .catch(() => {
      push('/login');
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      dispatch({
        type: REMOVE_AUTHENTICATION_SUCCESS,
      });
    });
};

export const getUserDetails = () => async dispatch => {
  const authenticatorClient = new ApiClient('AUTHENTICATOR');
  dispatch({
    type: GET_USER,
  });
  await authenticatorClient
    .get('/auth/realms/project/protocol/openid-connect/userinfo')
    .then(response => {
      setUser(response.data);
      dispatch({
        type: GET_USER_SUCCESS,
        payload: response.data,
      });
    })
    .catch(e => {
      dispatch({
        type: GET_USER_ERROR,
        payload: e,
      });
    });
};

// eslint-disable-next-line no-unused-vars
export const register = (args, push) => async dispatch => {
  const accountManagerClient = new ApiClient('ACCOUNT_MANAGER');
  const options = {
    headers: {},
  };

  const data = { ...args, username: args.email };
  delete data.email;
  await accountManagerClient
    .post('/accounts', data, options)
    .then(() => {
      push('/login');
    })
    // eslint-disable-next-line no-unused-vars
    .catch(e => {
      // eslint-disable-next-line no-console
      console.log(e);
    });
};
