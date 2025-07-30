// src/components/InnerTemple/InnerTemplePulseChime.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const InnerTemplePulseChime: React.FC = () => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-28 flex items-center justify-center">
      <motion.div
        className="w-28 h-28 rounded-full bg-indigo-600/30 absolute"
        animate={{
          scale: pulse ? 1.2 : 1,
          opacity: pulse ? 0.3 : 0.6,
        }}
        transition={{ duration: 3, ease: 'easeInOut' }}
      />
      <motion.div
        className="w-14 h-14 rounded-full bg-indigo-500 shadow-lg z-10"
        animate={{
          scale: pulse ? 1.05 : 1,
        }}
        transition={{ duration: 1.5 }}
      />
      <div className="absolute bottom-2 text-indigo-300 text-xs tracking-wide select-none">
        Pulse Chime Resonance
      </div>
    </div>
  );
};

export default InnerTemplePulseChime;
