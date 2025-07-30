import React from 'react';
import { motion } from 'framer-motion';

const CodexSanctumSeal: React.FC = () => {
  return (
    <motion.div
      className="flex items-center justify-center p-6 bg-gradient-to-br from-zinc-900 to-purple-950 rounded-full border-4 border-purple-800 shadow-2xl"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className="w-32 h-32 rounded-full bg-purple-700/20 border border-purple-500 relative flex items-center justify-center"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: 'linear',
        }}
      >
        <div className="w-24 h-24 rounded-full bg-purple-400/20 border border-purple-400 blur-md absolute" />
        <div className="w-10 h-10 bg-purple-400 rounded-full shadow-md z-10 animate-pulse" />
      </motion.div>
    </motion.div>
  );
};

export default CodexSanctumSeal;
