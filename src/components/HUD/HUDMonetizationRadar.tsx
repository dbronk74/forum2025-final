// src/components/Gauntlet/HUDMonetizationRadar.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaCoins } from 'react-icons/fa';

interface HUDMonetizationRadarProps {
  credits: number;
  isPulsing?: boolean;
}

const HUDMonetizationRadar: React.FC<HUDMonetizationRadarProps> = ({ credits, isPulsing = false }) => {
  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50 p-4 bg-yellow-900/80 text-yellow-200 rounded-full shadow-lg flex flex-col items-center"
      animate={{ scale: isPulsing ? 1.1 : 1 }}
      transition={{ duration: 0.4, ease: 'easeInOut', repeat: isPulsing ? Infinity : 0, repeatType: 'reverse' }}
    >
      <FaCoins className="text-2xl mb-1 text-yellow-300" />
      <span className="text-sm font-semibold">{credits} Cr</span>
    </motion.div>
  );
};

export default HUDMonetizationRadar;
