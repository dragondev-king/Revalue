/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import qs from 'qs';
import { push } from 'connected-react-router';
// eslint-disable-next-line import/no-cycle
import { logOut } from '../Authentication/actions';
import { GET_AUTHENTICATION_SUCCESS } from '../Authentication/constants';

const setToken = token => {
  localStorage.setItem('token', token);
};

// Axios Global default interceptors workaround (https://github.com/axios/axios/issues/510)
const _createAxios = axios.create;
axios.create = function createPatchedAxios(conf) {
  const instance = _createAxios(conf);
  const defaultIcs = axios.defaults.interceptors;
  const resInterceptor =
    defaultIcs && defaultIcs.response ? defaultIcs.response : false;
  const reqInterceptor =
    defaultIcs && defaultIcs.request ? defaultIcs.request : false;
  if (reqInterceptor) instance.interceptors.request.use(...reqInterceptor);
  if (resInterceptor) instance.interceptors.response.use(...resInterceptor);
  return instance;
};

const globalAxiosInterceptors = store => {
  const requestInterceptor = [
    requestConfig => requestConfig,
    requestError => Promise.reject(requestError),
  ];

  const responseInterceptor = [
    response => response,
    error => {
      const originalRequest = error.config;
      if (
        error.response &&
        error.response.status &&
        error.response.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        const authenticatorApiClient = new ApiClient('AUTHENTICATOR_API');
        authenticatorApiClient
          .post(
            '/auth/realms/project/protocol/openid-connect/token',
            qs.stringify({
              username: process.env.CLIENT_ID,
              password: process.env.CLIENT_SECRET,
              refresh_token: store.getState().authentication.refresh_token,
              grant_type: 'refresh_token',
            }),
          )
          .then(response => {
            setToken(response.data.access_token);
            store.dispatch({
              type: GET_AUTHENTICATION_SUCCESS,
              payload: response.data,
            });
            originalRequest.headers.Authorization = `Bearer ${localStorage.getItem(
              'token',
            )}`;
            return axios(originalRequest);
          })
          .catch(retryError => {
            store.dispatch(logOut(push));
            Promise.reject(retryError);
          });
      }
      return Promise.reject(error);
    },
  ];

  axios.defaults.interceptors = {
    request: requestInterceptor,
    response: responseInterceptor,
  };
  axios.interceptors.response.use(...responseInterceptor);
  axios.interceptors.request.use(...requestInterceptor);
};

const getClient = (component = null) => {
  const options = {};

  switch (component) {
    case 'AUTHENTICATOR_API':
      options.baseURL = process.env.AUTHENTICATOR;
      options.auth = {
        username: process.env.CLIENT_ID,
        password: process.env.CLIENT_SECRET,
      };
      break;
    case 'AUTHENTICATOR':
      options.baseURL = process.env.AUTHENTICATOR;
      options.headers = {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Accept-Language': localStorage.getItem('language'),
      };
      break;
    case 'ACCOUNT_MANAGER':
      options.baseURL = process.env.ACCOUNT_MANAGER;
      options.headers = {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Accept-Language': localStorage.getItem('language'),
      };
      break;
    case 'PROPERTY_MANAGER':
      options.baseURL = process.env.PROPERTY_MANAGER;
      options.headers = {
        Authorization: `Basic YWRtaW46NWJyV1dXM0ZvYTNS`,
        'Accept-Language': localStorage.getItem('language'),
      };
      break;
    default:
  }
  return axios.create(options);
};

class ApiClient {
  constructor(component = null) {
    this.client = getClient(component);
  }

  get(url, conf = {}) {
    return this.client
      .get(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  delete(url, conf = {}) {
    return this.client
      .delete(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  head(url, conf = {}) {
    return this.client
      .head(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  options(url, conf = {}) {
    return this.client
      .options(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  post(url, data = {}, conf = {}) {
    return this.client
      .post(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  put(url, data = {}, conf = {}) {
    return this.client
      .put(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  patch(url, data = {}, conf = {}) {
    return this.client
      .patch(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }
}

export { ApiClient, globalAxiosInterceptors };
