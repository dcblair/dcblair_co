import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { noto } from '../theme';
import ScrollHandler from './ScrollHandler';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    marginBottom: theme.spacing(3)
  },
  appBar: {
    minWidth: '100vw',
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(226, 254, 254, .3)'
  },
  link: {
    fontFamily: noto,
    color: 'rgba(0, 0, 0)',
    fontWeight: 600,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.1rem'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.2rem'
    },
    textDecoration: 'none',
    letterSpacing: 1.8
  },
  home: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'auto'
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: 'auto',
      marginRight: '3rem'
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: 'auto',
      marginRight: '6rem'
    }
  },
  about: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: 'auto',
      marginRight: '1.5rem'
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: 'auto',
      marginRight: '3rem'
    }
  },
  projects: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: '1.5rem',
      marginRight: 'auto'
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: '3rem',
      marginRight: 'auto'
    }
  },
  contact: {
    [theme.breakpoints.down('xs')]: {
      marginRight: 'auto'
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: '3rem',
      marginRight: 'auto'
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: '6rem',
      marginRight: 'auto'
    }
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ScrollHandler>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Link to="/" className={`${classes.link} ${classes.home}`}>
              Home
            </Link>
            <Link to="/about" className={`${classes.link} ${classes.about}`}>
              About
            </Link>
            <Link
              to="/projects"
              className={`${classes.link} ${classes.projects}`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`${classes.link} ${classes.contact}`}
            >
              Contact
            </Link>
          </Toolbar>
        </AppBar>
      </ScrollHandler>
    </div>
  );
};

export default Navbar;
