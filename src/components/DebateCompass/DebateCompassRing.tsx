import React from 'react';
import { motion } from 'framer-motion';

const DebateCompassRing: React.FC = () => {
  return (
    <motion.div
      className="relative w-96 h-96 rounded-full border-4 border-yellow-400/40 bg-gradient-to-br from-slate-800 via-slate-900 to-black shadow-inner"
      initial={{ scale: 0.8, opacity: 0.5 }}
      animate={{ scale: [0.8, 1, 0.95], opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Center Orb */}
      <div className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-yellow-300 shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-10" />

      {/* Directional Markers */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-yellow-300 text-xs">North</div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-yellow-300 text-xs">South</div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-yellow-300 text-xs">West</div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-yellow-300 text-xs">East</div>
    </motion.div>
  );
};

export default DebateCompassRing;
