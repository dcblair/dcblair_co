import React from 'react';

import { CssBaseline, ThemeProvider } from '@material-ui/core';

import Navbar from './components/NavBar';
import Player from './components/Player';
import Routes from './config/Routes';
import theme from './theme';

import './App.css';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Navbar />
          <Routes />
          <Player />
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
