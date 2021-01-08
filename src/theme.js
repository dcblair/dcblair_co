import { createMuiTheme } from '@material-ui/core';

const noto = "'Noto Sans JP', sans-serif";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
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
    },
    h6: {

    },
  },
  overrides: {
    MuiButton: {
      root: {
        color: '#000',
        textTransform: 'none',
        fontFamily: 'Helvetica',
        fontWeight: 600,
      },
    },
    MuiCard: {
      root: {
        elevation: 1,
        margin: 'auto',
      },
    },
  },
});

export default theme;
