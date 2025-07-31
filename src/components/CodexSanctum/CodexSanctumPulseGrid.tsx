import React from 'react';
import { motion } from 'framer-motion';

const CodexSanctumPulseGrid: React.FC = () => {
  const pulses = Array.from({ length: 25 }, (_, i) => i);

  return (
    <div className="p-6 rounded-xl shadow-xl bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 border border-purple-700 text-white">
      <h2 className="text-2xl font-bold text-purple-200 mb-2">Pulse Grid</h2>
      <p className="text-sm text-purple-300 mb-6">
        A dynamic pulse array representing Codex resonance points.
      </p>

      <div className="grid grid-cols-5 gap-4 p-2">
        {(pulses ?? []).map((i) => (
          <motion.div
            key={i}
            className="h-6 w-6 rounded-full bg-purple-400 opacity-70"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              delay: i * 0.05,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CodexSanctumPulseGrid;
