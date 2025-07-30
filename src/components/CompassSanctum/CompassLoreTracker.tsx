import React from 'react';
import { motion } from 'framer-motion';
import { FaFeatherAlt, FaBookOpen, FaScroll, FaSitemap } from 'react-icons/fa';

const loreEntries = [
  { icon: <FaFeatherAlt size={24} />, title: 'Ethical Threads' },
  { icon: <FaBookOpen size={24} />, title: 'Recorded Narratives' },
  { icon: <FaScroll size={24} />, title: 'Council Decrees' },
  { icon: <FaSitemap size={24} />, title: 'Ideological Branches' },
];

const CompassLoreTracker: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-xl shadow-md border border-slate-800 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Compass Lore Tracker</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {loreEntries.map((entry, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 p-5 bg-slate-800 rounded-lg hover:bg-slate-700 transition"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
          >
            <div className="text-yellow-300">{entry.icon}</div>
            <div className="text-base font-medium tracking-wide">{entry.title}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompassLoreTracker;
