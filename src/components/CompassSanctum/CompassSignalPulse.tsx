import React from 'react';
import { motion } from 'framer-motion';
import { FaCircle } from 'react-icons/fa';

const pulseVariants = {
  animate: {
    scale: [1, 1.3, 1],
    opacity: [0.8, 0.4, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const CompassSignalPulse: React.FC = () => {
  return (
    <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
      {/* Outer Pulse */}
      <motion.div
        className="absolute w-44 h-44 rounded-full bg-yellow-300 opacity-20 blur-3xl"
        variants={pulseVariants}
        animate="animate"
      />

      {/* Inner Pulse */}
      <motion.div
        className="absolute w-28 h-28 rounded-full bg-yellow-500 opacity-30 blur-2xl"
        variants={pulseVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      />

      {/* Core Signal Dot */}
      <div className="relative z-10 w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg border-4 border-white/10">
        <FaCircle className="text-white text-opacity-80" size={18} />
      </div>
    </div>
  );
};

export default CompassSignalPulse;
