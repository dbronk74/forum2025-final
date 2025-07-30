import React from 'react';
import { motion } from 'framer-motion';

interface GlyphPulseProps {
  glyph?: string;
  color?: string;
}

export default function CodexGlyphPulse({
  glyph = '⟁',
  color = '#a855f7', // Tailwind violet-500
}: GlyphPulseProps) {
  return (
    <div className="relative flex items-center justify-center h-64 w-64 mx-auto">
      {[...Array(3)].map((_, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full border-2"
          style={{ borderColor: color }}
          initial={{ scale: 0.5, opacity: 0.8 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: idx * 0.6,
            ease: 'easeOut',
          }}
        />
      ))}

      <motion.div
        className="text-6xl font-bold"
        initial={{ scale: 0.8 }}
        animate={{ scale: [1, 1.15, 1], rotate: [0, 2, -2, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        style={{ color }}
      >
        {glyph}
      </motion.div>
    </div>
  );
}
