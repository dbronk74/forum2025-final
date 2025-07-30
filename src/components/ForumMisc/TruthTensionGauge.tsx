// src/components/ForumMisc/TruthTensionGauge.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RiAlertLine } from 'react-icons/ri';

export default function TruthTensionGauge() {
  const [tension, setTension] = useState(62); // Simulated initial tension level (0–100)

  useEffect(() => {
    const interval = setInterval(() => {
      setTension((prev) => {
        const change = (Math.random() * 8 - 4);
        return Math.max(0, Math.min(100, prev + change));
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const tensionColor =
    tension < 30 ? 'bg-green-500' :
    tension < 70 ? 'bg-yellow-400' :
    'bg-red-500';

  return (
    <div className="bg-zinc-900 border border-red-600/40 rounded-xl p-4 shadow-lg text-white max-w-xs mx-auto mt-6 relative">
      <div className="flex items-center mb-2 space-x-2">
        <RiAlertLine className="text-red-400 animate-pulse" size={20} />
        <h3 className="text-sm font-semibold uppercase tracking-wide text-red-300">
          Truth Tension Gauge
        </h3>
      </div>

      <div className="w-full h-3 bg-zinc-700 rounded-full overflow-hidden relative mb-2">
        <motion.div
          className={`h-full ${tensionColor}`}
          animate={{ width: `${tension}%` }}
          transition={{ duration: 0.6 }}
        />
      </div>

      <div className="text-right text-sm text-red-300 font-mono">
        {tension.toFixed(0)}%
      </div>

      <motion.div
        className="absolute inset-0 rounded-xl border border-red-500/10 pointer-events-none"
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.01, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
