// src/components/InnerTemple/PulseGlowFloorLayer.tsx

import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const PulseGlowFloorLayer: React.FC = () => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({
      boxShadow: [
        '0 0 30px 10px rgba(138, 43, 226, 0.6)',
        '0 0 60px 20px rgba(138, 43, 226, 0.9)',
        '0 0 30px 10px rgba(138, 43, 226, 0.6)',
      ],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
    });
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-purple-800 to-transparent rounded-t-xl"
      style={{ filter: 'blur(15px)' }}
    />
  );
};

export default PulseGlowFloorLayer;
