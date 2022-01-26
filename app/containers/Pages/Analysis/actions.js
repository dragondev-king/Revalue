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
  });
  await delay(1000);
  dispatch({
    type: GET_ANALYSIS_DATA_SUCCESS_BY_ID,
    payload: {
      id: '1',
      location: '3',
      gca: '4',
      gpa: '5',
      bedrooms: '6',
      askingPrice: '1',
      propsedEntryPrice: '7',
      estimatedExitPrice: '9',
      timeForSale: '11',
      requiredEntryCapital: '13',
      requiredCapitalOverInvestPeriod: '82',
      totalRequiredCapital: '83',
      moic: '84',
      profit: '14',
      irr: '15',
    },
  });
};

const delay = ms => new Promise(res => setTimeout(res, ms));
