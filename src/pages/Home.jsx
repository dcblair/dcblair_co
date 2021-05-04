import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    positon: 'relative',
    alignItems: 'center',
    height: '100%'
  },
  text: {
    position: 'absolute',
    top: '50%'
  },
  name: {
    marginTop: theme.spacing(-20),
    [theme.breakpoints.down('xs')]: {
      letterSpacing: '.5rem',
      mixBlendMode: 'exclusion',
      fontSize: 60
    },
    [theme.breakpoints.up('sm')]: {
      letterSpacing: '.5rem',
      mixBlendMode: 'exclusion',
      fontSize: 65
    },
    [theme.breakpoints.up('md')]: {
      letterSpacing: '1rem',
      mixBlendMode: 'exclusion',
      fontSize: 72
    },
    [theme.breakpoints.up('lg')]: {
      letterSpacing: '2rem',
      mixBlendMode: 'exclusion',
      fontSize: 80
    }
  },
  title: {
    textShadow: '-2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000',
    color: 'rgba(210, 231, 253, 1.2)',
    [theme.breakpoints.up('xs')]: {
      letterSpacing: '.2rem',
      mixBlendMode: 'exclusion',
      fontSize: 26
    },
    [theme.breakpoints.up('md')]: {
      mixBlendMode: 'exclusion',
      fontSize: 37
    },
    [theme.breakpoints.up('lg')]: {
      color: 'rgba(220, 252, 255)',
      fontSize: 40
    }
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Typography
        className={[classes.name, classes.text]}
        variant="h1"
        component="h1"
      >
        Devin Blair
      </Typography>
      <Typography
        className={[classes.title, classes.text]}
        variant="h4"
        component="h2"
      >
        Software Engineer
      </Typography>
    </Grid>
  );
};

export default Home;
