import React from 'react';
import { motion } from 'framer-motion';

export default function SessionNotifier({ message = 'Live Gauntlet in Progress', status = 'Live' }) {
  return (
    <motion.div
      className="fixed bottom-6 right-6 bg-black/80 border border-purple-700 text-white px-4 py-3 rounded-xl shadow-lg z-50"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-3">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
        </span>
        <p className="text-sm font-medium">{message}</p>
        <span className="text-xs text-red-400 font-semibold uppercase">{status}</span>
      </div>
    </motion.div>
  );
}
