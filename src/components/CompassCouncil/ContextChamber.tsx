import React from 'react';
import { Sparkle } from 'lucide-react';

const ContextChamber: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12 p-8 bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-slate-700 rounded-3xl shadow-2xl overflow-hidden">
      <h2 className="text-2xl font-semibold text-cyan-300 mb-6 flex items-center gap-2">
        <Sparkle className="w-6 h-6 text-cyan-400 animate-pulse" />
        Context Chamber
      </h2>

      <div className="space-y-6 text-slate-300 text-base leading-relaxed">
        <p>
          The Context Chamber weaves together historical echoes, intent trajectories, and undercurrent motives surrounding this node.
        </p>
        <p>
          Every glyph inscribed here reflects a deeper resonance of cause and consequence. As sentiment shifts or logic aligns, new context is inscribed upon the chamber walls.
        </p>
        <p>
          Entering this chamber invites clarity, not confusion — an attempt to elevate the discourse by honoring what came before and what might emerge.
        </p>
      </div>

      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none animate-pulse -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default ContextChamber;
