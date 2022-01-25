import {
  DEFAULT_ACTION,
  GET_ANALYSIS_DATA_BY_ID,
  GET_ANALYSIS_DATA_SUCCESS_BY_ID,
} from './constants';
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const getAnalysisDataById = id => async dispatch => {
  dispatch({
    type: GET_ANALYSIS_DATA_BY_ID,
    payload: id,
  });
  dispatch({
    type: GET_ANALYSIS_DATA_SUCCESS_BY_ID,
    payload: id,
  });
};
