import { createTheme } from '@material-ui/core/styles';

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0085FF',
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
    MuiAccordion: {
      root: {
        boxShadow: 'none',
        position: 'initial',
        width: '100%',
        margin: '0 !important',
      },
    },
    MuiAccordionSummary: {
      root: {
        display: 'inline-flex',
        width: '250px',
        padding: '0',
        position: 'relative',
        minHeight: '64px',
      },
      content: {
        margin: '20px 0',
        display: 'flex',
        flexGrow: '1',
      },
    },
    MuiAccordionDetails: {
      root: {
        padding: '0',
      },
    },
    MuiStepLabel: {
      labelContainer: {
        height: '56px',
        marginLeft: '10px',
      },
    },
    MuiPaper: {
      outlined: {
        borderRadius: '8px',
      },
    },
  },
});
