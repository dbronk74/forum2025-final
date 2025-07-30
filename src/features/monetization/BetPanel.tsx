import React, { useState } from "react";

const BetPanel = () => {
  const [amount, setAmount] = useState(0);
  const [side, setSide] = useState("win");

  return (
    <div className="p-4 bg-gray-900 text-white rounded-xl max-w-md mx-auto mt-10 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Place Your Bet</h2>

      <label className="block mb-2">Amount</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="w-full p-2 mb-4 text-black rounded"
      />

      <label className="block mb-2">Side</label>
      <select
        value={side}
        onChange={(e) => setSide(e.target.value as any)}
        className="w-full p-2 mb-4 text-black rounded"
      >
        <option value="win">Win</option>
        <option value="lose">Lose</option>
      </select>

      <button className="bg-green-600 hover:bg-green-700 text-white w-full py-2 px-4 rounded">
        Submit Bet
      </button>
    </div>
  );
};

export default BetPanel;
