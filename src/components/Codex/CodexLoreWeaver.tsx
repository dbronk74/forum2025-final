import React, { useState } from 'react';
import { motion } from 'framer-motion';

const starterPhrases = [
  'From silence rose the first spark.',
  'The fracture became form.',
  'Echoes wrote truth across time.',
  'Matter bowed to meaning.',
];

export default function CodexLoreWeaver() {
  const [weave, setWeave] = useState<string[]>([]);

  const handleWeave = () => {
    const next = starterPhrases[Math.floor(Math.random() * starterPhrases.length)];
    setWeave([...weave, next]);
  };

  return (
    <div className="max-w-xl mx-auto bg-slate-900 p-6 rounded-xl shadow-md text-white space-y-6">
      <h2 className="text-2xl font-bold text-indigo-300">Codex Lore Weaver</h2>
      <div className="bg-slate-800 p-4 rounded-lg min-h-[180px] space-y-2 border border-indigo-600">
        {(weave ?? []).map((line, index) => (
          <motion.p
            key={index}
            className="text-sm text-purple-300 italic"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {line}
          </motion.p>
        ))}
      </div>
      <button
        onClick={handleWeave}
        className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-300"
      >
        Weave Next Thread
      </button>
    </div>
  );
}
