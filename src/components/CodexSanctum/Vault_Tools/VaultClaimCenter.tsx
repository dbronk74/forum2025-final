import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function VaultClaimCenter() {
  const [claimed, setClaimed] = useState(false);

  const handleClaim = () => {
    setClaimed(true);
    // You could also trigger real backend logic here (e.g. /api/claim-reward)
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-gradient-to-br from-black via-zinc-900 to-slate-900 border border-emerald-600 rounded-xl shadow-lg text-white text-center">
      <h2 className="text-2xl font-bold text-emerald-400 mb-4">Vault Claim Center</h2>

      {!claimed ? (
        <>
          <p className="text-sm text-slate-300 mb-6">
            You have <span className="text-emerald-300 font-semibold">1 unclaimed reward</span> available.  
            Claiming will initiate a secure transfer to your account.
          </p>
          <motion.button
            onClick={handleClaim}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg shadow"
            whileTap={{ scale: 0.95 }}
          >
            Claim Now
          </motion.button>
        </>
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-emerald-300 font-semibold text-lg mt-4"
        >
          ✅ Reward Claimed! Funds dispatched to your ledger.
        </motion.div>
      )}
    </div>
  );
}
