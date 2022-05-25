/* eslint-disable */
import { ApiClient } from 'containers/ApiClient/index';
import {
  PROPERTIES_TYPOLOGIES,
  LOCATIONS_FULL_NAMES,
  ANALYSIS,
  ACQUISITION_TYPES,
  PROPERTIES_CONDITIONS,
  PROPERTIES_TYPES,
  PERCENTILES,
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
  GET_CI_PERCENTILES,
  GET_CI_PERCENTILES_SUCCESS,
  SET_INPUT_ERROR,
  GET_ANALYSIS_DATA,
  GET_ANALYSIS_DATA_SUCCESS,
  SET_ANALYZE_BUTTON_DISABLED,
  SET_PROPERTY_LOCATION,
  SET_INPUT_VALUE,
  GET_ANALYSIS_DATA_ERROR,
} from './constants';

// TODO refactor to api calls
export const getPropertyLocations = () => async dispatch => {
  dispatch({
    type: GET_PROPERTY_LOCATIONS,
  });
  dispatch({
    type: GET_PROPERTY_LOCATIONS_SUCCESS,
    payload: [
      'Portugal',
      'Bragança, Portugal',
      'Setúbal, Portugal',
      'Braga, Portugal',
      'Viana do Castelo, Portugal',
      'Évora, Portugal',
      'Vila Real, Portugal',
      'Açores, Portugal',
      'Guarda, Portugal',
      'Viseu, Portugal',
      'Lisboa, Portugal',
      'Faro, Portugal',
      'Santarém, Portugal',
      'Aveiro, Portugal',
      'Porto, Portugal',
      'Coimbra, Portugal',
      'Madeira, Portugal',
      'Leiria, Portugal',
      'Castelo Branco, Portugal',
      'Beja, Portugal',
      'Portalegre, Portugal',
      'Cadaval, Lisboa, Portugal',
      'Sobral de Monte Agraço, Lisboa, Portugal',
      'Azambuja, Lisboa, Portugal',
      'Cascais, Lisboa, Portugal',
      'Torres Vedras, Lisboa, Portugal',
      'Arruda dos Vinhos, Lisboa, Portugal',
      'Alenquer, Lisboa, Portugal',
      'Lourinhã, Lisboa, Portugal',
      'Loures, Lisboa, Portugal',
      'Lisboa, Lisboa, Portugal',
      'Sintra, Lisboa, Portugal',
      'Amadora, Lisboa, Portugal',
      'Oeiras, Lisboa, Portugal',
      'Vila Franca de Xira, Lisboa, Portugal',
      'Mafra, Lisboa, Portugal',
      'Odivelas, Lisboa, Portugal',
      'Lumiar, Lisboa, Lisboa, Portugal',
      'Areeiro, Lisboa, Lisboa, Portugal',
      'Avenidas Novas, Lisboa, Lisboa, Portugal',
      'Ajuda, Lisboa, Lisboa, Portugal',
      'Arroios, Lisboa, Lisboa, Portugal',
      'Alcântara, Lisboa, Lisboa, Portugal',
      'Carnide, Lisboa, Lisboa, Portugal',
      'Misericórdia, Lisboa, Lisboa, Portugal',
      'Alvalade, Lisboa, Lisboa, Portugal',
      'Campolide, Lisboa, Lisboa, Portugal',
      'Benfica, Lisboa, Lisboa, Portugal',
      'Parque das Nações, Lisboa, Lisboa, Portugal',
      'São Domingos de Benfica, Lisboa, Lisboa, Portugal',
      'Estrela, Lisboa, Lisboa, Portugal',
      'Marvila, Lisboa, Lisboa, Portugal',
      'Campo de Ourique, Lisboa, Lisboa, Portugal',
      'Santa Clara, Lisboa, Lisboa, Portugal',
      'São Vicente, Lisboa, Lisboa, Portugal',
      'Santo António, Lisboa, Lisboa, Portugal',
      'Santa Maria Maior, Lisboa, Lisboa, Portugal',
      'Beato, Lisboa, Lisboa, Portugal',
      'Penha de França, Lisboa, Lisboa, Portugal',
      'Olivais, Lisboa, Lisboa, Portugal',
      'Belém, Lisboa, Lisboa, Portugal',
    ],
  });
  /* const propertyManagerApiClient = new ApiClient('PROPERTY_MANAGER');
  await propertyManagerApiClient
    .get(LOCATIONS_FULL_NAMES)
    .then(response => {
      dispatch({
        type: GET_PROPERTY_LOCATIONS_SUCCESS,
        payload: response.data,
      });
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
    }); */
};

export const getPropertyTypes = () => async dispatch => {
  dispatch({
    type: GET_PROPERTY_TYPES,
  });
  dispatch({
    type: GET_PROPERTY_TYPES_SUCCESS,
    payload: [
      {
        name: 'type.apartment',
        label: 'Apartment',
      },
      {
        name: 'type.house',
        label: 'House',
      },
      {
        name: 'all',
        label: 'All',
      },
    ],
  });
  /*  const propertyManagerApiClient = new ApiClient('PROPERTY_MANAGER');
  await propertyManagerApiClient
    .get(PROPERTIES_TYPES)
    .then(response => {
      dispatch({
        type: GET_PROPERTY_TYPES_SUCCESS,
        payload: response.data,
      });
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
    }); */
};

export const getPropertyTypologies = () => async dispatch => {
  dispatch({
    type: GET_PROPERTY_TYPOLOGIES,
  });
  dispatch({
    type: GET_PROPERTY_TYPOLOGIES_SUCCESS,
    payload: [
      {
        name: 'T0',
        label: 'T0',
      },
      {
        name: 'T1',
        label: 'T1',
      },
      {
        name: 'T2',
        label: 'T2',
      },
      {
        name: 'T3',
        label: 'T3',
      },
      {
        name: 'T4',
        label: 'T4',
      },
      {
        name: 'T4+',
        label: 'T4+',
      },
      {
        name: 'all',
        label: 'All',
      },
    ],
  });
  /* const propertyManagerApiClient = new ApiClient('PROPERTY_MANAGER');
  await propertyManagerApiClient
    .get(PROPERTIES_TYPOLOGIES)
    .then(response => {
      dispatch({
        type: GET_PROPERTY_TYPOLOGIES_SUCCESS,
        payload: response.data,
      });
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
    }); */
};

export const getPropertyConditions = () => async dispatch => {
  dispatch({
    type: GET_PROPERTY_CONDITIONS,
  });
  dispatch({
    type: GET_PROPERTY_CONDITIONS_SUCCESS,
    payload: [
      {
        name: 'condition.new',
        label: 'New',
      },
      {
        name: 'condition.used',
        label: 'Used',
      },
      {
        name: 'all',
        label: 'All',
      },
    ],
  });
  /*  const propertyManagerApiClient = new ApiClient('PROPERTY_MANAGER');
  await propertyManagerApiClient
    .get(PROPERTIES_CONDITIONS)
    .then(response => {
      dispatch({
        type: GET_PROPERTY_CONDITIONS_SUCCESS,
        payload: response.data,
      });
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
    }); */
};

export const getAcquisitionTypes = () => async dispatch => {
  dispatch({
    type: GET_ACQUISITION_TYPES,
  });
  dispatch({
    type: GET_ACQUISITION_TYPES_SUCCESS,
    payload: [
      {
        name: 'acquisition.type.investment',
        label: 'Investment',
      },
      {
        name: 'acquisition.type.permanent.housing',
        label: 'Permanent Housing',
      },
    ],
  });
  /* const propertyManagerApiClient = new ApiClient('PROPERTY_MANAGER');
  await propertyManagerApiClient
    .get(ACQUISITION_TYPES)
    .then(response => {
      dispatch({
        type: GET_ACQUISITION_TYPES_SUCCESS,
        payload: response.data,
      });
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
    }); */
};

export const getCIPs = () => async dispatch => {
  dispatch({
    type: GET_CI_PERCENTILES,
  });
  dispatch({
    type: GET_CI_PERCENTILES_SUCCESS,
    payload: [
      { name: '5', label: '5' },
      { name: '25', label: '25' },
      { name: '50', label: '50' },
      { name: '75', label: '75' },
      { name: '95', label: '95' },
    ],
  });
  /* const propertyManagerApiClient = new ApiClient('PROPERTY_MANAGER');
  await propertyManagerApiClient
    .get(PERCENTILES)
    .then(response => {
      dispatch({
        type: GET_CI_PERCENTILES_SUCCESS,
        payload: response.data,
      });
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
    }); */
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

export const setAnalyzeButtonDisabled = state => ({
  type: SET_ANALYZE_BUTTON_DISABLED,
  payload: state,
});

export const getAnalysisData = inputs => async dispatch => {
  dispatch({
    type: GET_ANALYSIS_DATA,
  });
  dispatch({
    type: GET_ANALYSIS_DATA_SUCCESS,
    payload: [
      {
        id: 159,
        propertyLocation: 'Arroios, Lisboa, Lisboa, Portugal',
        propertyAskingPrice: 300000,
        propertyArea: 80,
        propertyRooms: 2,
        entryCapital: 73784.91,
        exitPrice: 602992.5371472538930817108848714269697666168212890625,
        profit: -144973.89705247833713210975474794395267963409423828125,
      },
    ],
  });
  /* const propertyManagerApiClient = new ApiClient('PROPERTY_MANAGER');
  await propertyManagerApiClient
    .post(ANALYSIS, { ...inputs, analysisType: 'BUY_AND_SELL' })
    .then(response => {
      dispatch({
        type: GET_ANALYSIS_DATA_SUCCESS,
        payload: response.data,
      });
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
      dispatch({
        type: GET_ANALYSIS_DATA_ERROR,
      });
    }); */
};

export const setPropertyLocation = propertyLocation => dispatch => {
  localStorage.setItem('propertyLocation', JSON.stringify(propertyLocation));
  dispatch({
    type: SET_PROPERTY_LOCATION,
    payload: propertyLocation,
  });
};
