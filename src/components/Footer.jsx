import React, { useState } from 'react';
import {
  Grid,
  Link,
  makeStyles,
  Typography,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'sticky',
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    background: 'rgba(226, 254, 254, .5)',
    marginTop: theme.spacing('1.5'),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  linkedIn: {
    width: 28,
    height: 28,
  },
  // gitHub: {
  //   marginLeft: '2rem',
  //   justifyContent: 'space-between',
  // },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.links}>
        <Link
          href="https://linkedin.com/in/devin-blair"
          target="_blank"
        >
          <LinkedInIcon className={classes.linkedIn} style={{ marginRight: '.2rem' }} />
        </Link>
        <Link
          className={classes.gitHub}
          href="https://github.com/dcblair"
          target="_blank"
        >
          <GitHubIcon fontSize="med" className={classes.icons} style={{ marginLeft: '.2rem' }} />
        </Link>
      </Grid>
    </div>
  );
};

export default Footer;
