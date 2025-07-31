import React from 'react';
import { motion } from 'framer-motion';

interface LoreEntry {
  id: string;
  timestamp: string;
  title: string;
  summary: string;
}

const mockLoreTrail: LoreEntry[] = [
  {
    id: 'lore1',
    timestamp: 'Year 312 • Solstice Accord',
    title: 'Unification Charter Signed',
    summary: 'The five ideologue factions agree to a unified moral compass under Council arbitration.',
  },
  {
    id: 'lore2',
    timestamp: 'Year 317 • Drift Reckoning',
    title: 'Truth Drift Crisis',
    summary: 'Council detected major philosophical misalignment, prompting a sector-wide recalibration.',
  },
  {
    id: 'lore3',
    timestamp: 'Year 320 • Fracture Resolution',
    title: 'Axis of Rationale Restored',
    summary: 'Through a unanimous vote, ancient ethical tensions were resolved via symbolic restitution.',
  },
];

const CouncilLoreTrail: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto px-4 py-8">
      <h2 className="text-xl font-bold text-center text-indigo-300 mb-6">Council Lore Trail</h2>
      <div className="border-l-2 border-indigo-600 pl-4 space-y-6">
        {(mockLoreTrail ?? []).map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            <div className="absolute -left-5 top-1 w-3 h-3 bg-indigo-400 rounded-full shadow" />
            <p className="text-xs text-slate-400">{entry.timestamp}</p>
            <h3 className="text-base font-semibold text-indigo-200">{entry.title}</h3>
            <p className="text-sm text-slate-300">{entry.summary}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CouncilLoreTrail;
