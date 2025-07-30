import React from 'react';
import { Link } from 'react-router-dom';

export default function ArenaOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-sky-900 to-indigo-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-sky-300">WorldSpeak Arena</h1>
      <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
        The WorldSpeak Arena is where global discourse unfolds. Enter live sessions, explore archived replays, and monitor argument clarity, sentiment flow, and clash intensity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <ArenaCard
          title="🎤 Enter Live Debate"
          description="Join or spectate a live session in progress."
          to="/arena/live"
        />
        <ArenaCard
          title="🌀 Rewatch a Session"
          description="Access archived sessions with full visual metrics."
          to="/arena/replays"
        />
        <ArenaCard
          title="📊 View Arena Metrics"
          description="Explore clarity, clash, and resonance heatmaps."
          to="/arena/metrics"
        />
        <ArenaCard
          title="💡 AI Commentary"
          description="Review auto-generated summaries and insights."
          to="/arena/ai-commentary"
        />
      </div>
    </div>
  );
}

function ArenaCard({
  title,
  description,
  to,
}: {
  title: string;
  description: string;
  to: string;
}) {
  return (
    <Link
      to={to}
      className="block p-6 bg-slate-800 rounded-xl hover:shadow-lg hover:scale-105 transition"
    >
      <h2 className="text-2xl font-semibold text-sky-300 mb-2">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </Link>
  );
}
