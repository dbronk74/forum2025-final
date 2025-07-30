// src/components/ForumMisc/EchoVerseTrail.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type EchoVerseTrailProps = {
  verse?: string;
  intensity?: number; // 1–10 scale
  tone?: 'mystical' | 'calm' | 'fierce';
};

const toneColorMap: Record<string, string> = {
  mystical: 'from-indigo-500 via-purple-600 to-pink-500',
  calm: 'from-blue-400 via-cyan-300 to-teal-400',
  fierce: 'from-red-600 via-orange-500 to-yellow-400',
};

export default function EchoVerseTrail({
  verse = 'Let echoes of truth ripple into the silence.',
  intensity = 5,
  tone = 'mystical',
}: EchoVerseTrailProps) {
  const [trail, setTrail] = useState<string[]>([]);

  useEffect(() => {
    const words = verse.split(' ');
    let i = 0;
    const interval = setInterval(() => {
      if (i < words.length) {
        setTrail((prev) => [...prev, words[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 600 - intensity * 40);
    return () => clearInterval(interval);
  }, [verse, intensity]);

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 px-4">
      <div className="relative p-6 rounded-xl bg-zinc-900 border border-purple-500/20 shadow-md overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r blur-xl animate-pulse-slow rounded-xl pointer-events-none" />

        <motion.div
          className="text-xl font-serif text-center text-transparent bg-clip-text bg-gradient-to-r"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: `linear-gradient(to right, ${toneColorMap[tone]})`,
          }}
        >
          {trail.join(' ')}
        </motion.div>

        <motion.div
          className="absolute inset-0 rounded-xl border border-purple-400/10 pointer-events-none"
          animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.005, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </div>
  );
}
