import produce from 'immer';
import {
  GET_ANALYSIS_DATA_BY_ID,
  GET_ANALYSIS_DATA_SUCCESS_BY_ID,
  SET_PROPERTY_LOCATION,
  GET_PROPERTY_LOCATIONS,
  GET_PROPERTY_LOCATIONS_SUCCESS,
  GET_PROPERTY_TYPES,
  GET_PROPERTY_TYPES_SUCCESS,
  GET_PROPERTY_TYPOLOGIES,
  GET_PROPERTY_TYPOLOGIES_SUCCESS,
  GET_PROPERTY_STATUS,
  GET_PROPERTY_STATUS_SUCCESS,
  GET_PROPERTY_CONDITIONS,
  GET_PROPERTY_CONDITIONS_SUCCESS,
  GET_CI_PERCENTILES,
  GET_CI_PERCENTILES_SUCCESS,
  GET_ACQUISITION_TYPES,
  GET_ACQUISITION_TYPES_SUCCESS,
} from './constants';

export function setValueOrEmptyArray(value) {
  if (value) {
    return value;
  }
  return [];
}

export function extractInputValueFromLocalStorage(value, defaultValue) {
  return JSON.parse(localStorage.getItem('inputs')) &&
    JSON.parse(localStorage.getItem('inputs'))[value] &&
    JSON.parse(localStorage.getItem('inputs'))[value] !== null
    ? JSON.parse(localStorage.getItem('inputs'))[value]
    : defaultValue;
}
export const initialState = {
  isGettingAnalysisById: false,
  isGettingLocations: false,
  analysis: {
    ciPercentile: 95,
    area: 80,
    financingRate: 23,
    transactionPricePerSquareMeter: 5714,
    overrideTransactionPricePerSquareMeter: 5714,
    askingPricePerSquareMeter: 3750,
    exitPrice: 459399.91430125449934251946615404449403285980224609375,
    entryPrice: 301784.91,
    entryCapital: 73784.91,
    acquisitionPrice: 285000.0,
    rett: 11786.91,
    propertyTaxFee: 450.0,
    openingBalance: 232000.0,
    interest: 1373472.0,
    operatingCosts: 274712.51111,
    exitBrokerFee: 22969.9957150627249671259733077022247016429901123046875,
    profitBeforeTax: -123282.5925238082256246065071536577306687831878662109375,
    profitAfterTax: -187519.373892736991780915531080609071068465709686279296875,
    tax: 64236.781368928766156309023926951340399682521820068359375,
    property: {
      askingPrice: 300000,
      rooms: 2,
      bathrooms: '1',
      usefulArea: 80,
      grossArea: 90,
      energyEfficiencyRating: 'B',
      status: 'SALE',
      type: 'APARTMENT',
      typology: 'T1',
      condition: 'USED',
      constructionYear: 1990,
      sourceName: 'IMOVIRTUAL',
      sourceAgency: ' Remax Prestige',
      sourceUid: '123',
      sourceUrl:
        'https://www.imovirtual.com/en/anuncio/apartamento-t2-para-venda-ID17QbP.html#8a21b263c5',
      country: 'Portugal',
      district: 'Lisboa',
      municipality: 'Lisboa',
      parish: 'Arroios',
    },
    criteria: {
      analysisType: 'BUY_AND_SELL',
      bidAskRate: 0.05,
      financingRate: 0.8,
      housePriceIndexRate: 0.01,
      acquisitionType: 'INVESTMENT',
      entryBrokerRate: 0,
      stampDutyRate: 0.008,
      landRegistryInscriptionWithoutMortgage: 700,
      landRegistryInscriptionWithMortgage: 350,
      bankCommission: 1000,
      stampDutyInterestRate: 0.004,
      stampDutyMortgageRate: 0.006,
      capexFinancingRate: 0.8,
      interestRate: 0.01,
      amortization: 30,
      condominiumCosts: 30,
      propertyTaxRate: 0.003,
      capex: 5000,
      multiRiskInsurance: 15,
      lifeInsurance: 15,
      exitBrokerRate: 0.05,
      capitalGainsTaxRate: 0.5,
      timeToSale: 6,
      earlyRepaymentRate: 0.005,
      taxResidentInPortugal: true,
      currentIrsRate: 0.3,
      grossAreaToUsefulAreaRate: 0.1,
      floorRate: 1,
      capRate: 1,
      ciPercentile: '95',
    },
    estimatedProfitTable: {
      columns: [
        {
          label: 'exitPrice',
        },
        {
          label: 270750.0,
        },
        {
          label: 256500.0,
        },
        {
          label: 285000.0,
        },
        {
          label: 299250.0,
        },
        {
          label: 313500.0,
        },
      ],
      rows: [
        {
          v0: 436429.91430125449934251946615404449403285980224609375,
          v1: -178163.284137736991780915531080609071068465709686279296875,
          v2: -150258.919382736991780915531080609071068465709686279296875,
          v3: -206067.648892736991780915531080609071068465709686279296875,
          v4: -233971.905391736991780915531080609071068465709686279296875,
          v5: -261876.141896736991780915531080609071068465709686279296875,
        },
        {
          v0: 413459.92430125449934251946615404449403285980224609375,
          v1: -196711.551062736991780915531080609071068465709686279296875,
          v2: -168807.186307736991780915531080609071068465709686279296875,
          v3: -224615.915817736991780915531080609071068465709686279296875,
          v4: -252520.172316736991780915531080609071068465709686279296875,
          v5: -280424.408821736991780915531080609071068465709686279296875,
        },
        {
          v0: 459399.91430125449934251946615404449403285980224609375,
          v1: -159615.009137736991780915531080609071068465709686279296875,
          v2: -131710.644382736991780915531080609071068465709686279296875,
          v3: -187519.373892736991780915531080609071068465709686279296875,
          v4: -215423.630391736991780915531080609071068465709686279296875,
          v5: -243327.866896736991780915531080609071068465709686279296875,
        },
        {
          v0: 482369.91430125449934251946615404449403285980224609375,
          v1: -141066.734137736991780915531080609071068465709686279296875,
          v2: -113162.369382736991780915531080609071068465709686279296875,
          v3: -168971.098892736991780915531080609071068465709686279296875,
          v4: -196875.355391736991780915531080609071068465709686279296875,
          v5: -224779.591896736991780915531080609071068465709686279296875,
        },
        {
          v0: 505339.90430125449934251946615404449403285980224609375,
          v1: -122518.467212736991780915531080609071068465709686279296875,
          v2: -94614.102457736991780915531080609071068465709686279296875,
          v3: -150422.831967736991780915531080609071068465709686279296875,
          v4: -178327.088466736991780915531080609071068465709686279296875,
          v5: -206231.324971736991780915531080609071068465709686279296875,
        },
      ],
    },
    breakdownTable: {
      columns: [
        {
          label: '',
        },
        {
          label: 1,
        },
        {
          label: 2,
        },
        {
          label: 3,
        },
        {
          label: 4,
        },
        {
          label: 5,
        },
        {
          label: 6,
        },
      ],
      rows: [
        {
          v0: 'acquisition',
        },
        {
          v0: 'asking',
          v1: 300000,
        },
        {
          v0: 'acquisitionPrice',
          v1: 285000.0,
        },
        {
          v0: 'entryBrokerRate',
          v1: 0,
        },
        {
          v0: 'rett',
          v1: 11786.91,
        },
        {
          v0: 'acquisitionStampDutyFee',
          v1: 285000.008,
        },
        {
          v0: 'notary',
          v1: 350,
        },
        {
          v0: 'mortgageStampDutyFee',
          v1: 1368.0,
        },
        {
          v0: 'bankCommission',
          v1: 1000,
        },
        {
          v0: 'totalAcquisition',
          v1: 584504.918,
        },
        {
          v0: 'debt',
        },
        {
          v0: 'bopDebt',
          v1: 289000.8,
          v2: 288356.3556,
          v3: 288356.3556,
          v4: 287711.9112,
          v5: 287711.9112,
          v6: 287067.4668,
        },
        {
          v0: 'acquisitionDebt',
          v1: 285000.8,
        },
        {
          v0: 'capexDebt',
          v1: 4000.0,
        },
        {
          v0: 'amortization',
          v1: 644.4444,
          v2: 644.4444,
          v3: 644.4444,
          v4: 644.4444,
          v5: 644.4444,
          v6: 287067.4668,
        },
        {
          v0: 'interests',
          v1: 241.797336,
          v2: 241.258188,
          v3: 241.258188,
          v4: 240.7189396,
          v5: 240.7189396,
          v6: 240.1797916,
        },
        {
          v0: 'eopDebt',
          v1: 288356.3556,
          v2: 288356.3556,
          v3: 287711.9112,
          v4: 287711.9112,
          v5: 287067.4668,
          v6: 287067.4668,
        },
        {
          v0: 'operating',
        },
        {
          v0: 'capexEquityRow',
          v1: 0.2,
        },
        {
          v0: 'propertyTax',
        },
        {
          v0: 'condominiumCosts',
          v1: 30,
          v2: 30,
          v3: 30,
          v4: 30,
          v5: 30,
          v6: 30,
        },
        {
          v0: 'multiRiskInsurance',
          v1: 15,
          v2: 15,
          v3: 15,
          v4: 15,
          v5: 15,
          v6: 15,
        },
        {
          v0: 'lifeInsurance',
          v1: 15,
          v2: 15,
          v3: 15,
          v4: 15,
          v5: 15,
          v6: 15,
        },
        {
          v0: 'marketValue',
          v1: 457120,
          v2: 457120,
          v3: 457120,
          v4: 457120,
          v5: 457120,
          v6: 457120,
        },
        {
          v0: 'exitPrice',
          v6: 459399.91430125449934251946615404449403285980224609375,
        },
        {
          v0: 'loanEarlyRepaymentFee',
          v6: 1143.88889,
        },
        {
          v0: 'exitBrokerRate',
          v6: 22969.9957150627249671259733077022247016429901123046875,
        },
        {
          v0: 'profitBeforeTax',
          v1: 870512.159736,
          v2: 1005.702588,
          v3: 1005.702588,
          v4: 1005.1633396,
          v5: 1005.1633396,
          v6: 770941.4454979172243096454394617467187345027923583984375,
        },
        {
          v0: 'capitalGainsTax',
          v6: 64236.781368928766156309023926951340399682521820068359375,
        },
        {
          v0: 'profitAfterTax',
          v1: 870512.159736,
          v2: 1005.702588,
          v3: 1005.702588,
          v4: 1005.1633396,
          v5: 1005.1633396,
          v6: 706704.664128988458153336415534795378334820270538330078125,
        },
      ],
    },
  },
};

/* eslint-disable default-case, no-param-reassign */
const analysisReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ANALYSIS_DATA_BY_ID:
        draft.isGettingAnalysisById = true;
        break;
      case GET_ANALYSIS_DATA_SUCCESS_BY_ID:
        draft.analysis = action.payload;
        draft.isGettingAnalysisById = false;
        break;
      case SET_PROPERTY_LOCATION:
        draft.inputs.location = action.payload;
        break;
      case GET_PROPERTY_LOCATIONS:
        draft.isGettingLocations = true;
        break;
      case GET_PROPERTY_LOCATIONS_SUCCESS:
        draft.locations = action.payload;
        draft.isGettingLocations = false;
        break;
      case GET_PROPERTY_CONDITIONS:
        draft.isGettingPropertyConditions = true;
        break;
      case GET_PROPERTY_CONDITIONS_SUCCESS:
        draft.propertyConditions = action.payload;
        draft.isGettingPropertyConditions = false;
        break;
      case GET_PROPERTY_TYPES:
        draft.isGettingPropertyTypes = true;
        break;
      case GET_PROPERTY_TYPES_SUCCESS:
        draft.propertyTypes = action.payload;
        draft.isGettingPropertyTypes = false;
        break;
      case GET_PROPERTY_TYPOLOGIES:
        draft.isGettingPropertyTypologies = true;
        break;
      case GET_PROPERTY_TYPOLOGIES_SUCCESS:
        draft.propertyPropertyTypologies = action.payload;
        draft.isGettingPropertyTypologies = false;
        break;
      case GET_PROPERTY_STATUS:
        draft.isGettingStatus = true;
        break;
      case GET_PROPERTY_STATUS_SUCCESS:
        draft.status = action.payload;
        draft.isGettingStatus = false;
        break;
      case GET_ACQUISITION_TYPES:
        draft.isGettingAcquisitionTypes = true;
        break;
      case GET_ACQUISITION_TYPES_SUCCESS:
        draft.acquisitionTypes = action.payload;
        draft.isGettingAcquisitionTypes = false;
        break;
      case GET_CI_PERCENTILES:
        draft.isGettingCiPercentiles = true;
        break;
      case GET_CI_PERCENTILES_SUCCESS:
        draft.ciPercentiles = action.payload;
        draft.isGettingCiPercentiles = false;
        break;
    }
  });

export default analysisReducer;
