import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface VictoryData {
  winner: string;
  time: string;
  style: 'brutal' | 'graceful' | 'technical' | 'controversial';
}

const GauntletVictoryTracker: React.FC<{ data: VictoryData }> = ({ data }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (data?.winner) setVisible(true);
  }, [data]);

  const styleMap = {
    brutal: 'text-red-600',
    graceful: 'text-green-400',
    technical: 'text-blue-400',
    controversial: 'text-yellow-300',
  };

  return visible ? (
    <motion.div
      className={`rounded-xl p-4 border border-gray-700 mt-6 ${styleMap[data.style]}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="text-xl font-bold">Victory: {data.winner}</div>
      <div className="text-sm text-gray-300">Time: {data.time}</div>
      <div className="text-xs italic mt-1">Style: {data.style}</div>
    </motion.div>
  ) : null;
};

export default GauntletVictoryTracker;
