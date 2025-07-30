import React from 'react';
import { motion } from 'framer-motion';
import { MapIcon, ScrollText, Landmark } from 'lucide-react';

interface LegislationItem {
  id: string;
  title: string;
  status: 'proposed' | 'debated' | 'passed' | 'repealed';
  region: string;
  impactScore: number; // 0 to 1
}

const legislationList: LegislationItem[] = [
  { id: 'L-001', title: 'Neurodata Privacy Act', status: 'debated', region: 'North Quadrant', impactScore: 0.85 },
  { id: 'L-002', title: 'Cognitive Bias Disclosure Bill', status: 'passed', region: 'Western Council', impactScore: 0.65 },
  { id: 'L-003', title: 'Truthful AI Initiative', status: 'proposed', region: 'Eastern Bloc', impactScore: 0.92 },
];

const statusColorMap: Record<LegislationItem['status'], string> = {
  proposed: 'text-sky-400 border-sky-500',
  debated: 'text-yellow-300 border-yellow-400',
  passed: 'text-emerald-400 border-emerald-500',
  repealed: 'text-rose-400 border-rose-500',
};

const LegislationLoreMap: React.FC = () => {
  return (
    <div className="bg-slate-900 border border-indigo-600 rounded-xl p-6 max-w-4xl mx-auto shadow-lg">
      <div className="flex items-center gap-3 mb-6 text-indigo-300">
        <MapIcon className="w-6 h-6" />
        <h2 className="text-2xl font-bold">Legislation Lore Map</h2>
      </div>
      <div className="space-y-4">
        {legislationList.map((law, idx) => (
          <motion.div
            key={law.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            className={`border rounded-lg p-4 bg-slate-800 shadow-md ${statusColorMap[law.status]}`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <ScrollText className="w-4 h-4" />
                {law.title}
              </div>
              <span className="text-xs text-slate-400">#{law.id}</span>
            </div>
            <div className="text-sm mb-2">Region: <span className="text-indigo-300">{law.region}</span></div>
            <div className="text-xs text-slate-400 mb-1">Impact Score</div>
            <div className="w-full h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-indigo-400 rounded-full"
                style={{ width: `${law.impactScore * 100}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LegislationLoreMap;
