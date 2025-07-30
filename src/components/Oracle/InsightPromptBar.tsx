// src/components/InnerTemple/InsightPromptBar.tsx

import React, { useState } from 'react';

interface InsightPromptBarProps {
  prompt?: string;
  onSubmit?: (response: string) => void;
}

const InsightPromptBar: React.FC<InsightPromptBarProps> = ({
  prompt = 'Ask follow-up questions to refine insights.',
  onSubmit,
}) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && onSubmit) {
      onSubmit(input.trim());
      setInput('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-3 bg-green-100 border-t-2 border-green-600 flex items-center gap-3 rounded-b-md"
    >
      <input
        type="text"
        placeholder={prompt}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow px-3 py-2 rounded-md border border-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        aria-label="Insight prompt input"
      />
      <button
        type="submit"
        disabled={!input.trim()}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default InsightPromptBar;
