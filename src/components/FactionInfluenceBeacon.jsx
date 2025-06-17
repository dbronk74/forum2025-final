import React from 'react';

const factions = [
  { name: 'Eclipsed Order', value: 72, color: 'bg-purple-600' },
  { name: 'Solar Creed', value: 55, color: 'bg-yellow-400' },
  { name: 'Crimson Heralds', value: 41, color: 'bg-red-500' },
  { name: 'Verdant Pulse', value: 33, color: 'bg-green-400' },
];

export default function FactionInfluenceBeacon() {
  return (
    <div className="fixed right-4 top-20 z-50 flex flex-col items-center space-y-2 bg-black/60 p-3 rounded-lg shadow-xl">
      <h2 className="text-indigo-200 font-bold text-xs uppercase tracking-wider mb-1">Faction Influence</h2>
      <div className="flex flex-col items-center space-y-2">
        {factions.map((faction, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className={`h-24 w-4 rounded-md ${faction.color}`}
              style={{ height: `${faction.value}%`, transition: 'height 0.6s ease-in-out' }}
              title={`${faction.name}: ${faction.value}%`}
            />
            <span className="text-[10px] text-white mt-1 text-center w-10 truncate">{faction.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
