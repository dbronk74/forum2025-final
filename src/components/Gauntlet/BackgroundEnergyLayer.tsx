// src/components/Gauntlet/BackgroundEnergyLayer.tsx

import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEnergyLayer: React.FC = () => {
  const particleCount = 25;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-10 blur"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0.5 + Math.random(),
            opacity: 0.1 + Math.random() * 0.3,
          }}
          animate={{
            y: ['0%', '100%'],
            opacity: [0.2, 0.05],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundEnergyLayer;
