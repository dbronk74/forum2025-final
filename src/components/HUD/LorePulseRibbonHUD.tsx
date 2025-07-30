// src/components/Gauntlet/LorePulseRibbonHUD.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

type LorePulseProps = {
  message: string;
  intensity?: 'low' | 'medium' | 'high';
};

const intensityColors = {
  low: 'bg-purple-300',
  medium: 'bg-purple-500',
  high: 'bg-purple-700',
};

const LorePulseRibbonHUD: React.FC<LorePulseProps> = ({
  message,
  intensity = 'medium',
}) => {
  return (
    <motion.div
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full shadow-lg flex items-center gap-2 text-white text-sm font-semibold ${intensityColors[intensity]}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <Sparkles className="w-4 h-4 animate-pulse" />
      <span>{message}</span>
    </motion.div>
  );
};

export default LorePulseRibbonHUD;
