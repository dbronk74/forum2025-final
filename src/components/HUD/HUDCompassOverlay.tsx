// src/components/Gauntlet/HUDCompassOverlay.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaCompass } from 'react-icons/fa';

interface HUDCompassOverlayProps {
  direction: string;
  pulseIntensity: number;
}

const HUDCompassOverlay: React.FC<HUDCompassOverlayProps> = ({ direction, pulseIntensity }) => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 p-4 bg-black/70 text-white rounded-full shadow-xl flex flex-col items-center"
      animate={{ scale: 1 + pulseIntensity * 0.1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <FaCompass className="text-2xl mb-1 text-blue-300 animate-spin-slow" />
      <span className="text-sm font-medium">{direction}</span>
    </motion.div>
  );
};

export default HUDCompassOverlay;
