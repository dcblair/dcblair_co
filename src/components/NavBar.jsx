import {
  AppBar,
  Button,
  Toolbar,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [beans, setBeans] = useState();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Button>
              Home
            </Button>
          </Link>
          <Link to="/About">
            <Button>
              About
            </Button>
          </Link>
          <Link to="/Projects">
            <Button>
              Projects
            </Button>
          </Link>
          <Link to="/Contact">
            <Button>
              Contact
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
