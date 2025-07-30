import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Sigil = {
  id: number;
  label: string;
};

const sampleSigils: Sigil[] = [
  { id: 1, label: '🜂' },
  { id: 2, label: '☿' },
  { id: 3, label: '✶' },
  { id: 4, label: '⚝' },
  { id: 5, label: '✦' },
  { id: 6, label: '⟡' },
];

const CodexLoreSigilDisplay: React.FC = () => {
  const [visibleSigils, setVisibleSigils] = useState<Sigil[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSigil = sampleSigils[Math.floor(Math.random() * sampleSigils.length)];
      setVisibleSigils(prev => {
        const next = [...prev, { ...newSigil, id: Date.now() }];
        return next.slice(-6); // keep latest 6
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-purple-800 to-indigo-900 text-white rounded-lg p-4 shadow-md h-40 overflow-hidden">
      <h2 className="text-xl font-semibold mb-2">Codex Sigils in Resonance</h2>
      <div className="flex gap-4 flex-wrap items-center justify-start">
        {visibleSigils.map((sigil) => (
          <motion.div
            key={sigil.id}
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.3, rotate: 15 }}
            transition={{ duration: 0.6 }}
            className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg"
          >
            {sigil.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CodexLoreSigilDisplay;
