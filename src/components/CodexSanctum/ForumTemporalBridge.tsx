import React from 'react';
import { motion } from 'framer-motion';

const ForumTemporalBridge: React.FC = () => {
  return (
    <motion.div
      className="relative w-[280px] h-[280px] mx-auto bg-gradient-to-br from-zinc-900 via-indigo-800 to-purple-900 rounded-full border-2 border-purple-700 shadow-2xl"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      <motion.div
        className="absolute inset-4 rounded-full border-4 border-indigo-500 blur-lg opacity-50"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      />

      <motion.div
        className="absolute inset-10 rounded-full bg-gradient-to-r from-indigo-600 via-transparent to-purple-600 opacity-30"
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-purple-200 text-sm font-mono tracking-wide text-center px-4">
          Bridge Through Thought & Time
        </p>
      </div>
    </motion.div>
  );
};

export default ForumTemporalBridge;
