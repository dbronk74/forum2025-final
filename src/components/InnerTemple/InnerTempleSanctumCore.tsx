// src/components/InnerTemple/InnerTempleSanctumCore.tsx

import React from 'react';
import { motion } from 'framer-motion';

const InnerTempleSanctumCore: React.FC = () => {
  return (
    <motion.div
      className="relative w-72 h-72 mx-auto rounded-full bg-gradient-to-tr from-purple-900 via-indigo-900 to-black shadow-2xl flex items-center justify-center select-none"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 rounded-full border-8 border-purple-700 shadow-inner animate-pulse" />
      <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-indigo-700 to-purple-800 shadow-lg flex items-center justify-center text-white text-xl font-bold">
        Sanctum Core
      </div>
    </motion.div>
  );
};

export default InnerTempleSanctumCore;
