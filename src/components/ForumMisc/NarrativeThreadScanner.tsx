// src/components/ForumMisc/NarrativeThreadScanner.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const mockThreads = [
  'Cause & Effect Chain',
  'Moral Justification Pattern',
  'Contradiction Exposed',
  'Converging Perspectives',
  'Hidden Assumption Revealed',
];

export default function NarrativeThreadScanner() {
  const [currentThread, setCurrentThread] = useState('');
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const cycle = setInterval(() => {
      const next =
        mockThreads[Math.floor(Math.random() * mockThreads.length)];
      setCurrentThread(next);
      setHighlight(true);
      setTimeout(() => setHighlight(false), 3000);
    }, 12000); // Every 12 seconds simulate a new thread detection

    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto px-6 py-4 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg border border-cyan-500">
      <div className="flex items-center mb-2 text-cyan-300 font-semibold text-sm">
        <Sparkles className="mr-2 animate-pulse" size={18} />
        Narrative Thread Scanner
      </div>
      <motion.div
        key={currentThread}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-center text-base font-medium ${
          highlight ? 'text-yellow-300' : 'text-slate-300'
        }`}
      >
        {currentThread || 'Analyzing...'}
      </motion.div>
    </div>
  );
}
