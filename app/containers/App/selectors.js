import { createSelector } from 'reselect';

const selectRouter = state => state.router;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectPathname = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location.pathname,
  );

export { makeSelectLocation, makeSelectPathname };
