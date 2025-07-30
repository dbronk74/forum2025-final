// src/components/ForumMisc/SocraticMomentumMeter.tsx

import React, { useState, useEffect } from 'react';
import { Flame, PauseCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SocraticMomentumMeter() {
  const [momentum, setMomentum] = useState(0);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const fluctuation = Math.floor(Math.random() * 15);
      const direction = Math.random() > 0.4 ? 1 : -1;
      const newMomentum = Math.max(0, Math.min(100, momentum + fluctuation * direction));
      setMomentum(newMomentum);
      setActive(newMomentum > 15);
    }, 6000);

    return () => clearInterval(interval);
  }, [momentum]);

  return (
    <div className="bg-zinc-900 border border-amber-500 p-4 rounded-xl shadow-md max-w-sm mx-auto">
      <div className="flex items-center text-amber-400 mb-2 font-semibold text-sm uppercase tracking-wide">
        <Flame className="mr-2" size={18} />
        Socratic Momentum
      </div>

      <motion.div
        key={momentum}
        initial={{ width: 0 }}
        animate={{ width: `${momentum}%` }}
        transition={{ duration: 0.6 }}
        className={`h-4 rounded-full transition-all duration-500 ${
          momentum > 66
            ? 'bg-orange-400'
            : momentum > 33
            ? 'bg-yellow-300'
            : 'bg-gray-400'
        }`}
      />

      <div className="text-sm text-center mt-3 text-white">
        {active ? `${momentum}% Momentum` : <span className="text-red-300 flex items-center justify-center"><PauseCircle size={16} className="mr-1" /> Stagnant</span>}
      </div>

      <p className="text-xs text-zinc-400 mt-2 text-center">
        Reflects the flow and depth of ongoing Socratic reasoning.
      </p>
    </div>
  );
}
