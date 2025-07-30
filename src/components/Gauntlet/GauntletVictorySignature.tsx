// src/components/Gauntlet/GauntletVictorySignature.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const GauntletVictorySignature: React.FC = () => {
  return (
    <motion.div
      className="relative w-full h-48 flex flex-col items-center justify-center bg-gradient-to-r from-green-800/30 via-emerald-600/10 to-green-900/30 rounded-lg shadow-xl border border-emerald-500/40"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-4xl text-emerald-300 font-bold tracking-wider flex items-center space-x-2"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.05 }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', repeatType: 'mirror' }}
      >
        <Trophy className="w-8 h-8 text-yellow-400" />
        <span>VICTORY ATTESTED</span>
      </motion.div>
      <p className="text-xs text-emerald-200 mt-2 italic opacity-80">
        Official mark of triumph in the Gauntlet Trials
      </p>
    </motion.div>
  );
};

export default GauntletVictorySignature;
