import React, { useState } from 'react';

const SanctumVerseSanctifier: React.FC = () => {
  const [tone, setTone] = useState('Wisdom');
  const [verse, setVerse] = useState('');
  const [sanctifiedVerse, setSanctifiedVerse] = useState('');

  const handleSanctify = () => {
    const result = `💠 [${tone}] ${verse}`;
    setSanctifiedVerse(result);
  };

  return (
    <div className="bg-zinc-950 p-6 rounded-2xl border border-emerald-700 max-w-xl shadow-md">
      <h2 className="text-emerald-300 font-bold text-lg mb-4">🌿 Verse Sanctifier</h2>
      <textarea
        placeholder="Enter your verse..."
        className="w-full p-3 rounded-md bg-zinc-800 text-white mb-3"
        rows={3}
        value={verse}
        onChange={(e) => setVerse(e.target.value)}
      />
      <div className="flex justify-between items-center mb-4">
        <label className="text-sm text-emerald-400 mr-2">Infuse With:</label>
        <select
          className="bg-zinc-800 text-white p-2 rounded-md"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        >
          <option>Wisdom</option>
          <option>Compassion</option>
          <option>Humility</option>
          <option>Challenge</option>
          <option>Mystery</option>
        </select>
        <button
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md ml-4"
          onClick={handleSanctify}
        >
          Sanctify
        </button>
      </div>
      {sanctifiedVerse && (
        <div className="mt-4 bg-zinc-800 p-4 rounded-md text-emerald-200">
          {sanctifiedVerse}
        </div>
      )}
    </div>
  );
};

export default SanctumVerseSanctifier;
