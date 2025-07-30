// src/components/Gauntlet/GauntletSpectatorGlyphPulse.tsx

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

interface GlyphPulse {
  id: string;
  symbol: string;
  color: string;
  x: number;
  y: number;
}

const glyphSymbols = ['✦', '☼', '✺', '❂', '☯', '✶', '⚡', '❖'];

const GauntletSpectatorGlyphPulse: React.FC = () => {
  const [pulses, setPulses] = useState<GlyphPulse[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPulse: GlyphPulse = {
        id: uuidv4(),
        symbol: glyphSymbols[Math.floor(Math.random() * glyphSymbols.length)],
        color: `hsl(${Math.floor(Math.random() * 360)}, 80%, 65%)`,
        x: Math.random() * 90,
        y: Math.random() * 90,
      };

      setPulses((prev) => [...prev, newPulse]);

      setTimeout(() => {
        setPulses((prev) => prev.filter((p) => p.id !== newPulse.id));
      }, 2000);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
      <AnimatePresence>
        {pulses.map((pulse) => (
          <motion.div
            key={pulse.id}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute text-white text-xl font-bold"
            style={{
              top: `${pulse.y}%`,
              left: `${pulse.x}%`,
              color: pulse.color,
              textShadow: '0 0 6px rgba(255,255,255,0.6)',
            }}
          >
            {pulse.symbol}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default GauntletSpectatorGlyphPulse;
