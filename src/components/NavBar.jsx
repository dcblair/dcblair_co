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
    marginBottom: theme.spacing(3),
  },
  appBar: {
    minWidth: '100vw',
    marginTop: theme.spacing(2),
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(226, 254, 254, .2)',
  },
  link: {
    textDecoration: 'none',
  },
  home: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'auto',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
      marginRight: '3rem',
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: 'auto',
      marginRight: '6rem',
    },
  },
  about: {
    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
      marginRight: '1.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: 'auto',
      marginRight: '3rem',
    },
  },
  projects: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '1.5rem',
      marginRight: 'auto',
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: '3rem',
      marginRight: 'auto',
    },
  },
  contact: {
    [theme.breakpoints.down('sm')]: {
      marginRight: 'auto',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: '3rem',
      marginRight: 'auto',
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: '6rem',
      marginRight: 'auto',
    },
  },

}));

const Navbar = () => {
  const classes = useStyles();

  const [beans, setBeans] = useState();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Link to="/" className={`${classes.link} ${classes.home}`}>
            <Button>
              Home
            </Button>
          </Link>
          <Link to="/About" className={`${classes.link} ${classes.about}`}>
            <Button>
              About
            </Button>
          </Link>
          <Link to="/Projects" className={`${classes.link} ${classes.projects}`}>
            <Button className={classes.projecct}>
              Projects
            </Button>
          </Link>
          <Link to="/Contact" className={`${classes.link} ${classes.contact}`}>
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
