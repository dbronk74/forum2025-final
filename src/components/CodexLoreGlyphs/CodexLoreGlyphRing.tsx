import React from 'react';
import { motion } from 'framer-motion';

const glyphs = ['𓂀', '∞', '✡', '☯', '⚛', '⟁', '⧉', '✶'];

export default function CodexLoreGlyphRing() {
  const radius = 100;
  const center = 128;

  return (
    <div className="relative w-64 h-64 mx-auto">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 256 256" className="w-full h-full">
          {(glyphs ?? []).map((glyph, idx) => {
            const angle = (360 / glyphs.length) * idx;
            const radians = (angle * Math.PI) / 180;
            const x = center + radius * Math.cos(radians);
            const y = center + radius * Math.sin(radians);
            return (
              <text
                key={idx}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-indigo-300 text-xl font-serif"
              >
                {glyph}
              </text>
            );
          })}
        </svg>
      </motion.div>

      {/* Central core glyph */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]">
        ☉
      </div>
    </div>
  );
}
