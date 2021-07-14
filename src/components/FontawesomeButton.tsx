import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, Link, makeStyles, Tooltip } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

interface IProps {
  // * come back to this! *
  tech: any;
  title: string;
  url: string;
}

const FontawesomeButton = ({ tech, title, url }: IProps): JSX.Element => {
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
