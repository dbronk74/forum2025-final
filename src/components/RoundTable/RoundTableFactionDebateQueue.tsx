import React from 'react';

const RoundTableFactionDebateQueue: React.FC = () => {
  return (
    <div className="p-4 rounded-lg bg-gradient-to-br from-purple-900 to-indigo-900 shadow-lg text-white">
      <h2 className="text-xl font-bold mb-3">Faction Debate Queue</h2>
      <ul className="space-y-2">
        <li className="p-2 bg-indigo-700 rounded">🛡️ Arcadia vs Dominion</li>
        <li className="p-2 bg-indigo-700 rounded">🔥 Emberfall vs Astralis</li>
        <li className="p-2 bg-indigo-700 rounded">🌊 Tidewalkers vs Stoneborn</li>
      </ul>
    </div>
  );
};

export default RoundTableFactionDebateQueue;
