import React from 'react';
import { motion } from 'framer-motion';

export default function CosmicLoreSigil({ label = '∞', subtext = 'Lore Marker' }) {
  return (
    <motion.div
      className="relative flex items-center justify-center w-28 h-28 bg-gradient-to-br from-purple-800 via-indigo-700 to-black rounded-full shadow-xl border-2 border-indigo-400"
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, type: 'spring' }}
    >
      <motion.div
        className="text-4xl text-indigo-300 font-serif"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
      >
        {label}
      </motion.div>
      <div className="absolute bottom-[-1.2rem] text-xs text-indigo-400 font-mono tracking-wider">
        {subtext}
      </div>
    </motion.div>
  );
}
