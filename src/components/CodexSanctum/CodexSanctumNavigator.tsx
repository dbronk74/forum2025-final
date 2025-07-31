import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CodexSanctumNavigator: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const nodes = [
    { id: 0, label: 'Origins' },
    { id: 1, label: 'Chrono' },
    { id: 2, label: 'Glyphs' },
    { id: 3, label: 'Wisdom' },
    { id: 4, label: 'Fractures' },
    { id: 5, label: 'Synthesis' }
  ];

  return (
    <div className="bg-zinc-950 p-6 rounded-xl shadow-xl border border-purple-800 text-white">
      <h2 className="text-2xl font-bold text-purple-300 mb-4">Codex Navigator</h2>
      <p className="text-sm text-purple-200 mb-6 italic">
        Traverse symbolic realms of the Codex Sanctum through intuitive glyphic alignment.
      </p>
      <div className="grid grid-cols-3 gap-4">
        {(nodes ?? []).map((node) => (
          <motion.button
            key={node.id}
            onClick={() => setSelected(node.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              backgroundColor: selected === node.id ? '#7e22ce' : '#3b0764',
              borderColor: selected === node.id ? '#c084fc' : '#a855f7',
              color: selected === node.id ? '#ffffff' : '#d8b4fe'
            }}
            className="rounded-lg border p-4 transition-colors duration-300 text-center shadow"
          >
            {node.label}
          </motion.button>
        ))}
      </div>
      {selected !== null && (
        <motion.div
          className="mt-6 text-purple-100 text-sm italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Path selected: <strong>{nodes[selected].label}</strong> — unlocking codex vector alignment...
        </motion.div>
      )}
    </div>
  );
};

export default CodexSanctumNavigator;
