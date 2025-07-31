// src/components/InnerTemple/SemanticThreadLens.tsx

import React, { useEffect, useState } from 'react';

interface Thread {
  id: number;
  text: string;
  relevance: number; // 0 to 100
}

const mockThreads: Thread[] = [
  { id: 1, text: 'Logic Flow', relevance: 85 },
  { id: 2, text: 'Emotional Undercurrent', relevance: 60 },
  { id: 3, text: 'Philosophical Bias', relevance: 45 },
  { id: 4, text: 'Rhetorical Style', relevance: 70 },
  { id: 5, text: 'Cognitive Dissonance', relevance: 55 },
];

const SemanticThreadLens: React.FC = () => {
  const [threads, setThreads] = useState<Thread[]>(mockThreads);

  // Potentially add dynamic updates here with useEffect

  return (
    <div className="max-w-md mx-auto bg-zinc-900 rounded-lg p-6 shadow-lg text-white select-none">
      <h3 className="text-xl font-semibold mb-4 text-center">Semantic Thread Lens</h3>
      <ul className="space-y-3">
        {(threads ?? []).map(({ id, text, relevance }) => (
          <li key={id} className="flex justify-between items-center bg-zinc-800 rounded-md p-3">
            <span>{text}</span>
            <span className="text-cyan-400 font-semibold">{relevance}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SemanticThreadLens;
