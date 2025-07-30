import React from 'react';
import { motion } from 'framer-motion';

const compassVariants = {
  rotate: (angle) => ({
    rotate: angle,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 14,
    },
  }),
};

export default function DebateCompassWheel({ rotationAngle = 0 }) {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <motion.div
        className="w-48 h-48"
        custom={rotationAngle}
        variants={compassVariants}
        animate="rotate"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-purple-400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" />
          <line x1="50" y1="2" x2="50" y2="20" stroke="currentColor" strokeWidth="2" />
          <line x1="50" y1="98" x2="50" y2="80" stroke="currentColor" strokeWidth="2" />
          <line x1="2" y1="50" x2="20" y2="50" stroke="currentColor" strokeWidth="2" />
          <line x1="98" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="2" />
          <polygon points="50,20 45,35 55,35" fill="currentColor" />
        </svg>
      </motion.div>

      <h2 className="text-xl mt-6 font-semibold text-white">Debate Compass Wheel</h2>
      <p className="text-gray-400 text-center max-w-sm mt-2">
        Rotates in response to logic balance and factional lean. A visual metaphor for argument orientation.
      </p>
    </div>
  );
}
