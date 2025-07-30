// src/components/InnerTemple/PhilosophyRippleRadar.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

const PhilosophyRippleRadar: React.FC = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    let id = 0;
    const interval = setInterval(() => {
      const newRipple: Ripple = {
        id: id++,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 10 + Math.random() * 30,
        opacity: 0.6,
      };
      setRipples((prev) => [...prev, newRipple].slice(-10));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-indigo-900 via-purple-900 to-black rounded-lg overflow-hidden">
      {ripples.map(({ id, x, y, size, opacity }) => (
        <motion.div
          key={id}
          initial={{ opacity: opacity, scale: 0 }}
          animate={{ opacity: 0, scale: 1.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3, ease: 'easeOut' }}
          className="absolute rounded-full border border-purple-400"
          style={{
            width: size,
            height: size,
            top: `${y}%`,
            left: `${x}%`,
            marginLeft: -size / 2,
            marginTop: -size / 2,
          }}
        />
      ))}
    </div>
  );
};

export default PhilosophyRippleRadar;
