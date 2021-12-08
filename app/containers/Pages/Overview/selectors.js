import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectOverviewDomain = state => state.overview || initialState;

const makeSelectCharts = () =>
  createSelector(
    selectOverviewDomain,
    substate => substate.charts,
  );

const makeSelectCustomCharts = () =>
  createSelector(
    selectOverviewDomain,
    substate => substate.customCharts,
  );

const makeSelectIsGettingCharts = () =>
  createSelector(
    selectOverviewDomain,
    substate => substate.isGettingCharts,
  );

const makeSelectErrorGettingCharts = () =>
  createSelector(
    selectOverviewDomain,
    substate => substate.errorGettingCharts,
  );

export {
  selectOverviewDomain,
  makeSelectCharts,
  makeSelectCustomCharts,
  makeSelectIsGettingCharts,
  makeSelectErrorGettingCharts,
};
