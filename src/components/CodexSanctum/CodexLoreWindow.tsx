import React from 'react';
import { motion } from 'framer-motion';

const CodexLoreWindow: React.FC = () => {
  const excerpt = `
    “In the twilight between realms, a single glyph pulsed—
     carrying with it the memory of forgotten oaths and
     the weight of untold truths.”
  `;

  return (
    <div className="relative bg-gradient-to-br from-zinc-900 to-indigo-950 border border-purple-700 rounded-xl p-6 shadow-lg text-white w-full max-w-3xl mx-auto h-72">
      <motion.h2
        className="text-2xl font-bold text-purple-300 mb-3 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Codex Lore Window
      </motion.h2>

      <motion.div
        className="text-center text-lg font-serif italic text-zinc-200 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
      >
        {excerpt}
      </motion.div>

      <motion.div
        className="absolute bottom-4 right-4 h-4 w-4 bg-purple-500 rounded-full blur-sm animate-ping"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      />
    </div>
  );
};

export default CodexLoreWindow;
