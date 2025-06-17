import React, { useState } from 'react';
import { motion } from 'framer-motion';

const factions = [
  { name: 'Logic', color: 'text-blue-400', bg: 'bg-blue-900/40' },
  { name: 'Emotion', color: 'text-rose-400', bg: 'bg-rose-900/40' },
  { name: 'Memory', color: 'text-amber-300', bg: 'bg-amber-900/40' },
  { name: 'Mystery', color: 'text-purple-300', bg: 'bg-purple-900/40' },
];

export default function FactionSelector() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full max-w-lg mx-auto text-center mt-10">
      <h2 className="text-xl font-bold text-white mb-4">Choose Your Faction</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {factions.map((faction, idx) => (
          <motion.div
            key={faction.name}
            onClick={() => setSelected(faction.name)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer border border-gray-700 rounded-lg py-4 px-2 ${faction.bg} ${
              selected === faction.name ? 'ring-2 ring-white' : ''
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.4 }}
          >
            <p className={`text-sm font-semibold ${faction.color}`}>{faction.name}</p>
          </motion.div>
        ))}
      </div>

      {selected && (
        <motion.div
          className="mt-6 text-sm text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          You’ve selected: <span className="font-semibold text-white">{selected}</span>
        </motion.div>
      )}
    </div>
  );
}
