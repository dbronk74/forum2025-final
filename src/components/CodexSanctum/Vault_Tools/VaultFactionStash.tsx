import React from 'react';
import { motion } from 'framer-motion';

interface FactionStashProps {
  faction?: string;
  total?: number;
  contributors?: number;
}

export default function VaultFactionStash({
  faction = 'Sanctum Arcana',
  total = 12500,
  contributors = 38,
}: FactionStashProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-black via-zinc-900 to-slate-900 border border-indigo-700 rounded-xl p-6 shadow-lg text-white max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-bold text-indigo-400 mb-2">{faction} Stash</h3>
      <div className="text-3xl font-extrabold text-indigo-300 tabular-nums mb-1">
        {total.toLocaleString()} ⛃
      </div>
      <p className="text-sm text-slate-400">
        Contributed by <span className="text-indigo-200 font-semibold">{contributors}</span> members
      </p>
    </motion.div>
  );
}
