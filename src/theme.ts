/* eslint-disable quotes */
import { createMuiTheme, Theme } from '@material-ui/core';

export const noto = "'Noto Sans JP', sans-serif";
export const nunito = "'Nunito', sans-serif";

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
      // mainGradient: 'linear-gradient(to left, #A9C8DA, #7EADC8)',
      contrastText: '#000'
    }
  },
  // root: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   margin: 'auto',
  //   textAlign: 'center'
  // },
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
      color: '#000'
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
        backgroundColor: 'rgba(245, 253, 251, 0.34)',
        boxShadow: '6px 7px 8px 0px rgba(122, 89, 82, 0.2)',
        textTransform: 'none',
        underline: 'none',
        borderRadius: 13,
        fontFamily: noto,
        fontSize: 16,
        fontWeight: 600
      }
    }
  }
});

export default theme;
