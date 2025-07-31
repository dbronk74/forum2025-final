import React from 'react';
import { motion } from 'framer-motion';

interface MetricBarProps {
  label: string;
  value: number;
  color: string;
}

const MetricBar: React.FC<MetricBarProps> = ({ label, value, color }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-300">{label}</span>
        <span className="text-sm text-gray-400">{value}%</span>
      </div>
      <div className="w-full h-3 bg-gray-700 rounded">
        <motion.div
          className="h-3 rounded"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.2 }}
        />
      </div>
    </div>
  );
};

const GauntletDebateSummaryPanel: React.FC = () => {
  const metrics = [
    { label: 'Clarity', value: 88, color: '#8b5cf6' },
    { label: 'Logic', value: 76, color: '#22d3ee' },
    { label: 'Persuasion', value: 91, color: '#f97316' },
    { label: 'Impact', value: 83, color: '#10b981' },
  ];

  return (
    <div className="bg-gray-900 border border-purple-600 rounded-xl p-6 shadow-lg w-full max-w-md mx-auto mt-8">
      <h2 className="text-xl text-purple-300 font-semibold mb-4 text-center">Debate Summary</h2>
      {(metrics ?? []).map((m) => (
        <MetricBar key={m.label} label={m.label} value={m.value} color={m.color} />
      ))}
      <p className="text-xs text-gray-500 text-center mt-6 italic">Scores generated from audience and AI analysis.</p>
    </div>
  );
};

export default GauntletDebateSummaryPanel;
