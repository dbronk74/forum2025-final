import React from 'react';
import { motion } from 'framer-motion';

const ForumLegacyGlyph: React.FC = () => {
  return (
    <motion.div
      className="flex items-center justify-center p-6 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-purple-700 shadow-lg w-[280px] h-[280px] mx-auto"
      initial={{ rotate: 0, opacity: 0 }}
      animate={{ rotate: 360, opacity: 1 }}
      transition={{ duration: 3, ease: 'easeInOut' }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-40 h-40 text-purple-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <circle cx="50" cy="50" r="44" className="stroke-purple-500" />
        <path d="M50 6 L50 94" className="stroke-purple-400" />
        <path d="M6 50 L94 50" className="stroke-purple-400" />
        <path d="M25 25 L75 75" className="stroke-purple-600" />
        <path d="M75 25 L25 75" className="stroke-purple-600" />
        <circle cx="50" cy="50" r="5" className="fill-purple-300" />
      </svg>
    </motion.div>
  );
};

export default ForumLegacyGlyph;
