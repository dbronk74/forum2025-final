// src/components/InnerTemple/InnerTempleSanctifierLens.tsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InnerTempleSanctifierLens: React.FC = () => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-48 h-48 mx-auto rounded-full bg-gradient-to-tr from-indigo-700 via-purple-700 to-pink-700 shadow-lg flex items-center justify-center select-none">
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-white/30"
        animate={{
          boxShadow: pulse
            ? '0 0 20px 8px rgba(168, 85, 247, 0.7)'
            : '0 0 10px 4px rgba(168, 85, 247, 0.3)',
        }}
        transition={{ duration: 3, ease: 'easeInOut' }}
      />
      <motion.div
        className="relative w-24 h-24 rounded-full bg-white/20 backdrop-blur-md"
        animate={{
          scale: pulse ? 1.05 : 1,
          opacity: pulse ? 1 : 0.85,
        }}
        transition={{ duration: 3, ease: 'easeInOut' }}
      >
        <div className="flex items-center justify-center h-full text-purple-300 font-semibold text-lg select-none">
          Sanctifier Lens
        </div>
      </motion.div>
    </div>
  );
};

export default InnerTempleSanctifierLens;
