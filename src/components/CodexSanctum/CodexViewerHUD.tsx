import React from 'react';
import { motion } from 'framer-motion';

const CodexViewerHUD: React.FC = () => {
  return (
    <motion.div
      className="fixed top-4 right-4 z-50 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-indigo-600 rounded-xl shadow-xl p-4 w-[260px] backdrop-blur-sm"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-indigo-300 text-lg font-bold mb-2">Codex Viewer HUD</h2>

      <ul className="text-sm text-indigo-100 space-y-1">
        <li>
          <span className="font-semibold text-indigo-400">Current Chapter:</span>{' '}
          Echoes of Origin
        </li>
        <li>
          <span className="font-semibold text-indigo-400">Fractal Threads:</span>{' '}
          27 active links
        </li>
        <li>
          <span className="font-semibold text-indigo-400">Symbolic Drift:</span>{' '}
          +12.7
        </li>
        <li>
          <span className="font-semibold text-indigo-400">Resonance Tier:</span>{' '}
          Tier IV
        </li>
        <li>
          <span className="font-semibold text-indigo-400">Viewer Focus:</span>{' '}
          Alchemical Logic
        </li>
      </ul>
    </motion.div>
  );
};

export default CodexViewerHUD;
