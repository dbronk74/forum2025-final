import React from 'react';
import { motion } from 'framer-motion';

const auraColors = {
  unity: 'from-indigo-500 to-purple-700',
  dissent: 'from-rose-500 to-red-700',
  neutral: 'from-gray-400 to-gray-700',
  wisdom: 'from-emerald-400 to-teal-600',
  flame: 'from-orange-400 to-yellow-500',
};

const FactionAuraOverlay = ({ faction = 'neutral', intensity = 0.7 }) => {
  const gradient = auraColors[faction] || auraColors['neutral'];

  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none z-10 bg-gradient-to-br ${gradient} opacity-${Math.round(
        intensity * 100
      )} blur-2xl`}
      initial={{ opacity: 0 }}
      animate={{ opacity: intensity }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    />
  );
};

export default FactionAuraOverlay;
