import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAnalysisReducerDomain = state => state.analysis || initialState;

const makeSelectAnalysisReducer = () =>
  createSelector(
    selectAnalysisReducerDomain,
    substate => substate.analysis,
  );

const makeSelectPropertyTypes = () =>
  createSelector(
    selectAnalysisReducerDomain,
    substate => substate.propertyTypes,
  );

const makeSelectPropertyTypologies = () =>
  createSelector(
    selectAnalysisReducerDomain,
    substate => substate.propertyTypologies,
  );

const makeSelectPropertyConditions = () =>
  createSelector(
    selectAnalysisReducerDomain,
    substate => substate.propertyConditions,
  );

const makeSelectAcquisitionTypes = () =>
  createSelector(
    selectAnalysisReducerDomain,
    substate => substate.acquisitionTypes,
  );

const makeSelectIrsCategories = () =>
  createSelector(
    selectAnalysisReducerDomain,
    substate => substate.irsCategories,
  );

const makeSelectIrsCategoryRegions = () =>
  createSelector(
    selectAnalysisReducerDomain,
    substate => substate.irsCategoryRegions,
  );

const makeSelectIrsDependentsList = () =>
  createSelector(
    selectAnalysisReducerDomain,
    substate => substate.irsDependentsList,
  );

const makeSelectCIPs = () =>
  createSelector(
    selectAnalysisReducerDomain,
    substate => substate.percentiles,
  );

const makeSelectInputs = () =>
  createSelector(
    selectAnalysisReducerDomain,
    substate => substate.inputs,
  );

const makeSelectErrors = () =>
  createSelector(
    selectAnalysisReducerDomain,
    substate => substate.errors,
  );

const makeSelectAnalysisData = () =>
  createSelector(
    selectAnalysisReducerDomain,
    substate => substate.data,
  );

const makeSelectIsGettingAnalysisById = () =>
  createSelector(
    selectAnalysisReducerDomain,
    substate => substate.isGettingAnalysisById,
  );

const makeSelectIsGettingPropertyAnalysisById = () =>
  createSelector(
    selectAnalysisReducerDomain,
    substate => substate.isGettingPropertyAnalysisById,
  );

const makeSelectAnalyzeButtonDisabled = () =>
  createSelector(
    selectAnalysisReducerDomain,
    substate => substate.analyzeButtonDisabled,
  );

const makeSelectNewPropertyAnalysisPageReady = () =>
  createSelector(
    selectAnalysisReducerDomain,
    substate => substate.newPropertyAnalysisPageReady,
  );

export {
  makeSelectAnalysisReducer,
  makeSelectAnalysisData,
  makeSelectPropertyTypes,
  makeSelectPropertyTypologies,
  makeSelectPropertyConditions,
  makeSelectAcquisitionTypes,
  makeSelectIrsCategories,
  makeSelectIrsCategoryRegions,
  makeSelectIrsDependentsList,
  makeSelectInputs,
  makeSelectErrors,
  makeSelectCIPs,
  makeSelectIsGettingPropertyAnalysisById,
  makeSelectIsGettingAnalysisById,
  makeSelectAnalyzeButtonDisabled,
  makeSelectNewPropertyAnalysisPageReady,
};
