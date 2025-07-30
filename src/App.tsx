// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Entry gate + testing scenes
import SentinelGate from "./pages/SentinelGateScene";
import SwordTestScene from "./pages/SwordTestScene";
import SentinelLeftTestScene from "./pages/SentinelLeftTestScene";

// Core platform pages
import HomePage from "./pages/HomePage";
import GauntletPage from "./pages/GauntletPage";
import CodexPage from "./pages/CodexPage";
import IntrospectPage from "./pages/IntrospectPage";
import MythicPage from "./pages/MythicPage";
import EntryPage from "./pages/EntryPage";
import EntryReveal from "./pages/EntryReveal";
import NotFound from "./pages/NotFound";

// Monetization + Vault
import CreatorSetupWizard from "./pages/CreatorSetupWizard";
import EarningsDisplay from "./pages/EarningsDisplay";
import VaultDashboard from "./pages/VaultDashboard";

// Monetization features
import BetPanel from "./features/monetization/BetPanel";
import LiveBetPool from "./features/monetization/LiveBetPool";
import ClaimAdReward from "./components/Vault/ClaimAdReward";

// HUD overlay
import MonetizationHUD from "./components/monetization/MonetizationHUD";

// Hub pages (new)
import ForumOverview from "./pages/ForumOverview";
import GauntletHub from "./pages/GauntletHub";
import OracleHub from "./pages/OracleHub";
import RoundTableHub from "./pages/RoundTableHub";
import CompassCouncilHub from "./pages/CompassCouncilHub";
import InnerTempleHub from "./pages/InnerTempleHub";
import CodexSanctumHub from "./pages/CodexSanctumHub";
import WorldSpeakArenaHub from "./pages/WorldSpeakArenaHub";
import SanctumCouncilHub from "./pages/SanctumCouncilHub";
import ForumTubeHub from "./pages/ForumTubeHub";
import VaultHub from "./pages/VaultHub";
import PersonalThinkHub from "./pages/PersonalThinkHub";

function App() {
  return (
    <BrowserRouter>
      <MonetizationHUD />

      <Routes>
        {/* Entry paths */}
        <Route path="/" element={<SentinelGate />} />
        <Route path="/entry" element={<SentinelGate />} />
        <Route path="/gate" element={<SentinelGate />} />
        <Route path="/entry-page" element={<EntryPage />} />
        <Route path="/entry-reveal" element={<EntryReveal />} />

        {/* Core platform */}
        <Route path="/forum" element={<HomePage />} />
        <Route path="/gauntlet" element={<GauntletPage />} />
        <Route path="/codex" element={<CodexPage />} />
        <Route path="/introspect" element={<IntrospectPage />} />
        <Route path="/mythic" element={<MythicPage />} />

        {/* Hubs */}
        <Route path="/forum-hub" element={<ForumOverview />} />
        <Route path="/gauntlet-hub" element={<GauntletHub />} />
        <Route path="/oracle-hub" element={<OracleHub />} />
        <Route path="/roundtable-hub" element={<RoundTableHub />} />
        <Route path="/compass-hub" element={<CompassCouncilHub />} />
        <Route path="/inner-temple-hub" element={<InnerTempleHub />} />
        <Route path="/codex-hub" element={<CodexSanctumHub />} />
        <Route path="/worldspeak-hub" element={<WorldSpeakArenaHub />} />
        <Route path="/sanctum-council-hub" element={<SanctumCouncilHub />} />
        <Route path="/forumtube-hub" element={<ForumTubeHub />} />
        <Route path="/vault-hub" element={<VaultHub />} />
        <Route path="/personalthink-hub" element={<PersonalThinkHub />} />

        {/* Monetization */}
        <Route path="/vault" element={<VaultDashboard />} />
        <Route path="/earnings" element={<EarningsDisplay />} />
        <Route path="/creator-setup" element={<CreatorSetupWizard />} />
        <Route path="/bet-panel" element={<BetPanel />} />
        <Route path="/live-bets" element={<LiveBetPool />} />
        <Route path="/claim-reward" element={<ClaimAdReward />} />

        {/* Testing */}
        <Route path="/swordtest" element={<SwordTestScene />} />
        <Route path="/sentineltest" element={<SentinelLeftTestScene />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
