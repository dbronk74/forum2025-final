import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface ModeEntry {
  user: string;
  mode: 'Stoic' | 'Skeptical' | 'Mystical' | 'Empirical' | 'Rational';
  color: string;
}

interface PhilosophicalModeTrackerProps {
  modes: ModeEntry[];
}

const modeDescriptions: Record<string, string> = {
  Stoic: 'Rooted in inner peace, virtue, and logic.',
  Skeptical: 'Questions assumptions and embraces doubt.',
  Mystical: 'Guided by spiritual, symbolic, or hidden insight.',
  Empirical: 'Trusts data, observation, and evidence.',
  Rational: 'Favors reason, logic, and structured argument.'
};

const PhilosophicalModeTracker: React.FC<PhilosophicalModeTrackerProps> = ({ modes }) => {
  return (
    <div className="relative bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <Sparkles className="text-amber-400" />
        <h2 className="text-xl font-semibold">Philosophical Modes</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {modes.map((entry, idx) => (
          <motion.div
            key={idx}
            className="p-4 rounded-xl border border-slate-700 shadow-inner"
            style={{ background: `${entry.color}22` }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <h3 className="text-lg font-bold">{entry.user}</h3>
            <p className="text-sm text-slate-300">{entry.mode}</p>
            <p className="mt-2 text-xs text-slate-400 italic">{modeDescriptions[entry.mode]}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PhilosophicalModeTracker;
