import React from 'react';
import { motion } from 'framer-motion';

interface CodexLoreGlyphSparkProps {
  glyph?: string;
  size?: number;
  delay?: number;
}

export default function CodexLoreGlyphSpark({
  glyph = '✶',
  size = 32,
  delay = 0,
}: CodexLoreGlyphSparkProps) {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full shadow-lg text-indigo-300 font-semibold"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.6,
        backgroundColor: 'rgba(79, 70, 229, 0.1)', // indigo-600/10
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1.2, opacity: 1 }}
      transition={{ delay, duration: 0.8, ease: 'easeOut' }}
    >
      {glyph}
      <div
        className="absolute rounded-full blur-2xl"
        style={{
          width: size * 1.5,
          height: size * 1.5,
          backgroundColor: 'rgba(165, 180, 252, 0.15)', // indigo-300/15
        }}
      />
    </motion.div>
  );
}
