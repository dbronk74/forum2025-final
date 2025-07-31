// src/components/CodexSanctum/CodexSanctumLoreGlyphTrail.tsx

import React from 'react';
import { motion } from 'framer-motion';

const CodexSanctumLoreGlyphTrail: React.FC = () => {
  const glyphs = [...Array(21)];

  return (
    <div className="p-6 rounded-xl bg-gradient-to-r from-purple-900 via-indigo-900 to-black shadow-2xl border border-purple-600 max-w-5xl mx-auto mt-6">
      <h2 className="text-3xl font-extrabold mb-4 text-white">🌀 Lore Glyph Trail</h2>
      <p className="text-sm mb-6 text-purple-200">
        This trail weaves together illuminated glyphs discovered through debate,
        revealing hidden alignments, contradictions, and ancient knowledge echoed in modern thought.
      </p>

      <div className="grid grid-cols-7 gap-4">
        {(glyphs ?? []).map((_, i) => (
          <motion.div
            key={i}
            className="h-16 w-16 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-800 shadow-inner border border-purple-500 flex items-center justify-center text-white text-xl font-bold"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.04, duration: 0.4, ease: 'easeOut' }}
          >
            {/* Optional symbolic glyph */}
            {String.fromCharCode(0x16A0 + (i % 50))} {/* Unicode Runic glyphs */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CodexSanctumLoreGlyphTrail;
