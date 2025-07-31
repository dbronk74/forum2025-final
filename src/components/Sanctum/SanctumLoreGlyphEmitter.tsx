// SanctumLoreGlyphEmitter.tsx
import React from 'react';
import { motion } from 'framer-motion';

const glyphs = ['𓂀', 'ᚠ', '☯', '✵', '∞'];

const SanctumLoreGlyphEmitter: React.FC = () => {
  return (
    <motion.div
      className="p-6 bg-gradient-to-br from-indigo-900 to-purple-800 text-white rounded-xl shadow-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl font-semibold text-center mb-4">Lore Glyph Emitter</h2>
      <div className="flex justify-center space-x-4 text-3xl">
        {(glyphs ?? []).map((glyph, index) => (
          <motion.span
            key={index}
            className="hover:text-purple-300 transition"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            {glyph}
          </motion.span>
        ))}
      </div>
      <p className="text-sm text-center mt-4 text-indigo-200">
        Glyphs radiate ancient truths from the hidden chambers of sanctum lore.
      </p>
    </motion.div>
  );
};

export default SanctumLoreGlyphEmitter;
