// src/components/InnerTemple/MantraSigilEmitter.tsx

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sigils = ['✦', '❖', '✶', '☯', '♆', '⚘', '☾', '★'];

const MantraSigilEmitter: React.FC = () => {
  const [activeSigils, setActiveSigils] = useState<
    { id: number; symbol: string; x: number; y: number }[]
  >([]);

  useEffect(() => {
    let id = 0;
    const interval = setInterval(() => {
      const newSigil = {
        id: id++,
        symbol: sigils[Math.floor(Math.random() * sigils.length)],
        x: Math.random() * 90 + 5,
        y: Math.random() * 70 + 10,
      };
      setActiveSigils((prev) => [...prev, newSigil].slice(-15));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 bg-zinc-900 rounded-lg overflow-hidden select-none">
      <AnimatePresence>
        {(activeSigils ?? []).map(({ id, symbol, x, y }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 2 }}
            className="absolute text-white text-2xl font-bold"
            style={{
              top: `${y}%`,
              left: `${x}%`,
              userSelect: 'none',
              pointerEvents: 'none',
              textShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default MantraSigilEmitter;
