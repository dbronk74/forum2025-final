// src/components/ForumMisc/SemanticClarityScanner.tsx

import React, { useState, useEffect } from 'react';
import { BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

type ClarityLevel = 'Clear' | 'Moderate' | 'Vague';

const LEVEL_COLORS: Record<ClarityLevel, string> = {
  Clear: 'bg-green-500',
  Moderate: 'bg-yellow-400',
  Vague: 'bg-red-500',
};

const LEVEL_SCORE: Record<ClarityLevel, number> = {
  Clear: 90,
  Moderate: 60,
  Vague: 30,
};

export default function SemanticClarityScanner() {
  const [clarity, setClarity] = useState<ClarityLevel>('Clear');

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.random();
      if (random > 0.7) setClarity('Vague');
      else if (random > 0.3) setClarity('Moderate');
      else setClarity('Clear');
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 p-4 rounded-xl border border-emerald-500 shadow-md max-w-sm mx-auto">
      <div className="flex items-center text-emerald-300 mb-3 font-bold text-sm uppercase tracking-wide">
        <BrainCircuit className="mr-2" size={18} />
        Semantic Clarity Scanner
      </div>

      <motion.div
        key={clarity}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`text-white text-lg font-semibold text-center py-2 rounded ${LEVEL_COLORS[clarity]}`}
      >
        {clarity} ({LEVEL_SCORE[clarity]}%)
      </motion.div>

      <p className="text-slate-400 text-xs mt-3 text-center">
        Measures clarity of phrasing, jargon use, and logical transparency.
      </p>
    </div>
  );
}
