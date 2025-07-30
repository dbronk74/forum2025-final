import React from 'react';
import { Link } from 'react-router-dom';

export default function ForumOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white p-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to The Forum 2025</h1>
      <p className="text-lg mb-10 text-center text-gray-300">
        Explore the different branches below to engage in thought-provoking debates, track knowledge, and interact in real time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <BranchCard title="🛡 The Gauntlet" description="Debate duels, prestige paths, and clash challenges." to="/gauntlet" />
        <BranchCard title="🎙 WorldSpeak Arena" description="Real-time voice battles, HUD visuals, and audience pulses." to="/arena" />
        <BranchCard title="🧠 Inner Temple" description="Personal growth, philosophy, and sacred insight maps." to="/innertemple" />
        <BranchCard title="🔮 Oracle" description="Ask deep questions and receive mystical AI responses." to="/oracle" />
        <BranchCard title="📜 Codex Sanctum" description="Lore systems, verse trails, and historical debates." to="/codex" />
        <BranchCard title="📊 Compass Council" description="Civic clarity, policy models, and government transparency." to="/compass" />
        <BranchCard title="💬 Round Table" description="Collaborative discussion, feedback loops, and mentor bots." to="/roundtable" />
        <BranchCard title="💼 Vault" description="Monetization hub: earnings, bets, ad credits, and creator tools." to="/vault" />
      </div>
    </div>
  );
}

function BranchCard({ title, description, to }: { title: string; description: string; to: string }) {
  return (
    <Link
      to={to}
      className="block p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition hover:scale-105"
    >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </Link>
  );
}
