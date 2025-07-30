// src/components/ForumMisc/ResonanceScoreBar.tsx

import React, { useEffect, useState } from 'react';
import { Waveform } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ResonanceScoreBar() {
  const [resonance, setResonance] = useState(0.4); // 0 = dull, 1 = fully resonant

  useEffect(() => {
    const interval = setInterval(() => {
      const fluctuation = (Math.random() - 0.5) * 0.1;
      setResonance(prev => Math.max(0, Math.min(1, prev + fluctuation)));
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const getLabel = () => {
    if (resonance > 0.8) return 'Resonating Deeply';
    if (resonance > 0.6) return 'Strong Connection';
    if (resonance > 0.4) return 'Mild Engagement';
    if (resonance > 0.2) return 'Faint Signal';
    return 'No Resonance';
  };

  const getColor = () => {
    if (resonance > 0.8) return 'bg-pink-500';
    if (resonance > 0.6) return 'bg-fuchsia-500';
    if (resonance > 0.4) return 'bg-violet-500';
    if (resonance > 0.2) return 'bg-indigo-400';
    return 'bg-slate-600';
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-slate-900 p-4 rounded-xl border border-pink-500 shadow-md">
      <div className="flex items-center text-pink-300 font-medium text-sm mb-2">
        <Waveform className="mr-2" size={18} />
        Resonance Score
      </div>
      <div className="relative w-full h-5 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${getColor()}`}
          initial={{ width: 0 }}
          animate={{ width: `${resonance * 100}%` }}
          transition={{ duration: 0.6 }}
        />
      </div>
      <div className="text-center mt-2 text-sm text-slate-300 italic">{getLabel()}</div>
    </div>
  );
}
