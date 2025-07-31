import React from 'react';

interface Sector {
  name: string;
  color: string;
  description?: string;
}

const compassSectors: Sector[] = [
  { name: 'Logic', color: '#00BFFF', description: 'Reason and structured analysis' },
  { name: 'Emotion', color: '#FF69B4', description: 'Empathy and lived experience' },
  { name: 'Tradition', color: '#FFD700', description: 'Cultural heritage and legacy' },
  { name: 'Progress', color: '#32CD32', description: 'Innovation and forward vision' },
  { name: 'Faith', color: '#8A2BE2', description: 'Spiritual or religious guidance' },
  { name: 'Skepticism', color: '#A9A9A9', description: 'Critical inquiry and doubt' },
];

const CompassSectorLegend: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-zinc-900 p-4 rounded-lg shadow-md border border-zinc-700">
      <h3 className="text-lg font-semibold text-center text-zinc-100 mb-3">Compass Sector Legend</h3>
      <div className="grid grid-cols-2 gap-4">
        {(compassSectors ?? []).map((sector, index) => (
          <div
            key={index}
            className="flex items-start space-x-2 border-l-4 pl-2"
            style={{ borderColor: sector.color }}
          >
            <div className="text-sm text-zinc-100 font-medium">{sector.name}</div>
            <div className="text-xs text-zinc-400">{sector.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompassSectorLegend;
