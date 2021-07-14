import * as React from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  icons: {
    color: '#9f8687',
    opacity: '.5',
    height: 50,
    width: 50,
    hover: {
      color: '#000',
      opacity: '1'
    }
  }
}));

const Player = () => {
  const classes = useStyles();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={classes.root}>
      {isPlaying ? (
        <IconButton>
          <PauseCircleOutlineIcon
            className={classes.icons}
            onClick={() => setIsPlaying(false)}
          />
        </IconButton>
      ) : (
        <IconButton>
          <PlayCircleOutlineIcon
            className={classes.icons}
            onClick={() => setIsPlaying(true)}
          />
        </IconButton>
      )}
    </div>
  );
};

export default Player;
