import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function GauntletPreviewTile({ title = 'Faction Trial: Unity vs Control', status = 'Live', timeLeft = '4:17' }) {
  return (
    <motion.div
      className="bg-gradient-to-b from-purple-900 to-black border border-purple-700 rounded-xl p-4 shadow-lg text-white w-full max-w-md"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold text-purple-300">{title}</h2>
        <span className={`text-sm font-semibold ${status === 'Live' ? 'text-red-400' : 'text-gray-400'}`}>
          {status}
        </span>
      </div>
      <p className="text-xs text-gray-400 mb-4">Time Remaining: {timeLeft}</p>
      <Link
        to="/gauntlet/session"
        className="text-sm px-4 py-2 bg-purple-700 rounded-full hover:bg-purple-600 transition font-semibold text-white"
      >
        {status === 'Live' ? 'Join Now' : 'Watch Replay'}
      </Link>
    </motion.div>
  );
}
