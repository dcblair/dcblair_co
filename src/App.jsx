import {
  CssBaseline,
  Grid,
  makeStyles,
  ThemeProvider,
  Toolbar
} from '@material-ui/core';
import * as React from 'react';
// import Player from './components/Player';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import Routes from './config/Routes';
import theme from './theme';
import './App.scss';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  navigate: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  navigateIcons: {
    height: 50,
    width: 50
  },
  // player: {
  //   position: 'fixed',
  //   bottom: '2rem',
  // },
  footer: {
    bottom: 0,
    position: 'fixed'
  }
});

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
