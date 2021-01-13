import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Card,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
    },
    [theme.breakpoints.up('sm')]: {
      width: '87vw',
    },
    [theme.breakpoints.up('md')]: {
      width: '64vw',
    },
    [theme.breakpoints.up('lg')]: {
      width: '40vw',
    },
  },
  text: {
    marginBottom: theme.spacing(1),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    [theme.breakpoints.down('xs')]: {
      width: '80vw',
    },
    [theme.breakpoints.up('sm')]: {
      width: '70vw',
    },
    [theme.breakpoints.up('md')]: {
      width: '54vw',
    },
    [theme.breakpoints.up('lg')]: {
      width: '34vw',
    },
  },
  email: {
    marginTop: theme.spacing(3),
    justifyContent: 'left',
  },
  emailBody: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const Contact = () => {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // axios({
    //   method: 'POST',
    //   url: process.env.CP_API_TOKEN,
    //   data: bodyFormData,
    //   email: dblair@dcblair.co
    //   headers: { 'Content-Type': 'multipart/form-data' },
    //   })
    // });
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Typography className={classes.text} variant="h5" component="h1">
          Contact
        </Typography>
        <form
          onSubmit={handleSubmit}
          className={`${classes.form} ${classes.textField}`}
        >
          <TextField
            className={classes.email}
            value={email}
            variant="filled"
            id="email-textfield"
            label="email adress"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className={classes.emailBody}
            inputProps={classes.inputText}
            value={body}
            variant="filled"
            id="email-body-textfield"
            label="message"
            multiline
            rows={8}
            onChange={(e) => setBody(e.target.value)}
          />
          <Button style={{ width: '20vw', alignSelf: 'center' }}>
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Contact;
