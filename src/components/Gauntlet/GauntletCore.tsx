// src/components/Gauntlet/GauntletCore.tsx

import React from 'react';
import GauntletDebateCompass from './GauntletDebateCompass';
import GauntletSpectatorFlare from './GauntletSpectatorFlare';
import GauntletFactionTrialAura from './GauntletFactionTrialAura';
import GauntletLoreBeacon from './GauntletLoreBeacon';
import GauntletResonanceMeter from './GauntletResonanceMeter';
import GauntletMythicBonding from './GauntletMythicBonding';
import GauntletVictoryTracker from './GauntletVictoryTracker';
import GauntletSummoningWreath from './GauntletSummoningWreath';
import GauntletSpectralSigil from './GauntletSpectralSigil';
import GauntletTimerRing from './GauntletTimerRing';
import GauntletEchoPillarMonument from './GauntletEchoPillarMonument';
import GauntletPrecisionScoreChart from './GauntletPrecisionScoreChart';

const GauntletCore: React.FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto p-6 space-y-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <GauntletDebateCompass />
          <GauntletSpectatorFlare />
          <GauntletFactionTrialAura />
          <GauntletLoreBeacon />
          <GauntletResonanceMeter />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <GauntletMythicBonding />
          <GauntletVictoryTracker />
          <GauntletPrecisionScoreChart />
          <GauntletSummoningWreath />
          <GauntletSpectralSigil />
        </div>
      </div>

      {/* Full-width Footer Tools */}
      <div className="pt-8 border-t border-zinc-700">
        <GauntletTimerRing />
        <GauntletEchoPillarMonument />
      </div>
    </section>
  );
};

export default GauntletCore;
