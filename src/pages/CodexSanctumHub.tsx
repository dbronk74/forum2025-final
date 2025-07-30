import React from 'react';
import { Link } from 'react-router-dom';

export default function CodexSanctumHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-300">Codex Sanctum</h1>
      <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
        Explore layered truths, media distortions, and AI-assisted clarity. The Codex Sanctum reveals what lies beneath the narrative surface.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <CodexCard
          title="📜 Codex Lens"
          description="AI analysis of articles, bias detection, and source divergence."
          to="/codex/lens"
        />
        <CodexCard
          title="📈 Narrative Flow"
          description="View how stories evolve across sources and time."
          to="/codex/flow"
        />
        <CodexCard
          title="🔮 Lore Divergence"
          description="Where do the facts fracture? Explore side-by-side comparisons."
          to="/codex/divergence"
        />
        <CodexCard
          title="💫 Echo Vortex"
          description="Identify echo chambers and info silos with stunning visuals."
          to="/codex/echo"
        />
      </div>
    </div>
  );
}

function CodexCard({
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
      className="block p-6 bg-purple-800 rounded-xl hover:shadow-xl hover:scale-105 transition"
    >
      <h2 className="text-2xl font-semibold text-purple-300 mb-2">{title}</h2>
      <p className="text-gray-300">{description}</p>
    </Link>
  );
}
