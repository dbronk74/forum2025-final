import React from 'react';
import { motion } from 'framer-motion';

interface Thread {
  id: string;
  label: string;
  color: string;
  segments: number;
}

const mockThreads: Thread[] = [
  { id: 'a', label: 'Faith Spiral', color: 'from-purple-600 to-pink-500', segments: 4 },
  { id: 'b', label: 'Logic Current', color: 'from-blue-500 to-cyan-400', segments: 3 },
  { id: 'c', label: 'Shadow Doctrine', color: 'from-gray-700 to-red-400', segments: 5 },
];

export default function CodexNarrativeThreader() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-white">
      <h2 className="text-2xl font-bold text-center text-indigo-300 mb-6">Narrative Threader</h2>
      <div className="space-y-6">
        {mockThreads.map((thread, index) => (
          <div key={thread.id} className="space-y-1">
            <div className="text-sm text-slate-300 italic">{thread.label}</div>
            <div className="flex space-x-2">
              {Array.from({ length: thread.segments }).map((_, i) => (
                <motion.div
                  key={i}
                  className={`h-3 w-20 rounded-full bg-gradient-to-r ${thread.color}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + i * 0.1 }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
