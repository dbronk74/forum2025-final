import React from 'react';
import { motion } from 'framer-motion';

const factions = [
  { name: 'Logic', color: 'bg-indigo-500', value: 82 },
  { name: 'Emotion', color: 'bg-rose-500', value: 64 },
  { name: 'Memory', color: 'bg-amber-400', value: 53 },
  { name: 'Mystery', color: 'bg-purple-500', value: 74 }
];

export default function FactionRelicScoreboard() {
  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50 bg-black/80 border border-purple-700 rounded-xl p-4 w-64 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-sm font-bold text-purple-300 mb-2">Faction Relic Strength</h2>
      <div className="space-y-2">
        {factions.map((faction) => (
          <div key={faction.name} className="flex items-center justify-between text-sm">
            <span className="text-white">{faction.name}</span>
            <div className="flex items-center space-x-2">
              <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${faction.color}`}
                  style={{ width: `${faction.value}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${faction.value}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              <span className="text-purple-300 font-mono text-xs">{faction.value}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
