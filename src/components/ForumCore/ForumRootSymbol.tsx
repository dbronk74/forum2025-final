import React from 'react';
import { motion } from 'framer-motion';

const pulseVariants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const ForumRootSymbol: React.FC = () => {
  return (
    <motion.div
      className="relative w-40 h-40 mx-auto my-10 rounded-full bg-gradient-to-br from-purple-600 via-indigo-700 to-purple-900 shadow-2xl border border-purple-400"
      variants={pulseVariants}
      animate="animate"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-24 h-24 text-purple-200 opacity-90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="3" />
          <path
            d="M50 10 L58 50 L50 90 L42 50 Z"
            fill="currentColor"
            opacity="0.8"
          />
          <circle cx="50" cy="50" r="6" fill="currentColor" />
        </svg>
      </div>
    </motion.div>
  );
};

export default ForumRootSymbol;
