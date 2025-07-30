import React from 'react';
import { motion } from 'framer-motion';

type ChronoEvent = {
  timestamp: string;
  title: string;
  detail: string;
};

const mockEvents: ChronoEvent[] = [
  {
    timestamp: '01. Dawn Cycle',
    title: 'First Glyph Emergence',
    detail: 'A glyph of origin shimmered from the void.',
  },
  {
    timestamp: '02. Rift Expansion',
    title: 'Temporal Divergence',
    detail: 'Time-thread split into infinite speculative paths.',
  },
  {
    timestamp: '03. Sanctum Unveiling',
    title: 'The Mirror Vault Opens',
    detail: 'Secrets of forgotten oaths were revealed.',
  },
];

const CodexSanctumChronoView: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-gradient-to-br from-zinc-900 to-black text-white rounded-xl shadow-lg border border-purple-700">
      <h2 className="text-2xl font-bold text-purple-300 mb-4 text-center">Codex Sanctum: Chrono View</h2>

      <div className="space-y-6">
        {mockEvents.map((event, idx) => (
          <motion.div
            key={idx}
            className="border-l-4 border-violet-500 pl-4 relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.3 }}
          >
            <div className="absolute left-[-14px] top-[4px] w-3 h-3 bg-violet-500 rounded-full shadow-md" />
            <p className="text-sm text-violet-400 mb-1">{event.timestamp}</p>
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-sm text-zinc-300">{event.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CodexSanctumChronoView;
