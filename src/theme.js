import { createMuiTheme } from '@material-ui/core';

// eslint-disable-next-line quotes
const noto = "'Noto Sans JP', sans-serif";

const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: '#F0EBD8',
      mainGradient: 'linear-gradient(to left, #A9C8DA, #7EADC8)',
      contrastText: '#000',
    },
  },
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    textAlign: 'center',
  },
  typography: {
    h1: {
      weight: 800,
      textShadow: '-2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000',
      color: 'rgba(210, 231, 253, .3)',
    },
    h4: {
      fontFamily: noto,
    },
    h5: {
      fontFamily: noto,
      fontWeight: 600,
      color: '#000',
    },
    h6: {

    },
    body1: {
      color: '#000',
      fontFamily: noto,
      fontSize: 16,
    },
    body2: {
      fontSize: 15,
    },
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
        fontWeight: 600,
      },
    },
    MuiCard: {
      root: {
        elevation: 3,
        margin: 'auto',
        background: 'rgba(210, 231, 253, .3)',
        borderRadius: 12,
      },
    },
  },
});

export default theme;
