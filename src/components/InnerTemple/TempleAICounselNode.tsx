// src/components/InnerTemple/TempleAICounselNode.tsx

import React, { useState } from 'react';

interface CounselNodeProps {
  prompt: string;
  onRespond: (response: string) => void;
}

const TempleAICounselNode: React.FC<CounselNodeProps> = ({ prompt, onRespond }) => {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!response.trim()) return;
    setLoading(true);

    // Simulate async AI response
    setTimeout(() => {
      onRespond(response.trim());
      setResponse('');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-zinc-900 rounded-lg shadow-lg text-white select-none">
      <h3 className="text-xl font-semibold mb-4">Temple AI Counsel</h3>
      <p className="mb-4 italic text-gray-300">Prompt: {prompt}</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <textarea
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          placeholder="Type your response here..."
          className="resize-none p-3 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          rows={4}
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 rounded-md px-4 py-2 font-semibold transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default TempleAICounselNode;
