import React from 'react';

const mockChronicle = [
  { time: '3:15 AM', entry: 'The mind wandered but returned with clarity.' },
  { time: '3:42 AM', entry: 'A symbol emerged from the silence: ∞' },
  { time: '4:01 AM', entry: 'Duality is not opposition, but rhythm.' },
];

const SanctumMindChronicle: React.FC = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-4 max-w-md shadow-lg">
      <h2 className="text-xl text-emerald-300 font-semibold mb-3">🧠 Mind Chronicle</h2>
      <ul className="space-y-2 max-h-60 overflow-y-auto">
        {(mockChronicle ?? []).map((entry, idx) => (
          <li key={idx} className="text-sm text-gray-200 border-b border-zinc-600 pb-2">
            <span className="text-emerald-400 font-mono">{entry.time}</span> — {entry.entry}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SanctumMindChronicle;
