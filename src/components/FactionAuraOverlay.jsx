import React from 'react';

const auraMap = {
  solar: 'from-yellow-400 via-orange-500 to-red-600',
  lunar: 'from-blue-500 via-indigo-600 to-purple-700',
  verdant: 'from-green-400 via-emerald-500 to-teal-600',
  void: 'from-gray-700 via-black to-purple-900',
};

export default function FactionAuraOverlay({ faction = 'lunar' }) {
  const aura = auraMap[faction] || auraMap['lunar'];

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div
        className={`absolute inset-0 opacity-25 blur-3xl bg-gradient-to-br ${aura}`}
      />
    </div>
  );
}
