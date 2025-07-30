// src/components/Gauntlet/GauntletSpectatorFlare.tsx

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Flare {
  id: string;
  type: 'boost' | 'shock' | 'applause';
  x: number;
  y: number;
}

const flareColors = {
  boost: 'bg-blue-500',
  shock: 'bg-red-500',
  applause: 'bg-yellow-400',
};

const GauntletSpectatorFlare: React.FC = () => {
  const [flares, setFlares] = useState<Flare[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const types: Flare['type'][] = ['boost', 'shock', 'applause'];
      const newFlare: Flare = {
        id: Math.random().toString(36).substring(2),
        type: types[Math.floor(Math.random() * types.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
      };
      setFlares((prev) => [...prev, newFlare]);

      // Remove after animation
      setTimeout(() => {
        setFlares((prev) => prev.filter((f) => f.id !== newFlare.id));
      }, 1000);
    }, 1200); // Flare pulse interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-40">
      <AnimatePresence>
        {flares.map((flare) => (
          <motion.div
            key={flare.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={`absolute w-4 h-4 rounded-full ${flareColors[flare.type]} shadow-lg`}
            style={{
              top: `${flare.y}%`,
              left: `${flare.x}%`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default GauntletSpectatorFlare;
