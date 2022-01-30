import produce from 'immer';
import {
  GET_ANALYSIS_DATA_BY_ID,
  GET_ANALYSIS_DATA_SUCCESS_BY_ID,
} from './constants';

export const initialState = {
  isGettingAnalysisById: false,
  analysis: {},
  columns: [],
  rows: [],
  criteria: {},
};

const analysisReducer = (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case GET_ANALYSIS_DATA_BY_ID:
        draft.isGettingAnalysisById = true;
        break;
      case GET_ANALYSIS_DATA_SUCCESS_BY_ID:
        draft.analysis = action.payload.anaylysis;
        draft.columns = action.payload.columns;
        draft.rows = action.payload.rows;
        draft.criteria = action.payload.criteria;
        draft.isGettingAnalysisById = false;
        break;
    }
  });

export default analysisReducer;
