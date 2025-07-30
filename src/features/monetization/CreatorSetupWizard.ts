import React, { useState } from 'react';

const CreatorSetupWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [model, setModel] = useState('');
  const [payoutMethod, setPayoutMethod] = useState('');
  const [goal, setGoal] = useState('');

  if (step === 1) return (
    <div>
      <select onChange={(e) => setModel(e.target.value)}>
        <option value="ads">Ads</option>
        <option value="bets">Bets</option>
        <option value="tipping">Tipping</option>
        <option value="hybrid">Hybrid</option>
      </select>
      <button onClick={() => setStep(2)}>Next</button>
    </div>
  );
  if (step === 2) return (
    <div>
      <select onChange={(e) => setPayoutMethod(e.target.value)}>
        <option value="paypal">PayPal</option>
        <option value="stripe">Stripe</option>
      </select>
      <button onClick={() => setStep(3)}>Next</button>
    </div>
  );
  return (
    <div>
      <input type="text" value={goal} onChange={(e) => setGoal(e.target.value)} placeholder="Earning Goal" />
      <button onClick={() => console.log({ model, payoutMethod, goal })}>Submit</button>
    </div>
  );
};

export default CreatorSetupWizard;