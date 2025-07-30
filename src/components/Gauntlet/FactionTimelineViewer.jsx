// src/components/Gauntlet/FactionTimelineViewer.jsx

import React from 'react';

const events = [
  { timestamp: '0:12', description: 'Opening argument by Faction A' },
  { timestamp: '0:24', description: 'Counter by Faction B' },
  { timestamp: '0:45', description: 'Ripple detected in emotional resonance' }
];

const FactionTimelineViewer = () => {
  return (
    <div className="bg-zinc-800 text-gray-100 border border-zinc-700 rounded-xl p-5 shadow-inner max-w-lg mx-auto">
      <h3 className="text-md font-bold mb-3 text-blue-400">Faction Timeline</h3>
      <ul className="text-sm space-y-2">
        {events.map((e, i) => (
          <li key={i} className="flex space-x-3">
            <span className="font-mono text-blue-300">{e.timestamp}</span>
            <span>{e.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FactionTimelineViewer;
