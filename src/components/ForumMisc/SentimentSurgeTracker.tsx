// src/components/ForumMisc/SentimentSurgeTracker.tsx

import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

type SentimentChange = 'positive' | 'negative' | 'neutral';

export default function SentimentSurgeTracker() {
  const [change, setChange] = useState<SentimentChange>('neutral');
  const [intensity, setIntensity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.random();
      if (random > 0.7) {
        setChange('positive');
        setIntensity(Math.floor(Math.random() * 30 + 20));
      } else if (random < 0.3) {
        setChange('negative');
        setIntensity(Math.floor(Math.random() * 30 + 20));
      } else {
        setChange('neutral');
        setIntensity(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getColor = () => {
    if (change === 'positive') return 'text-green-400';
    if (change === 'negative') return 'text-red-400';
    return 'text-slate-400';
  };

  const getIcon = () => {
    if (change === 'positive') return <TrendingUp className="inline-block mr-1" />;
    if (change === 'negative') return <TrendingDown className="inline-block mr-1" />;
    return null;
  };

  return (
    <div className="bg-slate-900 border border-indigo-500 p-4 rounded-xl shadow-md max-w-sm mx-auto">
      <div className="text-indigo-300 text-sm uppercase font-bold tracking-wider mb-2">
        Sentiment Surge Tracker
      </div>

      <motion.div
        key={change + intensity}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`text-lg font-semibold ${getColor()} flex items-center justify-center`}
      >
        {getIcon()}
        {change === 'neutral' ? 'Stable' : `${intensity}% ${change === 'positive' ? 'Surge' : 'Drop'}`}
      </motion.div>

      <p className="text-slate-400 text-xs mt-3 text-center">
        Detects and visualizes audience sentiment shifts in real-time.
      </p>
    </div>
  );
}
