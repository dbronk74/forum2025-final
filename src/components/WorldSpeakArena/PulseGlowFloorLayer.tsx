import React from "react";

const PulseGlowFloorLayer: React.FC = () => {
  return (
    <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-purple-700/30 to-transparent pointer-events-none z-10 animate-pulse">
      <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0%,_transparent_80%)] blur-2xl opacity-75" />
    </div>
  );
};

export default PulseGlowFloorLayer;
