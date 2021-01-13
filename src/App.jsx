import React from 'react';

import {
  CssBaseline,
  Grid,
  makeStyles,
  ThemeProvider,
  Toolbar,
} from '@material-ui/core';

import Navbar from './components/NavBar';
// import Player from './components/Player';
import BackToTop from './components/BackToTop';
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
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Toolbar id="back-to-top-anchor" />
          <Grid container>
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
            <BackToTop />
          </Grid>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
