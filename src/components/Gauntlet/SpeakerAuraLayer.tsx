// src/components/Gauntlet/SpeakerAuraLayer.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface SpeakerAuraLayerProps {
  speakerId: string;
  active: boolean;
  color?: string;
}

const SpeakerAuraLayer: React.FC<SpeakerAuraLayerProps> = ({
  speakerId,
  active,
  color = '#38bdf8', // default to sky blue
}) => {
  const auraVariants = {
    initial: {
      opacity: 0,
      scale: 0.9,
    },
    active: {
      opacity: 0.6,
      scale: 1.05,
      transition: {
        duration: 0.6,
        yoyo: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <motion.div
        className="rounded-full w-48 h-48"
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          filter: 'blur(20px)',
        }}
        variants={auraVariants}
        initial="initial"
        animate={active ? 'active' : 'initial'}
      />
    </div>
  );
};

export default SpeakerAuraLayer;
