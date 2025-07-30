import React from 'react';
import { motion } from 'framer-motion';
import { FiCircle, FiTriangle, FiHexagon, FiSquare } from 'react-icons/fi';

const sigils = [
  { icon: <FiCircle />, label: 'Unity' },
  { icon: <FiTriangle />, label: 'Insight' },
  { icon: <FiHexagon />, label: 'Resonance' },
  { icon: <FiSquare />, label: 'Foundation' },
  { icon: <FiTriangle />, label: 'Ascent' },
  { icon: <FiHexagon />, label: 'Memory' },
  { icon: <FiSquare />, label: 'Clarity' },
  { icon: <FiCircle />, label: 'Continuum' },
];

const CodexSanctumSigilGrid: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-zinc-800 to-purple-900 rounded-xl shadow-lg border border-purple-700">
      <h2 className="text-xl font-bold text-purple-200 mb-4 text-center">Codex Sigil Grid</h2>
      <div className="grid grid-cols-4 gap-6">
        {sigils.map((sigil, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-purple-300 hover:text-purple-100 transition duration-300"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-3xl mb-1">{sigil.icon}</div>
            <div className="text-xs uppercase tracking-widest">{sigil.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CodexSanctumSigilGrid;
