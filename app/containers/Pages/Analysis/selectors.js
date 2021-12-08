import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAnalysisDomain = state => state.analysis || initialState;

const makeSelectAnalysis = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.analysis,
  );

const makeSelectLocation = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.location,
  );

const makeSelectLocations = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.locations,
  );

const makeSelectTypology = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.typology,
  );

const makeSelectTypologies = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.typologies,
  );

export {
  makeSelectAnalysis,
  makeSelectLocation,
  makeSelectLocations,
  makeSelectTypology,
  makeSelectTypologies,
};
