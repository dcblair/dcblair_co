import React from 'react';
import {
  Fab,
  makeStyles,
  useScrollTrigger,
  Zoom,
} from '@material-ui/core';
import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  backtop: {
    color: 'rgba(226, 254, 254, .2)',
    position: 'fixed',
    bottom: 10,
    right: 10,
    zIndex: 0,
  },
}));

const BackToTop = () => {
  const classes = useStyles();

  const trigger = useScrollTrigger();

  const handleClick = (e) => {
    const anchor = (e.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.backtop}>
        <Fab background="(gba(226, 254, 254, .2)">
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
};

export default BackToTop;
