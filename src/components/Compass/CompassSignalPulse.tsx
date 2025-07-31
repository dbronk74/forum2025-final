import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PulseSignal {
  id: string;
  intensity: number; // 0–100
  tone: 'logic' | 'emotion' | 'dissonance' | 'clarity';
}

const toneColors: Record<string, string> = {
  logic: '#4FD1C5',
  emotion: '#F687B3',
  dissonance: '#F6E05E',
  clarity: '#9AE6B4',
};

const generateRandomSignal = (): PulseSignal => ({
  id: crypto.randomUUID(),
  intensity: Math.floor(Math.random() * 70 + 30),
  tone: ['logic', 'emotion', 'dissonance', 'clarity'][Math.floor(Math.random() * 4)] as PulseSignal['tone'],
});

const CompassSignalPulse: React.FC = () => {
  const [pulses, setPulses] = useState<PulseSignal[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSignal = generateRandomSignal();
      setPulses((prev) => [...prev, newSignal]);
      setTimeout(() => {
        setPulses((prev) => prev.filter((p) => p.id !== newSignal.id));
      }, 1800);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800 shadow-inner">
      <AnimatePresence>
        {(pulses ?? []).map((pulse) => (
          <motion.div
            key={pulse.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: pulse.intensity / 50 }}
            exit={{ opacity: 0, scale: 1.4 }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
            className="absolute w-8 h-8 rounded-full"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              backgroundColor: toneColors[pulse.tone],
              boxShadow: `0 0 10px ${toneColors[pulse.tone]}`,
              mixBlendMode: 'screen',
            }}
          />
        ))}
      </AnimatePresence>
      <div className="absolute bottom-2 left-2 text-xs text-zinc-400 font-mono">Live Signal Pulse</div>
    </div>
  );
};

export default CompassSignalPulse;
