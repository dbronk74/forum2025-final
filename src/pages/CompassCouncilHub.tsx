import React from 'react';
import { Link } from 'react-router-dom';

export default function CompassCouncilHub() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold text-center text-cyan-300 mb-4">Sanctum Council of Compass</h1>
      <p className="text-center text-cyan-100 mb-10 max-w-3xl mx-auto">
        Navigate the mechanisms of government, media narratives, and legislative pathways. This chamber offers tools
        to illuminate civic operations and empower user understanding.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <CompassCard
          title="📜 Council Briefs"
          description="Get AI-generated summaries of complex bills, laws, and hearings."
          path="/compass/briefs"
        />
        <CompassCard
          title="🧭 Pathways Panel"
          description="Map how policies move through the branches of government."
          path="/compass/pathways"
        />
        <CompassCard
          title="📡 Signal Analysis"
          description="Break down political narratives and media language in real-time."
          path="/compass/signal-analysis"
        />
        <CompassCard
          title="🛞 Steering Wheel"
          description="Interactively simulate civic decisions and policy shifts."
          path="/compass/steering-wheel"
        />
      </div>
    </div>
  );
}

function CompassCard({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return (
    <Link to={path} className="block p-6 rounded-lg bg-cyan-800 hover:bg-cyan-700 transition">
      <h2 className="text-2xl font-semibold text-cyan-100 mb-2">{title}</h2>
      <p className="text-cyan-200">{description}</p>
    </Link>
  );
}
