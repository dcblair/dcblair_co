import { AppBar, Button, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
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
    textDecoration: 'none'
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

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className={classes.root}>
      <ScrollHandler>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Link to="/" className={`${classes.link} ${classes.home}`}>
              <Button onClick={scrollToTop}>Home</Button>
            </Link>
            <Link to="/about" className={`${classes.link} ${classes.about}`}>
              <Button onClick={scrollToTop}>About</Button>
            </Link>
            <Link
              to="/projects"
              className={`${classes.link} ${classes.projects}`}
            >
              <Button onClick={scrollToTop}>Projects</Button>
            </Link>
            <Link
              to="/contact"
              className={`${classes.link} ${classes.contact}`}
            >
              <Button onClick={scrollToTop}>Contact</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </ScrollHandler>
    </div>
  );
};

export default Navbar;
