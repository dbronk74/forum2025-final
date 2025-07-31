import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CodexLorePulseTracer: React.FC = () => {
  const [pulses, setPulses] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulses(prev => {
        const next = [...prev, Date.now()];
        return next.slice(-5); // keep only latest 5 pulses
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-64 bg-gradient-to-br from-indigo-900 to-zinc-900 rounded-lg shadow-inner overflow-hidden">
      <h2 className="text-white text-xl font-semibold mb-3 pl-4 pt-2">Lore Pulse Tracer</h2>
      <div className="relative w-full h-full">
        {(pulses ?? []).map((pulse, idx) => (
          <motion.div
            key={pulse}
            className="absolute rounded-full border border-purple-500"
            style={{
              width: '20px',
              height: '20px',
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
            }}
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 0, scale: 8 }}
            transition={{ duration: 2.5, ease: 'easeOut' }}
          />
        ))}
      </div>
    </div>
  );
};

export default CodexLorePulseTracer;
