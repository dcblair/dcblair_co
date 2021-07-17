import * as React from 'react';
import { Grid, Link, makeStyles } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'sticky'
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    background: 'rgba(226, 254, 254, .5)',
    textAlign: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing('.5')
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing('1.5'),
      marginLeft: theme.spacing('.3')
    }
  },
  linkedLink: {
    marginLeft: theme.spacing('-.1')
  },
  linkedIn: {
    [theme.breakpoints.down('sm')]: {
      width: 34,
      height: 34
    },
    [theme.breakpoints.up('md')]: {
      width: 29,
      height: 29
    },
    marginLeft: 6,
    marginBottom: theme.spacing('.3')
  },
  gitHub: {
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: 28,
      height: 28
    },
    [theme.breakpoints.up('md')]: {
      width: 24,
      height: 24
    }
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.links}>
        <Link
          href="https://linkedin.com/in/devin-blair"
          target="_blank"
          className={classes.linkedLink}
        >
          <LinkedInIcon
            className={classes.linkedIn}
            style={{ marginRight: '.2rem' }}
          />
        </Link>
        <Link href="https://github.com/dcblair" target="_blank">
          <GitHubIcon
            className={classes.gitHub}
            fontSize="med"
            style={{ marginLeft: '.2rem' }}
          />
        </Link>
      </Grid>
    </div>
  );
};

export default Footer;
