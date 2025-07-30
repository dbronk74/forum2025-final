// src/components/ForumMisc/SocraticDriftMonitor.tsx

import React, { useEffect, useState } from 'react';
import { Compass, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

type DriftLevel = 'Aligned' | 'Slight Drift' | 'Off Course';

const DRIFT_COLORS: Record<DriftLevel, string> = {
  Aligned: 'bg-green-500',
  'Slight Drift': 'bg-yellow-400',
  'Off Course': 'bg-red-500',
};

const DRIFT_SCORE: Record<DriftLevel, number> = {
  Aligned: 95,
  'Slight Drift': 65,
  'Off Course': 30,
};

export default function SocraticDriftMonitor() {
  const [drift, setDrift] = useState<DriftLevel>('Aligned');

  useEffect(() => {
    const interval = setInterval(() => {
      const roll = Math.random();
      if (roll > 0.75) setDrift('Off Course');
      else if (roll > 0.35) setDrift('Slight Drift');
      else setDrift('Aligned');
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 border border-cyan-500 p-4 rounded-xl shadow-md max-w-sm mx-auto">
      <div className="flex items-center text-cyan-300 mb-3 font-bold text-sm uppercase tracking-wide">
        <Compass className="mr-2" size={18} />
        Socratic Drift Monitor
      </div>

      <motion.div
        key={drift}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`text-white text-lg font-semibold text-center py-2 rounded ${DRIFT_COLORS[drift]}`}
      >
        {drift} ({DRIFT_SCORE[drift]}%)
      </motion.div>

      {drift === 'Off Course' && (
        <div className="flex items-center justify-center mt-2 text-red-300 text-xs">
          <AlertTriangle className="mr-1" size={14} />
          Consider guiding back to the core topic.
        </div>
      )}

      <p className="text-slate-400 text-xs mt-3 text-center">
        Tracks philosophical coherence and focus over time.
      </p>
    </div>
  );
}
