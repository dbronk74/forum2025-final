import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetLedger } from '../redux/slices/CreditLedgerSlice';
import { motion } from 'framer-motion';

export default function CreatorSetupWizard() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [provider, setProvider] = useState('Stripe');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(resetLedger());
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white flex flex-col items-center justify-center px-6 py-16">
      <motion.h1
        className="text-3xl font-bold mb-6 text-center text-yellow-300"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Creator Setup Wizard
      </motion.h1>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-zinc-800 p-6 rounded-lg shadow-lg space-y-4"
        >
          <label className="block">
            <span className="text-gray-300">Payout Email or Wallet</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 rounded bg-black border border-zinc-600 text-white"
              placeholder="your@email.com"
            />
          </label>

          <label className="block">
            <span className="text-gray-300">Provider</span>
            <select
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              className="mt-1 w-full px-4 py-2 rounded bg-black border border-zinc-600 text-white"
            >
              <option>Stripe</option>
              <option>PayPal</option>
            </select>
          </label>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded"
          >
            Initialize My Account
          </button>
        </form>
      ) : (
        <div className="text-center mt-6 text-green-400 space-y-4">
          <p>✅ Setup complete for: <span className="font-mono">{email}</span></p>
          <p>You may now begin earning through ad views, debates, and support vaults.</p>
        </div>
      )}
    </div>
  );
}
