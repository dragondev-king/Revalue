import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAnalysisDomain = state => state.analysis || initialState;

const makeSelectAnalysis = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.analysis,
  );

const makeSelectLocations = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.locations,
  );

const makeSelectLocation = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.location,
  );

const makeSelectTypes = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.types,
  );

const makeSelectTypologies = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.typologies,
  );

const makeSelectConditions = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.conditions,
  );

const makeSelectStatus = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.status,
  );

const makeSelectAcquisitionTypes = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.acquisitionTypes,
  );

const makeSelectCIPs = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.cips,
  );

const makeSelectCIP = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.cip,
  );

const makeSelectInputs = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.inputs,
  );

const makeSelectAnalysisData = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.analysisData,
  );

const makeSelectIsGettingAnalysisData = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.isGettingAnalysisData,
  );

const makeSelectAnalyzeButtonState = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.analyzeButtonState,
  );

export {
  makeSelectAnalysis,
  makeSelectLocations,
  makeSelectLocation,
  makeSelectTypes,
  makeSelectStatus,
  makeSelectTypologies,
  makeSelectConditions,
  makeSelectAcquisitionTypes,
  makeSelectInputs,
  makeSelectAnalysisData,
  makeSelectCIPs,
  makeSelectCIP,
  makeSelectIsGettingAnalysisData,
  makeSelectAnalyzeButtonState,
};
