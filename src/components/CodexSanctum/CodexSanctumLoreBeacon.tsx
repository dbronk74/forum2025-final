import React from 'react';
import { motion } from 'framer-motion';

const CodexSanctumLoreBeacon: React.FC = () => {
  return (
    <div className="p-4 rounded-2xl bg-purple-900 shadow-xl border border-purple-600 text-white max-w-2xl mx-auto mt-6">
      <motion.h2
        className="text-2xl font-semibold mb-3"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Lore Beacon Transmission
      </motion.h2>
      <motion.p
        className="text-sm leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        An encoded pulse from the depths of the Codex Sanctum. These messages contain fragments of forgotten wisdom, historical anomalies, and esoteric coordinates. Beacons are deciphered collaboratively by users who resonate with the symbols and embedded context.
      </motion.p>
      <motion.div
        className="mt-4 p-3 border border-purple-400 rounded-xl bg-purple-800 text-xs"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <strong>Latest Pulse:</strong> “The glyphs shimmer in reverse — indicating timeflow has fractured along Path 7.”
      </motion.div>
    </div>
  );
};

export default CodexSanctumLoreBeacon;
