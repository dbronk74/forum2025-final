import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VaultWithdrawPanel: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWithdraw = () => {
    if (amount) {
      // Logic to trigger withdrawal
      console.log(`Withdraw request for: ${amount} credits`);
      setSubmitted(true);
    }
  };

  return (
    <div className="p-6 bg-black border border-yellow-700 rounded-2xl shadow-lg text-white max-w-md mx-auto">
      <motion.h2
        className="text-2xl font-bold mb-4 text-yellow-400"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Withdraw Credits
      </motion.h2>

      {submitted ? (
        <motion.p
          className="text-green-400 text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Withdrawal request submitted successfully.
        </motion.p>
      ) : (
        <>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 rounded text-black mb-4"
          />
          <button
            onClick={handleWithdraw}
            className="bg-yellow-600 hover:bg-yellow-500 px-4 py-2 rounded text-black font-semibold w-full"
          >
            Submit Request
          </button>
        </>
      )}
    </div>
  );
};

export default VaultWithdrawPanel;
