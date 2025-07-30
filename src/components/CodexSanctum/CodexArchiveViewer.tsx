import React, { useState } from 'react';
import { motion } from 'framer-motion';

const mockArchives = [
  { title: 'Fragment of the First Flame', excerpt: 'Truth was not spoken, but carved in silence.' },
  { title: 'Scroll of Discord', excerpt: 'Harmony fractured, yet from it sprang voice.' },
  { title: 'Tethered Glyph Record', excerpt: 'Symbols danced in sequence, revealing lost law.' },
  { title: 'Doctrine of Echoes', excerpt: 'Repetition is not error — it is emphasis.' },
  { title: 'Codex Root Ledger', excerpt: 'Every origin bears a pattern.' },
];

export default function CodexArchiveViewer() {
  const [search, setSearch] = useState('');

  const filtered = mockArchives.filter((entry) =>
    entry.title.toLowerCase().includes(search.toLowerCase()) ||
    entry.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gradient-to-br from-black via-slate-900 to-zinc-900 rounded-xl border border-indigo-700 shadow-lg text-white">
      <h2 className="text-2xl font-bold text-indigo-300 mb-4">Codex Archive</h2>

      <input
        type="text"
        placeholder="Search scrolls..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 p-2 bg-zinc-800 border border-indigo-600 rounded text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
        {filtered.length > 0 ? (
          filtered.map((entry, idx) => (
            <motion.div
              key={idx}
              className="border-l-4 border-indigo-500 pl-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-indigo-400">{entry.title}</h3>
              <p className="text-sm text-slate-300 italic">{entry.excerpt}</p>
            </motion.div>
          ))
        ) : (
          <p className="text-sm text-slate-500 italic">No matching entries found.</p>
        )}
      </div>
    </div>
  );
}
