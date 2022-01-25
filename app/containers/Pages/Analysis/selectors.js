import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAnalysisDomain = state => state.analysis || initialState;

const makeSelectAnalysis = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate,
  );

const makeSelectInputs = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.inputs,
  );
export default makeSelectAnalysis;
export { selectAnalysisDomain, makeSelectInputs };
