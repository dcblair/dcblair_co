/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { useScrollTrigger } from '@material-ui/core';

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(props.children, {
    style: {
      background: trigger ? 'rgba(226, 254, 254, .95)' : 'rgba(226, 254, 254, .2)',
      marginTop: trigger && 0,
      transition: trigger ? '0.3s' : '0.7s',
    },
  });
};

const ScrollBehavior = (props) => (
  <ScrollHandler {...props}>{props.children}</ScrollHandler>
);

export default ScrollBehavior;
