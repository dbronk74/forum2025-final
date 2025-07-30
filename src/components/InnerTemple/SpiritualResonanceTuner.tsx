// src/components/InnerTemple/SpiritualResonanceTuner.tsx

import React, { useState } from 'react';

const frequencies = ['Low', 'Medium', 'High', 'Transcendent'];

const SpiritualResonanceTuner: React.FC = () => {
  const [frequency, setFrequency] = useState(frequencies[1]);

  const cycleFrequency = () => {
    const currentIndex = frequencies.indexOf(frequency);
    const nextIndex = (currentIndex + 1) % frequencies.length;
    setFrequency(frequencies[nextIndex]);
  };

  return (
    <div
      className="max-w-xs mx-auto p-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-black rounded-xl shadow-lg text-white text-center select-none cursor-pointer"
      onClick={cycleFrequency}
      title="Click to change resonance frequency"
    >
      <h3 className="text-lg font-semibold mb-2">Spiritual Resonance Tuner</h3>
      <p className="text-3xl font-bold">{frequency}</p>
      <p className="mt-3 text-sm text-indigo-300">Click to cycle frequency</p>
    </div>
  );
};

export default SpiritualResonanceTuner;
