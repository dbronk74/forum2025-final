import React from 'react';
import { motion } from 'framer-motion';

export default function AscendantInsightHalo({ size = 160, glowColor = '#8B5CF6' }) {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          border: `3px solid ${glowColor}`,
          boxShadow: `0 0 25px ${glowColor}, 0 0 50px ${glowColor}`,
        }}
        animate={{
          scale: [1, 1.06, 1],
          rotate: [0, 360],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <div className="z-10">{/* Insert avatar, icon, or content here */}</div>
    </div>
  );
}
