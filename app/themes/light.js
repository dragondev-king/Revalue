import { createTheme } from '@material-ui/core/styles';

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#234363',
      light: '#63ace5',
      dark: '#2a4d69',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  typography: {
    h2: {
      fontSize: '1.2rem',
    },
    h5: {
      fontSize: '1rem',
    },
    h4: {
      fontSize: '1rem',
    },
  },
  overrides: {
    MuiSvgIcon: {
      fontSizeSmall: {
        fontSize: '0.9rem',
      },
    },
    MuiIconButton: {
      root: { color: 'black' },
    },
  },
});
