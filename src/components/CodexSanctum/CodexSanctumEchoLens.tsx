import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type EchoPulse = {
  id: number;
  x: number;
  y: number;
  size: number;
};

const generateRandomPulse = (): EchoPulse => ({
  id: Date.now(),
  x: Math.random() * 90,
  y: Math.random() * 90,
  size: Math.random() * 40 + 20,
});

const CodexSanctumEchoLens: React.FC = () => {
  const [pulses, setPulses] = useState<EchoPulse[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPulse = generateRandomPulse();
      setPulses(prev => [...prev, newPulse].slice(-10));
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-80 max-w-3xl mx-auto bg-gradient-to-br from-zinc-900 to-black border border-indigo-700 rounded-xl p-6 shadow-xl overflow-hidden">
      <h2 className="text-center text-indigo-300 text-xl font-bold mb-2">Codex Sanctum Echo Lens</h2>
      <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
        <AnimatePresence>
          {pulses.map(pulse => (
            <motion.div
              key={pulse.id}
              className="absolute bg-indigo-400/30 rounded-full border border-indigo-500 shadow-lg"
              style={{
                left: `${pulse.x}%`,
                top: `${pulse.y}%`,
                width: `${pulse.size}px`,
                height: `${pulse.size}px`,
              }}
              initial={{ scale: 0.3, opacity: 0.6 }}
              animate={{ scale: 1.8, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3, ease: 'easeOut' }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CodexSanctumEchoLens;
