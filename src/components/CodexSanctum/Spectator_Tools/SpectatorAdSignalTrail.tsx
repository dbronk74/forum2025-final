import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Signal {
  id: number;
  x: number;
  y: number;
  color: string;
}

export default function SpectatorAdSignalTrail() {
  const [signals, setSignals] = useState<Signal[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSignal: Signal = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: ['yellow', 'cyan', 'lime'][Math.floor(Math.random() * 3)],
      };
      setSignals((prev) => [...prev.slice(-8), newSignal]); // keep last 8
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-40">
      {signals.map((signal) => (
        <motion.div
          key={signal.id}
          className={`absolute w-3 h-3 rounded-full bg-${signal.color}-400 shadow-md`}
          style={{
            left: `${signal.x}%`,
            top: `${signal.y}%`,
          }}
          initial={{ scale: 0.6, opacity: 0.8 }}
          animate={{ scale: 1.4, opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
}
