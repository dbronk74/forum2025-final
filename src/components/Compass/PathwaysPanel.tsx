import React from 'react';
import { motion } from 'framer-motion';
import { Sparkle } from 'lucide-react';

type Pathway = {
  title: string;
  description: string;
  aura: string;
};

const paths: Pathway[] = [
  {
    title: 'Path of Inquiry',
    description: 'Seeks truth through questions and open reflection.',
    aura: 'from-indigo-500 to-purple-700',
  },
  {
    title: 'Path of Conviction',
    description: 'Follows strong beliefs and firm moral stance.',
    aura: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Path of Compassion',
    description: 'Centers decisions on empathy and care.',
    aura: 'from-rose-400 to-pink-600',
  },
  {
    title: 'Path of Balance',
    description: 'Strives for harmony between opposing forces.',
    aura: 'from-lime-400 to-emerald-500',
  },
];

const PathwaysPanel: React.FC = () => {
  return (
    <div className="w-full p-6 bg-gradient-to-br from-gray-950 to-gray-900 rounded-xl border border-gray-800 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <Sparkle className="h-6 w-6 text-indigo-300" />
        <h2 className="text-2xl font-semibold text-indigo-100">Philosophical Pathways</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paths.map((path, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className={`rounded-lg p-4 bg-gradient-to-br ${path.aura} text-white shadow-md hover:scale-[1.02] transition-transform duration-300`}
          >
            <h3 className="text-lg font-bold mb-1">{path.title}</h3>
            <p className="text-sm opacity-90">{path.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PathwaysPanel;
