import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const oracularInsights = [
  "🌀 The tides of logic are shifting.",
  "🌑 A hidden contradiction approaches.",
  "🔮 The silent speaker holds a deeper truth.",
  "🗝️ Echoes of past arguments reverberate forward.",
  "📜 The Codex pulses near a revelation.",
  "⚖️ Balance teeters on the edge of clarity.",
  "🔥 A rhetorical surge is imminent.",
  "🦉 The Oracle discerns veiled intent."
];

const GauntletOracleWatchtower: React.FC = () => {
  const [insight, setInsight] = useState<string>('');

  useEffect(() => {
    const pickRandomInsight = () => {
      const randomIndex = Math.floor(Math.random() * oracularInsights.length);
      setInsight(oracularInsights[randomIndex]);
    };

    pickRandomInsight();
    const interval = setInterval(pickRandomInsight, 10000); // Update every 10 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="p-4 bg-zinc-950 border border-purple-700 rounded-xl shadow-md max-w-md text-purple-300"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-lg font-bold mb-2 text-purple-400">🧿 Oracle Watchtower</h2>
      <p className="italic text-sm">{insight}</p>
      <div className="mt-3 text-right text-xs text-purple-500">Prophetic scan in progress...</div>
    </motion.div>
  );
};

export default GauntletOracleWatchtower;
