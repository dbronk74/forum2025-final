// src/components/Gauntlet/ClarityTracker.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const ClarityTracker: React.FC = () => {
  return (
    <motion.div
      className="relative bg-gradient-to-r from-cyan-500 to-blue-700 rounded-xl p-4 shadow-lg text-white w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold tracking-wide">
          Clarity Pulse
        </h2>
        <Sparkles className="w-5 h-5 text-white animate-pulse" />
      </div>
      <div className="mt-4 space-y-2 text-sm leading-snug">
        <p>✨ Argument precision detected at 87%.</p>
        <p>🧠 Logical thread consistency stable.</p>
        <p>🔍 Semantic clarity above baseline average.</p>
      </div>
    </motion.div>
  );
};

export default ClarityTracker;
