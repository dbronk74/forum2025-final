// src/components/Gauntlet/GauntletRebuttalTracker.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Rebuttal {
  id: string;
  speaker: string;
  statement: string;
  timestamp: string;
  clarityScore: number;
}

const mockRebuttals: Rebuttal[] = [
  {
    id: 'r1',
    speaker: 'Contender A',
    statement: 'That conclusion overlooks the nuance of the original claim.',
    timestamp: '00:04:12',
    clarityScore: 8.6,
  },
  {
    id: 'r2',
    speaker: 'Contender B',
    statement: 'Your interpretation of the data is flawed — here’s why...',
    timestamp: '00:05:02',
    clarityScore: 7.9,
  },
];

const GauntletRebuttalTracker: React.FC = () => {
  const [rebuttals, setRebuttals] = useState<Rebuttal[]>([]);

  useEffect(() => {
    // Replace with live feed via WebSocket/Redux in production
    setRebuttals(mockRebuttals);
  }, []);

  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-indigo-300 mb-4">Rebuttal Tracker</h2>
      <div className="space-y-4 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-600">
        {(rebuttals ?? []).map((rebuttal) => (
          <motion.div
            key={rebuttal.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-zinc-800 p-4 rounded-md border-l-4 border-indigo-500"
          >
            <div className="flex justify-between text-sm text-zinc-400 mb-1">
              <span>{rebuttal.speaker}</span>
              <span>{rebuttal.timestamp}</span>
            </div>
            <p className="text-zinc-100 text-base">{rebuttal.statement}</p>
            <div className="mt-2 text-xs text-indigo-400">
              Clarity Score: {(rebuttal.clarityScore ?? 0).toFixed(1)}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GauntletRebuttalTracker;
