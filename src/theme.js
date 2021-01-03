import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  overrides: {
    MuiButton: {
      root: {
        color: '#000',
        textTransform: 'none',
        fontFamily: 'Helvetica',
        fontWeight: 600
      }
    },
  }
});

export default theme;