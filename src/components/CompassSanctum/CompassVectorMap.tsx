import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaArrowRight, FaArrowDown, FaArrowLeft } from 'react-icons/fa';

const vectors = [
  {
    direction: 'North',
    label: 'Altruism',
    icon: <FaArrowUp />,
    description: 'Focus on service, sacrifice, and collective wellbeing.',
  },
  {
    direction: 'East',
    label: 'Pragmatism',
    icon: <FaArrowRight />,
    description: 'Guided by outcome efficiency and real-world viability.',
  },
  {
    direction: 'South',
    label: 'Self-Preservation',
    icon: <FaArrowDown />,
    description: 'Emphasis on autonomy, caution, and personal security.',
  },
  {
    direction: 'West',
    label: 'Tradition',
    icon: <FaArrowLeft />,
    description: 'Oriented toward legacy, rituals, and ancestral grounding.',
  },
];

const CompassVectorMap: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-xl shadow-lg border border-slate-800 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Compass Vector Map</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {(vectors ?? []).map((vec, idx) => (
          <motion.div
            key={idx}
            className="bg-slate-800 p-5 rounded-lg flex flex-col gap-2 hover:bg-slate-700 transition"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 125 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-yellow-300 text-lg font-semibold">
              {vec.icon}
              <span>{vec.direction} – {vec.label}</span>
            </div>
            <p className="text-sm text-slate-300">{vec.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompassVectorMap;
