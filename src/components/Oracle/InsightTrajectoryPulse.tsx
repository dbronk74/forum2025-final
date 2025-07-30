// src/components/InnerTemple/InsightTrajectoryPulse.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const InsightTrajectoryPulse: React.FC = () => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-700 via-indigo-700 to-pink-700 shadow-lg mx-auto select-none flex items-center justify-center text-white font-bold"
      animate={{
        scale: pulse ? 1.1 : 1,
        boxShadow: pulse
          ? '0 0 20px 8px rgba(168, 85, 247, 0.8)'
          : '0 0 10px 4px rgba(168, 85, 247, 0.4)',
      }}
      transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
    >
      Pulse
    </motion.div>
  );
};

export default InsightTrajectoryPulse;
