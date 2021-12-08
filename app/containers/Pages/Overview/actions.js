import { ApiClient } from 'containers/ApiClient/index';
import { GET_CHARTS, GET_CHARTS_ERROR, GET_CHARTS_SUCCESS } from './constants';

export const getChartsByLocation = location => async dispatch => {
  const propertyManagerClient = new ApiClient('PROPERTY_MANAGER');
  dispatch({
    type: GET_CHARTS,
  });
  await propertyManagerClient
    .get(`charts?location=${location}`)
    .then(response => {
      dispatch({
        type: GET_CHARTS_SUCCESS,
        payload: response.data,
      });
    })
    .catch(e => {
      dispatch({
        type: GET_CHARTS_ERROR,
        payload: e,
      });
    });
};
