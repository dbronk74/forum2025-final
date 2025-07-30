import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../state/store';
import { castPrediction } from '../../state/gauntletSlice';
import { motion } from 'framer-motion';

const GauntletSpectatorPredictionEngine: React.FC = () => {
  const dispatch = useDispatch();
  const predictions = useSelector((state: RootState) => state.gauntlet.predictions);
  const participants = useSelector((state: RootState) => state.gauntlet.participants);
  const [voted, setVoted] = useState(false);

  const totalVotes = Object.values(predictions).reduce((sum, count) => sum + count, 0);

  const handleVote = (id: string) => {
    if (voted) return;
    dispatch(castPrediction(id));
    setVoted(true);
  };

  const getPercentage = (id: string) => {
    const count = predictions[id] || 0;
    return totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
  };

  return (
    <div className="w-full p-4 bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg text-white">
      <h2 className="text-lg font-bold mb-4 text-center">Spectator Prediction Engine</h2>
      {participants.map((participant) => {
        const percent = getPercentage(participant.id);
        return (
          <div key={participant.id} className="mb-3">
            <div className="flex justify-between mb-1">
              <span>{participant.name}</span>
              <span>{percent}%</span>
            </div>
            <div
              className={`w-full h-4 rounded-full bg-zinc-700 overflow-hidden cursor-pointer ${
                voted ? 'opacity-70' : 'hover:opacity-100'
              }`}
              onClick={() => handleVote(participant.id)}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="h-full bg-emerald-500 rounded-full"
              />
            </div>
          </div>
        );
      })}
      {!voted && (
        <p className="text-center text-sm text-zinc-400 mt-3">Click a bar to cast your vote</p>
      )}
      {voted && (
        <p className="text-center text-emerald-400 mt-3">Prediction submitted!</p>
      )}
    </div>
  );
};

export default GauntletSpectatorPredictionEngine;
