import React from 'react';
import { Card, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    elevation: 1,
    margin: 'auto',
    background: 'rgba(210, 231, 253, .1)',
    borderRadius: 25,
    textAlign: 'left',
    padding: theme.spacing(5),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(0)
    }
  }
}));

const ProjectCard = ({ children }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {children}
    </Card>
  );
};

export default ProjectCard;
