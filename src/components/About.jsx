import React from 'react';
import { Card, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  card: {
    // background: theme.palette.primary.mainGradient,
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Typography variant="body1" component="body1">
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
