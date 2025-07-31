import React from 'react';

interface GauntletPrestigePathCompassProps {
  currentLevel: number; // 0 to 100
}

const levels = [
  { label: 'Novice', color: '#999' },
  { label: 'Initiate', color: '#7dd3fc' },
  { label: 'Challenger', color: '#34d399' },
  { label: 'Veteran', color: '#facc15' },
  { label: 'Mythic', color: '#f472b6' },
  { label: 'Ascendant', color: '#c084fc' },
];

const GauntletPrestigePathCompass: React.FC<GauntletPrestigePathCompassProps> = ({ currentLevel }) => {
  const activeIndex = Math.min(Math.floor(currentLevel / (100 / levels.length)), levels.length - 1);

  return (
    <div className="relative w-40 h-40 rounded-full border-4 border-purple-600 shadow-lg flex items-center justify-center">
      {(levels ?? []).map((stage, index) => {
        const angle = (360 / levels.length) * index;
        const rotate = `rotate(${angle}deg) translate(65px) rotate(-${angle}deg)`;
        const isActive = index === activeIndex;

        return (
          <div
            key={stage.label}
            className="absolute text-xs font-semibold transition-all duration-300"
            style={{
              transform: rotate,
              color: isActive ? stage.color : '#555',
              fontSize: isActive ? '1rem' : '0.7rem',
            }}
          >
            {stage.label}
          </div>
        );
      })}
      <div className="absolute w-5 h-5 bg-purple-500 rounded-full shadow-md" />
      <div className="text-xs text-white mt-24 text-center">
        Prestige Level<br />
        <span className="text-lg font-bold text-purple-300">{currentLevel}</span>
      </div>
    </div>
  );
};

export default GauntletPrestigePathCompass;
