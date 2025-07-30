import React from 'react';

interface Directive {
  id: number;
  title: string;
  summary: string;
  status: 'Active' | 'Resolved' | 'Stalled';
  date: string;
}

const mockDirectives: Directive[] = [
  {
    id: 1,
    title: 'Reevaluate Temporal Ethics',
    summary: 'Assess the implications of memory alteration in long-term debates.',
    status: 'Active',
    date: '2025-07-01',
  },
  {
    id: 2,
    title: 'Sanctum Alignment Calibration',
    summary: 'Ensure spiritual-narrative consensus across Codex and Council branches.',
    status: 'Resolved',
    date: '2025-06-18',
  },
  {
    id: 3,
    title: 'Discourse Reinforcement Protocol',
    summary: 'Address drop-off in constructive rebuttals during Phase 3 Trials.',
    status: 'Stalled',
    date: '2025-06-02',
  },
];

const statusColor = {
  Active: 'bg-green-500',
  Resolved: 'bg-blue-500',
  Stalled: 'bg-yellow-500',
};

const CouncilDirectiveTracker: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4 bg-slate-900 rounded-xl shadow-md border border-indigo-700">
      <h2 className="text-xl font-semibold text-indigo-300 mb-4 text-center">Council Directive Tracker</h2>
      <ul className="space-y-4">
        {mockDirectives.map((directive) => (
          <li key={directive.id} className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-indigo-200">{directive.title}</span>
              <span className={`text-xs text-white px-2 py-1 rounded-full ${statusColor[directive.status]}`}>
                {directive.status}
              </span>
            </div>
            <p className="text-sm text-slate-300">{directive.summary}</p>
            <p className="text-xs text-slate-400 mt-2 text-right">Issued: {directive.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CouncilDirectiveTracker;
