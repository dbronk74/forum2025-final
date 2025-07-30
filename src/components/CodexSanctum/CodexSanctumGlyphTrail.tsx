import React from 'react';
import { motion } from 'framer-motion';
import { FaStarOfLife } from 'react-icons/fa';

const glyphs = [
  'Awakening',
  'Fracture',
  'Resonance',
  'Convergence',
  'Sanctification',
  'Ascension',
];

const CodexSanctumGlyphTrail: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-br from-zinc-950 to-black border border-purple-700 rounded-xl shadow-xl text-white">
      <h2 className="text-2xl text-purple-300 font-bold text-center mb-4">Codex Sanctum: Glyph Trail</h2>

      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {glyphs.map((label, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3 }}
          >
            <motion.div
              className="w-16 h-16 rounded-full border-2 border-purple-500 bg-purple-700/20 flex items-center justify-center shadow-md hover:bg-purple-600/30 transition-all"
              whileHover={{ scale: 1.2 }}
            >
              <FaStarOfLife className="text-purple-300 text-xl" />
            </motion.div>
            <span className="text-sm mt-2 text-purple-200">{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CodexSanctumGlyphTrail;
