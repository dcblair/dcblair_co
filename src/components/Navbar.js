import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core';
import React from 'react'



const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton>

          </IconButton>
          <Button>About</Button>
          <Button>Projects</Button>
          <Button>Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;