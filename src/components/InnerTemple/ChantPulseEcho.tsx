// src/components/InnerTemple/ChantPulseEcho.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ChantPulseEcho: React.FC = () => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-24 flex items-center justify-center">
      <motion.div
        className={`w-32 h-32 rounded-full bg-purple-700/40 absolute`}
        animate={{
          scale: pulse ? 1.3 : 1,
          opacity: pulse ? 0.4 : 0.8,
        }}
        transition={{ duration: 2.5, ease: 'easeInOut' }}
      />
      <motion.div
        className="w-16 h-16 rounded-full bg-purple-500 shadow-lg z-10"
        animate={{
          scale: pulse ? 1.05 : 1,
        }}
        transition={{ duration: 1.5 }}
      />
      <div className="absolute bottom-2 text-purple-300 text-xs tracking-wider">
        Chant Resonance Echo
      </div>
    </div>
  );
};

export default ChantPulseEcho;
