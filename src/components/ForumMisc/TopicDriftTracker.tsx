// src/components/ForumMisc/TopicDriftTracker.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCompass } from 'react-icons/fa';

type DriftData = {
  currentTopic: string;
  originTopic: string;
  driftPercent: number; // 0–100
};

const initialDrift: DriftData = {
  currentTopic: 'Economic Policy',
  originTopic: 'Universal Healthcare',
  driftPercent: 42,
};

export default function TopicDriftTracker() {
  const [drift, setDrift] = useState<DriftData>(initialDrift);

  useEffect(() => {
    // Replace this with live data stream or props as needed
    const interval = setInterval(() => {
      setDrift((prev) => ({
        ...prev,
        driftPercent: Math.min(100, prev.driftPercent + Math.random() * 5),
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-zinc-900 border border-yellow-500 rounded-lg p-4 shadow-xl max-w-lg mx-auto text-white">
      <div className="flex items-center gap-2 mb-2">
        <FaCompass className="text-yellow-400" />
        <h3 className="text-sm font-semibold uppercase tracking-wider text-yellow-300">
          Topic Drift Tracker
        </h3>
      </div>

      <p className="text-xs text-zinc-400 mb-3">
        Measures how far the conversation has moved from the original topic.
      </p>

      <div className="text-xs text-zinc-300 mb-1">
        <strong>Origin:</strong> {drift.originTopic}
      </div>
      <div className="text-xs text-zinc-300 mb-2">
        <strong>Current:</strong> {drift.currentTopic}
      </div>

      <div className="w-full bg-zinc-700 rounded-full h-3 overflow-hidden relative">
        <motion.div
          className="h-full bg-yellow-400"
          initial={{ width: 0 }}
          animate={{ width: `${drift.driftPercent}%` }}
          transition={{ duration: 0.6 }}
        />
      </div>

      <div className="text-right text-xs mt-1 text-yellow-400 font-bold">
        {(drift.driftPercent ?? 0).toFixed(1)}% Drift
      </div>
    </div>
  );
}
