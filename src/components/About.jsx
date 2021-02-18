import React from 'react';
import {
  Avatar,
  Card,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';

import Profile from '../assets/profile_3.png';

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
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(5),
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(6),
      marginTop: theme.spacing(1),
    },
    border: '1px solid #dffeff',
    width: 200,
    height: 200,
  },
  card: {
    maxWidth: 700,
    whiteSpace: 'pre-line',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(0),
    },
  },
  media: {
    height: 70,
    width: 70,
  },
  lowerText: {
    marginTop: theme.spacing(1),
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.profile} src={Profile} />
      <Card className={classes.card}>
        <Typography variant="body1" component="p">
          Hello! My name is Devin. I am a software engineer from Los Angeles, California.
          I believe in writing clean, ethical code that provides users of all
          backgrounds an aesthetically pleasing, accessible experience.
          Serving the needs of others, as best as I can, is what drives me to code. I
          also greatly enjoy picking up new technologies to improve my workflow and
          unlock new skills. My experience teaching music production and English have
          helped me develop an eye for debugging— from grading papers, based on syntax
          and formatting, to teaching music production students multiple ways to troubleshoot,
          as it is always vital to have a backup solution.
        </Typography>
        <Typography className={classes.lowerText} variant="body1" component="p">
          Languages: JavaScript, HTML5, CSS3, Python
          {'\n'}
          Libraries and Frameworks: React.js, Node.js, Express.js, Material-UI, Bootstrap,
          Sequelize, Flask
          {'\n'}
          Other: RESTful Routing JSON, Git, PostgreSQL, AJAX, Axios
        </Typography>
      </Card>
    </div>
  );
};

export default About;
