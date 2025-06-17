import React, { useState } from 'react';

export default function CodexLoreDiffViewer() {
  const [loreA, setLoreA] = useState('The ancient seal shimmered with celestial light.');
  const [loreB, setLoreB] = useState('The ancient sigil shimmered with starlight.');

  const getDiff = (a, b) => {
    const wordsA = a.split(' ');
    const wordsB = b.split(' ');
    return wordsA.map((word, i) => (
      <span key={i} className={word !== wordsB[i] ? 'bg-red-500/30 px-1 rounded' : ''}>
        {word + ' '}
      </span>
    ));
  };

  return (
    <div className="p-6 bg-neutral-900 text-white rounded-xl shadow-lg max-w-4xl mx-auto mt-10 font-serif">
      <h2 className="text-xl font-bold mb-4 text-center text-indigo-400">Codex Lore Diff Viewer</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Version A</label>
          <textarea
            className="w-full h-40 p-2 bg-black/40 rounded border border-indigo-500"
            value={loreA}
            onChange={(e) => setLoreA(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Version B</label>
          <textarea
            className="w-full h-40 p-2 bg-black/40 rounded border border-pink-500"
            value={loreB}
            onChange={(e) => setLoreB(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-6 border-t border-gray-600 pt-4">
        <h3 className="text-sm text-gray-300 mb-2">Differences Highlighted:</h3>
        <div className="bg-black/30 p-4 rounded leading-relaxed text-lg">
          {getDiff(loreA, loreB)}
        </div>
      </div>
    </div>
  );
}
