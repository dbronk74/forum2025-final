// SanctumClarityPulse.tsx
import React from 'react';
import { motion } from 'framer-motion';

const SanctumClarityPulse: React.FC = () => {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-800 to-purple-900 shadow-lg">
      <motion.h2
        className="text-2xl font-semibold text-white mb-4 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Clarity Pulse Beacon
      </motion.h2>
      <motion.div
        className="w-32 h-32 rounded-full mx-auto border-4 border-indigo-400 bg-indigo-600 animate-ping"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <p className="text-center text-indigo-100 mt-6">
        This pulse represents the clarity rhythm of your thoughts. As it intensifies, your ideas align with crystalline lucidity.
      </p>
    </div>
  );
};

export default SanctumClarityPulse;
