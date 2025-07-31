import React from 'react';
import { motion } from 'framer-motion';

const fragments = [
  {
    title: 'Echo of the Riftwalk',
    description: 'A recorded mythic occurrence during the Fourth Convergence Trial.',
    timestamp: '02.14.2049 - Epoch 7',
  },
  {
    title: 'Ascendant’s Whisper',
    description: 'Spoken fragment left by an unidentified speaker mid-trial.',
    timestamp: '11.22.2052 - Epoch 9',
  },
  {
    title: 'The Shattered Glyph',
    description: 'Mythic glyph shattered during the Sanctum Pulse overload.',
    timestamp: '06.01.2054 - Epoch 12',
  },
];

export default function SanctumMythicFragmentChronicle() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-black to-gray-800 p-4 rounded-xl shadow-xl max-w-3xl mx-auto mt-6">
      <h2 className="text-indigo-300 text-lg font-bold mb-3 font-serif tracking-wide">
        Sanctum Mythic Fragment Chronicle
      </h2>
      <div className="space-y-4">
        {(fragments ?? []).map((frag, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="border border-indigo-500/30 p-3 rounded-md bg-black/40"
          >
            <div className="text-indigo-100 font-semibold text-sm">{frag.title}</div>
            <div className="text-gray-400 text-xs italic">{frag.timestamp}</div>
            <div className="text-gray-300 text-sm mt-1">{frag.description}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
