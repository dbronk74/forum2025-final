// src/components/InnerTemple/IdeaThreadLoom.tsx

import React, { useEffect, useState } from 'react';

type Thread = {
  id: number;
  text: string;
  x: number;
  y: number;
  color: string;
  length: number;
};

const colors = ['#a78bfa', '#818cf8', '#6366f1', '#4f46e5', '#4338ca'];

const generateThread = (id: number): Thread => ({
  id,
  text: `Thread #${id}`,
  x: Math.random() * 90 + 5,
  y: Math.random() * 70 + 10,
  color: colors[id % colors.length],
  length: Math.random() * 80 + 20,
});

const IdeaThreadLoom: React.FC = () => {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    let id = 0;
    const interval = setInterval(() => {
      setThreads((prev) => {
        const newThread = generateThread(id);
        id++;
        const nextThreads = [...prev, newThread];
        if (nextThreads.length > 15) {
          nextThreads.shift();
        }
        return nextThreads;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 bg-zinc-900 rounded-lg overflow-hidden">
      {(threads ?? []).map(({ id, text, x, y, color, length }) => (
        <div
          key={id}
          className="absolute text-xs font-semibold text-white"
          style={{ top: `${y}%`, left: `${x}%` }}
        >
          <div
            className="h-1 rounded-full"
            style={{ width: `${length}px`, backgroundColor: color }}
          />
          <span className="ml-2 select-none">{text}</span>
        </div>
      ))}
    </div>
  );
};

export default IdeaThreadLoom;
