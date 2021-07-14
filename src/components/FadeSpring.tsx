import React from 'react';
import { animated, useSpring } from 'react-spring';

interface IProps {
  children: React.ReactNode;
}

const FadeSpring = ({ children }: IProps): JSX.Element => {
  const fadeSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { mass: 20, tension: 140, friction: 100 }
  });

  return <animated.div style={fadeSpring}>{children}</animated.div>;
};

export default FadeSpring;
