import React from 'react';
import { Link } from 'react-router-dom';

export default function InnerTempleHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 to-yellow-800 text-white p-10">
      <h1 className="text-4xl font-bold text-center text-yellow-200 mb-6">The Inner Temple</h1>
      <p className="text-center text-yellow-100 mb-10 max-w-2xl mx-auto">
        A sanctuary for reflection, personal truth, and emotional growth. Explore tools to align logic and heart.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <TempleCard
          title="🧠 The Personal Think"
          description="Explore your challenges through AI-guided perspectives from three advisors."
          path="/temple/personal"
        />
        <TempleCard
          title="🗣️ The Quiet Oracle"
          description="Speak in private and receive contextual, encrypted spiritual insights."
          path="/temple/oracle"
        />
        <TempleCard
          title="📖 Timeless Translator"
          description="Translate ancient wisdom into relatable modern guidance."
          path="/temple/translator"
        />
        <TempleCard
          title="💡 Contemplation Realm"
          description="Wander thought paths and illuminate internal paradoxes."
          path="/temple/realm"
        />
      </div>
    </div>
  );
}

function TempleCard({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return (
    <Link to={path} className="block p-6 rounded-lg bg-yellow-700 hover:bg-yellow-600 transition">
      <h2 className="text-2xl font-semibold text-yellow-100 mb-2">{title}</h2>
      <p className="text-yellow-200">{description}</p>
    </Link>
  );
}
