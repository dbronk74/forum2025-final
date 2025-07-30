// src/components/InnerTemple/InnerReflectionChamber.tsx

import React, { useState } from 'react';

const prompts = [
  "What truth did you uncover today?",
  "How did your beliefs shift during the discourse?",
  "Where do you feel unresolved tension?",
  "What new perspective surprised you?",
];

const InnerReflectionChamber: React.FC = () => {
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);

  const nextPrompt = () => {
    setCurrentPromptIndex((prev) => (prev + 1) % prompts.length);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-black rounded-3xl shadow-xl text-white text-center">
      <h1 className="text-3xl font-bold mb-6">Inner Reflection Chamber</h1>
      <p className="text-xl italic mb-8">"{prompts[currentPromptIndex]}"</p>
      <button
        onClick={nextPrompt}
        className="px-5 py-3 bg-purple-600 hover:bg-purple-700 rounded-md font-semibold transition"
      >
        Reflect on Next Question
      </button>
    </div>
  );
};

export default InnerReflectionChamber;
