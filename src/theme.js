/* eslint-disable quotes */
import { createMuiTheme } from '@material-ui/core';

const noto = "'Noto Sans JP', sans-serif";
const nunito = "'Nunito', sans-serif";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
      mainGradient: 'linear-gradient(to left, #A9C8DA, #7EADC8)',
      contrastText: '#000'
    }
  },
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    textAlign: 'center'
  },
  typography: {
    h1: {
      fontFamily: nunito,
      weight: 900,
      textShadow: '-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000',
      color: 'rgba(210, 231, 253, 1.1)'
    },
    h4: {
      fontFamily: noto
    },
    h5: {
      fontFamily: noto,
      fontWeight: 600,
      color: '#000',
      textDecoration: 'underline'
    },
    h6: {
      fontSize: '1.1rem'
    },
    body1: {
      color: '#000',
      fontFamily: noto,
      fontSize: '0.9rem'
    },
    body2: {
      fontSize: 15
    }
  },
  overrides: {
    MuiButton: {
      root: {
        color: '#001829',
        textTransform: 'none',
        opacity: '.8',
        underline: 'none',
        borderRadius: 11,
        fontFamily: noto,
        fontSize: 16,
        fontWeight: 600
      }
    }
  }
});

export default theme;
