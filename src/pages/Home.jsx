import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid>
        <Typography variant="h1" component="h1">
          Devin Blair
        </Typography>
      </Grid>
    </div>
  );
};

export default Home;
