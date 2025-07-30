import React from 'react';
import { motion } from 'framer-motion';
import { FaFeatherAlt, FaScroll, FaHistory, FaBookOpen } from 'react-icons/fa';

const loreEntries = [
  {
    icon: <FaScroll size={22} />,
    label: 'Founding Scrolls',
    timestamp: 'Year 1',
    description: 'Initial codes of conduct established by the First Council.',
  },
  {
    icon: <FaHistory size={22} />,
    label: 'The Reckoning',
    timestamp: 'Year 8',
    description: 'Major paradigm shift following sectoral realignment vote.',
  },
  {
    icon: <FaBookOpen size={22} />,
    label: 'Sentient Accord',
    timestamp: 'Year 12',
    description: 'Milestone document recognizing AI as participatory observers.',
  },
  {
    icon: <FaFeatherAlt size={22} />,
    label: 'Lore Codex V',
    timestamp: 'Year 17',
    description: 'Latest lore revision ratified across all moral quadrants.',
  },
];

const CouncilLoreTrail: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-xl shadow-lg border border-slate-800 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Council Lore Trail</h2>
      <div className="space-y-5">
        {loreEntries.map((entry, idx) => (
          <motion.div
            key={idx}
            className="flex items-start gap-4 p-5 bg-slate-800 rounded-lg hover:bg-slate-700 transition"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
          >
            <div className="text-yellow-300 mt-1">{entry.icon}</div>
            <div>
              <div className="text-base font-semibold">{entry.label} <span className="text-xs text-slate-400 ml-2">{entry.timestamp}</span></div>
              <p className="text-sm text-slate-300">{entry.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CouncilLoreTrail;
