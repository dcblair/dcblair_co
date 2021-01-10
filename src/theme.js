import { createMuiTheme } from '@material-ui/core';

// eslint-disable-next-line quotes
const noto = "'Noto Sans JP', sans-serif";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#F0EBD8',
      mainGradient: 'linear-gradient(to left, #A9C8DA, #7EADC8)',
    },
  },
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    textAlign: 'center',
  },
  typography: {
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
  },
  overrides: {
    MuiButton: {
      root: {
        color: '#000',
        textTransform: 'none',
        underline: 'none',
        borderRadius: 10,
        fontFamily: noto,
        fontSize: 16,
        fontWeight: 600,
      },
    },
    MuiCard: {
      root: {
        elevation: 3,
        margin: 'auto',
        background: 'linear-gradient(to left, #A9C8DA, #7EADC8)',
        borderRadius: 19,
      },
    },
    MuiLink: {
      root: {
        textDecoration: 'none',
        color: '#fff',
      },
    },
  },
});

export default theme;
