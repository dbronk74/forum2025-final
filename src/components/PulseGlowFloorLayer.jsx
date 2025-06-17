import React from 'react';

export default function PulseGlowFloorLayer() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-40 z-0 pointer-events-none overflow-hidden">
      <div className="w-full h-full animate-pulseSlow bg-gradient-to-t from-purple-500/30 via-indigo-400/20 to-transparent blur-2xl" />
    </div>
  );
}
