import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 120,
    fontSize: '0.9rem',
    fontWeight: '400',
    letterSpacing: '0.06em',
    transition: '0.6s all',
    '&:hover': {
      boxShadow: '0px 0px 2px 1px (0, 0, 0, 0.1)',
      transition: '1.2s all ease-out'
    }
  }
}));

const ProjectButton = ({ link, children }) => {
  const classes = useStyles();

  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <Button className={classes.button} onClick={() => handleClick(link)}>
      {children}
    </Button>
  );
};

export default ProjectButton;
