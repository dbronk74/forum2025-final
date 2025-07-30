import React from 'react';
import { motion } from 'framer-motion';

const OracleGuidanceBeam: React.FC = () => {
  return (
    <div className="relative w-full h-64 bg-gradient-to-b from-gray-900 via-purple-800 to-indigo-900 rounded-xl overflow-hidden shadow-xl">
      <motion.div
        className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-yellow-300 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'mirror' }}
        style={{ transformOrigin: 'top center' }}
      />
      <div className="relative z-10 p-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Oracle Guidance Beam</h2>
        <p className="text-purple-200 text-sm">
          A divine insight channeling down through time. Listen closely. The beam whispers the truth your heart already knows.
        </p>
      </div>
    </div>
  );
};

export default OracleGuidanceBeam;
