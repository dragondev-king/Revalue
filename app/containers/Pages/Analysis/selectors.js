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

const makeSelectType = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.type,
  );

const makeSelectTypologies = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.typologies,
  );

const makeSelectTypology = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.typology,
  );

const makeSelectConditions = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.conditions,
  );

const makeSelectCondition = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.condition,
  );

const makeSelectAcquisitionTypes = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.acquisitiontypes,
  );

const makeSelectAcquisitionType = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.acquisitiontype,
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

export {
  makeSelectAnalysis,
  makeSelectLocations,
  makeSelectLocation,
  makeSelectTypes,
  makeSelectType,
  makeSelectTypologies,
  makeSelectTypology,
  makeSelectConditions,
  makeSelectCondition,
  makeSelectAcquisitionTypes,
  makeSelectAcquisitionType,
  makeSelectInputs,
  makeSelectAnalysisData,
  makeSelectCIPs,
  makeSelectCIP,
  makeSelectIsGettingAnalysisData,
};
