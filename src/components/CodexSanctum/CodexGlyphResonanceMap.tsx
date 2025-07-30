import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface GlyphNode {
  id: string;
  symbol: string;
  x: number;
  y: number;
  intensity: number;
}

const generateRandomGlyphs = (count: number): GlyphNode[] => {
  const glyphs = ['⟁', '∞', '✶', '☉', '☯', '⚚', '𓂀'];
  return Array.from({ length: count }, (_, i) => ({
    id: `glyph-${i}`,
    symbol: glyphs[Math.floor(Math.random() * glyphs.length)],
    x: Math.random() * 100,
    y: Math.random() * 100,
    intensity: Math.random(),
  }));
};

export default function CodexGlyphResonanceMap() {
  const [glyphs, setGlyphs] = useState<GlyphNode[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlyphs(generateRandomGlyphs(12));
    }, 4000);
    setGlyphs(generateRandomGlyphs(12));
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl aspect-square mx-auto bg-gradient-to-br from-black via-slate-900 to-zinc-800 border border-violet-800 rounded-xl overflow-hidden shadow-lg">
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
        {glyphs.map((glyph) => (
          <motion.div
            key={glyph.id}
            className="absolute text-white text-xl font-bold"
            style={{
              left: `${glyph.x}%`,
              top: `${glyph.y}%`,
              transform: 'translate(-50%, -50%)',
              color: `rgba(168, 85, 247, ${glyph.intensity + 0.2})`,
            }}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {glyph.symbol}
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 border border-violet-600 rounded-xl pointer-events-none" />
      <h2 className="absolute top-2 left-1/2 -translate-x-1/2 text-sm text-violet-400 tracking-widest uppercase font-semibold">
        Resonance Map
      </h2>
    </div>
  );
}
