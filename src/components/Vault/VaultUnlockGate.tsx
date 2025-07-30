import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VaultUnlockGate: React.FC = () => {
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = () => {
    // Simulate unlock logic (could be connected to Stripe, faction logic, etc.)
    setUnlocked(true);
  };

  return (
    <div className="relative bg-gradient-to-b from-yellow-900 to-zinc-900 p-6 rounded-2xl text-white text-center shadow-2xl border-2 border-yellow-700">
      <motion.div
        className="text-3xl font-bold mb-4"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
      >
        {unlocked ? 'Vault Unlocked!' : '🔒 Vault Gate'}
      </motion.div>

      <motion.div
        className={`transition-all duration-700 ease-in-out ${
          unlocked ? 'opacity-100' : 'opacity-40'
        }`}
      >
        <img
          src="/images/vault/vault-gate-symbol.png"
          alt="Vault Symbol"
          className="mx-auto w-32 h-32 mb-4"
        />
      </motion.div>

      {!unlocked ? (
        <button
          onClick={handleUnlock}
          className="bg-yellow-600 hover:bg-yellow-500 px-5 py-2 rounded-full text-black font-semibold transition duration-300"
        >
          Unlock Vault
        </button>
      ) : (
        <p className="text-green-400 mt-4 font-medium">Access granted. Proceed to rewards.</p>
      )}
    </div>
  );
};

export default VaultUnlockGate;
