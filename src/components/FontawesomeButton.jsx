import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, IconButton, Tooltip, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const FontawesomeButton = ({ tech, title, url }) => {
  const classes = useStyles();
  return (
    <Tooltip title={title}>
      <Link href={url} target="_blank">
        <IconButton className={classes.icon}>
          <FontAwesomeIcon icon={['fab', tech]} />
        </IconButton>
      </Link>
    </Tooltip>
  );
};

export default FontawesomeButton;
