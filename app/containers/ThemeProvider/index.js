import React, { useState } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { themeCreator } from 'themes/base';

export const ThemeContext = React.createContext('lightTheme');

function ThemeProvider(props) {
  const currentThemeName = localStorage.getItem('theme') || 'lightTheme';

  const [themeName, _setThemeName] = useState(currentThemeName);

  const theme = themeCreator(themeName);

  const setThemeName = name => {
    localStorage.setItem('theme', name);
    _setThemeName(name);
  };

  const themeShadows = theme.shadows
    .map((shadow, i) => `--elevation-z${i}: ${shadow};`)
    .join(' ');

  return (
    <ThemeContext.Provider value={setThemeName}>
      <MuiThemeProvider theme={theme}>
        <style>
          {`
              :root {
                --primary: ${theme.palette.primary.main};
                --secondary: ${theme.palette.secondary.main};
                --error: ${theme.palette.error.main};
                --bg-default: ${theme.palette.background.default};
                --bg-paper: ${theme.palette.background.paper};
                --text-body: ${theme.palette.text.primary};
                --text-muted: ${theme.palette.text.secondary};
                --text-hint: ${theme.palette.text.hint};
                --font: Roboto,sans-serif;
                --font-caption: 400 12px/20px var(--font);
                --font-body-1: 400 14px/20px var(--font);
                --font-body-2: 500 14px/24px var(--font);
                --font-subheading-1: 400 15px/24px var(--font);
                --font-subheading-2: 400 16px/28px var(--font);
                --font-headline: 400 24px/32px var(--font);
                --font-title: 500 18px/26px var(--font);
                --font-display-1: 400 34px/40px var(--font);
                --font-display-2: 400 45px/48px var(--font);
                --font-display-3: 400 56px/56px var(--font);
                --font-display-4: 300 112px/112px var(--font);
                ${themeShadows}
              }
            `}
        </style>
        {props.children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
