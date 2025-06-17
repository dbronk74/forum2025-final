import React from 'react';

const memoryTrail = [
  { label: 'Origin Flame', color: '#f87171' },
  { label: 'Schism Echo', color: '#60a5fa' },
  { label: 'Unity Accord', color: '#34d399' },
  { label: 'Celestial Trial', color: '#fbbf24' },
  { label: 'Sanctum Rise', color: '#c084fc' },
  { label: 'Temporal Collapse', color: '#f472b6' },
];

export default function FactionMemoryTrail() {
  return (
    <div className="w-full overflow-x-auto py-4 px-2 bg-black/60 rounded-lg shadow-inner border border-gray-700">
      <div className="flex space-x-6 min-w-max animate-pulse">
        {memoryTrail.map((memory, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-xs text-white"
          >
            <div
              className="w-6 h-6 rounded-full shadow-md border border-white mb-1"
              style={{
                backgroundColor: memory.color,
                boxShadow: `0 0 8px ${memory.color}`,
              }}
            />
            <span className="whitespace-nowrap text-[11px] text-indigo-100 font-mono">
              {memory.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
