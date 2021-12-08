import produce from 'immer';
import { GET_CHARTS, GET_CHARTS_ERROR, GET_CHARTS_SUCCESS } from './constants';

export const initialState = {
  charts: [],
  customCharts: [],
  isGettingCharts: false,
  errorGettingCharts: false,
};

/* eslint-disable default-case, no-param-reassign */
const overviewReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_CHARTS:
        draft.isGettingCharts = true;
        break;
      case GET_CHARTS_SUCCESS:
        draft.isGettingCharts = false;
        draft.charts = action.payload.charts;
        if (action.payload.customCharts) {
          const customCharts = [];
          Object.entries(action.payload.customCharts).forEach(
            ([key, value]) => {
              const customChart = {
                name: key,
                data: value,
              };
              customCharts.push(customChart);
            },
          );
          draft.customCharts = customCharts;
        } else {
          draft.customCharts = [];
        }
        break;
      case GET_CHARTS_ERROR:
        draft.errorGettingCharts = action.payload;
        draft.isGettingCharts = false;
        break;
    }
  });

export default overviewReducer;
