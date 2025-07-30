// src/components/InnerTemple/InsightReinforcementRing.tsx

import React from 'react';
import { motion } from 'framer-motion';

const InsightReinforcementRing: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center select-none">
      {/* Outer pulsating ring */}
      <motion.div
        className="absolute w-36 h-36 rounded-full border-4 border-purple-400"
        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      {/* Inner content with gentle scaling animation */}
      <motion.div
        className="w-28 h-28 bg-purple-100 border-2 border-purple-300 rounded-full flex items-center justify-center text-purple-800 text-center text-sm shadow-lg p-4"
        initial={{ scale: 0.9 }}
        animate={{ scale: [0.9, 1.05, 0.9] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        🔁 Insight Reinforced
        <br />
        Echoed and evolved collaboratively.
      </motion.div>
    </div>
  );
};

export default InsightReinforcementRing;
