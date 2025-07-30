import React from 'react';
import { motion } from 'framer-motion';

const OracleInsightPanel: React.FC = () => {
  return (
    <motion.div
      className="w-full max-w-3xl mx-auto p-6 bg-gradient-to-br from-indigo-800 to-purple-900 text-white rounded-xl shadow-2xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Oracle Insight Panel</h2>
      <p className="text-purple-200 text-md text-center mb-6">
        Gaze into the mystic glass of wisdom. Each symbol pulses with encoded meaning — drawn from the echoes of collective thought.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="p-4 bg-purple-800 rounded-lg shadow-inner hover:scale-105 transition transform duration-300">
          🔮 Vision Fragment
        </div>
        <div className="p-4 bg-purple-800 rounded-lg shadow-inner hover:scale-105 transition transform duration-300">
          📜 Sacred Verse
        </div>
        <div className="p-4 bg-purple-800 rounded-lg shadow-inner hover:scale-105 transition transform duration-300">
          🧭 Timeless Truth
        </div>
      </div>
    </motion.div>
  );
};

export default OracleInsightPanel;
