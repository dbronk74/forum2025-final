import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import clsx from 'clsx';

const outcomeStyles = {
  victory: 'text-green-500 border-green-500',
  defeat: 'text-red-500 border-red-500',
  draw: 'text-yellow-500 border-yellow-500',
};

const verdictMessages: Record<string, string> = {
  victory: 'Victory Declared',
  defeat: 'Defeat Confirmed',
  draw: 'Stalemate Reached',
};

const GauntletTrialOutcomeTracker: React.FC = () => {
  const outcome = useSelector((state: RootState) => state.gauntlet.trialOutcome);

  if (!outcome) return null;

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
      <div
        className={clsx(
          'px-6 py-3 border-2 rounded-xl shadow-xl bg-black/80 backdrop-blur-sm text-center text-xl font-bold transition-all duration-500',
          outcomeStyles[outcome.result] || 'text-white border-white'
        )}
      >
        {verdictMessages[outcome.result] || 'Outcome Pending'}
        <div className="text-sm mt-1 text-white/70">
          Audience Vote: <strong>{outcome.audienceVote}</strong> — Panel Vote: <strong>{outcome.panelVote}</strong>
        </div>
      </div>
    </div>
  );
};

export default GauntletTrialOutcomeTracker;
