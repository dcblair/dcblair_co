import * as React from 'react';
import { useScrollTrigger } from '@material-ui/core';

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined
  });

  return React.cloneElement(props.children, {
    style: {
      background: trigger
        ? 'rgba(226, 254, 254, .93)'
        : 'rgba(226, 254, 254, .2)',
      marginTop: trigger && 0,
      transition: trigger ? '0.3s' : '0.5s'
    }
  });
};

const ScrollBehavior = ({ children }) => (
  <ScrollHandler>{children}</ScrollHandler>
);

export default ScrollBehavior;
