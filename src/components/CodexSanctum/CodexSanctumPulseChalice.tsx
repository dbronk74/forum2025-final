import React from 'react';
import { motion } from 'framer-motion';

const CodexSanctumPulseChalice: React.FC = () => {
  return (
    <motion.div
      className="bg-gradient-to-br from-indigo-900 to-purple-800 border border-purple-500 rounded-2xl p-6 shadow-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl font-bold mb-4">Pulse Chalice of the Sanctum</h2>
      <p className="text-sm mb-3">
        The Chalice stores resonant pulses emitted by ancient texts and encrypted user insights.
        It amplifies temporal distortions to reveal deeper truths.
      </p>

      <div className="bg-purple-900 border border-purple-600 rounded-xl p-4 mt-4">
        <p className="text-xs">
          <strong>Last Resonance:</strong>{' '}
          <span className="text-purple-300 italic">
            "Seek not clarity, but the shimmer within distortion — where forgotten truths pulse."
          </span>
        </p>
        <motion.div
          className="mt-4 h-2 rounded-full bg-purple-700 shadow-inner"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 1.2, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </motion.div>
  );
};

export default CodexSanctumPulseChalice;
