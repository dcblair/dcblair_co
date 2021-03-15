import React from 'react';
import {
  Avatar,
  Card,
  makeStyles,
  Typography
} from '@material-ui/core';

import { a, useSpring } from 'react-spring';

import Profile from '../assets/profile_3.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profile: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2)
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(5),
      marginTop: theme.spacing(3)
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(6),
      marginTop: theme.spacing(1)
    },
    border: '2px solid #dffeff',
    width: 200,
    height: 200
  },
  card: {
    maxWidth: 700,
    elevation: 1,
    margin: 'auto',
    background: 'rgba(210, 231, 253, .1)',
    borderRadius: 25,
    backdropFilter: 'blur(10px)',
    boxShadow: '(0, 0, 8, 30 rgba(255, 255, 255, 0.3))',
    whiteSpace: 'pre-line',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(0)
    }
  },
  media: {
    height: 70,
    width: 70
  },
  lowerText: {
    marginTop: theme.spacing(1)
  }
}));

const About = () => {
  const classes = useStyles();

  const fadeSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { mass: 20, tension: 140, friction: 100 }
  });

  return (
    <div className={classes.root}>
      <a.div
        style={fadeSpring}
      >
        <Avatar className={classes.profile} src={Profile} />
      </a.div>
      <a.div
        style={fadeSpring}
      >
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
          </Typography>
          <Typography className={classes.lowerText} variant="body1" component="p">
            Libraries and Frameworks: React.js, Node.js, Express.js, Material-UI, Bootstrap,
            React Spring, Sequelize, Jest, Enzyme
          </Typography>
          <Typography className={classes.lowerText} variant="body1" component="p">
            Other: RESTful Routing JSON, Git, PostgreSQL, Axios
          </Typography>
        </Card>
      </a.div>
    </div>
  );
};

export default About;
