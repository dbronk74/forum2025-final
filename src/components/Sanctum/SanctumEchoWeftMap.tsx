// SanctumEchoWeftMap.tsx
import React from 'react';
import { motion } from 'framer-motion';

const echoData = [
  { name: 'Clarity Node', strength: 72 },
  { name: 'Intent Thread', strength: 58 },
  { name: 'Resonance Anchor', strength: 91 },
  { name: 'Sigil Flow', strength: 43 },
];

const SanctumEchoWeftMap: React.FC = () => {
  return (
    <motion.div
      className="bg-indigo-950 text-indigo-100 p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-xl font-bold text-center mb-4">Echo Weft Map</h2>
      <div className="grid grid-cols-2 gap-4">
        {echoData.map((node, index) => (
          <motion.div
            key={index}
            className="bg-indigo-800 p-3 rounded-md shadow-inner"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.15 }}
          >
            <p className="font-semibold">{node.name}</p>
            <div className="relative w-full h-2 bg-indigo-700 rounded mt-2">
              <div
                className="absolute h-2 bg-purple-400 rounded"
                style={{ width: `${node.strength}%` }}
              />
            </div>
            <p className="text-xs text-right mt-1">{node.strength}% alignment</p>
          </motion.div>
        ))}
      </div>
      <p className="mt-4 text-sm text-center text-indigo-300">
        Mapping harmonic threads and echo trails across the sanctum lattice.
      </p>
    </motion.div>
  );
};

export default SanctumEchoWeftMap;
