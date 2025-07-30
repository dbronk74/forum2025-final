// src/components/Oracle/OracleLightGlyphs.tsx
import React from 'react';
import { motion } from 'framer-motion';

const shimmerVariants = {
  animate: {
    x: ['-100%', '100%'],
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: 'easeInOut',
    },
  },
};

const OracleLightGlyphs: React.FC = () => {
  return (
    <div className="relative w-full h-24 overflow-hidden bg-slate-800 rounded-xl shadow-md border border-indigo-600/30">
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-20"
        variants={shimmerVariants}
        animate="animate"
      />
      <div className="relative z-10 w-full h-full flex items-center justify-center text-indigo-300 text-2xl font-bold tracking-wider">
        ✦ Oracle Channel ✦
      </div>
    </div>
  );
};

export default OracleLightGlyphs;
