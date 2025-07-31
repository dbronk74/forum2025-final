// src/components/InnerTemple/IdeaInspirationSpark.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sparkColors = ['#FFD700', '#FFA500', '#FF4500', '#FF6347'];

const IdeaInspirationSpark: React.FC = () => {
  const [sparks, setSparks] = useState<
    { id: number; x: number; y: number; color: string }[]
  >([]);

  useEffect(() => {
    let id = 0;
    const interval = setInterval(() => {
      const newSpark = {
        id: id++,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
      };
      setSparks((prev) => [...prev, newSpark].slice(-20));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-40 bg-zinc-900 rounded-lg overflow-hidden">
      {(sparks ?? []).map(({ id, x, y, color }) => (
        <motion.div
          key={id}
          className="absolute rounded-full"
          style={{
            width: 8,
            height: 8,
            backgroundColor: color,
            top: `${y}%`,
            left: `${x}%`,
            boxShadow: `0 0 8px 3px ${color}`,
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          onAnimationComplete={() =>
            setSparks((prev) => prev.filter((spark) => spark.id !== id))
          }
        />
      ))}
    </div>
  );
};

export default IdeaInspirationSpark;
