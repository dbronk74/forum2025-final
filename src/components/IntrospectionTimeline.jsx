import React from 'react';
import { motion } from 'framer-motion';

const mockMoments = [
  { id: 1, label: 'Gauntlet Duel #14', type: 'Clarity', date: '2025-06-01' },
  { id: 2, label: 'Oracle Session', type: 'Emotional Insight', date: '2025-06-03' },
  { id: 3, label: 'Faction Debate', type: 'Perspective Shift', date: '2025-06-06' },
  { id: 4, label: 'Lore Archive Dive', type: 'Historical Parallel', date: '2025-06-09' },
  { id: 5, label: 'Solo Reflection', type: 'Bias Breakthrough', date: '2025-06-13' },
];

const typeColors = {
  Clarity: 'bg-sky-400',
  'Emotional Insight': 'bg-pink-400',
  'Perspective Shift': 'bg-emerald-400',
  'Historical Parallel': 'bg-purple-400',
  'Bias Breakthrough': 'bg-yellow-300',
};

export default function IntrospectionTimeline() {
  return (
    <motion.div
      className="fixed bottom-20 left-1/2 transform -translate-x-1/2 w-[90%] z-40 overflow-x-auto whitespace-nowrap p-4 bg-black/60 border border-white/20 rounded-xl shadow-md backdrop-blur"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex space-x-6 items-center">
        {mockMoments.map((moment) => (
          <div key={moment.id} className="text-center min-w-[120px]">
            <div
              className={`w-4 h-4 rounded-full mx-auto mb-1 ${typeColors[moment.type]}`}
              title={moment.type}
            />
            <div className="text-xs text-indigo-100 font-medium">{moment.label}</div>
            <div className="text-[10px] text-indigo-400">{moment.date}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
