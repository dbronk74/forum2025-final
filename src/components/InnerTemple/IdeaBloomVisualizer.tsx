// src/components/InnerTemple/IdeaBloomVisualizer.tsx

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Idea {
  id: string;
  text: string;
  x: number;
  y: number;
  scale: number;
  color: string;
}

const colors = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#6F4E7C'];

const generateRandomIdea = (id: number): Idea => ({
  id: id.toString(),
  text: `Idea #${id}`,
  x: Math.random() * 80 + 10,
  y: Math.random() * 60 + 20,
  scale: Math.random() * 0.8 + 0.6,
  color: colors[id % colors.length],
});

const IdeaBloomVisualizer: React.FC = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]);

  useEffect(() => {
    let id = 0;
    const interval = setInterval(() => {
      setIdeas((prev) => {
        const newIdea = generateRandomIdea(id);
        id++;
        const nextIdeas = [...prev, newIdea];
        if (nextIdeas.length > 12) {
          nextIdeas.shift();
        }
        return nextIdeas;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 bg-zinc-900 rounded-lg shadow-inner overflow-hidden">
      <AnimatePresence>
        {(ideas ?? []).map(({ id, text, x, y, scale, color }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1 }}
            className="absolute rounded-full px-4 py-2 text-white font-semibold cursor-default select-none"
            style={{
              top: `${y}%`,
              left: `${x}%`,
              backgroundColor: color,
              transformOrigin: 'center center',
              userSelect: 'none',
            }}
          >
            {text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default IdeaBloomVisualizer;
