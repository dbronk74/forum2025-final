// src/components/Gauntlet/Gauntlet.tsx

import React from 'react';
import GauntletCore from './GauntletCore';
import GauntletDebateTimer from './GauntletDebateTimer';
import GauntletSpectatorPredictionEngine from './GauntletSpectatorPredictionEngine';

const Gauntlet: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-black via-gray-900 to-black text-white p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">The Gauntlet</h1>
      <GauntletDebateTimer />
      <GauntletCore />
      <GauntletSpectatorPredictionEngine />
    </div>
  );
};

export default Gauntlet;
