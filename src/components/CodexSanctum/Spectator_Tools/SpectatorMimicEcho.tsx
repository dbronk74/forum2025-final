import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Echo {
  id: number;
  x: number;
  y: number;
  color: string;
}

export default function SpectatorMimicEcho() {
  const [echoes, setEchoes] = useState<Echo[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newEcho: Echo = {
        id: Date.now(),
        x: Math.random() * 90 + 5, // 5% to 95%
        y: Math.random() * 60 + 20, // avoid top/bottom edges
        color: ['cyan', 'violet', 'emerald'][Math.floor(Math.random() * 3)],
      };
      setEchoes((prev) => [...prev.slice(-8), newEcho]);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      <AnimatePresence>
        {echoes.map((echo) => (
          <motion.div
            key={echo.id}
            className={`absolute rounded-full border-2 border-${echo.color}-400`}
            style={{
              left: `${echo.x}%`,
              top: `${echo.y}%`,
              width: '20px',
              height: '20px',
            }}
            initial={{ scale: 0.5, opacity: 0.8 }}
            animate={{ scale: 3.2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.4, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
