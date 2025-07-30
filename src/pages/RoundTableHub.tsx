import React from 'react';
import { Link } from 'react-router-dom';

export default function RoundTableHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-black text-white p-10">
      <h1 className="text-4xl font-bold text-center text-green-300 mb-4">The Round Table</h1>
      <p className="text-center text-green-100 mb-10 max-w-3xl mx-auto">
        Collaborate, co-create, and forge new ideas. The Round Table enables high-trust dialogue and collective construction.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <TableCard
          title="💬 Thought Canvas"
          description="Draw, link, and evolve discussion flows visually in real-time."
          path="/roundtable/canvas"
        />
        <TableCard
          title="🧪 Experiment Grounds"
          description="Test out new platform ideas with your peers in collaborative space."
          path="/roundtable/experiments"
        />
        <TableCard
          title="📂 Shared Archive"
          description="Collect wisdom, source links, and thematic insights into curated rooms."
          path="/roundtable/archive"
        />
        <TableCard
          title="🔐 Trusted Circles"
          description="Form encrypted groups for secure and intimate dialogue."
          path="/roundtable/circles"
        />
      </div>
    </div>
  );
}

function TableCard({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return (
    <Link to={path} className="block p-6 rounded-lg bg-green-800 hover:bg-green-700 transition">
      <h2 className="text-2xl font-semibold text-green-100 mb-2">{title}</h2>
      <p className="text-green-200">{description}</p>
    </Link>
  );
}
