import React from 'react';
import { motion } from 'framer-motion';

export default function SoftFogOverlay() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-0"
      initial={{ opacity: 0.2 }}
      animate={{ opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="absolute w-full h-full bg-gradient-to-tr from-slate-700/20 via-white/10 to-slate-900/30 blur-2xl animate-pulse-slow mix-blend-soft-light" />
    </motion.div>
  );
}
