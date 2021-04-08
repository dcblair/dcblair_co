import React from 'react';
import {
  Avatar,
  Card,
  makeStyles,
  Typography
} from '@material-ui/core';

import Profile from '../assets/profile_500.png';
import FadeSpring from './FadeSpring';

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
    backdropFilter: 'blur(3px)',
    boxShadow: '6px 7px 8px 0px rgba(122, 89, 82, 0.2)',
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
  parText: {
    marginBottom: theme.spacing(0.7)
  },
  lowerText: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FadeSpring>
        <Avatar className={classes.profile} src={Profile} />
      </FadeSpring>
      <FadeSpring>
        <Card className={classes.card}>
          <Typography className={classes.parText} variant="body1" component="p">
            Hello! My name is Devin. I am a software engineer from Los Angeles, California.
            I believe in writing clean, ethical code that provides users of all
            backgrounds an aesthetically pleasing, accessible experience.
          </Typography>
          <Typography className={classes.parText} variant="body1" component="p">
            Serving the needs of others, as best as I can, is what drives me to code. I
            also greatly enjoy picking up new technologies to improve my workflow and
            unlock new skills.
          </Typography>
          <Typography className={classes.parText} variant="body1" component="p">
            My experience teaching music production and English have
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
      </FadeSpring>
    </div>
  );
};

export default About;
