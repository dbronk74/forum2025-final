import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Background = styled.div`
  background-image: url('/images/entry/storm-sky-portal.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const Gate = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  z-index: 3;
  background-size: cover;
  background-position: center;
  transition: transform 1.2s ease-in-out;
`;

const LeftGate = styled(Gate)`
  left: 0;
  background-image: url('/images/entry/gate-texture-left.png');
`;

const RightGate = styled(Gate)`
  right: 0;
  background-image: url('/images/entry/gate-texture-right.png');
`;

const Sentinel = styled(motion.img)`
  position: absolute;
  width: 20%;
  top: 20%;
  z-index: 4;
`;

const AgreementBox = styled.div`
  z-index: 5;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.85);
  padding: 2rem;
  border-radius: 1rem;
  max-width: 480px;
  color: #eee;
  text-align: center;
  font-family: 'Georgia', serif;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
`;

const EnterButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(to right, #4f46e5, #a855f7);
  color: white;
  border: none;
  border-radius: 999px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const SentinelGate: React.FC = () => {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);
    setTimeout(() => {
      window.location.href = '/forum';
    }, 1400);
  };

  return (
    <Background>
      <Overlay />
      <AnimatePresence>
        {!entered && (
          <>
            <Sentinel
              src="/images/entry/sentinel-statue-left.png"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 80, opacity: 1 }}
              exit={{ x: -400, opacity: 0 }}
              transition={{ duration: 1 }}
              style={{ left: 0 }}
              alt="Sentinel Left"
            />
            <Sentinel
              src="/images/entry/sentinel-statue-right.png"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: -80, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              transition={{ duration: 1 }}
              style={{ right: 0 }}
              alt="Sentinel Right"
            />
            <AgreementBox>
              <h2 className="text-xl mb-2 font-semibold text-purple-300">🌌 Moral Understanding</h2>
              <p>
                By entering The Forum, I agree to explore truth with humility, defend my views with integrity, and listen with empathy.
              </p>
              <EnterButton onClick={handleEnter}>I Agree. Enter the Forum.</EnterButton>
            </AgreementBox>
          </>
        )}
      </AnimatePresence>

      <LeftGate style={{ transform: entered ? 'translateX(-100%)' : 'translateX(0)' }} />
      <RightGate style={{ transform: entered ? 'translateX(100%)' : 'translateX(0)' }} />
    </Background>
  );
};

export default SentinelGate;
