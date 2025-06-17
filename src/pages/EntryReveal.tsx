
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SentinelEyes from '../components/SentinelEyes';
import MoralOverlay from '../components/MoralOverlay';
import SentinelGateDoors from '../components/SentinelGateDoors';
import AmbientChime from '../components/AmbientChime';

const LandingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('/assets/storm-sky-portal.jpg') no-repeat center/cover;
  overflow: hidden;
`;

const Flare = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 200;
`;

const EntryReveal: React.FC = () => {
  const [agreed, setAgreed] = useState(false);
  const [showFlare, setShowFlare] = useState(false);
  const navigate = useNavigate();

  const handleAgree = () => {
    setAgreed(true);
    setTimeout(() => {
      setShowFlare(true);
      setTimeout(() => {
        navigate('/forum');
      }, 1000);
    }, 2000);
  };

  return (
    <LandingContainer>
      <SentinelEyes />
      <SentinelGateDoors agreed={agreed} />
      <AmbientChime agreed={agreed} />
      {!agreed && <MoralOverlay onAgree={handleAgree} />}
      {showFlare && (
        <Flare
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1 }}
        />
      )}
    </LandingContainer>
  );
};

export default EntryReveal;
