import React from 'react';
import { motion } from 'framer-motion';

const CodexLoreGlyphCore: React.FC = () => {
  return (
    <div className="relative w-32 h-32 mx-auto">
      {/* Glowing base */}
      <motion.div
        className="absolute inset-0 rounded-full bg-indigo-500 blur-2xl opacity-50"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Radiant ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-indigo-400"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Central core */}
      <motion.div
        className="absolute inset-4 rounded-full bg-gradient-to-br from-indigo-400 to-purple-700 shadow-lg"
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            '0 0 10px rgba(99,102,241,0.6)',
            '0 0 20px rgba(139,92,246,0.9)',
            '0 0 10px rgba(99,102,241,0.6)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Optional glyph character */}
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl select-none pointer-events-none drop-shadow-xl">
        ✶
      </div>
    </div>
  );
};

export default CodexLoreGlyphCore;
