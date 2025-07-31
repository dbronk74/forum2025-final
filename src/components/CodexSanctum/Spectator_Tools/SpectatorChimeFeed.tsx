import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sampleChimes = ['👏', '🔥', '🤯', '💡', '😱', '💬', '🔔'];

interface Chime {
  id: number;
  symbol: string;
  left: number;
}

export default function SpectatorChimeFeed() {
  const [chimes, setChimes] = useState<Chime[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newChime: Chime = {
        id: Date.now(),
        symbol: sampleChimes[Math.floor(Math.random() * sampleChimes.length)],
        left: Math.random() * 80 + 10, // 10%–90% horizontally
      };
      setChimes((prev) => [...prev.slice(-10), newChime]);
    }, 2500); // every 2.5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-40">
      <AnimatePresence>
        {(chimes ?? []).map((chime) => (
          <motion.div
            key={chime.id}
            className="absolute text-xl"
            style={{ left: `${chime.left}%`, bottom: '0%' }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -120 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: 'easeOut' }}
          >
            <span className="drop-shadow text-white">{chime.symbol}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
