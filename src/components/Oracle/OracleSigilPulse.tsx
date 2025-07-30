// src/components/Oracle/OracleSigilPulse.tsx
import React from 'react';
import { motion } from 'framer-motion';

const OracleSigilPulse: React.FC = () => {
  return (
    <motion.div
      className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-xl"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="w-full h-full flex items-center justify-center text-indigo-400 text-xl font-bold tracking-wider">
        占
      </div>
    </motion.div>
  );
};

export default OracleSigilPulse;
