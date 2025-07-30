import React, { useState, useEffect } from 'react';

interface BondState {
  bonded: boolean;
  bondStrength: number; // 0 to 100
  lastSync: string;
}

const GauntletMythicBonding: React.FC = () => {
  const [bond, setBond] = useState<BondState>({
    bonded: false,
    bondStrength: 0,
    lastSync: '—',
  });

  // Simulate bond evolution
  useEffect(() => {
    const interval = setInterval(() => {
      const bonded = Math.random() > 0.4;
      const strength = bonded ? Math.floor(Math.random() * 60) + 40 : Math.floor(Math.random() * 40);
      const timestamp = new Date().toLocaleTimeString();

      setBond({
        bonded,
        bondStrength: strength,
        lastSync: timestamp,
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-4 rounded-xl shadow-md text-white max-w-md w-full border border-purple-700">
      <h3 className="text-xl font-semibold text-purple-300 mb-3">💠 Mythic Bonding</h3>

      <div className="flex items-center justify-between mb-2">
        <span className="text-zinc-300">Status:</span>
        <span className={bond.bonded ? 'text-green-400' : 'text-red-400'}>
          {bond.bonded ? 'Bond Active' : 'Unbonded'}
        </span>
      </div>

      <div className="flex items-center justify-between mb-2">
        <span className="text-zinc-300">Bond Strength:</span>
        <span className="text-white font-bold">{bond.bondStrength}%</span>
      </div>

      <div className="h-3 bg-zinc-800 rounded-full overflow-hidden mb-2">
        <div
          className="bg-purple-500 h-full transition-all duration-500"
          style={{ width: `${bond.bondStrength}%` }}
        />
      </div>

      <div className="text-sm text-zinc-400">
        Last Sync: <span className="text-zinc-200">{bond.lastSync}</span>
      </div>

      {bond.bonded && bond.bondStrength > 75 && (
        <div className="mt-3 p-2 bg-purple-800 rounded text-sm text-amber-300 border border-amber-400 shadow-inner animate-pulse">
          🔓 Mythic Link Empowered — Lore-based synergy unlocked!
        </div>
      )}
    </div>
  );
};

export default GauntletMythicBonding;
