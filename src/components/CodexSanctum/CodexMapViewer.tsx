import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Region = {
  id: string;
  name: string;
  description: string;
  x: number;
  y: number;
};

const mockRegions: Region[] = [
  {
    id: '1',
    name: 'Sanctum of Origins',
    description: 'The birthplace of foundational glyphs.',
    x: 20,
    y: 30,
  },
  {
    id: '2',
    name: 'Chrono Rift',
    description: 'Where timelines ripple and intertwine.',
    x: 60,
    y: 50,
  },
  {
    id: '3',
    name: 'Echoing Vault',
    description: 'A chamber of archived truths and lies.',
    x: 40,
    y: 70,
  },
];

const CodexMapViewer: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  return (
    <div className="relative w-full h-[480px] bg-gradient-to-br from-black to-zinc-900 rounded-xl border border-purple-600 shadow-xl overflow-hidden p-6 text-white">
      <h2 className="text-2xl font-bold text-purple-300 mb-4 text-center">Codex Map Viewer</h2>

      <div className="relative w-full h-full border border-zinc-700 rounded bg-zinc-800">
        {mockRegions.map((region) => (
          <motion.div
            key={region.id}
            className="absolute w-5 h-5 bg-purple-500 rounded-full cursor-pointer hover:scale-125 transition-all"
            style={{ top: `${region.y}%`, left: `${region.x}%` }}
            onClick={() => setSelectedRegion(region)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        ))}

        {selectedRegion && (
          <motion.div
            className="absolute bottom-4 left-4 p-4 bg-zinc-950 border border-purple-700 rounded-lg max-w-xs"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <h3 className="text-lg font-semibold text-purple-300 mb-1">
              {selectedRegion.name}
            </h3>
            <p className="text-sm text-zinc-300">{selectedRegion.description}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CodexMapViewer;
