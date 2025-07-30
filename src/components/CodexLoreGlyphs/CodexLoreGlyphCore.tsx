import React from 'react';
import { motion } from 'framer-motion';

export default function CodexLoreGlyphCore() {
  return (
    <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute w-48 h-48 rounded-full border-4 border-indigo-400 opacity-30"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
      />

      {/* Mid pulse ring */}
      <motion.div
        className="absolute w-36 h-36 rounded-full border-2 border-purple-500 opacity-20"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      />

      {/* Core glyph */}
      <div className="z-10 text-5xl text-indigo-300 font-serif select-none drop-shadow-[0_0_6px_rgba(99,102,241,0.6)]">
        ☉
      </div>

      {/* Subtle glow aura */}
      <div className="absolute w-28 h-28 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />
    </div>
  );
}
