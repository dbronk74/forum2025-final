// src/components/Gauntlet/SpeakerHighlightAura.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface SpeakerHighlightAuraProps {
  active: boolean;
  size?: number;
  pulseColor?: string;
}

const SpeakerHighlightAura: React.FC<SpeakerHighlightAuraProps> = ({
  active,
  size = 220,
  pulseColor = '#facc15', // amber-400
}) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      {active && (
        <motion.div
          className="rounded-full"
          style={{
            width: size,
            height: size,
            background: `radial-gradient(circle, ${pulseColor} 0%, transparent 80%)`,
            filter: 'blur(30px)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
    </div>
  );
};

export default SpeakerHighlightAura;
