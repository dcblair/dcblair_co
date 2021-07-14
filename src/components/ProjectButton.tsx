import { Button, makeStyles } from '@material-ui/core';
import React, { FC, ReactNode } from 'react';

const useStyles = makeStyles({
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    border: '2px solid rgba(225, 225, 225, 0.5)',
    borderRadius: 20,
    width: 150,
    fontSize: '0.9rem',
    fontWeight: 500,
    letterSpacing: '0.1em',
    padding: 8,
    transition: '0.6s all',
    '&:hover': {
      boxShadow: '0px 0px 2px 1px (0, 0, 0, 0.1)',
      transition: '.9s all ease-out'
    }
  }
});

interface IProps {
  link: string;
  children: ReactNode;
}

const ProjectButton = ({ link, children }: IProps): JSX.Element => {
  const classes = useStyles();

  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <Button className={classes.button} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default ProjectButton;
