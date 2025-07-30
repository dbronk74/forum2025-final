import React from 'react';
import { motion } from 'framer-motion';

interface CodexLoreGlyphOrbProps {
  glyph?: string;
  size?: number;
  glowColor?: string;
}

export default function CodexLoreGlyphOrb({
  glyph = '𓂀',
  size = 96,
  glowColor = 'indigo',
}: CodexLoreGlyphOrbProps) {
  return (
    <motion.div
      className={`rounded-full flex items-center justify-center shadow-lg`}
      style={{
        width: size,
        height: size,
        backgroundColor: 'rgba(30, 41, 59, 0.8)', // slate-800 background
      }}
      initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <div
        className={`text-4xl text-${glowColor}-300 drop-shadow-[0_0_8px_rgba(99,102,241,0.7)] font-serif`}
      >
        {glyph}
      </div>
      <div
        className={`absolute w-[${size * 1.4}px] h-[${size * 1.4}px] rounded-full bg-${glowColor}-500/10 blur-2xl pointer-events-none`}
      />
    </motion.div>
  );
}
