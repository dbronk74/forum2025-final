import React from 'react';
import { motion } from 'framer-motion';

const VersePulseEmitter: React.FC = () => {
  return (
    <div className="relative w-32 h-32 mx-auto">
      {/* Pulsing Rings */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-purple-500"
        animate={{ scale: [1, 1.4], opacity: [1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute inset-2 rounded-full border border-indigo-400"
        animate={{ scale: [1, 1.3], opacity: [0.8, 0] }}
        transition={{ delay: 0.6, duration: 2, repeat: Infinity, ease: 'easeOut' }}
      />

      {/* Core Orb */}
      <motion.div
        className="absolute inset-6 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 shadow-lg"
        initial={{ scale: 0.8, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />

      {/* Verse Label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-sm font-semibold text-purple-200 font-mono">
          Verse&nbsp;Pulse
        </p>
      </div>
    </div>
  );
};

export default VersePulseEmitter;
