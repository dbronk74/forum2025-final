// src/components/Gauntlet/GauntletSummoningWreath.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const GauntletSummoningWreath: React.FC = () => {
  return (
    <motion.div
      className="relative w-72 h-72 mx-auto rounded-full border-4 border-amber-500 shadow-lg bg-gradient-to-br from-amber-800/30 to-yellow-600/10 flex items-center justify-center"
      initial={{ rotate: 0, opacity: 0.6 }}
      animate={{ rotate: 360, opacity: 1 }}
      transition={{
        repeat: Infinity,
        duration: 18,
        ease: 'linear',
      }}
    >
      <Sparkles className="w-12 h-12 text-amber-300 animate-pulse" />
      <span className="absolute text-center text-xs text-amber-200 mt-32 w-full font-mono opacity-90">
        Summoning Lore-Bound Spirits
      </span>
    </motion.div>
  );
};

export default GauntletSummoningWreath;
