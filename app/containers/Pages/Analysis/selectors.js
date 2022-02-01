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
const makeSelectColumns = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.columns,
  );
const makeSelectRows = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.rows,
  );
const makeSelectCriteria = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.criteria,
  );
  const makeSelectInputs = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.inputs,
  );

export {
  makeSelectAnalysis,
  makeSelectSkelton,
  makeSelectColumns,
  makeSelectRows,
  makeSelectCriteria,
  makeSelectInputs
};
