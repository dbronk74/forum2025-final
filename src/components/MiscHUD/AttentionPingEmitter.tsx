import React from 'react';
import { motion } from 'framer-motion';

const AttentionPingEmitter: React.FC = () => {
  return (
    <div className="relative w-6 h-6">
      <motion.span
        className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"
        animate={{ scale: [1, 1.5, 1], opacity: [0.75, 0.25, 0.75] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <span className="relative inline-flex rounded-full h-6 w-6 bg-red-600" />
    </div>
  );
};

export default AttentionPingEmitter;
