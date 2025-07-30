import React from 'react';
import { motion } from 'framer-motion';

const connections = [
  { from: 'User', to: 'Oracle' },
  { from: 'InnerChild', to: 'TruthVerse' },
  { from: 'Skeptic', to: 'ClarityNode' },
];

const SanctumTetherBond: React.FC = () => {
  return (
    <div className="bg-gray-950 p-5 rounded-xl border border-indigo-800 max-w-md shadow-lg">
      <h2 className="text-indigo-300 font-bold text-lg mb-4">🔗 Tether Bonds</h2>
      <div className="space-y-4">
        {connections.map((bond, idx) => (
          <motion.div
            key={idx}
            className="flex justify-between items-center px-4 py-2 rounded-lg bg-indigo-900 bg-opacity-30 border border-indigo-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <span className="text-indigo-200">{bond.from}</span>
            <span className="text-indigo-400 text-xs">⟶</span>
            <span className="text-indigo-100">{bond.to}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SanctumTetherBond;
