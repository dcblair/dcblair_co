import React from 'react';
import { a, useSpring } from 'react-spring';

const FadeSpring = ({ children }) => {
  const fadeSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { mass: 20, tension: 140, friction: 100 }
  });

  return (
    <a.div style={fadeSpring}>
      {children}
    </a.div>
  );
};

export default FadeSpring;
