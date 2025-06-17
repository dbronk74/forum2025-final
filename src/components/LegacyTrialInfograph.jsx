import React from 'react';
import { motion } from 'framer-motion';

export default function LegacyTrialInfograph() {
  const stats = [
    { label: 'Trials Completed', value: 128 },
    { label: 'Win Rate', value: '72%' },
    { label: 'Faction Impact', value: '+890 pts' },
    { label: 'Streak', value: '6 Wins' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-24 left-6 z-40 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-indigo-500 p-4 rounded-xl shadow-lg w-64"
    >
      <h2 className="text-indigo-300 text-lg font-bold mb-3 text-center">Legacy Trials</h2>
      <ul className="space-y-2">
        {stats.map((stat, idx) => (
          <li
            key={idx}
            className="flex justify-between text-sm text-indigo-100 bg-zinc-700/40 px-3 py-1 rounded-md"
          >
            <span>{stat.label}</span>
            <span className="font-semibold text-indigo-300">{stat.value}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
