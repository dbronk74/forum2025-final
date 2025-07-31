import React from 'react';
import { motion } from 'framer-motion';

const loreWords = [
  'Truth',
  'Trial',
  'Resonance',
  'Rebuttal',
  'Ascention',
  'Summon',
  'Judgment',
  'Pulse',
  'Sight',
  'Sigil',
  'Unity',
  'Friction',
  'Wreath',
  'Glyph',
];

export default function CodexSanctumLoreRibbon() {
  const repeatedWords = [...loreWords, ...loreWords];

  return (
    <div className="relative w-full overflow-hidden h-10 bg-gradient-to-r from-indigo-800 via-black to-indigo-800 border-t border-b border-indigo-700 shadow-inner">
      <motion.div
        className="absolute whitespace-nowrap flex space-x-8 text-indigo-300 font-mono text-sm uppercase px-4 tracking-widest"
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: 'linear',
        }}
      >
        {(repeatedWords ?? []).map((word, i) => (
          <span key={i}>{word}</span>
        ))}
      </motion.div>
    </div>
  );
}
