import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface GauntletCosmicWagerProps {
  onWagerSubmit?: (amount: number) => void;
  maxWager?: number;
  faction?: string;
}

const GauntletCosmicWager: React.FC<GauntletCosmicWagerProps> = ({
  onWagerSubmit,
  maxWager = 100,
  faction = 'Unknown Faction'
}) => {
  const [amount, setAmount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleWager = () => {
    if (amount > 0 && amount <= maxWager) {
      onWagerSubmit?.(amount);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-800 to-black rounded-xl p-4 w-full max-w-sm shadow-lg border border-indigo-500/40">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-indigo-200">Cosmic Wager</h2>
        <span className="text-sm text-indigo-400">{faction}</span>
      </div>

      <div className="flex flex-col items-center space-y-3">
        <motion.div
          className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          <Sparkles className="inline-block mr-2 animate-pulse" size={16} />
          Stake: {amount}
        </motion.div>

        <input
          type="range"
          min="0"
          max={maxWager}
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          className="w-full"
        />

        <button
          onClick={handleWager}
          className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white font-semibold px-6 py-2 rounded-full shadow-md"
        >
          Submit Wager
        </button>

        {submitted && (
          <motion.div
            className="text-green-300 font-medium mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            🌌 Wager Accepted by the Cosmos
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GauntletCosmicWager;
