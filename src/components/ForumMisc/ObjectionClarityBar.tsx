// src/components/ForumMisc/ObjectionClarityBar.tsx

import React, { useEffect, useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ObjectionClarityBar() {
  const [clarity, setClarity] = useState(0.6); // Ranges from 0 (muddy) to 1 (crystal clear)

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time fluctuation
      const drift = (Math.random() - 0.5) * 0.1;
      setClarity(prev => Math.min(1, Math.max(0, prev + drift)));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const clarityLabel = clarity > 0.8
    ? 'Crystal Clear'
    : clarity > 0.5
    ? 'Somewhat Clear'
    : clarity > 0.3
    ? 'Vague'
    : 'Muddled';

  const clarityColor = clarity > 0.8
    ? 'bg-green-400'
    : clarity > 0.5
    ? 'bg-yellow-400'
    : clarity > 0.3
    ? 'bg-orange-400'
    : 'bg-red-500';

  return (
    <div className="w-full max-w-lg mx-auto bg-slate-900 p-4 rounded-xl border border-rose-500 shadow">
      <div className="flex items-center text-rose-300 font-semibold text-sm mb-2">
        <AlertTriangle className="mr-2" size={18} />
        Objection Clarity
      </div>
      <div className="relative w-full h-5 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${clarityColor}`}
          initial={{ width: 0 }}
          animate={{ width: `${clarity * 100}%` }}
          transition={{ duration: 0.6 }}
        />
      </div>
      <div className="text-center mt-2 text-slate-300 text-sm italic">{clarityLabel}</div>
    </div>
  );
}
