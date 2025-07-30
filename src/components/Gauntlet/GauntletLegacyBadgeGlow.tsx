import React from 'react';
import { motion } from 'framer-motion';

interface GauntletLegacyBadgeGlowProps {
  username: string;
  badgeLabel?: string;
  glowColor?: string;
  size?: number;
}

const GauntletLegacyBadgeGlow: React.FC<GauntletLegacyBadgeGlowProps> = ({
  username,
  badgeLabel = 'Legacy',
  glowColor = '#FFD700', // gold
  size = 120,
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <motion.div
        className="absolute rounded-full"
        initial={{ scale: 0.8, opacity: 0.6 }}
        animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.6, 0.9, 0.6] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          width: size,
          height: size,
          boxShadow: `0 0 25px 10px ${glowColor}`,
          background: glowColor,
          filter: 'blur(12px)',
        }}
      />
      <div
        className="relative z-10 flex items-center justify-center rounded-full border-4 border-white text-white font-bold text-sm uppercase shadow-lg bg-gray-900"
        style={{ width: size, height: size }}
      >
        {badgeLabel}
      </div>
      <span className="mt-2 text-sm text-white opacity-80">{username}</span>
    </div>
  );
};

export default GauntletLegacyBadgeGlow;
