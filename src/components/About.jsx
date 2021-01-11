import React from 'react';
import {
  Avatar,
  Card,
  makeStyles,
  Typography,
} from '@material-ui/core';

import Profile from '../assets/profile_2.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
  },
  profile: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(13),
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(5),
      marginTop: theme.spacing(6),
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(6),
      marginTop: theme.spacing(6),
    },

    border: '1px solid #dffeff',
    width: 200,
    height: 200,
  },
  card: {
    maxWidth: 700,
    padding: theme.spacing(8),
    marginBottom: theme.spacing(3),
  },
  media: {
    height: 70,
    width: 70,
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.profile} src={Profile} />
      <Card className={classes.card}>
        <Typography variant="body1" component="p">
          I believe in writing clean, ethical code that provides users of all
          backgrounds an aesthetically pleasing, accessible experience.
          Serving the needs of others, as best as I can, is what drives me to code. I
          also greatly enjoy picking up new technologies to improve my workflow and
          unlock new skills. My experience teaching music production and English have
          helped me develop an eye for debugging— from grading papers, based on syntax
          and formatting, to teaching music students multiple ways to solve the same issue
          in their music production software.
        </Typography>
      </Card>
    </div>
  );
};

export default About;
