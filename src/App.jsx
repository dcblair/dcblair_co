import React from 'react';

import {
  CssBaseline,
  Grid,
  IconButton,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core';
// import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import Navbar from './components/NavBar';
import Player from './components/Player';
import Routes from './config/Routes';
import theme from './theme';

import Background from './assets/portfoliobg.png';

import './App.css';

const useStyles = makeStyles(({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${Background})`,
    minHeight: '100vh',
  },
  navigate: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigateIcons: {
    height: 50,
    width: 50,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Grid container className={classes.root}>
            <Grid item xs={12}>
              <Navbar className={classes.nav} />
            </Grid>
            <Grid container className={classes.navigate}>
              <Grid item xs={12}>
                <Routes />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Player />
            </Grid>
          </Grid>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
