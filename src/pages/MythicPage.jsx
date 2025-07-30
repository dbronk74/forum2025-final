import React from 'react';
import { motion } from 'framer-motion';
import BranchHeader from '../components/layout/BranchHeader';
import BranchFooter from '../components/layout/BranchFooter';

import CosmicLoreSigil from '../components/Oracle/CosmicLoreSigil';
import FactionSanctumAuraFlare from '../components/CompassSanctum/FactionSanctumAuraFlare';
import MythicFragmentChronicle from '../components/RoundTable/MythicFragmentChronicle';
import LoreRippleOverlay from '../components/RoundTable/LoreRippleOverlay';
import PropheticVisionSwirl from '../components/Oracle/PropheticVisionSwirl';
import SanctumChronoSigilCircle from '../components/CompassSanctum/SanctumChronoSigilCircle';
import VerseSigilEmitter from '../components/WorldSpeakArena/VerseSigilEmitter';
import PulseGlowFloorLayer from '../components/WorldSpeakArena/PulseGlowFloorLayer';

export default function MythicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-black text-white flex flex-col items-center overflow-hidden">
      <BranchHeader />

      <motion.h1
        className="text-4xl font-bold mt-12 mb-6 text-fuchsia-300 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Mythic Lore
      </motion.h1>

      <motion.p
        className="text-gray-400 max-w-2xl text-center text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Step into the realm of symbolism, sacred glyphs, and mystic lore woven through time.
      </motion.p>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-16">
        <CosmicLoreSigil />
        <FactionSanctumAuraFlare />
        <MythicFragmentChronicle />
        <LoreRippleOverlay />
        <PropheticVisionSwirl />
        <SanctumChronoSigilCircle />
        <VerseSigilEmitter />
        <PulseGlowFloorLayer />
      </div>

      <BranchFooter />
    </div>
  );
}
