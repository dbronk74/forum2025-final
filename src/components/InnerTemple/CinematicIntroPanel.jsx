// src/components/InnerTemple/CinematicIntroPanel.jsx

import React from 'react';
import { motion } from 'framer-motion';

const CinematicIntroPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="w-full max-w-4xl mx-auto p-8 bg-gradient-to-tr from-indigo-900 via-purple-800 to-pink-900 rounded-3xl shadow-2xl text-white text-center"
    >
      <h1 className="text-4xl font-extrabold mb-4">Welcome to the Inner Temple</h1>
      <p className="text-lg max-w-xl mx-auto leading-relaxed">
        Journey into the heart of wisdom, where ancient chants meet modern insight.
        Embrace the echo of centuries and awaken your spirit to the sanctum within.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold shadow-lg"
        onClick={() => {
          // placeholder for navigation or action
          alert('Entering the Sanctum...');
        }}
      >
        Enter the Sanctum
      </motion.button>
    </motion.div>
  );
};

export default CinematicIntroPanel;
