import React from 'react';
import { Link } from 'react-router-dom';

export default function OracleHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-indigo-700 text-white p-10">
      <h1 className="text-4xl font-bold text-center text-indigo-300 mb-4">The Oracle</h1>
      <p className="text-center text-indigo-100 mb-10 max-w-3xl mx-auto">
        A divine engine of analysis and prophecy. The Oracle hears all, sees all, and connects users to deep insight across the platform.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <OracleCard
          title="👁️ Echo Interpreter"
          description="Decode ripple effects and emotional tone behind user interactions."
          path="/oracle/echo"
        />
        <OracleCard
          title="📜 Lore Scanner"
          description="Scan narrative events and debate history across all branches."
          path="/oracle/lore"
        />
        <OracleCard
          title="🧬 Signature Threader"
          description="Track the evolution of ideas, authors, and core debate lines."
          path="/oracle/threader"
        />
        <OracleCard
          title="🌌 Prophecy Portal"
          description="Let the Oracle simulate future forks based on factional decisions."
          path="/oracle/prophecy"
        />
      </div>
    </div>
  );
}

function OracleCard({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return (
    <Link to={path} className="block p-6 rounded-lg bg-indigo-800 hover:bg-indigo-700 transition">
      <h2 className="text-2xl font-semibold text-indigo-100 mb-2">{title}</h2>
      <p className="text-indigo-200">{description}</p>
    </Link>
  );
}
