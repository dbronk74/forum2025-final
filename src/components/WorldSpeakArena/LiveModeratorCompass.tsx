// WorldSpeakArena/LiveModeratorCompass.tsx

import React from 'react';
import { motion } from 'framer-motion';

const LiveModeratorCompass: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 rounded-xl shadow-md text-white">
      <h2 className="text-xl font-semibold mb-2">Moderator Compass</h2>
      <motion.div
        className="w-full h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
      >
        <div className="text-3xl font-bold">🧭</div>
      </motion.div>
      <p className="mt-3 text-sm text-gray-300">
        Displays moderator focus direction and coordination signals.
      </p>
    </div>
  );
};

export default LiveModeratorCompass;
