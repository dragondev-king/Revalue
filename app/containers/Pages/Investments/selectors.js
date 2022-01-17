import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectInvestmentDomain = state => state.investment || initialState;

const makeSelectInvestment = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.investment,
  );

const makeSelectLocations = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.locations,
  );

const makeSelectLocation = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.location,
  );

const makeSelectTypes = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.types,
  );

const makeSelectTypologies = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.typologies,
  );

const makeSelectConditions = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.conditions,
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
    substate => substate.cips,
  );

const makeSelectCIP = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.cip,
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
  makeSelectLocations,
  makeSelectLocation,
  makeSelectTypes,
  makeSelectStatus,
  makeSelectTypologies,
  makeSelectConditions,
  makeSelectAcquisitionTypes,
  makeSelectInputs,
  makeSelectErrors,
  makeSelectAnalysisData,
  makeSelectCIPs,
  makeSelectCIP,
  makeSelectIsGettingAnalysisData,
  makeSelectAnalyzeButtonDisabled,
};
