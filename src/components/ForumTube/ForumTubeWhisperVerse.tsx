// src/components/ForumMisc/ForumTubeWhisperVerse.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BsStars } from 'react-icons/bs';

type WhisperVerseProps = {
  lines?: string[];
  delay?: number; // seconds between lines
};

const defaultLines = [
  'In silence, the truth hums.',
  'Not all echoes are loud.',
  'What is whispered may last forever.',
  'The verse folds gently into the void.',
  'Even stardust remembers.'
];

export default function ForumTubeWhisperVerse({
  lines = defaultLines,
  delay = 4
}: WhisperVerseProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLineIndex((prev) => (prev + 1) % lines.length);
    }, delay * 1000);
    return () => clearInterval(interval);
  }, [lines, delay]);

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 px-4 text-center">
      <div className="relative bg-zinc-900/80 border border-indigo-500/20 rounded-xl shadow-md py-6 px-4">
        <BsStars className="mx-auto mb-3 text-indigo-400 animate-pulse" size={20} />
        <motion.p
          key={currentLineIndex}
          className="text-lg font-serif text-indigo-300 tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {lines[currentLineIndex]}
        </motion.p>
        <motion.div
          className="absolute inset-0 border border-indigo-400/10 rounded-xl pointer-events-none"
          animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.01, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    </div>
  );
}
