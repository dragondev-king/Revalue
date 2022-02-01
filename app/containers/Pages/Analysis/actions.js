import {
  DEFAULT_ACTION,
  GET_ANALYSIS_DATA_BY_ID,
  GET_ANALYSIS_DATA_SUCCESS_BY_ID,
  SET_LOCATION
} from './constants';
import data from './data.json';
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const getAnalysisDataById = id => async dispatch => {
  dispatch({
    type: GET_ANALYSIS_DATA_BY_ID,
  });
  await delay(1000);
  dispatch({
    type: GET_ANALYSIS_DATA_SUCCESS_BY_ID,
    payload: data,
  });
};

export const setLocation = location => dispatch => {
  localStorage.setItem('location', JSON.stringify(location));
  dispatch({
    type: SET_LOCATION,
    payload: location,
  });
};

const delay = ms => new Promise(res => setTimeout(res, ms));
