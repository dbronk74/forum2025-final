import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logAdView } from '../../redux/slices/adEngagementSlice';
import { earnCreditsFromAds } from '../../redux/slices/creditLedgerSlice';
import { motion } from 'framer-motion';

const ClaimAdReward: React.FC = () => {
  const dispatch = useDispatch();
  const [claimed, setClaimed] = useState(false);

  const claimReward = () => {
    dispatch(logAdView());
    dispatch(earnCreditsFromAds(5));
    setClaimed(true);
  };

  return (
    <motion.div
      className="bg-yellow-100 text-zinc-800 p-4 rounded-lg shadow-md max-w-sm mx-auto mt-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <h4 className="text-lg font-bold text-center mb-2">🎉 Thanks for Watching!</h4>
      <p className="text-center mb-4">Tap the button below to claim your reward.</p>

      <button
        disabled={claimed}
        onClick={claimReward}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition disabled:opacity-50"
      >
        {claimed ? 'Reward Claimed 🎁' : 'Claim +5 Credits'}
      </button>
    </motion.div>
  );
};

export default ClaimAdReward;
