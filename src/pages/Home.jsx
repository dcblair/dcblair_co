import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    height: '100%'
    // marginTop: theme.spacing(-15)
  },
  name: {
    [theme.breakpoints.down('sm')]: {
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
    marginTop: theme.spacing(6),
    textShadow: '-2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000',
    color: 'rgba(210, 231, 253, 1.2)',
    [theme.breakpoints.down('sm')]: {
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
    <div className={classes.root}>
      <Grid>
        <Typography className={classes.name} variant="h1" component="h1">
          Devin Blair
        </Typography>
        <Typography className={classes.title} variant="h4" component="h2">
          Software Engineer
        </Typography>
      </Grid>
    </div>
  );
};

export default Home;
