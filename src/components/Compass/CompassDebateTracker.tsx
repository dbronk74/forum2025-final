import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TimerReset, Landmark, Scale3D } from 'lucide-react';

interface DebateStage {
  label: string;
  color: string;
  icon: JSX.Element;
}

const stages: DebateStage[] = [
  { label: 'Opening', color: 'bg-cyan-500', icon: <Landmark size={16} /> },
  { label: 'Deliberation', color: 'bg-amber-400', icon: <Scale3D size={16} /> },
  { label: 'Verdict', color: 'bg-emerald-500', icon: <TimerReset size={16} /> },
];

const CompassDebateTracker: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % stages.length);
    }, 5000); // rotate stage every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto p-4 rounded-xl bg-gradient-to-br from-slate-800 via-slate-900 to-black shadow-xl border border-slate-700">
      <h2 className="text-center text-sm text-slate-300 uppercase tracking-widest mb-4">
        Council Debate Tracker
      </h2>

      <div className="flex justify-between items-center gap-3">
        {stages.map((stage, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center justify-center text-xs text-slate-200 px-2 py-2 rounded-lg border ${
              currentStage === index
                ? `${stage.color} border-white scale-110`
                : 'bg-slate-700 border-slate-600'
            } transition-all duration-300 ease-in-out`}
            animate={{ opacity: currentStage === index ? 1 : 0.6 }}
          >
            {stage.icon}
            <span className="mt-1">{stage.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 text-center text-xs text-slate-500">
        Phase {currentStage + 1} of {stages.length}
      </div>
    </div>
  );
};

export default CompassDebateTracker;
