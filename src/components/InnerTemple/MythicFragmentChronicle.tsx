// src/components/InnerTemple/MythicFragmentChronicle.tsx

import React from 'react';

const fragments = [
  {
    id: 1,
    title: 'The Shattered Sigil',
    description: 'An ancient emblem lost to time, holding the secrets of forgotten lore.',
    timestamp: 'c. 1325',
  },
  {
    id: 2,
    title: 'Echoes of the Primordial',
    description: 'Whispers from the dawn of creation, shaping the flow of cosmic energy.',
    timestamp: 'c. 5400 BC',
  },
  {
    id: 3,
    title: 'The Binding Oath',
    description: 'A sacred vow that binds souls across dimensions and eras.',
    timestamp: 'c. 1089',
  },
];

const MythicFragmentChronicle: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-tr from-purple-900 to-indigo-900 rounded-xl shadow-lg text-white select-none">
      <h2 className="text-2xl font-bold mb-6 text-center">Mythic Fragment Chronicle</h2>
      <ul className="space-y-5">
        {fragments.map(({ id, title, description, timestamp }) => (
          <li key={id} className="bg-purple-800 rounded-lg p-4 shadow-inner">
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="text-sm text-purple-300 mb-2">{description}</p>
            <span className="text-xs text-purple-400 italic">{timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MythicFragmentChronicle;
