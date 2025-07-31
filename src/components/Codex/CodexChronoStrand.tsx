import React from 'react';
import { motion } from 'framer-motion';

interface ChronoEvent {
  time: string;
  title: string;
  description: string;
}

const events: ChronoEvent[] = [
  {
    time: '400 B.C.',
    title: 'Emergence of Paradox Thought',
    description: 'A school proposing truth can emerge from contradiction.',
  },
  {
    time: '1200 A.D.',
    title: 'Codex Sanctum Transcription',
    description: 'Foundational texts were etched into monolithic stone.',
  },
  {
    time: '2020 A.D.',
    title: 'Digital Revelation Epoch',
    description: 'AI began interpreting ancient logic into modern metaphor.',
  },
];

export default function CodexChronoStrand() {
  return (
    <div className="relative w-full max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-indigo-300 mb-8">ChronoStrand</h2>
      <div className="border-l-2 border-indigo-600 pl-6 relative">
        {(events ?? []).map((event, idx) => (
          <motion.div
            key={idx}
            className="mb-10 relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
          >
            <div className="absolute -left-[14px] top-1 w-4 h-4 rounded-full bg-indigo-500 border-2 border-white shadow-md" />
            <p className="text-sm text-indigo-400">{event.time}</p>
            <h3 className="text-lg font-semibold text-white">{event.title}</h3>
            <p className="text-sm text-slate-300">{event.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
