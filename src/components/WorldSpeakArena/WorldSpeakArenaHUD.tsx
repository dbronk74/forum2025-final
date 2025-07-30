import React from 'react';

const WorldSpeakArenaHUD: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 z-50 bg-gradient-to-b from-black/70 to-transparent text-white text-sm">
      <div className="flex gap-4 items-center">
        <span className="font-bold">🔴 LIVE</span>
        <span className="opacity-75">Observers: 318</span>
        <span className="opacity-75">Debaters: 6</span>
      </div>
      <div className="flex gap-4 items-center">
        <button className="hover:underline">View Heatmap</button>
        <button className="hover:underline">Toggle Reactions</button>
        <button className="hover:underline">Exit Arena</button>
      </div>
    </div>
  );
};

export default WorldSpeakArenaHUD;
