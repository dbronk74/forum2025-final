import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LightbulbIcon } from 'lucide-react';

type Insight = {
  id: string;
  content: string;
  timestamp: string;
};

const sampleInsights: Insight[] = [
  {
    id: 'i001',
    content: 'Shared sacrifice builds trust across factions.',
    timestamp: '2025-07-25T14:12:00Z',
  },
  {
    id: 'i002',
    content: 'A neutral codex does not mean a neutral heart.',
    timestamp: '2025-07-26T08:43:00Z',
  },
  {
    id: 'i003',
    content: 'Wisdom arrives when urgency pauses.',
    timestamp: '2025-07-27T21:17:00Z',
  },
];

const emitterVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.9, y: -10 },
};

const CouncilInsightEmitter: React.FC = () => {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    setInsights(sampleInsights);

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sampleInsights.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative p-6 rounded-xl bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-950 border border-indigo-700 shadow-xl">
      <h2 className="text-lg font-semibold text-indigo-300 mb-4 flex items-center gap-2">
        <LightbulbIcon className="w-5 h-5 text-yellow-400 animate-pulse" />
        Council Insight Emitter
      </h2>

      <div className="relative h-24">
        <AnimatePresence>
          {insights.length > 0 && (
            <motion.div
              key={insights[current].id}
              className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={emitterVariants}
              transition={{ duration: 0.6 }}
            >
              <p className="text-indigo-100 text-md font-medium italic">
                “{insights[current].content}”
              </p>
              <span className="text-xs text-indigo-400 mt-2">
                {new Date(insights[current].timestamp).toLocaleString()}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CouncilInsightEmitter;
