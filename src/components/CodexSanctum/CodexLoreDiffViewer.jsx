import React, { useState, useEffect } from 'react';

const severities = ['Low', 'Medium', 'High'];

const generateContradiction = () => ({
  id: `${Date.now()}-${Math.random()}`,
  fragmentA: `🧩 Fragment ${Math.floor(Math.random() * 100)}`,
  fragmentB: `⚔️ Diverges with ${Math.floor(Math.random() * 100)}`,
  severity: severities[Math.floor(Math.random() * severities.length)],
});

export default function CodexLoreDiffViewer() {
  const [contradictions, setContradictions] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const loop = () => {
      setTimeout(() => {
        if (isMounted) {
          const newEntry = generateContradiction();
          setContradictions(prev => [newEntry, ...prev.slice(0, 4)]);
          loop();
        }
      }, 3000);
    };

    loop();
    return () => { isMounted = false; };
  }, []);

  const getSeverityColor = (level) => {
    switch (level) {
      case 'High': return 'text-red-400';
      case 'Medium': return 'text-yellow-300';
      case 'Low': return 'text-green-300';
      default: return 'text-gray-300';
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white rounded-xl shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-3">🧭 Lore Contradiction Viewer</h2>
      <p className="text-purple-300 mb-5 text-sm">
        Displays conflicting Codex strands across factions and timelines.
      </p>
      <ul className="space-y-4">
        {contradictions.map((c) => (
          <li
            key={c.id}
            className="border border-purple-600 rounded bg-zinc-900 p-4 shadow-inner"
          >
            <div className="text-sm text-purple-200 mb-1">
              Severity:{' '}
              <span className={`font-semibold ${getSeverityColor(c.severity)}`}>
                {c.severity}
              </span>
            </div>
            <div className="text-white text-sm">
              <div>{c.fragmentA}</div>
              <div className="text-red-400">{c.fragmentB}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
