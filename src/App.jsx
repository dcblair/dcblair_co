import React from 'react';

import {
  CssBaseline,
  Grid,
  IconButton,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core';

import Navbar from './components/NavBar';
// import Player from './components/Player';
import Footer from './components/Footer';
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
  // player: {
  //   position: 'fixed',
  //   bottom: '2rem',
  // },
  footer: {
    bottom: 0,
    position: 'fixed',
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
            {/* <Grid item className={classes.player}>
              <Player />
            </Grid> */}
            <Grid item xs={12} className={classes.footer}>
              <Footer />
            </Grid>
          </Grid>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
