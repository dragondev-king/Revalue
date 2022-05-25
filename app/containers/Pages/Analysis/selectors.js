import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAnalysisDomain = state => state.analysis || initialState;

const makeSelectAnalysis = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.analysis,
  );

const makeSelectIsGettingAnalysisById = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.isGettingAnalysisById,
  );

export { makeSelectAnalysis, makeSelectIsGettingAnalysisById };
