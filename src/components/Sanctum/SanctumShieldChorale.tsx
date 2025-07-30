// SanctumShieldChorale.tsx
import React from 'react';
import { motion } from 'framer-motion';

const SanctumShieldChorale: React.FC = () => {
  return (
    <motion.div
      className="bg-gradient-to-br from-sky-700 to-cyan-800 p-6 rounded-2xl shadow-lg text-white"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-semibold text-center mb-4">Shield Chorale</h2>
      <p className="text-center mb-4">
        A resonant harmony of protective echoes, the Shield Chorale fortifies the mind against distortion and dissonance.
      </p>
      <div className="flex justify-center">
        <motion.div
          className="w-24 h-24 rounded-full border-4 border-cyan-300 animate-pulse bg-cyan-500/40"
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
};

export default SanctumShieldChorale;
