import React from 'react';

interface GauntletReputationTrackerProps {
  reputationScore: number; // Value from 0 to 100
  tiers?: string[]; // Optional custom tier labels
}

const defaultTiers = ['Unknown', 'Observed', 'Respected', 'Revered', 'Legendary'];

const GauntletReputationTracker: React.FC<GauntletReputationTrackerProps> = ({
  reputationScore,
  tiers = defaultTiers,
}) => {
  const activeTierIndex = Math.floor((reputationScore / 100) * (tiers.length - 1));
  const activeTier = tiers[activeTierIndex];

  return (
    <div className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 shadow-inner w-36">
      <div className="text-xs text-gray-300 tracking-wider uppercase">Reputation</div>

      <div className="relative h-48 w-6 bg-gray-600 rounded-full overflow-hidden shadow-lg">
        <div
          className="absolute bottom-0 w-full bg-purple-500 transition-all duration-700"
          style={{ height: `${reputationScore}%` }}
        />

        {tiers.map((tier, index) => {
          const topPercent = 100 - (index / (tiers.length - 1)) * 100;
          const isActive = index === activeTierIndex;
          return (
            <div
              key={tier}
              className={`absolute left-8 text-xs ${
                isActive ? 'text-purple-300 font-bold' : 'text-gray-400'
              }`}
              style={{ top: `${topPercent}%`, transform: 'translateY(-50%)' }}
            >
              {tier}
            </div>
          );
        })}
      </div>

      <div className="text-sm text-purple-200 font-semibold mt-2">
        {activeTier} ({reputationScore}%)
      </div>
    </div>
  );
};

export default GauntletReputationTracker;
