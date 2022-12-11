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

const makeSelectAcquisitionTypes = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.acquisitionTypes,
  );

const makeSelectIrsCategories = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.irsCategories,
  );

const makeSelectIrsCategoryRegions = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.irsCategoryRegions,
  );

const makeSelectIrsDependentsList = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.irsDependentsList,
  );

const makeSelectCIPs = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.percentiles,
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

const makeSelectAnalysis = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.analysis,
  );

const makeSelectIsGettingAnalysis = () =>
  createSelector(
    selectInvestmentDomain,
    substate => substate.isGettingAnalysis,
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
  makeSelectPropertyTypologies,
  makeSelectPropertyConditions,
  makeSelectAcquisitionTypes,
  makeSelectIrsCategories,
  makeSelectIrsCategoryRegions,
  makeSelectIrsDependentsList,
  makeSelectInputs,
  makeSelectErrors,
  makeSelectCIPs,
  makeSelectAnalysis,
  makeSelectIsGettingAnalysis,
  makeSelectAnalyzeButtonDisabled,
};
