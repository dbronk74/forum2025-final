import React from 'react';
import { motion } from 'framer-motion';
import { FaRegCircle } from 'react-icons/fa';

const CompassSanctumOrb: React.FC = () => {
  return (
    <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
      {/* Pulsing Glow */}
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-indigo-600 opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Orb Core */}
      <motion.div
        className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-br from-yellow-300 via-orange-500 to-pink-600 shadow-2xl border-4 border-white/20"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-center h-full text-white text-3xl">
          <FaRegCircle />
        </div>
      </motion.div>
    </div>
  );
};

export default CompassSanctumOrb;
