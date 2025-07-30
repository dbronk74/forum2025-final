import React from 'react';
import { motion } from 'framer-motion';

const signals = [
  { label: 'Truth', x: 30, y: 20 },
  { label: 'Bias', x: 70, y: 25 },
  { label: 'Omission', x: 50, y: 60 },
  { label: 'Clarity', x: 20, y: 80 },
  { label: 'Distortion', x: 80, y: 75 },
];

export default function CodexSignalMap() {
  return (
    <div className="relative w-full max-w-2xl h-[360px] bg-gradient-to-br from-zinc-900 to-black rounded-xl shadow-lg overflow-hidden mx-auto p-4">
      <motion.h2
        className="text-xl text-white font-bold text-center mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Codex Signal Map
      </motion.h2>

      <div className="relative w-full h-full">
        {signals.map((s, idx) => (
          <motion.div
            key={idx}
            className="absolute px-3 py-1 text-xs bg-indigo-400/90 text-white rounded-full shadow-md backdrop-blur-sm cursor-pointer"
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.2, backgroundColor: '#6366f1' }}
          >
            {s.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
