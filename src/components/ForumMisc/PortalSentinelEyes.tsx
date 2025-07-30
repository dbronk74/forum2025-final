// src/components/SentinelGate/PortalSentinelEyes.tsx

import React from 'react';
import { motion } from 'framer-motion';

type EyeProps = {
  side: 'left' | 'right';
  glowColor?: string;
  size?: number;
};

export default function PortalSentinelEyes({ side, glowColor = '#00f6ff', size = 18 }: EyeProps) {
  const positionStyle =
    side === 'left' ? 'left-4 top-4 sm:left-12 sm:top-10' : 'right-4 top-4 sm:right-12 sm:top-10';

  return (
    <motion.div
      className={`absolute ${positionStyle} z-50`}
      initial={{ opacity: 0.3, scale: 0.8 }}
      animate={{
        opacity: [0.3, 1, 0.5, 1],
        scale: [0.95, 1.1, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 3.5,
        ease: 'easeInOut',
      }}
    >
      <div
        className="rounded-full shadow-lg"
        style={{
          width: size,
          height: size,
          background: glowColor,
          boxShadow: `0 0 15px ${glowColor}, 0 0 25px ${glowColor}`,
        }}
      />
    </motion.div>
  );
}
