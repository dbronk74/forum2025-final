import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CodexTemporalInfusion() {
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCount((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-64 h-64 mx-auto flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-zinc-800 rounded-full border border-indigo-700 shadow-inner">
      <div className="absolute z-10 text-indigo-300 text-center text-sm font-mono tracking-widest">
        Temporal<br />Infusion
        <div className="mt-1 text-xs text-slate-400">Cycle #{pulseCount}</div>
      </div>

      {[...Array(3)].map((_, idx) => (
        <motion.div
          key={`${pulseCount}-${idx}`}
          className="absolute w-full h-full rounded-full border border-indigo-500"
          initial={{ scale: 0.5, opacity: 0.4 }}
          animate={{ scale: 1.4 + idx * 0.2, opacity: 0 }}
          transition={{
            duration: 3,
            ease: 'easeOut',
            delay: idx * 0.4,
          }}
        />
      ))}
    </div>
  );
}
