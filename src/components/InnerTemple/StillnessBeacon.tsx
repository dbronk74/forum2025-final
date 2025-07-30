// src/components/InnerTemple/StillnessBeacon.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const StillnessBeacon: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-700 via-purple-700 to-pink-700 shadow-lg mx-auto select-none"
      animate={{
        boxShadow: active
          ? '0 0 40px 15px rgba(168, 85, 247, 0.8)'
          : '0 0 20px 8px rgba(168, 85, 247, 0.4)',
      }}
      transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
    />
  );
};

export default StillnessBeacon;
