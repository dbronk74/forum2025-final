import React from 'react';
import { motion } from 'framer-motion';

export default function FactionSanctumAuraFlare() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: [0.2, 0.4, 0.2], scale: [0.9, 1.05, 0.9] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
    >
      <svg width="320" height="320" viewBox="0 0 320 320">
        <defs>
          <radialGradient id="flare" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff8800" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff8800" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="160" cy="160" r="150" fill="url(#flare)" />
      </svg>
    </motion.div>
  );
}
