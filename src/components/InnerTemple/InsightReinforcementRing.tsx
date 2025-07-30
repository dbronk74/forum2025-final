// src/components/InnerTemple/InsightReinforcementRing.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface InsightReinforcementRingProps {
  intensity?: number; // 0 to 1
  size?: number; // pixels
  color?: string;
}

const InsightReinforcementRing: React.FC<InsightReinforcementRingProps> = ({
  intensity = 0.7,
  size = 120,
  color = '#a78bfa', // purple-400
}) => {
  const glowIntensity = Math.min(Math.max(intensity, 0), 1);

  return (
    <motion.div
      className="rounded-full border-4 border-purple-400 shadow-lg"
      style={{
        width: size,
        height: size,
        boxShadow: `0 0 ${20 * glowIntensity}px ${10 * glowIntensity}px ${color}aa`,
      }}
      animate={{
        scale: [1, 1 + glowIntensity * 0.1, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

export default InsightReinforcementRing;
