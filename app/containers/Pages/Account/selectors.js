import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAccountDomain = state => state.account || initialState;

const makeSelectAccount = () =>
  createSelector(
    selectAccountDomain,
    substate => substate.account,
  );

const makeSelectErrorUpdatingAccount = () =>
  createSelector(
    selectAccountDomain,
    substate => substate.errorUpdatingAccount,
  );

const makeSelectIsUpdatingAccount = () =>
  createSelector(
    selectAccountDomain,
    substate => substate.isUpdatingAccount,
  );

const makeSelectIsGettingAccount = () =>
  createSelector(
    selectAccountDomain,
    substate => substate.isGettingAccount,
  );

const makeSelectErrorGettingAccount = () =>
  createSelector(
    selectAccountDomain,
    substate => substate.errorGettingAccount,
  );

export {
  makeSelectAccount,
  makeSelectErrorUpdatingAccount,
  makeSelectIsUpdatingAccount,
  makeSelectIsGettingAccount,
  makeSelectErrorGettingAccount,
};
