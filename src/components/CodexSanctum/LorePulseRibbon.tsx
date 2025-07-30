import React from 'react';
import { motion } from 'framer-motion';

const LorePulseRibbon: React.FC = () => {
  return (
    <motion.div
      className="relative w-full h-12 overflow-hidden bg-gradient-to-r from-purple-950 via-indigo-900 to-zinc-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute top-0 left-0 w-[200%] h-full bg-[radial-gradient(circle,_rgba(168,85,247,0.2)_20%,_transparent_60%)] opacity-60"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute inset-0 flex items-center justify-center text-purple-300 text-sm font-mono tracking-wider"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="px-4 backdrop-blur-sm bg-purple-800/10 rounded">
          Lore Pulse Active — Echoing Forum Signatures
        </span>
      </motion.div>
    </motion.div>
  );
};

export default LorePulseRibbon;
