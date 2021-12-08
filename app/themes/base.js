import { lightTheme } from 'themes/light';
import { darkTheme } from 'themes/dark';

export function themeCreator(theme) {
  return themeMap[theme];
}

const themeMap = {
  lightTheme,
  darkTheme,
};
