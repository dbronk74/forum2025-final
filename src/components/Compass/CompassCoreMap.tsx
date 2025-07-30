import React from 'react';
import { motion } from 'framer-motion';
import { Target, CircleDot, MoveDiagonal } from 'lucide-react';

const coreRings = [
  { size: 'w-16 h-16', color: 'border-cyan-400' },
  { size: 'w-28 h-28', color: 'border-amber-400' },
  { size: 'w-40 h-40', color: 'border-pink-400' },
  { size: 'w-52 h-52', color: 'border-indigo-400' },
];

const CompassCoreMap: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-slate-800 border border-slate-600 rounded-2xl shadow-xl">
      {coreRings.map((ring, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full border ${ring.size} ${ring.color}`}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 * index, type: 'spring', stiffness: 200 }}
        />
      ))}

      <motion.div
        className="z-10 bg-white rounded-full p-1 shadow-md"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <CircleDot size={24} className="text-black" />
      </motion.div>

      <motion.div
        className="absolute bottom-3 right-3 text-xs text-slate-400 flex items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <MoveDiagonal size={12} />
        Core Alignment Matrix
      </motion.div>

      <motion.div
        className="absolute top-3 left-3 text-xs uppercase tracking-widest text-indigo-300"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        COMPASS CORE
      </motion.div>
    </div>
  );
};

export default CompassCoreMap;
