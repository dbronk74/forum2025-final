import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const GateContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  z-index: 10;
`;

const GateHalf = styled(motion.div)<{ side: 'left' | 'right' }>`
  width: 50%;
  height: 100%;
  background: url(${({ side }) => side === 'left'
    ? '/assets/gate-texture-left.png'
    : '/assets/gate-texture-right.png'}) no-repeat center/cover;
  ${({ side }) => (side === 'left' ? 'border-right' : 'border-left')}: 4px solid #333;
`;

interface SentinelGateDoorsProps {
  agreed: boolean;
}

const SentinelGateDoors: React.FC<SentinelGateDoorsProps> = ({ agreed }) => {
  return (
    <GateContainer>
      <GateHalf
        side="left"
        initial={{ x: 0 }}
        animate={{ x: agreed ? '-100%' : 0 }}
        transition={{ type: 'spring', stiffness: 50, damping: 18 }}
      />
      <GateHalf
        side="right"
        initial={{ x: 0 }}
        animate={{ x: agreed ? '100%' : 0 }}
        transition={{ type: 'spring', stiffness: 50, damping: 18 }}
      />
    </GateContainer>
  );
};

export default SentinelGateDoors;
