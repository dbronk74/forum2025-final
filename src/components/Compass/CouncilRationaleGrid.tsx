import React from 'react';
import { Brain, Heart, Scale, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

type Rationale = {
  icon: JSX.Element;
  title: string;
  summary: string;
};

const rationaleData: Rationale[] = [
  {
    icon: <Scale className="h-6 w-6 text-amber-400" />,
    title: 'Ethical Balance',
    summary: 'Weighed against fairness and collective well-being.',
  },
  {
    icon: <Brain className="h-6 w-6 text-sky-400" />,
    title: 'Logical Structure',
    summary: 'Grounded in valid premises and internal coherence.',
  },
  {
    icon: <Heart className="h-6 w-6 text-rose-400" />,
    title: 'Emotional Resonance',
    summary: 'Aligned with human empathy and psychological insight.',
  },
  {
    icon: <BookOpen className="h-6 w-6 text-green-400" />,
    title: 'Precedent Reference',
    summary: 'Consistent with past rulings or wisdom texts.',
  },
];

const CouncilRationaleGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 rounded-lg shadow-lg border border-indigo-700">
      {(rationaleData ?? []).map((rationale, index) => (
        <motion.div
          key={index}
          className="bg-indigo-800/70 p-4 rounded-md border border-indigo-600 hover:border-indigo-400 transition-colors"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-center gap-3 mb-2">
            {rationale.icon}
            <h3 className="text-lg font-semibold text-indigo-100">{rationale.title}</h3>
          </div>
          <p className="text-indigo-300 text-sm">{rationale.summary}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default CouncilRationaleGrid;
