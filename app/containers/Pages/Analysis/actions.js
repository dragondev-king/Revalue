// import { ApiClient } from 'containers/ApiClient/index';
import {
  GET_LOCATIONS,
  GET_LOCATIONS_SUCCESS,
  GET_TYPES,
  GET_TYPES_SUCCESS,
  GET_TYPOLOGIES,
  GET_TYPOLOGIES_SUCCESS,
  GET_CONDITIONS,
  GET_CONDITIONS_SUCCESS,
  GET_ACQUISITION_TYPES,
  GET_ACQUISITION_TYPES_SUCCESS,
  GET_CIPS,
  GET_CIPS_SUCCESS,
  SET_VALUE,
  GET_ANALYSIS_DATA,
  GET_ANALYSIS_DATA_SUCCESS,
  SET_ANALYZE_BUTTON_STATE,
  GET_STATUS,
  GET_STATUS_SUCCESS,
} from './constants';
import tableData from './data.json';

export const getLocations = () => async dispatch => {
  dispatch({
    type: GET_LOCATIONS,
  });
  dispatch({
    type: GET_LOCATIONS_SUCCESS,
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
};

export const getTypes = () => async dispatch => {
  dispatch({
    type: GET_TYPES,
  });
  dispatch({
    type: GET_TYPES_SUCCESS,
    payload: ['Apartment', 'Dwelling', 'All'],
  });
};

export const getTypologies = () => async dispatch => {
  dispatch({
    type: GET_TYPOLOGIES,
  });
  dispatch({
    type: GET_TYPOLOGIES_SUCCESS,
    payload: ['T0', 'T1', 'T2', 'T3', 'T4+', 'All'],
  });
};

export const getStatus = () => async dispatch => {
  dispatch({
    type: GET_STATUS,
  });
  dispatch({
    type: GET_STATUS_SUCCESS,
    payload: ['Leased', 'Vacant', 'All'],
  });
};

export const getConditions = () => async dispatch => {
  dispatch({
    type: GET_CONDITIONS,
  });
  dispatch({
    type: GET_CONDITIONS_SUCCESS,
    payload: ['New', 'Used', 'All'],
  });
};

export const getAcquisitionTypes = () => async dispatch => {
  dispatch({
    type: GET_ACQUISITION_TYPES,
  });
  dispatch({
    type: GET_ACQUISITION_TYPES_SUCCESS,
    payload: ['Investment', 'Main Residence'],
  });
};

export const getCIPs = () => async dispatch => {
  dispatch({
    type: GET_CIPS,
  });
  dispatch({
    type: GET_CIPS_SUCCESS,
    payload: ['5%', '25%', '50%', '75%', '95%', 'Case by Case'],
  });
};

export const setValue = data => {
  localStorage.setItem('inputs', JSON.stringify(data));
  return {
    type: SET_VALUE,
    payload: data,
  };
};

export const setAnalyzeButtonState = state => ({
  type: SET_ANALYZE_BUTTON_STATE,
  payload: state,
});

export const getAnalysisData = () => async dispatch => {
  dispatch({
    type: GET_ANALYSIS_DATA,
  });
  await delay(2000);
  dispatch({
    type: GET_ANALYSIS_DATA_SUCCESS,
    payload: tableData,
  });
};

const delay = ms => new Promise(res => setTimeout(res, ms));
