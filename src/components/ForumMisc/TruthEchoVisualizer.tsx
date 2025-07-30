// src/components/ForumMisc/TruthEchoVisualizer.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BsSoundwave } from 'react-icons/bs';

type TruthEcho = {
  phrase: string;
  resonanceLevel: number; // 0 to 100
};

const mockData: TruthEcho = {
  phrase: 'Healthcare is a human right.',
  resonanceLevel: 87,
};

export default function TruthEchoVisualizer() {
  const [echo, setEcho] = useState<TruthEcho>(mockData);

  useEffect(() => {
    // Simulated dynamic fluctuation
    const interval = setInterval(() => {
      setEcho((prev) => ({
        ...prev,
        resonanceLevel: Math.max(0, Math.min(100, prev.resonanceLevel + (Math.random() * 10 - 5))),
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-zinc-900 border border-green-600 rounded-xl p-5 shadow-lg text-white max-w-md mx-auto mt-6 relative">
      <div className="flex items-center space-x-2 mb-2">
        <BsSoundwave className="text-green-400" size={20} />
        <h3 className="text-sm font-semibold uppercase tracking-wide text-green-300">
          Truth Echo Visualizer
        </h3>
      </div>

      <p className="text-sm text-zinc-300 italic mb-4">&ldquo;{echo.phrase}&rdquo;</p>

      <div className="w-full h-4 bg-zinc-700 rounded-full overflow-hidden relative mb-2">
        <motion.div
          className="h-full bg-gradient-to-r from-green-400 to-green-600"
          animate={{ width: `${echo.resonanceLevel}%` }}
          transition={{ duration: 0.6 }}
        />
      </div>

      <div className="text-right text-green-400 text-xs font-bold">
        Resonance: {echo.resonanceLevel.toFixed(1)}%
      </div>

      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-green-400/10 pointer-events-none"
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.02, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
