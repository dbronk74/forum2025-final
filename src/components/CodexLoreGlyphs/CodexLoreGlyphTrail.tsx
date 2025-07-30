import React from 'react';
import { motion } from 'framer-motion';

const glyphs = ['𓂀', '∞', '✡', '☯', '⚛', '⟁', '⧉', '✶', '☉', '₪'];

export default function CodexLoreGlyphTrail() {
  return (
    <div className="relative w-full overflow-hidden h-16 bg-black bg-opacity-60 border-t border-b border-indigo-800 shadow-inner">
      <motion.div
        className="absolute whitespace-nowrap flex space-x-8 text-indigo-400 text-2xl font-serif px-4"
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: 'linear',
        }}
      >
        {[...glyphs, ...glyphs].map((glyph, index) => (
          <span key={index}>{glyph}</span>
        ))}
      </motion.div>
    </div>
  );
}
