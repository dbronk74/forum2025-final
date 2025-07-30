// src/components/InnerTemple/TempleToneAdjuster.tsx

import React, { useState } from 'react';

const tones = ['Calm', 'Reflective', 'Serene', 'Focused', 'Meditative'];

const TempleToneAdjuster: React.FC = () => {
  const [currentTone, setCurrentTone] = useState(tones[0]);

  const cycleTone = () => {
    const currentIndex = tones.indexOf(currentTone);
    const nextIndex = (currentIndex + 1) % tones.length;
    setCurrentTone(tones[nextIndex]);
  };

  return (
    <div
      className="max-w-xs mx-auto p-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-black rounded-xl shadow-lg text-white text-center cursor-pointer select-none"
      onClick={cycleTone}
      title="Click to change meditation tone"
    >
      <h3 className="text-lg font-semibold mb-2">Temple Tone Adjuster</h3>
      <p className="text-3xl font-bold">{currentTone}</p>
      <p className="mt-3 text-sm text-indigo-300">Click to cycle tone</p>
    </div>
  );
};

export default TempleToneAdjuster;
