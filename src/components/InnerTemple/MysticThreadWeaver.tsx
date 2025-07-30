// src/components/InnerTemple/MysticThreadWeaver.tsx

import React, { useEffect, useState } from 'react';

interface Thread {
  id: number;
  label: string;
  x: number;
  y: number;
  opacity: number;
}

const MysticThreadWeaver: React.FC = () => {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    let id = 0;
    const interval = setInterval(() => {
      const newThread = {
        id: id++,
        label: `Thread ${id}`,
        x: Math.random() * 90 + 5,
        y: Math.random() * 70 + 10,
        opacity: 1,
      };
      setThreads((prev) => {
        if (prev.length >= 15) {
          const [, ...rest] = prev;
          return [...rest, newThread];
        }
        return [...prev, newThread];
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg shadow-lg overflow-hidden select-none">
      {threads.map(({ id, label, x, y, opacity }) => (
        <div
          key={id}
          className="absolute text-white text-xs font-medium"
          style={{
            top: `${y}%`,
            left: `${x}%`,
            opacity,
            textShadow: '0 0 5px rgba(255,255,255,0.7)',
          }}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default MysticThreadWeaver;
