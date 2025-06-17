// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import GauntletPage from './pages/GauntletPage';
import RoundTablePage from './pages/RoundTablePage';
import OraclePage from './pages/OraclePage';
import CodexPage from './pages/CodexPage';
import ForumTubePage from './pages/ForumTubePage';
import InnerTemplePage from './pages/InnerTemplePage';
import NotFound from './pages/NotFound';

import WorldSpeakArenaPage from './pages/WorldSpeakArenaPage';
import SanctumPulsePage from './pages/SanctumPulsePage';
import LegacyPage from './pages/LegacyPage';
import LegacyEchoPage from './pages/LegacyEchoPage';
import PulsePage from './pages/PulsePage';
import SpectralPage from './pages/SpectralPage';
import IntrospectPage from './pages/IntrospectPage';
import ReligiousBranchPage from './pages/ReligiousBranchPage';
import MythicPage from './pages/MythicPage';
import CodexSanctumPage from './pages/CodexSanctumPage';
import CompassPage from './pages/CompassPage';
import ArenaPage from './pages/ArenaPage';

import SentinelGate from './pages/SentinelGate'; // ✅ Added

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CinematicIntroPanel from './components/CinematicIntroPanel';
import LorePulseRibbon from './components/LorePulseRibbon';
import FactionRelicScoreboard from './components/FactionRelicScoreboard';
import HUDWheelOverlay from './components/HUDWheelOverlay';

export default function App() {
  return (
    <Router>
      <>
        <CinematicIntroPanel />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/entry" element={<SentinelGate />} /> {/* ✅ ADDED */}
          <Route path="/gauntlet" element={<GauntletPage />} />
          <Route path="/worldspeak" element={<WorldSpeakArenaPage />} />
          <Route path="/roundtable" element={<RoundTablePage />} />
          <Route path="/codexsanctum" element={<CodexSanctumPage />} />
          <Route path="/innertemple" element={<InnerTemplePage />} />
          <Route path="/forumtube" element={<ForumTubePage />} />
          <Route path="/sanctumpulse" element={<SanctumPulsePage />} />
          <Route path="/legacy" element={<LegacyPage />} />
          <Route path="/legacyecho" element={<LegacyEchoPage />} />
          <Route path="/pulse" element={<PulsePage />} />
          <Route path="/spectral" element={<SpectralPage />} />
          <Route path="/introspect" element={<IntrospectPage />} />
          <Route path="/religion" element={<ReligiousBranchPage />} />
          <Route path="/mythic" element={<MythicPage />} />
          <Route path="/codex" element={<CodexPage />} />
          <Route path="/compass" element={<CompassPage />} />
          <Route path="/arena" element={<ArenaPage />} />
          <Route path="/oracle" element={<OraclePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        <LorePulseRibbon />
        <FactionRelicScoreboard />
        <HUDWheelOverlay />
      </>
    </Router>
  );
}
