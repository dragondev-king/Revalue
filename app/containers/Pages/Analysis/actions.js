/* eslint-disable */
import { ApiClient } from 'containers/ApiClient/index';
import {
  PROPERTIES_TYPOLOGIES_PATH ,
  LOCATIONS_FULL_NAMES_PATH ,
  GET_ANALYSIS_PATH ,
  ACQUISITION_TYPES_PATH ,
  PROPERTIES_CONDITIONS_PATH ,
  PROPERTIES_TYPES_PATH ,
  PERCENTILES_PATH , IRS_CATEGORIES_PATH ,
  IRS_CATEGORY_REGIONS_PATH , IRS_DEPENDENTS_LIST_PATH
} from 'containers/ApiClient/PropertyManager/constants';
import {
  GET_PROPERTY_LOCATIONS,
  GET_PROPERTY_LOCATIONS_SUCCESS,
  GET_PROPERTY_TYPES,
  GET_PROPERTY_TYPES_SUCCESS,
  GET_PROPERTY_TYPOLOGIES,
  GET_PROPERTY_TYPOLOGIES_SUCCESS,
  GET_PROPERTY_CONDITIONS,
  GET_PROPERTY_CONDITIONS_SUCCESS,
  GET_ACQUISITION_TYPES,
  GET_ACQUISITION_TYPES_SUCCESS,
  GET_PERCENTILES,
  GET_PERCENTILES_SUCCESS,
  SET_INPUT_ERROR,
  SET_ANALYZE_BUTTON_DISABLED,
  SET_INPUT_VALUE,
  GET_IRS_CATEGORY_REGIONS,
  GET_IRS_CATEGORIES_SUCCESS,
  GET_IRS_CATEGORIES,
  GET_IRS_CATEGORY_REGIONS_SUCCESS,
  GET_IRS_DEPENDENTS_LIST,
  GET_IRS_DEPENDENTS_LIST_SUCCESS,
  GET_ANALYSIS_BY_ID_ERROR,
  GET_ANALYSIS_BY_ID_SUCCESS,
  GET_ANALYSIS_BY_ID,
  GET_PROPERTY_ANALYSIS_BY_ID_SUCCESS,
  GET_PROPERTY_ANALYSIS_BY_ID,
  GET_PROPERTY_ANALYSIS_BY_ID_ERROR, SET_NEW_PROPERTY_ANALYSIS_PAGE_READY_NULL
} from "./constants";
import {
  GET_ANALYSIS_BY_ID_PATH, GET_PROPERTIES_ANALYSIS_BY_ID_PATH
} from "../../ApiClient/PropertyManager/constants";

export const getPropertyLocations = () => async dispatch => {
  dispatch({
    type: GET_PROPERTY_LOCATIONS,
  });
  const propertyManagerApiClient = new ApiClient('PROPERTY_MANAGER');
  await propertyManagerApiClient
  .get(LOCATIONS_FULL_NAMES_PATH )
  .then(response => {
    dispatch({
      type: GET_PROPERTY_LOCATIONS_SUCCESS,
      payload: response.data,
    });
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log(error);
  });
};

export const getPropertyTypes = () => async dispatch => {
  dispatch({
    type: GET_PROPERTY_TYPES,
  });
  const propertyManagerApiClient = new ApiClient('PROPERTY_MANAGER');
  await propertyManagerApiClient
  .get(PROPERTIES_TYPES_PATH)
  .then(response => {
    dispatch({
      type: GET_PROPERTY_TYPES_SUCCESS,
      payload: response.data,
    });
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log(error);
  });
};

export const getPropertyTypologies = () => async dispatch => {
  dispatch({
    type: GET_PROPERTY_TYPOLOGIES,
  });
  const propertyManagerApiClient = new ApiClient('PROPERTY_MANAGER');
  await propertyManagerApiClient
  .get(PROPERTIES_TYPOLOGIES_PATH)
  .then(response => {
    dispatch({
      type: GET_PROPERTY_TYPOLOGIES_SUCCESS,
      payload: response.data,
    });
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log(error);
  });
};

export const getPropertyConditions = () => async dispatch => {
  dispatch({
    type: GET_PROPERTY_CONDITIONS,
  });
  const propertyManagerApiClient = new ApiClient('PROPERTY_MANAGER');
  await propertyManagerApiClient
  .get(PROPERTIES_CONDITIONS_PATH)
  .then(response => {
    dispatch({
      type: GET_PROPERTY_CONDITIONS_SUCCESS,
      payload: response.data,
    });
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log(error);
  });
};

export const getAcquisitionTypes = () => async dispatch => {
  dispatch({
    type: GET_ACQUISITION_TYPES,
  });
  const propertyManagerApiClient = new ApiClient('PROPERTY_MANAGER');
  await propertyManagerApiClient
  .get(ACQUISITION_TYPES_PATH)
  .then(response => {
    dispatch({
      type: GET_ACQUISITION_TYPES_SUCCESS,
      payload: response.data,
    });
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log(error);
  });
};

export const getCIPs = () => async dispatch => {
  dispatch({
    type: GET_PERCENTILES,
  });
  const propertyManagerApiClient = new ApiClient('PROPERTY_MANAGER');
  await propertyManagerApiClient
  .get(PERCENTILES_PATH)
  .then(response => {
    dispatch({
      type: GET_PERCENTILES_SUCCESS,
      payload: response.data,
    });
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log(error);
  });
};

export const getIrsCategories = () => async dispatch => {
  dispatch({
    type: GET_IRS_CATEGORIES,
  });
  const propertyManagerApiClient = new ApiClient('PROPERTY_MANAGER');
  await propertyManagerApiClient
  .get(IRS_CATEGORIES_PATH)
  .then(response => {
    dispatch({
      type: GET_IRS_CATEGORIES_SUCCESS,
      payload: response.data,
    });
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log(error);
  });
};

export const getIrsCategoryRegions = () => async dispatch => {
  dispatch({
    type: GET_IRS_CATEGORY_REGIONS,
  });
  const propertyManagerApiClient = new ApiClient('PROPERTY_MANAGER');
  await propertyManagerApiClient
  .get(IRS_CATEGORY_REGIONS_PATH)
  .then(response => {
    dispatch({
      type: GET_IRS_CATEGORY_REGIONS_SUCCESS,
      payload: response.data,
    });
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log(error);
  });
};

export const getIrsDependentsList = () => async dispatch => {
  dispatch({
    type: GET_IRS_DEPENDENTS_LIST,
  });
  const propertyManagerApiClient = new ApiClient('PROPERTY_MANAGER');
  await propertyManagerApiClient
  .get(IRS_DEPENDENTS_LIST_PATH)
  .then(response => {
    dispatch({
      type: GET_IRS_DEPENDENTS_LIST_SUCCESS,
      payload: response.data,
    });
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log(error);
  });
};

export const setInputValue = (input, value) => ({
  type: SET_INPUT_VALUE,
  payload: {
    input,
    value,
  },
});

export const setInputError = (input, error) => ({
  type: SET_INPUT_ERROR,
  payload: {
    input,
    error,
  },
});

export const setNewPropertyAnalysisPageReadyNull =() =>({
  type: SET_NEW_PROPERTY_ANALYSIS_PAGE_READY_NULL
});

export const setAnalyzeButtonDisabled = state => ({
  type: SET_ANALYZE_BUTTON_DISABLED,
  payload: state,
});

export const getPropertyAnalysisById = (id ,inputs) => async dispatch => {
  dispatch({
    type: GET_PROPERTY_ANALYSIS_BY_ID,
  });
  const propertyManagerApiClient = new ApiClient('PROPERTY_MANAGER');
  await propertyManagerApiClient
  .post(GET_PROPERTIES_ANALYSIS_BY_ID_PATH + `/${id}`, { ...inputs, analysisType: 'BUY_AND_SELL' })
  .then(response => {
    dispatch({
      type: GET_PROPERTY_ANALYSIS_BY_ID_SUCCESS,
      payload: response.data,
    });
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log(error);
    dispatch({
      type: GET_PROPERTY_ANALYSIS_BY_ID_ERROR,
    });
  });
};

export const getAnalysisById = id => async dispatch => {
  dispatch({
    type: GET_ANALYSIS_BY_ID,
  });
  const propertyManagerApiClient = new ApiClient('PROPERTY_MANAGER');
  await propertyManagerApiClient
  .get(GET_ANALYSIS_BY_ID_PATH + `/${id}`)
  .then(response => {
    dispatch({
      type: GET_ANALYSIS_BY_ID_SUCCESS,
      payload: response.data,
    });
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log(error);
    dispatch({
      type: GET_ANALYSIS_BY_ID_ERROR,
    });
  });
};

