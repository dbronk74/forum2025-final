import React from 'react';
import { motion } from 'framer-motion';

interface CodexLoreSigilDisplayProps {
  sigilName?: string;
  glowing?: boolean;
}

export default function CodexLoreSigilDisplay({
  sigilName = 'The Spiral Eye',
  glowing = true,
}: CodexLoreSigilDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center text-white p-6">
      <motion.div
        className={`w-32 h-32 rounded-full border-4 flex items-center justify-center text-center text-sm px-4 ${
          glowing ? 'border-indigo-500 shadow-[0_0_20px_5px_rgba(99,102,241,0.5)] animate-pulse' : 'border-gray-600'
        }`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {sigilName}
      </motion.div>
      <p className="mt-3 text-indigo-300 text-xs italic">Codex Sigil Manifested</p>
    </div>
  );
}
