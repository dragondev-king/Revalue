import {
  DEFAULT_ACTION,
  GET_ANALYSIS_DATA_BY_ID,
  GET_ANALYSIS_DATA_SUCCESS_BY_ID,
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

const delay = ms => new Promise(res => setTimeout(res, ms));
