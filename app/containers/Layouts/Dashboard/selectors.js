import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDashboard = state => state.dashboard || initialState;

const makeSelectIsVendorScriptsLoaded = () =>
  createSelector(
    selectDashboard,
    substate => substate.isVendorScriptsLoaded,
  );

const makeSelectIsAppLoaded = () =>
  createSelector(
    selectDashboard,
    substate => substate.isLoaded,
  );

export {
  selectDashboard,
  makeSelectIsVendorScriptsLoaded,
  makeSelectIsAppLoaded,
};
