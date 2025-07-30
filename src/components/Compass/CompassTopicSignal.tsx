import React from 'react';
import { motion } from 'framer-motion';

interface TopicSignalProps {
  topic: string;
  strength: number; // 0 to 100
}

const getColor = (strength: number): string => {
  if (strength > 80) return 'bg-green-500';
  if (strength > 60) return 'bg-yellow-400';
  if (strength > 40) return 'bg-orange-400';
  return 'bg-red-500';
};

const CompassTopicSignal: React.FC<TopicSignalProps> = ({ topic, strength }) => {
  const barWidth = Math.min(Math.max(strength, 0), 100); // clamp 0–100

  return (
    <div className="bg-indigo-950 rounded-xl p-4 w-full max-w-md mx-auto shadow-lg border border-indigo-800">
      <h2 className="text-indigo-100 text-lg font-semibold mb-2 text-center">Topic Signal</h2>
      <div className="text-indigo-300 text-sm text-center mb-4">{topic}</div>
      
      <div className="relative h-5 bg-indigo-800 rounded-full overflow-hidden">
        <motion.div
          className={`absolute top-0 left-0 h-full ${getColor(strength)} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${barWidth}%` }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="text-right text-xs text-indigo-400 mt-1">{barWidth}% clarity</div>
    </div>
  );
};

export default CompassTopicSignal;
