// src/components/InnerTemple/PhilosophicalModeTracker.tsx

import React, { useState } from 'react';

const modes = [
  'Stoic',
  'Existential',
  'Pragmatic',
  'Skeptical',
  'Mystical',
  'Rational',
];

const PhilosophicalModeTracker: React.FC = () => {
  const [currentMode, setCurrentMode] = useState(modes[0]);

  const cycleMode = () => {
    const currentIndex = modes.indexOf(currentMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setCurrentMode(modes[nextIndex]);
  };

  return (
    <div className="max-w-xs mx-auto p-6 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-xl shadow-lg text-white text-center select-none cursor-pointer" onClick={cycleMode}>
      <h3 className="text-lg font-semibold mb-2">Philosophical Mode</h3>
      <p className="text-2xl font-bold">{currentMode}</p>
      <p className="mt-3 text-sm text-indigo-300">Click to cycle modes</p>
    </div>
  );
};

export default PhilosophicalModeTracker;
