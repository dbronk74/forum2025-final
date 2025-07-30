import React from 'react';
import { motion } from 'framer-motion';

const SanctumLorePulseEmitter: React.FC = () => {
  return (
    <div className="relative w-full h-40 flex items-center justify-center overflow-hidden bg-black rounded-2xl shadow-inner">
      <motion.div
        className="absolute rounded-full border-4 border-indigo-500"
        initial={{ scale: 0.5, opacity: 0.6 }}
        animate={{ scale: [1, 1.5, 2], opacity: [0.6, 0.3, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{ width: 100, height: 100 }}
      />
      <div className="z-10 text-indigo-300 text-xl font-semibold">
        Lore Pulse Active
      </div>
    </div>
  );
};

export default SanctumLorePulseEmitter;
