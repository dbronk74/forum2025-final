import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EmotionalResonanceRingProps {
  intensity: number; // 0 to 100
}

const getRingColor = (intensity: number): string => {
  if (intensity > 80) return 'ring-pink-500';
  if (intensity > 60) return 'ring-rose-500';
  if (intensity > 40) return 'ring-orange-400';
  if (intensity > 20) return 'ring-yellow-400';
  return 'ring-gray-500';
};

const getGlow = (intensity: number): string => {
  if (intensity > 80) return 'shadow-pink-500/60';
  if (intensity > 60) return 'shadow-rose-500/50';
  if (intensity > 40) return 'shadow-orange-400/50';
  if (intensity > 20) return 'shadow-yellow-400/40';
  return 'shadow-gray-500/30';
};

const EmotionalResonanceRing: React.FC<EmotionalResonanceRingProps> = ({ intensity }) => {
  const ringColor = getRingColor(intensity);
  const glow = getGlow(intensity);

  return (
    <AnimatePresence>
      <motion.div
        key={intensity}
        className={`w-24 h-24 rounded-full border-4 ${ringColor} ${glow} shadow-xl transition-all duration-500`}
        style={{
          boxShadow: `0 0 ${intensity / 3}px ${intensity / 10}px rgba(255, 100, 100, 0.5)`,
        }}
        initial={{ scale: 0.9, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.6 }}
      />
    </AnimatePresence>
  );
};

export default EmotionalResonanceRing;
