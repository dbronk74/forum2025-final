import React from 'react';
import { BadgeHelp } from 'lucide-react';

const CompassCouncilMirrorGlyph: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto mt-12 p-6 bg-slate-900 border border-slate-700 rounded-2xl shadow-xl">
      <h2 className="text-xl font-bold text-indigo-300 flex items-center gap-2 mb-4">
        <BadgeHelp className="w-5 h-5 text-indigo-400" />
        Council Mirror Glyph
      </h2>

      <div className="flex justify-between items-center">
        <div className="flex-1 flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-500" />
        </div>
        <div className="text-indigo-500 text-xl font-mono px-4">⇄</div>
        <div className="flex-1 flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-tl from-indigo-600 to-purple-700 rounded-full shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-500" />
        </div>
      </div>

      <p className="mt-6 text-sm text-slate-400 text-center">
        This glyph reflects polarized council directives. When mirrored glyphs rotate into harmony, consensus may be forming.
      </p>
    </div>
  );
};

export default CompassCouncilMirrorGlyph;
