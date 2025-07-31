import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type ThreadPoint = {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

const generateThread = (): ThreadPoint => {
  return {
    id: Date.now(),
    x1: Math.random() * 100,
    y1: Math.random() * 100,
    x2: Math.random() * 100,
    y2: Math.random() * 100,
  };
};

const CodexLoreWeaver: React.FC = () => {
  const [threads, setThreads] = useState<ThreadPoint[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setThreads(prev => {
        const next = [...prev, generateThread()];
        return next.slice(-8); // keep last 8 threads
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-purple-950 to-indigo-900 p-4 rounded-xl shadow-md text-white h-64">
      <h2 className="text-lg font-bold mb-2">Codex Lore Weaver</h2>
      <svg className="absolute inset-0 w-full h-full">
        {(threads ?? []).map((thread) => (
          <motion.line
            key={thread.id}
            x1={`${thread.x1}%`}
            y1={`${thread.y1}%`}
            x2={`${thread.x2}%`}
            y2={`${thread.y2}%`}
            stroke="violet"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        ))}
      </svg>
    </div>
  );
};

export default CodexLoreWeaver;
