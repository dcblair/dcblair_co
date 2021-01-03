import { Paper, Typography } from '@material-ui/core'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <Paper>
        <Typography variant="h5" component="h1">
          Contact
        </Typography>
        <Typography variant="h6" component="h2">
          Email
        </Typography>
        <Typography variant="h6" component="h2">
          LinkedIn
        </Typography>
        <Typography variant="h6" component="h2">
          GitHub
        </Typography>
      </Paper>
    </div>
  )
}

export default Contact;