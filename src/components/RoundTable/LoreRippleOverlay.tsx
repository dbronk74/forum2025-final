import React from 'react';
import { motion } from 'framer-motion';

const LoreRippleOverlay: React.FC = () => {
  return (
    <motion.div
      className="absolute inset-0 z-10 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.2, 0.4, 0.2] }}
      transition={{
        repeat: Infinity,
        duration: 6,
        ease: "easeInOut"
      }}
    >
      <div className="w-full h-full bg-gradient-radial from-indigo-800/30 via-purple-600/10 to-transparent animate-pulse" />
    </motion.div>
  );
};

export default LoreRippleOverlay;
