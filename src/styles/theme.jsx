import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },

  typography: {
    fontFamily: 'NeoSans',
    fontSize: 12,
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontFamily: 'Neo Sans Pro',
        fontWeight: 500,
        fontSize: 18,
      },
    },
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'black',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
  },
  status: {
    danger: 'orange',
  },
});

export default theme;
