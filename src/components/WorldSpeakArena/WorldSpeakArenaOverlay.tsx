import React from 'react';

const WorldSpeakArenaOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-800 to-indigo-900 opacity-80 z-40 pointer-events-none">
      <div className="absolute top-4 left-4 text-white text-xl font-bold animate-pulse">
        WorldSpeak Arena Overlay
      </div>
      <div className="absolute bottom-4 right-4 text-white text-sm italic">
        Real-time signals rendering...
      </div>
    </div>
  );
};

export default WorldSpeakArenaOverlay;
