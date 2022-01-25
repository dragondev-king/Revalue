import produce from 'immer';
import { GET_ANALYSIS_DATA_BY_ID } from './constants';
import data from './data.json';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const analysisReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ANALYSIS_DATA_BY_ID:
        // initialState.splice(0, initialState.length);
        // eslint-disable-next-line prettier/prettier
        const currentVal = data.find((item) => item.id === action.payload);
        Object.assign(initialState, currentVal);
        // initialState.push(currentVal[0]);
        // eslint-disable-next-line no-unused-expressions
        draft.data;
        break;
    }
  });

export default analysisReducer;
