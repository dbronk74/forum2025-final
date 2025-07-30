import React from 'react';
import { motion } from 'framer-motion';

interface Topic {
  id: string;
  title: string;
  urgency: number; // 0 to 1 scale
  resonance: number; // 0 to 1 scale
}

const sampleTopics: Topic[] = [
  { id: 't1', title: 'Ethical AI Deployment', urgency: 0.9, resonance: 0.7 },
  { id: 't2', title: 'Climate Intervention Strategy', urgency: 0.6, resonance: 0.8 },
  { id: 't3', title: 'Neuroprivacy Frameworks', urgency: 0.4, resonance: 0.6 },
];

const getGlowColor = (urgency: number) => {
  if (urgency > 0.75) return 'shadow-rose-500';
  if (urgency > 0.5) return 'shadow-amber-400';
  return 'shadow-indigo-400';
};

const CouncilTopicBeacon: React.FC = () => {
  return (
    <div className="p-6 bg-slate-900 rounded-xl max-w-3xl mx-auto shadow-md border border-indigo-700">
      <h2 className="text-2xl font-bold text-indigo-300 mb-4 text-center">Council Topic Beacon</h2>
      <div className="grid gap-4">
        {sampleTopics.map((topic, index) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className={`p-4 rounded-lg bg-slate-800 text-slate-200 border border-slate-600 shadow-md ${getGlowColor(topic.urgency)} shadow-md`}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{topic.title}</h3>
              <span className="text-xs text-slate-400">#{topic.id}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-full">
                <div className="text-xs text-slate-400">Urgency</div>
                <div className="w-full bg-slate-700 h-2 rounded-full">
                  <div
                    className="bg-rose-400 h-2 rounded-full"
                    style={{ width: `${topic.urgency * 100}%` }}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="text-xs text-slate-400">Resonance</div>
                <div className="w-full bg-slate-700 h-2 rounded-full">
                  <div
                    className="bg-indigo-400 h-2 rounded-full"
                    style={{ width: `${topic.resonance * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CouncilTopicBeacon;
