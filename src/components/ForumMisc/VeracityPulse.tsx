// src/components/ForumMisc/VeracityPulse.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GiHeartInside } from 'react-icons/gi';

export default function VeracityPulse() {
  const [pulse, setPulse] = useState(78); // Simulated credibility percentage (0–100)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => {
        const change = Math.random() * 6 - 3;
        return Math.max(0, Math.min(100, prev + change));
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const pulseColor =
    pulse > 75 ? 'bg-green-500' :
    pulse > 45 ? 'bg-yellow-400' :
    'bg-red-500';

  return (
    <div className="relative w-full max-w-sm mx-auto mt-6 bg-zinc-900 border border-emerald-500/30 rounded-xl p-4 shadow-lg text-white">
      <div className="flex items-center mb-2 space-x-2">
        <GiHeartInside className="text-emerald-300 animate-ping-slow" size={20} />
        <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
          Veracity Pulse
        </h3>
      </div>

      <div className="w-full h-3 bg-zinc-700 rounded-full overflow-hidden relative mb-2">
        <motion.div
          className={`h-full ${pulseColor}`}
          animate={{ width: `${pulse}%` }}
          transition={{ duration: 0.7 }}
        />
      </div>

      <div className="text-right text-sm text-emerald-300 font-mono">
        {pulse.toFixed(0)}%
      </div>

      <motion.div
        className="absolute inset-0 border border-emerald-400/10 rounded-xl pointer-events-none"
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.01, 1] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
