import React from 'react';

const ArenaZoomPanel: React.FC = () => {
  return (
    <div className="absolute bottom-5 left-5 bg-zinc-900 text-white px-4 py-2 rounded shadow z-50">
      <h4 className="text-sm font-semibold mb-2">🔍 Zoom Control</h4>
      <div className="flex space-x-2">
        <button className="bg-zinc-700 hover:bg-zinc-600 px-2 py-1 rounded text-xs">
          ➖ Zoom Out
        </button>
        <button className="bg-zinc-700 hover:bg-zinc-600 px-2 py-1 rounded text-xs">
          ➕ Zoom In
        </button>
        <button className="bg-zinc-700 hover:bg-zinc-600 px-2 py-1 rounded text-xs">
          🔄 Reset
        </button>
      </div>
    </div>
  );
};

export default ArenaZoomPanel;
