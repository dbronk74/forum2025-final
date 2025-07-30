// src/components/Gauntlet/TopicInitiator.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb } from 'react-icons/fa';

interface TopicInitiatorProps {
  topic: string;
  initiator: string;
  onClick?: () => void;
}

const TopicInitiator: React.FC<TopicInitiatorProps> = ({ topic, initiator, onClick }) => {
  return (
    <motion.div
      className="p-4 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <FaLightbulb className="text-yellow-400 text-2xl" />
        <div>
          <h2 className="text-lg font-semibold">Topic: {topic}</h2>
          <p className="text-sm text-white/80">Initiated by {initiator}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TopicInitiator;
