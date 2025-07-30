// src/components/InnerTemple/RitualAmbientLayer.tsx

import React from 'react';
import { motion } from 'framer-motion';

const RitualAmbientLayer: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none bg-gradient-to-b from-purple-900 via-indigo-900 to-transparent opacity-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
    />
  );
};

export default RitualAmbientLayer;
