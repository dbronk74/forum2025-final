import React from 'react';
import { motion } from 'framer-motion';

const lorePassages = [
  "Within the glyph, the ancients encoded not answers, but the right questions.",
  "Every contradiction in the Codex reveals a deeper symmetry.",
  "The Lorebook scrolls not forward, but inward—each passage a mirror of thought.",
  "Truths shimmer between the lines, written in pulses rather than ink.",
  "Interpretation is not distortion—it is the awakening of dormant insight."
];

const CodexSanctumScrollLorebook: React.FC = () => {
  return (
    <motion.div
      className="bg-gradient-to-b from-purple-900 to-zinc-900 p-6 rounded-xl border border-purple-700 shadow-md max-h-64 overflow-y-auto scroll-smooth"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl font-bold text-purple-300 mb-4">Codex Scroll Lorebook</h2>
      <div className="space-y-4 text-sm text-purple-200 font-serif">
        {(lorePassages ?? []).map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
};

export default CodexSanctumScrollLorebook;
