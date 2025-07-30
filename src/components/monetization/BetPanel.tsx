// src/features/monetization/BetPanel.tsx
import React, { useState } from "react";

const BetPanel = () => {
  const [amount, setAmount] = useState(0);
  const [side, setSide] = useState("win");

  const placeBet = () => {
    alert(`Bet placed: $${amount} on ${side}`);
  };

  return (
    <div className="p-4 bg-gray-900 rounded-xl shadow-lg text-white w-full max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Place a Bet</h2>

      <div className="mb-4">
        <label className="block text-sm mb-1">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">Side</label>
        <select
          value={side}
          onChange={(e) => setSide(e.target.value)}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded"
        >
          <option value="win">Win</option>
          <option value="lose">Lose</option>
        </select>
      </div>

      <button
        onClick={placeBet}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
      >
        Submit Bet
      </button>
    </div>
  );
};

export default BetPanel;
