import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

const SentinelContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
`;

const Sentinel = styled(motion.div)<{ side: 'left' | 'right' }>`
  position: absolute;
  top: 0;
  ${({ side }) => (side === 'left' ? 'left: 0;' : 'right: 0;')}
  width: 30%;
  height: 100%;
  background: url(${({ side }) => side === 'left'
    ? '/assets/sentinel-statue-left.png'
    : '/assets/sentinel-statue-right.png'}) no-repeat center/contain;
  filter: brightness(0.4);
`;

const EyeGlow = styled(motion.div)`
  position: absolute;
  top: 20%;
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, rgba(255, 100, 100, 0.8) 0%, transparent 70%);
  border-radius: 50%;
`;

const Shimmer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
`;

const SentinelEyes: React.FC = () => {
  const eyeControls = useAnimation();
  const shimmerControls = useAnimation();

  useEffect(() => {
    const pulse = async () => {
      await eyeControls.start({ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] });
      setTimeout(pulse, 5000);
    };
    pulse();

    shimmerControls.start({
      x: ['-100%', '100%'],
      transition: { repeat: Infinity, duration: 10, ease: 'linear' }
    });
  }, [eyeControls, shimmerControls]);

  return (
    <SentinelContainer>
      <Sentinel side="left">
        <EyeGlow style={{ left: '40%' }} animate={eyeControls} />
        <Shimmer animate={shimmerControls} />
      </Sentinel>
      <Sentinel side="right">
        <EyeGlow style={{ right: '40%' }} animate={eyeControls} />
        <Shimmer animate={shimmerControls} />
      </Sentinel>
    </SentinelContainer>
  );
};

export default SentinelEyes;
