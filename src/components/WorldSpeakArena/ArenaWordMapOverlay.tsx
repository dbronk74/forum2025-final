import React from 'react';

const ArenaWordMapOverlay: React.FC = () => {
  const dummyWords = ['Freedom', 'Truth', 'Censorship', 'Media', 'AI', 'Bias', 'Power', 'Speech'];

  return (
    <div className="fixed bottom-4 right-4 w-64 h-64 bg-zinc-900 bg-opacity-80 text-white p-3 rounded shadow-md overflow-y-auto text-xs z-50">
      <h3 className="text-sm font-semibold mb-2">🧠 Word Map</h3>
      <ul className="grid grid-cols-2 gap-2">
        {(dummyWords ?? []).map((word, index) => (
          <li key={index} className="bg-zinc-700 px-2 py-1 rounded text-center">
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArenaWordMapOverlay;
