import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
  },
  appBar: {
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #3E5C76, #A1B9CE, #3E5C76)',
    // backgroundColor: '#78A1BB',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [beans, setBeans] = useState();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Link to="/" style={{ marginRight: 40 }}>
            <Button>
              Home
            </Button>
          </Link>
          <Link to="/About" style={{ marginRight: 40 }}>
            <Button>
              About
            </Button>
          </Link>
          <Link to="/Projects" style={{ marginRight: 40 }}>
            <Button>
              Projects
            </Button>
          </Link>
          <Link to="/Contact">
            <Button>
              Contact
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
