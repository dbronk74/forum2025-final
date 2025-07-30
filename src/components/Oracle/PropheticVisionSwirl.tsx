import React from 'react';
import { motion } from 'framer-motion';

const PropheticVisionSwirl: React.FC = () => {
  return (
    <motion.div
      className="absolute inset-0 z-0 pointer-events-none"
      animate={{
        rotate: [0, 360],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      }}
    >
      <div className="w-full h-full rounded-full bg-gradient-conic from-purple-500 via-indigo-700 to-transparent opacity-20 blur-3xl" />
    </motion.div>
  );
};

export default PropheticVisionSwirl;
