// src/components/ForumMisc/TopicClashPulse.tsx

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ClashPulse = {
  id: number;
  topic: string;
  intensity: number; // 0–100
};

const sampleClashes: ClashPulse[] = [
  { id: 1, topic: 'Climate Policy', intensity: 85 },
  { id: 2, topic: 'Freedom of Speech', intensity: 72 },
  { id: 3, topic: 'Wealth Redistribution', intensity: 91 },
  { id: 4, topic: 'AI Ethics', intensity: 66 },
];

export default function TopicClashPulse() {
  const [pulses, setPulses] = useState<ClashPulse[]>([]);

  useEffect(() => {
    setPulses(sampleClashes);
  }, []);

  return (
    <div className="bg-black border border-red-500 rounded-xl p-4 max-w-lg mx-auto text-white shadow-md">
      <h3 className="text-red-300 text-sm font-bold uppercase tracking-widest mb-3">
        Topic Clash Pulse
      </h3>
      <div className="text-xs text-zinc-400 mb-4">
        Topics with highest polarity or contention based on discourse data.
      </div>

      <div className="space-y-3">
        <AnimatePresence>
          {pulses.map((pulse) => (
            <motion.div
              key={pulse.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between bg-zinc-800 rounded-lg px-3 py-2"
            >
              <div className="text-sm font-medium">{pulse.topic}</div>
              <motion.div
                className="relative w-32 h-3 bg-zinc-700 rounded-full overflow-hidden"
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: `0 0 10px rgba(239, 68, 68, ${pulse.intensity / 100})`,
                }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                <motion.div
                  className="absolute left-0 top-0 h-full bg-red-500"
                  style={{
                    width: `${pulse.intensity}%`,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
