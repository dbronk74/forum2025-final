import React from 'react';
import { motion } from 'framer-motion';

const ForumSpectralLink: React.FC = () => {
  return (
    <motion.div
      className="relative w-[260px] h-[260px] mx-auto bg-gradient-to-tr from-indigo-900 via-purple-800 to-zinc-900 rounded-xl shadow-inner border border-purple-700"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-24 h-24 rounded-full border-4 border-purple-500 bg-purple-800/30 blur-md"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute w-16 h-16 rounded-full bg-purple-500 shadow-xl shadow-purple-900" />
      </div>
      <div className="absolute bottom-2 w-full text-center text-xs text-purple-300 font-mono tracking-wide">
        Spectral Link Activated
      </div>
    </motion.div>
  );
};

export default ForumSpectralLink;
