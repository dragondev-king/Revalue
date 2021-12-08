import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAuthenticationDomain = state =>
  state.authentication || initialState;

const makeSelectAuthentication = () =>
  createSelector(
    selectAuthenticationDomain,
    substate => substate,
  );

const makeSelectAuthenticated = () =>
  createSelector(
    selectAuthenticationDomain,
    substate => substate.authenticated,
  );

const makeSelectIsGettingAuthentication = () =>
  createSelector(
    selectAuthenticationDomain,
    substate => substate.isGettingAuthentication,
  );

const makeSelectToken = () =>
  createSelector(
    selectAuthenticationDomain,
    substate => substate.token,
  );

const makeSelectUser = () =>
  createSelector(
    selectAuthenticationDomain,
    substate => substate.user,
  );

export {
  selectAuthenticationDomain,
  makeSelectUser,
  makeSelectToken,
  makeSelectIsGettingAuthentication,
  makeSelectAuthentication,
  makeSelectAuthenticated,
};
