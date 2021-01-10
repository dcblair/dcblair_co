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
    height: 45,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #7EADC8, #A1B9CE, #7EADC8)',
  },
  link: {
    textDecoration: 'none',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [beans, setBeans] = useState();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Link to="/" className={classes.link} style={{ marginRight: 40 }}>
            <Button>
              Home
            </Button>
          </Link>
          <Link to="/About" className={classes.link} style={{ marginRight: 40 }}>
            <Button>
              About
            </Button>
          </Link>
          <Link to="/Projects" className={classes.link} style={{ marginRight: 40 }}>
            <Button>
              Projects
            </Button>
          </Link>
          <Link to="/Contact" className={classes.link}>
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
