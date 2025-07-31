import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Signal {
  type: string;
  strength: number;
  interpretation: string;
}

const mockSignals: Signal[] = [
  { type: 'Clarity Spike', strength: 82, interpretation: 'A strong argument has clarified a central issue.' },
  { type: 'Moral Dissonance', strength: 64, interpretation: 'Conflicting values are emerging in real-time.' },
  { type: 'Empathy Surge', strength: 71, interpretation: 'An emotional appeal has shifted audience resonance.' },
  { type: 'Socratic Loop', strength: 55, interpretation: 'Repeated questioning is exposing assumptions.' },
];

const CompassSignalInterpreter: React.FC = () => {
  const [signals, setSignals] = useState<Signal[]>([]);

  useEffect(() => {
    // Simulate loading incoming signals
    const interval = setInterval(() => {
      const randomSignal = mockSignals[Math.floor(Math.random() * mockSignals.length)];
      setSignals((prev) => [randomSignal, ...prev.slice(0, 4)]); // keep latest 5
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-zinc-900 border border-zinc-700 p-4 rounded-lg w-full max-w-xl mx-auto shadow-md">
      <h3 className="text-lg font-semibold text-zinc-100 mb-3">Signal Interpreter</h3>
      <div className="space-y-3">
        {(signals ?? []).map((signal, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-zinc-800 p-3 rounded-md border-l-4"
            style={{ borderColor: signal.strength > 70 ? '#00FFAA' : '#FFAA00' }}
          >
            <div className="text-zinc-100 font-medium">{signal.type}</div>
            <div className="text-xs text-zinc-400 italic mb-1">{signal.interpretation}</div>
            <div className="text-sm text-zinc-300">Strength: {signal.strength}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompassSignalInterpreter;
