import React from 'react';

const scriptures = [
  { source: 'Oracle Fragment I', text: 'Within silence, truth finds voice.' },
  { source: 'Codex V:23', text: 'To weave is to remember with intent.' },
  { source: 'Sanctum Verse Δ9', text: 'Every thread binds a story to soul.' },
];

const SanctumScriptureWeaver: React.FC = () => {
  return (
    <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-700 shadow-md max-w-xl">
      <h2 className="text-amber-300 font-bold text-lg mb-4">📜 Scripture Weaver</h2>
      <div className="space-y-4">
        {scriptures.map((s, i) => (
          <div key={i} className="bg-zinc-800 p-3 rounded-lg border-l-4 border-amber-500">
            <p className="text-gray-200 italic">"{s.text}"</p>
            <p className="text-xs text-amber-400 mt-1 text-right">— {s.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SanctumScriptureWeaver;
