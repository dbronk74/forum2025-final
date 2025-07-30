import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Target } from 'lucide-react';

interface NeutralityAlignmentMeterProps {
  alignmentScore: number; // Range: -100 (biased) to +100 (biased), 0 = perfectly neutral
}

const getAlignmentLabel = (score: number): string => {
  if (score <= -60) return 'Strong Bias Left';
  if (score <= -20) return 'Leaning Left';
  if (score < 20) return 'Neutral';
  if (score < 60) return 'Leaning Right';
  return 'Strong Bias Right';
};

const getAlignmentColor = (score: number): string => {
  if (score <= -60) return 'bg-red-600';
  if (score <= -20) return 'bg-yellow-500';
  if (score < 20) return 'bg-green-500';
  if (score < 60) return 'bg-yellow-500';
  return 'bg-red-600';
};

const NeutralityAlignmentMeter: React.FC<NeutralityAlignmentMeterProps> = ({ alignmentScore }) => {
  const positionPercent = Math.max(-100, Math.min(100, alignmentScore));
  const label = getAlignmentLabel(alignmentScore);
  const color = getAlignmentColor(alignmentScore);

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-slate-900 rounded-xl border border-slate-700 shadow-lg">
      <div className="flex items-center justify-between mb-2 text-sm text-slate-400">
        <span className="flex items-center gap-1">
          <Scale className="w-4 h-4" />
          Bias Spectrum
        </span>
        <span>{label}</span>
      </div>

      <div className="relative w-full h-5 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className={`absolute top-0 h-full ${color}`}
          initial={false}
          animate={{ width: `${Math.abs(positionPercent)}%`, left: positionPercent < 0 ? '0%' : '50%' }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white/60" />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2"
          animate={{ left: `${50 + positionPercent / 2}%` }}
          transition={{ duration: 0.3 }}
        >
          <Target className="w-5 h-5 text-purple-300" />
        </motion.div>
      </div>

      <div className="mt-3 text-xs text-center text-slate-500">
        Alignment Score: <span className="text-purple-300">{alignmentScore}</span>
      </div>
    </div>
  );
};

export default NeutralityAlignmentMeter;
