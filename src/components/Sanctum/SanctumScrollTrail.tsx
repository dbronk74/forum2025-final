// SanctumScrollTrail.tsx
import React from 'react';
import { motion } from 'framer-motion';

const trailData = [
  'Wisdom Fragment',
  'Clarity Rune',
  'Echo Thread',
  'Sigil Spark',
  'Insight Drop',
];

const SanctumScrollTrail: React.FC = () => {
  return (
    <div className="bg-gradient-to-tr from-zinc-800 to-zinc-900 text-white p-6 rounded-xl shadow-lg">
      <motion.h2
        className="text-xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Sanctum Scroll Trail
      </motion.h2>
      <div className="space-y-3">
        {(trailData ?? []).map((entry, index) => (
          <motion.div
            key={index}
            className="px-4 py-2 bg-zinc-700 rounded-lg shadow-inner"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {entry}
          </motion.div>
        ))}
      </div>
      <p className="mt-6 text-center text-zinc-300 text-sm">
        The scroll trail reflects the path of remembered truths traced across the inner sanctum.
      </p>
    </div>
  );
};

export default SanctumScrollTrail;
