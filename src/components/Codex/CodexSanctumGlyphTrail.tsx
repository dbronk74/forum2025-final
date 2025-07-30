import React from 'react';
import { motion } from 'framer-motion';

const glyphs = ['𓂀', '∞', '✶', '☯', '✡', '⚛', '⟁', '⧉'];

export default function CodexSanctumGlyphTrail() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-black bg-opacity-70 rounded-xl shadow-lg text-white">
      <h2 className="text-2xl font-bold text-center text-indigo-400 mb-4">Sanctum Glyph Trail</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {glyphs.map((glyph, idx) => (
          <motion.div
            key={idx}
            className="text-3xl p-4 rounded-full bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 shadow-inner border border-indigo-400"
            initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
          >
            {glyph}
          </motion.div>
        ))}
      </div>
      <p className="mt-4 text-sm text-center text-slate-400 italic">Each glyph marks a conceptual milestone in your Codex journey.</p>
    </div>
  );
}
