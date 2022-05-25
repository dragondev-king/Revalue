import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectInvestmentDomain = state => state.investment || initialState;
const makeSelectInvestment = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.investment,
  );

const makeSelectPropertyLocations = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.propertyLocations,
  );

const makeSelectPropertyLocation = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.propertyLocation,
  );

const makeSelectPropertyTypes = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.propertyTypes,
  );

const makeSelectPropertyTypologies = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.propertyTypologies,
  );

const makeSelectPropertyConditions = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.propertyConditions,
  );

const makeSelectStatus = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.status,
  );

const makeSelectAcquisitionTypes = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.acquisitionTypes,
  );

const makeSelectCIPs = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.ciPercentiles,
  );

const makeSelectCIP = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.ciPercentile,
  );

const makeSelectInputs = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.inputs,
  );

const makeSelectErrors = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.errors,
  );

const makeSelectAnalysisData = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.analysisData,
  );

const makeSelectIsGettingAnalysisData = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.isGettingAnalysisData,
  );

const makeSelectAnalyzeButtonDisabled = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.analyzeButtonDisabled,
  );

export {
  makeSelectInvestment,
  makeSelectPropertyLocations,
  makeSelectPropertyLocation,
  makeSelectPropertyTypes,
  makeSelectStatus,
  makeSelectPropertyTypologies,
  makeSelectPropertyConditions,
  makeSelectAcquisitionTypes,
  makeSelectInputs,
  makeSelectErrors,
  makeSelectAnalysisData,
  makeSelectCIPs,
  makeSelectCIP,
  makeSelectIsGettingAnalysisData,
  makeSelectAnalyzeButtonDisabled,
};
