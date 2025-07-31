// src/components/ForumMisc/RhetoricalFallacyScanner.tsx

import React, { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

type Fallacy = {
  type: string;
  severity: 'low' | 'medium' | 'high';
  detectedAt: number; // timestamp in ms
};

const FALLACY_COLORS: Record<string, string> = {
  low: 'bg-yellow-400',
  medium: 'bg-orange-500',
  high: 'bg-red-600',
};

const SAMPLE_FALLACIES = [
  'Straw Man',
  'Ad Hominem',
  'False Dilemma',
  'Appeal to Emotion',
  'Slippery Slope',
  'Red Herring',
  'Circular Reasoning',
];

function getRandomFallacy(): Fallacy {
  const type = SAMPLE_FALLACIES[Math.floor(Math.random() * SAMPLE_FALLACIES.length)];
  const severity = ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as
    | 'low'
    | 'medium'
    | 'high';
  return { type, severity, detectedAt: Date.now() };
}

export default function RhetoricalFallacyScanner() {
  const [fallacies, setFallacies] = useState<Fallacy[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newFallacy = getRandomFallacy();
      setFallacies(prev => [...prev.slice(-4), newFallacy]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 p-4 rounded-lg shadow border border-red-400 max-w-xl mx-auto">
      <div className="flex items-center text-red-300 mb-2 text-sm font-bold uppercase tracking-wide">
        <AlertTriangle className="mr-2" size={18} />
        Rhetorical Fallacy Scanner
      </div>
      <ul className="space-y-2">
        {(fallacies ?? []).map((f, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex justify-between items-center px-3 py-2 rounded-md text-sm text-slate-100 ${FALLACY_COLORS[f.severity]}`}
          >
            <span>{f.type}</span>
            <span className="text-xs italic opacity-80">{f.severity.toUpperCase()}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
