// src/components/InnerTemple/FlashbackInsightViewer.tsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Insight {
  id: string;
  title: string;
  content: string;
  timestamp: string;
}

const mockInsights: Insight[] = [
  {
    id: '1',
    title: 'Key Argument Recall',
    content: 'The principle of justice was central to the opening statement.',
    timestamp: '00:05:12',
  },
  {
    id: '2',
    title: 'Critical Rebuttal Highlight',
    content: 'An overlooked point about data bias was raised by the opponent.',
    timestamp: '00:12:45',
  },
  {
    id: '3',
    title: 'Resolution Reminder',
    content: 'A consensus was suggested but not fully explored.',
    timestamp: '00:20:30',
  },
];

const FlashbackInsightViewer: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextInsight = () => {
    setCurrentIndex((prev) => (prev + 1) % mockInsights.length);
  };

  const prevInsight = () => {
    setCurrentIndex((prev) => (prev - 1 + mockInsights.length) % mockInsights.length);
  };

  return (
    <div className="max-w-md mx-auto bg-zinc-900 p-6 rounded-xl shadow-lg text-white relative">
      <h3 className="text-xl font-semibold mb-4">Flashback Insight Viewer</h3>
      <AnimatePresence mode="wait">
        <motion.div
          key={mockInsights[currentIndex].id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <h4 className="text-lg font-bold">{mockInsights[currentIndex].title}</h4>
          <p className="text-sm text-gray-300">{mockInsights[currentIndex].content}</p>
          <p className="text-xs text-gray-500 italic">{mockInsights[currentIndex].timestamp}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-between mt-6">
        <button
          onClick={prevInsight}
          className="px-4 py-2 bg-indigo-700 rounded-md hover:bg-indigo-600 transition"
        >
          Previous
        </button>
        <button
          onClick={nextInsight}
          className="px-4 py-2 bg-indigo-700 rounded-md hover:bg-indigo-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FlashbackInsightViewer;
