import React from 'react';
import { motion } from 'framer-motion';

export default function PulseGlowFloorLayer() {
  return (
    <motion.div
      className="absolute inset-0 z-0 pointer-events-none"
      initial={{ opacity: 0.3, scale: 0.95 }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        scale: [0.95, 1.05, 0.95],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-gradient-to-tr from-yellow-400/20 via-orange-500/30 to-pink-500/20 blur-3xl" />
    </motion.div>
  );
}
