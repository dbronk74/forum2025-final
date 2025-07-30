// src/components/ForumMisc/RhetoricalStyleMeter.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BalanceScale } from 'lucide-react';

export default function RhetoricalStyleMeter() {
  const [ethos, setEthos] = useState(0.5);
  const [pathos, setPathos] = useState(0.5);
  const [logos, setLogos] = useState(0.5);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate fluctuation
      setEthos(Math.max(0, Math.min(1, ethos + (Math.random() - 0.5) * 0.2)));
      setPathos(Math.max(0, Math.min(1, pathos + (Math.random() - 0.5) * 0.2)));
      setLogos(Math.max(0, Math.min(1, logos + (Math.random() - 0.5) * 0.2)));
    }, 5000);
    return () => clearInterval(interval);
  }, [ethos, pathos, logos]);

  const Bar = ({ label, value, color }: { label: string; value: number; color: string }) => (
    <div className="mb-3">
      <div className="flex justify-between mb-1 text-xs text-slate-300">
        <span>{label}</span>
        <span>{Math.round(value * 100)}%</span>
      </div>
      <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${value * 100}%` }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </div>
  );

  return (
    <div className="bg-slate-900 p-4 rounded-xl shadow-md border border-violet-600 max-w-sm mx-auto">
      <div className="flex items-center text-violet-300 mb-3 font-semibold text-sm uppercase tracking-wide">
        <BalanceScale className="mr-2" size={18} />
        Rhetorical Style Meter
      </div>
      <Bar label="Ethos (Credibility)" value={ethos} color="bg-blue-400" />
      <Bar label="Pathos (Emotion)" value={pathos} color="bg-pink-500" />
      <Bar label="Logos (Logic)" value={logos} color="bg-green-400" />
    </div>
  );
}
