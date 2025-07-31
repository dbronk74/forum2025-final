import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SpectatorPulsePanel() {
  const [pulses, setPulses] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPulse = Math.floor(Math.random() * 100);
      setPulses((prev) => [...prev.slice(-20), newPulse]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 w-64 bg-zinc-900/80 border border-indigo-700 rounded-lg shadow-md p-4 text-white z-50">
      <h3 className="text-sm font-semibold text-indigo-300 mb-3">Spectator Pulse</h3>
      <div className="flex items-end gap-[2px] h-24">
        {(pulses ?? []).map((val, i) => (
          <motion.div
            key={i}
            className="w-[5%] bg-indigo-500 rounded-sm"
            style={{ height: `${val}%` }}
            initial={{ scaleY: 0.4, opacity: 0.3 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
      <div className="mt-2 text-xs text-right text-slate-400 italic">
        Live emotional response feed
      </div>
    </div>
  );
}
