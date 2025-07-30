import React from "react";
import SpeakerAuraLayer from "../components/Gauntlet/SpeakerAuraLayer";
import SpeakerHighlightAura from "../components/Gauntlet/SpeakerHighlightAura";
import PulseGlowCanvas from "../components/Gauntlet/PulseGlowCanvas";
import RebuttalStabilityMeter from "../components/Gauntlet/RebuttalStabilityMeter";
import BackgroundEnergyLayer from "../components/Gauntlet/BackgroundEnergyLayer";
import ClarityTracker from "../components/Gauntlet/ClarityTracker";
import ArgumentHeatmap from "../components/Gauntlet/ArgumentHeatmap";
import GauntletTimerRing from "../components/Gauntlet/GauntletTimerRing";
import GauntletDebateTimer from "../components/Gauntlet/GauntletDebateTimer";
import GauntletRebuttalTracker from "../components/Gauntlet/GauntletRebuttalTracker";

const GauntletPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white font-sans">
      {/* Background Energy */}
      <BackgroundEnergyLayer />

      {/* Core Debate Visuals */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <PulseGlowCanvas />
        <SpeakerAuraLayer />
        <SpeakerHighlightAura />
      </div>

      {/* Central Timer and Metrics */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20">
        <GauntletTimerRing />
        <GauntletDebateTimer />
      </div>

      {/* Rebuttal / Clarity / Argument Layers */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-around items-center">
        <RebuttalStabilityMeter />
        <GauntletRebuttalTracker />
        <ClarityTracker />
      </div>

      {/* Argument Heatmap Fullscreen Overlay */}
      <div className="absolute inset-0 z-5 pointer-events-none opacity-60">
        <ArgumentHeatmap />
      </div>

      {/* Overlay Label */}
      <div className="absolute bottom-5 right-5 z-30 text-xs text-gray-400 opacity-40">
        Gauntlet Visual Test Mode
      </div>
    </div>
  );
};

export default GauntletPage;
