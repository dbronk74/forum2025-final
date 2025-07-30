import React from 'react';
import { motion } from 'framer-motion';

const SanctumChronoSigilCircle: React.FC = () => {
  return (
    <motion.div
      className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center"
      initial={{ scale: 0.8, opacity: 0.5 }}
      animate={{ scale: [0.8, 1.05, 0.8], opacity: [0.5, 0.7, 0.5] }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="w-[500px] h-[500px] rounded-full border-4 border-dashed border-sky-400 opacity-30 animate-spin-slow blur-sm" />
    </motion.div>
  );
};

export default SanctumChronoSigilCircle;
