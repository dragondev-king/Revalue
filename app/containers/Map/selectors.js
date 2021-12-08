import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMapDomain = state => state.map || initialState;

const makeSelectBoundaries = () =>
  createSelector(
    selectMapDomain,
    substate => substate.boundaries,
  );

const makeSelectIsGettingBoundaries = () =>
  createSelector(
    selectMapDomain,
    substate => substate.isGettingBoundaries,
  );

const makeSelectCenter = () =>
  createSelector(
    selectMapDomain,
    substate => substate.center,
  );

const makeSelectErrorGettingBoundaries = () =>
  createSelector(
    selectMapDomain,
    substate => substate.errorGettingBoundaries,
  );

export {
  selectMapDomain,
  makeSelectBoundaries,
  makeSelectIsGettingBoundaries,
  makeSelectCenter,
  makeSelectErrorGettingBoundaries,
};
