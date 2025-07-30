// src/components/ForumMisc/TranscriptEchoOverlay.tsx

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Echo = {
  id: number;
  phrase: string;
  timestamp: string;
};

const mockEchoes: Echo[] = [
  { id: 1, phrase: 'Freedom without responsibility is chaos.', timestamp: '00:14:22' },
  { id: 2, phrase: 'But what if the data says otherwise?', timestamp: '00:18:03' },
  { id: 3, phrase: 'Let’s not forget who this truly affects.', timestamp: '00:20:47' },
];

export default function TranscriptEchoOverlay() {
  const [echoes, setEchoes] = useState<Echo[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEchoes((prev) => {
        if (index >= mockEchoes.length) return prev;
        return [...prev, mockEchoes[index]];
      });
      setIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
      <AnimatePresence>
        {echoes.slice(-1).map((echo) => (
          <motion.div
            key={echo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900 text-white px-6 py-3 rounded-full border border-purple-500 shadow-xl backdrop-blur-md"
          >
            <span className="text-xs text-purple-300 mr-2">{echo.timestamp}</span>
            <span className="font-medium text-sm italic">{echo.phrase}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
