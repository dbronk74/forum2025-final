import React from 'react';
import { Clock4, ActivitySquare } from 'lucide-react';

const mockTimeline = [
  {
    timestamp: 'Epoch I',
    event: 'First Orb Alignment',
    type: 'event',
  },
  {
    timestamp: 'Epoch II',
    event: 'Council Split',
    type: 'conflict',
  },
  {
    timestamp: 'Epoch III',
    event: 'Lore Reconstruction Protocol Initiated',
    type: 'stability',
  },
];

const getStyleForType = (type: string) => {
  switch (type) {
    case 'event':
      return 'bg-blue-800 border-blue-400';
    case 'conflict':
      return 'bg-red-800 border-red-400';
    case 'stability':
      return 'bg-green-800 border-green-400';
    default:
      return 'bg-slate-800 border-slate-600';
  }
};

const ChronoMapChamber: React.FC = () => {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 max-w-3xl mx-auto mt-10 shadow-md">
      <h2 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-2">
        <Clock4 className="w-6 h-6 text-cyan-400" />
        Chrono Map Chamber
      </h2>

      <div className="space-y-4">
        {mockTimeline.map((entry, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border transition-all ${getStyleForType(entry.type)}`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-lg font-semibold text-white">{entry.timestamp}</span>
              <ActivitySquare className="w-5 h-5 text-slate-300" />
            </div>
            <p className="text-sm text-slate-300">{entry.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChronoMapChamber;
