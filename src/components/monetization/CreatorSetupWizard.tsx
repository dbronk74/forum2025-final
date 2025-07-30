import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CreatorSetupWizard: React.FC = () => {
  const [step, setStep] = useState(0);
  const [creatorName, setCreatorName] = useState('');
  const [email, setEmail] = useState('');
  const [payoutMethod, setPayoutMethod] = useState<'paypal' | 'stripe' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const submitForm = () => setSubmitted(true);

  return (
    <motion.div
      className="bg-zinc-800 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto space-y-4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <h2 className="text-xl font-bold text-center">🛠️ Creator Onboarding Wizard</h2>

      {!submitted ? (
        <>
          {step === 0 && (
            <>
              <label className="block mb-2 text-sm">Display Name</label>
              <input
                type="text"
                value={creatorName}
                onChange={(e) => setCreatorName(e.target.value)}
                placeholder="Your public creator name"
                className="w-full p-2 text-black rounded-md"
              />
            </>
          )}

          {step === 1 && (
            <>
              <label className="block mb-2 text-sm">Email for Payout</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@domain.com"
                className="w-full p-2 text-black rounded-md"
              />
            </>
          )}

          {step === 2 && (
            <>
              <label className="block mb-2 text-sm">Payout Method</label>
              <div className="flex gap-4">
                <button
                  className={`px-4 py-2 rounded-md ${
                    payoutMethod === 'paypal' ? 'bg-blue-600' : 'bg-zinc-600'
                  }`}
                  onClick={() => setPayoutMethod('paypal')}
                >
                  PayPal
                </button>
                <button
                  className={`px-4 py-2 rounded-md ${
                    payoutMethod === 'stripe' ? 'bg-purple-600' : 'bg-zinc-600'
                  }`}
                  onClick={() => setPayoutMethod('stripe')}
                >
                  Stripe
                </button>
              </div>
            </>
          )}

          <div className="flex justify-between mt-4">
            {step > 0 && (
              <button onClick={prevStep} className="text-sm text-gray-300">
                ← Back
              </button>
            )}
            {step < 2 ? (
              <button onClick={nextStep} className="bg-green-600 px-4 py-2 rounded text-white">
                Next →
              </button>
            ) : (
              <button
                onClick={submitForm}
                disabled={!creatorName || !email || !payoutMethod}
                className="bg-indigo-600 px-4 py-2 rounded text-white disabled:opacity-50"
              >
                Submit ✔
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="text-center text-green-400">
          <p className="text-lg font-semibold">🎉 Setup Complete!</p>
          <p className="text-sm mt-1">You’re now ready to start earning.</p>
        </div>
      )}
    </motion.div>
  );
};

export default CreatorSetupWizard;
