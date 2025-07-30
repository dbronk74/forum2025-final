import React from 'react';
import { Tooltip } from 'react-tooltip';

interface GauntletPrestigeLevelDisplayProps {
  level: number;
  title?: string;
}

const getEmblemForLevel = (level: number): string => {
  if (level >= 90) return '🦅';
  if (level >= 70) return '🛡️';
  if (level >= 50) return '🔥';
  if (level >= 30) return '⚔️';
  if (level >= 10) return '🌟';
  return '🔰';
};

const getRankName = (level: number): string => {
  if (level >= 90) return 'Ascendant';
  if (level >= 70) return 'Mythic';
  if (level >= 50) return 'Veteran';
  if (level >= 30) return 'Challenger';
  if (level >= 10) return 'Initiate';
  return 'Novice';
};

const GauntletPrestigeLevelDisplay: React.FC<GauntletPrestigeLevelDisplayProps> = ({ level, title }) => {
  const emblem = getEmblemForLevel(level);
  const rank = getRankName(level);

  return (
    <div className="flex flex-col items-center justify-center text-center p-3">
      <div className="text-4xl animate-pulse">{emblem}</div>
      <div
        className="text-sm text-purple-400 font-bold mt-1 cursor-help"
        data-tooltip-id="prestige-tooltip"
        data-tooltip-content={`${title || 'Prestige Level'} ${level} — ${rank}`}
      >
        Prestige {level}
      </div>
      <Tooltip id="prestige-tooltip" place="top" effect="solid" className="z-50 text-xs" />
    </div>
  );
};

export default GauntletPrestigeLevelDisplay;
