import React from 'react';
import { motion } from 'framer-motion';

const MythicFragmentChronicle: React.FC = () => {
  return (
    <div className="p-6 bg-black/30 rounded-2xl shadow-xl backdrop-blur-md max-w-4xl mx-auto mt-12 text-white">
      <motion.h2
        className="text-3xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mythic Fragments
      </motion.h2>
      <motion.p
        className="text-lg leading-relaxed text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        “Echoes of ancient wisdom swirl here — glimpses of truths long buried or barely remembered.”
      </motion.p>
    </div>
  );
};

export default MythicFragmentChronicle;
