// src/components/InnerTemple/InsightPromptBar.tsx

import React, { useState } from 'react';

interface InsightPromptBarProps {
  prompt: string;
  onSubmit: (response: string) => void;
}

const InsightPromptBar: React.FC<InsightPromptBarProps> = ({ prompt, onSubmit }) => {
  const [response, setResponse] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (response.trim()) {
      onSubmit(response.trim());
      setResponse('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto flex items-center space-x-4 bg-zinc-900 p-4 rounded-lg shadow-lg"
    >
      <label htmlFor="insightInput" className="sr-only">
        Insight Response
      </label>
      <input
        id="insightInput"
        type="text"
        value={response}
        onChange={(e) => setResponse(e.target.value)}
        placeholder={prompt}
        className="flex-grow bg-zinc-800 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-semibold transition"
      >
        Submit
      </button>
    </form>
  );
};

export default InsightPromptBar;
