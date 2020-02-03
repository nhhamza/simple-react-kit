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
      root: {
        fontFamily: 'Neo Sans Pro',
        fontWeight: 500,
        fontSize: 18,
        height: 48,
        color: '#4E5360',
        borderRadius: '10px',
        '&:hover': {
          backgroundColor: 'rgb(178, 178, 178)',
          borderColor: 'rgb(178, 178, 178)',
          color: '#F5F6FA',
        },
      },
      outlinedPrimary: {
        color: '#C82832',
        borderColor: '#C82832',
        borderStyle: 'solid',
        borderWidth: 'thin',
        '&:hover': {
          backgroundColor: 'rgb(178, 178, 178)',
          borderColor: 'rgb(178, 178, 178)',
          color: '#F5F6FA',
        },
      },
      containedPrimary: {
        backgroundColor: '#C82832',
        color: '#F5F6FA',
        '&:hover': {
          backgroundColor: 'rgb(178, 178, 178)',
          borderColor: 'rgb(178, 178, 178)',
          color: '#F5F6FA',
        },
      },
      containedSecondary: {
        color: '#F5F6FA',
        backgroundColor: '#4E5360',
        '&:hover': {
          backgroundColor: 'rgb(178, 178, 178)',
          borderColor: 'rgb(178, 178, 178)',
          color: '#F5F6FA',
        },
      },
    },
  },
  palette: {
    type: 'light',
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
