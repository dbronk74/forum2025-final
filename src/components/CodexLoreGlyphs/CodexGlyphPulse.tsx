import React from 'react';
import { motion } from 'framer-motion';

export default function CodexGlyphPulse() {
  return (
    <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
      {/* Glowing base pulse */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full border-2 border-indigo-500"
          initial={{ scale: 0.4, opacity: 0.6 }}
          animate={{ scale: 1.8 + i * 0.2, opacity: 0 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Central glyph */}
      <div className="z-10 text-4xl text-indigo-300 font-semibold select-none">
        ✶
      </div>

      {/* Aura glow */}
      <div className="absolute w-24 h-24 rounded-full bg-indigo-500/20 blur-2xl" />
    </div>
  );
}
