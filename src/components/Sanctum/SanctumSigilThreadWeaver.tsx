// SanctumSigilThreadWeaver.tsx
import React from 'react';
import { motion } from 'framer-motion';

const sigilThreads = ['🌀 Focus', '✨ Intuition', '🔥 Conviction', '🌿 Peace', '⚡ Awareness'];

const SanctumSigilThreadWeaver: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-fuchsia-800 to-pink-700 text-white p-6 rounded-xl shadow-xl">
      <motion.h2
        className="text-xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Sigil Thread Weaver
      </motion.h2>
      <div className="space-y-2">
        {sigilThreads.map((thread, index) => (
          <motion.div
            key={index}
            className="p-2 bg-pink-600/30 rounded-md text-center border border-pink-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            {thread}
          </motion.div>
        ))}
      </div>
      <p className="text-sm text-center mt-6 text-pink-200">
        Weaving threads of intent into radiant sigils, this sanctum tool maps the inner glyphs of transformation.
      </p>
    </div>
  );
};

export default SanctumSigilThreadWeaver;
