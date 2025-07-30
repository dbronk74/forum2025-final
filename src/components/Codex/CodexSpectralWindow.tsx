import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  '“Silence echoes across time.”',
  '“The glyph dreams before it speaks.”',
  '“Judgment waits beneath the veil.”',
  '“Unity fractures into form.”',
  '“Only the unspoken remains eternal.”',
];

export default function CodexSpectralWindow() {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % phrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto h-48 bg-gradient-to-br from-slate-900 via-indigo-950 to-black rounded-xl border border-indigo-700 shadow-lg overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={visibleIndex}
          className="absolute inset-0 flex items-center justify-center px-6 text-center text-indigo-200 text-lg italic"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2 }}
        >
          {phrases[visibleIndex]}
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-radial from-indigo-500/5 via-indigo-700/10 to-transparent blur-lg pointer-events-none" />
    </div>
  );
}
