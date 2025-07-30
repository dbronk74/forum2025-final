import React from 'react';
import { motion } from 'framer-motion';

interface ReactionData {
  type: string;
  count: number;
  color: string;
  emoji: string;
}

interface ArenaSpectatorReactionBarProps {
  reactions: ReactionData[];
}

const ArenaSpectatorReactionBar: React.FC<ArenaSpectatorReactionBarProps> = ({ reactions }) => {
  const total = reactions.reduce((sum, r) => sum + r.count, 0);

  return (
    <div className="w-full bg-gray-900 bg-opacity-70 p-2 rounded-lg shadow-md">
      <div className="flex items-center space-x-2">
        {reactions.map((reaction, index) => {
          const widthPercent = total > 0 ? (reaction.count / total) * 100 : 0;

          return (
            <motion.div
              key={index}
              className="flex items-center justify-center text-white font-bold text-xs rounded-md"
              style={{
                width: `${widthPercent}%`,
                backgroundColor: reaction.color,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {reaction.emoji} {reaction.count}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ArenaSpectatorReactionBar;
