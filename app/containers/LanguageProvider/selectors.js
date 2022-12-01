import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the languageToggle state domain
 */
const selectLanguage = state => {
  if (state.language) {
    localStorage.setItem('language', state.language.locale);
    return state.language;
  }
  localStorage.setItem('language', initialState.locale);
  return initialState;
};

/**
 * Select the language locale
 */

const makeSelectLocale = () =>
  createSelector(
    selectLanguage,
    languageState => languageState.locale,
  );

export { selectLanguage, makeSelectLocale };
