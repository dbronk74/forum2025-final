import React, { useState } from 'react';
import { motion } from 'framer-motion';

const glyphs = [
  { symbol: '𓂀', name: 'Eye of Origin', meaning: 'Perception beyond time.' },
  { symbol: '⟁', name: 'Triad Seal', meaning: 'Unity of Will, Thought, and Form.' },
  { symbol: '∞', name: 'Eternal Loop', meaning: 'Cycle without end.' },
  { symbol: '☯', name: 'Balance Echo', meaning: 'Harmony of dual forces.' },
  { symbol: '✶', name: 'Starburst', meaning: 'Revelation or sudden insight.' },
];

export default function CodexGlyphDecoder() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gradient-to-br from-black via-slate-900 to-zinc-800 rounded-xl border border-indigo-700 shadow-lg text-white">
      <h2 className="text-2xl font-bold text-indigo-300 mb-6">Glyph Decoder</h2>

      <div className="grid grid-cols-5 gap-4 justify-items-center mb-6">
        {(glyphs ?? []).map((glyph, idx) => (
          <motion.button
            key={idx}
            onClick={() => setSelected(idx)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`text-3xl p-2 rounded-full transition ${
              selected === idx ? 'bg-indigo-600 text-white' : 'bg-zinc-800 text-indigo-300'
            }`}
          >
            {glyph.symbol}
          </motion.button>
        ))}
      </div>

      {selected !== null && (
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-indigo-400 mb-2">
            {glyphs[selected].name}
          </h3>
          <p className="text-sm text-slate-300 italic">{glyphs[selected].meaning}</p>
        </motion.div>
      )}
    </div>
  );
}
