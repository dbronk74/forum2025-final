import React from 'react';
import { Link } from 'react-router-dom';

export default function GauntletHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-black text-white p-10">
      <h1 className="text-4xl font-bold text-center text-red-300 mb-4">The Gauntlet</h1>
      <p className="text-center text-red-100 mb-10 max-w-3xl mx-auto">
        Enter the arena of live debate, structured duels, and faction-backed showdowns. The Gauntlet is where arguments clash and reputations rise.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <GauntletCard
          title="⚔️ Duel Mode"
          description="Challenge an opponent to a live debate with timed rounds and audience scoring."
          path="/gauntlet/duel"
        />
        <GauntletCard
          title="🏛️ Faction Wars"
          description="Join your faction to defend shared beliefs in structured multi-round battles."
          path="/gauntlet/faction"
        />
        <GauntletCard
          title="📽️ Replay Theater"
          description="Watch archived duels, complete with sentiment heatmaps and AI highlights."
          path="/gauntlet/replays"
        />
        <GauntletCard
          title="🌟 Prestige Path"
          description="Earn prestige, unlock perks, and evolve your debating identity."
          path="/gauntlet/prestige"
        />
      </div>
    </div>
  );
}

function GauntletCard({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return (
    <Link to={path} className="block p-6 rounded-lg bg-red-800 hover:bg-red-700 transition">
      <h2 className="text-2xl font-semibold text-red-100 mb-2">{title}</h2>
      <p className="text-red-200">{description}</p>
    </Link>
  );
}
