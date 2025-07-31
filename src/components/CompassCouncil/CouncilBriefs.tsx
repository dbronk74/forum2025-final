import React from 'react';
import { ScrollText } from 'lucide-react';

const councilEntries = [
  {
    id: 1,
    title: 'Doctrine Alignment: Ethos Shift',
    summary: 'The council reached consensus to recalibrate the ethos parameters to account for emergent discourse tones.',
    timestamp: '3 hours ago',
  },
  {
    id: 2,
    title: 'Temporal Context Injection',
    summary: 'A new method of inserting historical bias analysis into ongoing debates was adopted.',
    timestamp: '1 day ago',
  },
  {
    id: 3,
    title: 'Clarity Charter Ratified',
    summary: 'Council approved a resolution to anchor rebuttals in clarity-first logic sequences.',
    timestamp: '2 days ago',
  },
];

const CouncilBriefs: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-10 bg-gradient-to-br from-indigo-900 via-slate-900 to-black border border-indigo-800 p-6 rounded-2xl shadow-lg text-white">
      <div className="flex items-center gap-3 mb-6">
        <ScrollText className="w-6 h-6 text-indigo-400" />
        <h2 className="text-xl font-semibold tracking-wide">Council Briefs</h2>
      </div>

      <div className="space-y-5">
        {(councilEntries ?? []).map(entry => (
          <div
            key={entry.id}
            className="bg-slate-800/60 p-4 rounded-xl border border-slate-700 hover:bg-slate-800 transition-all"
          >
            <h3 className="text-lg font-semibold text-indigo-300">{entry.title}</h3>
            <p className="text-sm text-slate-300 mt-1">{entry.summary}</p>
            <span className="block text-xs text-slate-500 mt-2">{entry.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouncilBriefs;
