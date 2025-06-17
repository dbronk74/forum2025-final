import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Text = styled(motion.h1)`
  color: white;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  font-family: 'Georgia', serif;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
`;

const Subtitle = styled(motion.p)`
  color: #aaa;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2.5rem;
  font-family: 'Georgia', serif;
`;

const Button = styled(motion.button)`
  position: relative;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  color: white;
  background: transparent;
  border: 2px solid white;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  font-weight: bold;
  letter-spacing: 1px;
`;

const RippleContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

interface MoralOverlayProps {
  onAgree: () => void;
}

const MoralOverlay: React.FC<MoralOverlayProps> = ({ onAgree }) => {
  return (
    <Overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Text
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        ENTER WITH HONOR.
      </Text>
      <Subtitle
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        This platform requires your agreement to speak with reason,<br />
        seek truth, and treat others with dignity.
      </Subtitle>
      <Button
        onClick={onAgree}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        I AGREE
        <RippleContainer
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{
            scale: [0, 1.2, 0.9, 1.4, 1],
            opacity: [0, 0.6, 0.2, 0.8, 0],
            transition: { duration: 1.6, ease: 'easeInOut' }
          }}
          whileTap={{
            scale: [0, 1.4, 0],
            opacity: [0.8, 0.5, 0],
            transition: { duration: 0.6, ease: 'easeOut' }
          }}
        >
          <svg width="200" height="200" style={{ position: 'absolute', top: 0, left: 0 }}>
            <defs>
              <radialGradient id="rippleGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#A1C6EA" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#A1C6EA" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="80" fill="url(#rippleGradient)" />
            <circle cx="100" cy="100" r="60" fill="url(#rippleGradient)" />
            <circle cx="100" cy="100" r="40" fill="url(#rippleGradient)" />
          </svg>
        </RippleContainer>
      </Button>
    </Overlay>
  );
};

export default MoralOverlay;
