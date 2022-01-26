import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAnalysisDomain = state => state.analysis || initialState;
const makeSelectAnalysis = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.analysis,
  );
const makeSelectSkelton = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.isGettingAnalysisById,
  );

export { makeSelectAnalysis, makeSelectSkelton };
