import React from 'react';
import { motion } from 'framer-motion';

interface VaultCreditDisplayProps {
  credits?: number;
  label?: string;
}

export default function VaultCreditDisplay({
  credits = 4200,
  label = 'Forum Credits',
}: VaultCreditDisplayProps) {
  return (
    <motion.div
      className="bg-zinc-900 border border-emerald-700 rounded-lg px-5 py-3 shadow-lg text-white w-full max-w-xs"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="text-xs text-slate-400 uppercase tracking-wide mb-1">{label}</div>
      <div className="text-2xl font-bold text-emerald-400 tabular-nums">
        {credits.toLocaleString()} ⛃
      </div>
    </motion.div>
  );
}
