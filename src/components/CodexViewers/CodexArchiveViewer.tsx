import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ArchiveEntry {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

const mockArchive: ArchiveEntry[] = [
  {
    id: '001',
    title: 'First Light of the Sanctum',
    excerpt: 'When the veil first shimmered and the Codex sang...',
    date: '2025-03-01',
  },
  {
    id: '002',
    title: 'Echoes in the Hall of Glyphs',
    excerpt: 'The resonance of glyph rings began to pulse across timelines...',
    date: '2025-04-12',
  },
  {
    id: '003',
    title: 'The Path of Tethered Realms',
    excerpt: 'A sanctified journey through the symbolic lattice...',
    date: '2025-05-08',
  },
];

const CodexArchiveViewer: React.FC = () => {
  const [selected, setSelected] = useState<ArchiveEntry | null>(null);

  return (
    <div className="p-6 bg-zinc-900 text-zinc-100 rounded-lg shadow-xl max-w-4xl mx-auto border border-zinc-700">
      <h2 className="text-2xl font-semibold mb-4 text-purple-300">
        Codex Archive Viewer
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mockArchive.map((entry) => (
          <motion.div
            key={entry.id}
            className={`cursor-pointer p-4 rounded-md border hover:border-purple-400 ${
              selected?.id === entry.id ? 'border-purple-500 bg-zinc-800' : 'border-zinc-700'
            }`}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(entry)}
          >
            <p className="text-lg font-semibold text-purple-200">{entry.title}</p>
            <p className="text-xs text-zinc-400">{entry.date}</p>
            <p className="text-sm mt-2">{entry.excerpt}</p>
          </motion.div>
        ))}
      </div>

      {selected && (
        <motion.div
          className="mt-6 p-5 border border-purple-700 rounded-md bg-zinc-800"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-bold text-purple-300 mb-2">
            {selected.title}
          </h3>
          <p className="text-sm text-zinc-300">
            [Full narrative content for "{selected.title}" would render here...]
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default CodexArchiveViewer;
