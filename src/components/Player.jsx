import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

import './components.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft: theme.spacing(12),
  },
  icons: {
    height: 60,
    width: 60,
  },
}));

const Player = () => {
  const classes = useStyles();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={classes.root}>
      { isPlaying ? (
        <PauseCircleOutlineIcon className={classes.icons} onClick={() => setIsPlaying(false)} />
      ) : (
        <PlayCircleOutlineIcon className={classes.icons} onClick={() => setIsPlaying(true)} />
      )}
    </div>
  );
};

export default Player;
