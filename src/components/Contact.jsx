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
    padding: theme.spacing(5),
    maxWidth: 700,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    [theme.breakpoints.down('sm')]: {
      width: '70vw',
    },
    [theme.breakpoints.up('md')]: {
      width: 450,
    },
    [theme.breakpoints.up('lg')]: {
      width: '30vw',
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
    //   headers: { 'Content-Type': 'multipart/form-data' },
    //   })
    // });
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Typography variant="h5" component="h1">
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
          <Button>
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Contact;
