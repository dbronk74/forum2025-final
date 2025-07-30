// src/components/InnerTemple/InnerMeditationChamber.tsx

import React from 'react';

const InnerMeditationChamber: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-gradient-to-br from-purple-900 via-indigo-900 to-black rounded-3xl shadow-2xl text-center text-white">
      <h1 className="text-4xl font-extrabold mb-6">Inner Meditation Chamber</h1>
      <p className="text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
        A tranquil space to center your thoughts and awaken deeper wisdom within.
        Sit back, breathe deeply, and let the echoes of ancient chants guide you
        toward clarity and peace.
      </p>
      <div className="bg-purple-800 rounded-lg p-6 shadow-inner border border-purple-700">
        <p className="italic text-purple-300 mb-4">"Silence is not empty, it is full of answers."</p>
        <button
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold transition"
          onClick={() => alert('Begin Meditation Session')}
        >
          Begin Meditation
        </button>
      </div>
    </div>
  );
};

export default InnerMeditationChamber;
