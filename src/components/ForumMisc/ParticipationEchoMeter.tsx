// src/components/ForumMisc/ParticipationEchoMeter.tsx

import React, { useEffect, useState } from 'react';
import { Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ParticipationEchoMeter() {
  const [echoLevel, setEchoLevel] = useState(0.5); // 0 = silence, 1 = saturated echo

  useEffect(() => {
    const interval = setInterval(() => {
      const fluctuation = (Math.random() - 0.5) * 0.1;
      setEchoLevel(prev => Math.max(0, Math.min(1, prev + fluctuation)));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getLabel = () => {
    if (echoLevel > 0.8) return 'Dominant Voices';
    if (echoLevel > 0.5) return 'Active Dialogue';
    if (echoLevel > 0.2) return 'Sparse Input';
    return 'Echo Fading';
  };

  const getColor = () => {
    if (echoLevel > 0.8) return 'bg-purple-500';
    if (echoLevel > 0.5) return 'bg-indigo-400';
    if (echoLevel > 0.2) return 'bg-blue-400';
    return 'bg-slate-500';
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-slate-800 border border-indigo-500 rounded-lg p-4 shadow">
      <div className="flex items-center text-indigo-300 text-sm font-semibold mb-2">
        <Volume2 className="mr-2" size={18} />
        Participation Echo Meter
      </div>
      <div className="w-full h-5 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${getColor()}`}
          initial={{ width: 0 }}
          animate={{ width: `${echoLevel * 100}%` }}
          transition={{ duration: 0.6 }}
        />
      </div>
      <div className="text-center mt-2 text-sm text-slate-300 italic">{getLabel()}</div>
    </div>
  );
}
