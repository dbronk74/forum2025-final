import React from 'react';
import { motion } from 'framer-motion';

interface Signal {
  id: string;
  origin: string;
  intensity: number;
  sentiment: 'affirmative' | 'opposing' | 'neutral';
}

const mockSignals: Signal[] = [
  { id: 's1', origin: 'Sector Theta', intensity: 0.8, sentiment: 'affirmative' },
  { id: 's2', origin: 'Sector Omicron', intensity: 0.5, sentiment: 'opposing' },
  { id: 's3', origin: 'Sanctum Core', intensity: 0.3, sentiment: 'neutral' },
];

const sentimentColors: Record<Signal['sentiment'], string> = {
  affirmative: 'bg-emerald-400',
  opposing: 'bg-rose-500',
  neutral: 'bg-slate-400',
};

const CouncilSignalChamber: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-slate-900 rounded-xl shadow-lg border border-indigo-800">
      <h2 className="text-2xl font-bold text-center text-indigo-300 mb-6">Council Signal Chamber</h2>
      <div className="flex flex-col gap-4">
        {mockSignals.map((signal, index) => (
          <motion.div
            key={signal.id}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="flex items-center justify-between bg-slate-800 p-4 rounded-lg border border-slate-700"
          >
            <div className="text-sm text-slate-300">
              <p className="font-semibold">{signal.origin}</p>
              <p className="text-xs text-slate-400">Signal ID: {signal.id}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full ${sentimentColors[signal.sentiment]}`} />
              <p className="text-sm text-slate-400">Intensity: {(signal.intensity * 100).toFixed(0)}%</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CouncilSignalChamber;
