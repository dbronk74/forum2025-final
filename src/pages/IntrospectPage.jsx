import React from 'react';
import BranchHeader from '../components/layout/BranchHeader';
import BranchFooter from '../components/layout/BranchFooter';

import ClarityFragmentMap from '../components/InnerTemple/ClarityFragmentMap';
import ClarityRecoveryBeacon from '../components/InnerTemple/ClarityRecoveryBeacon';
import InsightPromptBar from '../components/InnerTemple/InsightPromptBar';
import InsightReinforcementRing from '../components/InnerTemple/InsightReinforcementRing';
import SemanticClarityScanner from '../components/InnerTemple/SemanticClarityScanner';

export default function IntrospectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-black text-white flex flex-col items-center overflow-hidden">
      <BranchHeader />

      <h1 className="text-4xl font-bold mt-12 mb-6 text-indigo-300 text-center">Introspection Chamber</h1>
      <p className="text-gray-400 max-w-2xl text-center text-lg mb-8">
        Navigate the corridors of thought, clarity, and inner resonance.
      </p>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-16">
        <ClarityFragmentMap />
        <ClarityRecoveryBeacon />
        <InsightPromptBar />
        <InsightReinforcementRing />
        <SemanticClarityScanner />
      </div>

      <BranchFooter />
    </div>
  );
}
