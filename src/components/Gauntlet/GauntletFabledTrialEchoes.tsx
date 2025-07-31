import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface TrialEcho {
  id: number;
  title: string;
  champions: string[];
  outcome: 'Victory' | 'Draw' | 'Contested';
  year: number;
}

const fabledTrials: TrialEcho[] = [
  {
    id: 1,
    title: 'The Ethos Paradox',
    champions: ['Astra', 'Valen'],
    outcome: 'Victory',
    year: 2022,
  },
  {
    id: 2,
    title: 'Code of Shadows',
    champions: ['Nyra', 'Lucien'],
    outcome: 'Contested',
    year: 2023,
  },
  {
    id: 3,
    title: 'The Silence Gambit',
    champions: ['Orrin', 'Zephra'],
    outcome: 'Draw',
    year: 2024,
  },
];

const outcomeColor = {
  Victory: 'bg-green-700 border-green-400',
  Draw: 'bg-yellow-600 border-yellow-300',
  Contested: 'bg-red-700 border-red-400',
};

const GauntletFabledTrialEchoes: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-8 text-white">
      <h2 className="text-2xl font-semibold text-center mb-6 flex justify-center items-center gap-2 text-purple-300">
        <Sparkles className="w-5 h-5 animate-pulse" /> Fabled Trial Echoes
      </h2>
      <div className="space-y-5">
        {(fabledTrials ?? []).map((trial) => (
          <motion.div
            key={trial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: trial.id * 0.1 }}
            className={`p-4 rounded-lg border shadow-lg ${outcomeColor[trial.outcome]} bg-opacity-70`}
          >
            <h3 className="text-lg font-bold text-indigo-100">{trial.title}</h3>
            <p className="text-sm text-indigo-300">
              Champions: <span className="font-medium">{trial.champions.join(' vs. ')}</span>
            </p>
            <p className="text-xs text-gray-300">
              Year: {trial.year} · Outcome: <span className="italic">{trial.outcome}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GauntletFabledTrialEchoes;
