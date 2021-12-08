import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSettingsDomain = state => state.settings || initialState;

const makeSelectSettings = () =>
  createSelector(
    selectSettingsDomain,
    substate => substate,
  );

export default makeSelectSettings;
export { selectSettingsDomain };
