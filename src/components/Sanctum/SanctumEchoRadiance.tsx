// SanctumEchoRadiance.tsx
import React from 'react';
import { motion } from 'framer-motion';

const SanctumEchoRadiance: React.FC = () => {
  return (
    <motion.div
      className="bg-gradient-to-br from-amber-500 to-yellow-600 text-white p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-bold text-center mb-4">Echo Radiance</h2>
      <p className="text-center mb-4">
        Each echo that reverberates through the Sanctum reveals hidden truths. Radiance trails amplify insights emerging from inner silence.
      </p>
      <motion.div
        className="w-20 h-20 rounded-full mx-auto bg-yellow-300 blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
};

export default SanctumEchoRadiance;
