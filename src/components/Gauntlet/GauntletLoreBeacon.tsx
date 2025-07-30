import React, { useEffect, useState } from 'react';

interface GauntletLoreBeaconProps {
  loreTitle: string;
  onActivate?: () => void;
}

const GauntletLoreBeacon: React.FC<GauntletLoreBeaconProps> = ({ loreTitle, onActivate }) => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 800);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (onActivate) onActivate();
  };

  return (
    <div
      onClick={handleClick}
      className={`relative w-48 h-20 cursor-pointer transition-transform hover:scale-105 
        ${pulse ? 'animate-pulse' : ''} 
        bg-gradient-to-br from-yellow-600 via-yellow-400 to-yellow-600 
        rounded-lg shadow-lg p-4 border border-yellow-500`}
    >
      <div className="text-center text-black font-bold text-md drop-shadow-sm">
        📜 Lore Beacon
      </div>
      <div className="text-xs text-center text-zinc-900 italic mt-1">{loreTitle}</div>
      {pulse && (
        <div className="absolute inset-0 rounded-lg border-2 border-yellow-300 animate-ping" />
      )}
    </div>
  );
};

export default GauntletLoreBeacon;
