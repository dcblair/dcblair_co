import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  Box,
  Button,
  Card,
  Grid,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core';

import FadeSpring from './FadeSpring';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  cardBox: {
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2)
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(9)
    }
  },
  card: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    backdropFilter: 'blur(3px)',
    background: 'rgba(210, 231, 253, .1)',
    boxShadow: '6px 7px 8px 0px rgba(122, 89, 82, 0.2)',
    borderRadius: 25,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      width: '95vw'
    },
    [theme.breakpoints.up('sm')]: {
      width: '60vw'
    },
    [theme.breakpoints.up('md')]: {
      width: '58vw'
    },
    [theme.breakpoints.up('lg')]: {
      width: '40vw'
    }
  },
  text: {
    marginBottom: theme.spacing(3)
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  textFields: {
    [theme.breakpoints.down('xs')]: {
      width: '80vw'
    },
    [theme.breakpoints.up('sm')]: {
      width: '50vw'
    },
    [theme.breakpoints.up('md')]: {
      width: '48vw'
    },
    [theme.breakpoints.up('lg')]: {
      width: '34vw'
    }
  },
  inputs: {
    borderRadius: theme.spacing(2),
    backgroundColor: 'rgba(0, 0, 0, 0.08)'
  },
  email: {
    marginTop: theme.spacing(3),
    textAlign: 'left'
  },
  emailBody: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  submit: {
    width: 120,
    alignSelf: 'center'
  }
}));

const Contact = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const service = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const template = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;
    const params = {
      from_email: email,
      message: body
    };
    window.emailjs.send(service, template, params, userId).then(() => {
      setIsLoading(false);
      setFormSubmitted(true);
    });
  };

  return (
    <Grid className={classes.root}>
      <Box className={classes.cardBox}>
        <FadeSpring>
          <Card className={classes.card}>
            <Typography className={classes.text} variant="h5" component="h1">
              Contact
            </Typography>
            {formSubmitted ? (
              <Typography variant="h6" component="h1">
                Your message has been sent!
              </Typography>
            ) : (
              <form className={`${classes.form} ${classes.textFields}`}>
                <TextField
                  className={classes.email}
                  value={email}
                  variant="outlined"
                  id="email-textfield"
                  label="email address"
                  InputProps={{
                    className: classes.inputs
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  className={classes.emailBody}
                  InputProps={{
                    className: classes.inputs
                  }}
                  value={body}
                  variant="outlined"
                  id="email-body-textfield"
                  label="message"
                  multiline
                  rows={8}
                  onChange={(e) => setBody(e.target.value)}
                />
                <Button onClick={handleSubmit} className={classes.submit}>
                  Submit
                </Button>
              </form>
            )}
          </Card>
        </FadeSpring>
      </Box>
    </Grid>
  );
};

export default Contact;
