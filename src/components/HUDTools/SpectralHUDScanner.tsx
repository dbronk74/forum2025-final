// src/components/Gauntlet/SpectralHUDScanner.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const SpectralHUDScanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-4 right-4 z-40 bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 p-4 rounded-2xl shadow-xl text-white flex items-center gap-3"
    >
      <Sparkles className="w-6 h-6 animate-pulse" />
      <div className="text-sm font-semibold">
        Scanning Active Threads...
      </div>
    </motion.div>
  );
};

export default SpectralHUDScanner;
