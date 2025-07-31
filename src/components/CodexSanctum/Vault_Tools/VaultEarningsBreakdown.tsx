import React from 'react';
import { motion } from 'framer-motion';

const earnings = [
  { label: 'Ad Engagement', amount: 1420, color: 'yellow' },
  { label: 'Bet Winnings', amount: 890, color: 'cyan' },
  { label: 'Faction Bonus', amount: 600, color: 'emerald' },
  { label: 'Passive Yield', amount: 310, color: 'violet' },
];

export default function VaultEarningsBreakdown() {
  return (
    <div className="bg-zinc-900 border border-emerald-700 rounded-xl p-5 shadow-lg text-white max-w-md w-full mx-auto mt-6">
      <h3 className="text-lg font-bold text-emerald-400 mb-4">Earnings Breakdown</h3>
      <ul className="space-y-3">
        {(earnings ?? []).map((entry, idx) => (
          <motion.li
            key={idx}
            className="flex justify-between items-center text-sm"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <span className={`text-${entry.color}-400`}>{entry.label}</span>
            <span className="text-slate-200 font-semibold tabular-nums">
              +{entry.amount.toLocaleString()} ⛃
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
