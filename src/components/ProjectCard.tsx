import React, { FC, ReactNode } from 'react';
import { Card, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    elevation: 1,
    margin: 'auto',
    background: 'rgba(210, 231, 253, .1)',
    boxShadow: '6px 7px 8px 0px rgba(122, 89, 82, 0.2)',
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

type ProjectCardProps = {
  children: ReactNode;
  className: string[];
};

const ProjectCard: FC<ProjectCardProps> = ({ className, children }) => {
  const classes = useStyles();

  return <Card className={classes.card}>{children}</Card>;
};

export default ProjectCard;
