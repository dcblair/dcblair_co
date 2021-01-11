import React, { useState } from 'react';
import { Card, Link, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Contact = () => {
  const [state, setState] = useState();

  return (
    <div>
      <Card>
        <Typography variant="h5" component="h1">
          Contact
        </Typography>
        <Typography variant="h6" component="h2">
          Email
        </Typography>
        <Link href="https://linkedin.com/in/devin-blair" target="_blank">
          <Typography variant="h6" component="h2">
            LinkedIn
            <LinkedInIcon />
          </Typography>
        </Link>
        <Link href="https://github.com/dcblair" target="_blank">
          <Typography variant="h6" component="h2">
            GitHub
            {' '}
            <GitHubIcon />
          </Typography>
        </Link>
      </Card>
    </div>
  );
};

export default Contact;
