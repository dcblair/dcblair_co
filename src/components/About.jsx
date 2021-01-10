import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    justifyContent: 'center',
    textAlign: 'center',
  },
});

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>Oi!</p>
    </div>
  );
};

export default About;
