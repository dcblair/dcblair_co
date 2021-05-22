import { Button, makeStyles, Theme } from '@material-ui/core';
import React, { FC, ReactNode } from 'react';

const useStyles = makeStyles({
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 120,
    fontSize: '0.9rem',
    fontWeight: 400,
    letterSpacing: '0.06em',
    transition: '0.6s all',
    '&:hover': {
      boxShadow: '0px 0px 2px 1px (0, 0, 0, 0.1)',
      transition: '1.2s all ease-out'
    }
  }
});

interface IProps {
  link: string;
  children: ReactNode;
}

const ProjectButton: FC<IProps> = ({ link, children }) => {
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
