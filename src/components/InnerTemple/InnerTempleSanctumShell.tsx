// src/components/InnerTemple/InnerTempleSanctumShell.tsx

import React from 'react';
import { motion } from 'framer-motion';

const InnerTempleSanctumShell: React.FC = () => {
  return (
    <motion.div
      className="relative w-80 h-80 mx-auto rounded-full bg-gradient-to-tr from-indigo-900 via-purple-900 to-black shadow-xl select-none"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="absolute inset-0 rounded-full border-4 border-purple-600 shadow-inner animate-pulse-slow" />
      <div className="absolute inset-10 rounded-full bg-gradient-to-br from-indigo-800 to-purple-800 shadow-lg" />
      <div className="absolute inset-20 rounded-full bg-indigo-700 shadow-inner" />
    </motion.div>
  );
};

export default InnerTempleSanctumShell;
