import React from 'react';
import { motion } from 'framer-motion';

const mockHeatData = [
  { topic: 'Divine Duality', value: 78 },
  { topic: 'Temporal Loops', value: 63 },
  { topic: 'Symbolic Genesis', value: 49 },
  { topic: 'Ethical Drift', value: 91 },
  { topic: 'Quantum Doctrine', value: 34 },
];

const barVariants = {
  initial: { width: 0 },
  animate: (value: number) => ({
    width: `${value}%`,
    transition: { duration: 1.2, ease: 'easeOut' },
  }),
};

export default function CodexHeatstreamViewer() {
  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-br from-black via-slate-900 to-gray-800 p-6 rounded-xl shadow-md text-white">
      <h2 className="text-2xl font-bold text-red-400 mb-6">Heatstream Viewer</h2>
      <div className="space-y-4">
        {mockHeatData.map((entry, idx) => (
          <div key={idx}>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-slate-300">{entry.topic}</span>
              <span className="text-sm text-red-300">{entry.value}</span>
            </div>
            <motion.div
              className="h-3 rounded-full bg-red-800 overflow-hidden"
              custom={entry.value}
              initial="initial"
              animate="animate"
              variants={barVariants}
            >
              <div className="h-3 bg-gradient-to-r from-yellow-300 via-red-500 to-red-700 rounded-full" />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
