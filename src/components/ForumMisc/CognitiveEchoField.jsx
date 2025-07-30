import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CognitiveEchoField = ({ intensity = 0 }) => {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    if (intensity > 0) {
      setPulse(intensity);
      const timeout = setTimeout(() => setPulse(0), 2500);
      return () => clearTimeout(timeout);
    }
  }, [intensity]);

  return (
    <motion.div
      className="absolute inset-0 z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{
        opacity: pulse > 0 ? 0.25 + pulse / 400 : 0,
        background: `radial-gradient(circle at center, rgba(147, 51, 234, 0.2) 0%, transparent 70%)`,
        scale: pulse > 0 ? 1.05 : 1,
      }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    />
  );
};

export default CognitiveEchoField;
