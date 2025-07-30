// src/components/InnerTemple/AICommentaryTrack.tsx

import React, { useEffect, useState, useRef } from 'react';

interface CommentaryEntry {
  id: number;
  timestamp: string;
  text: string;
}

const mockEntries: CommentaryEntry[] = [
  { id: 1, timestamp: '00:01:05', text: 'Initial argument seems well structured.' },
  { id: 2, timestamp: '00:02:40', text: 'Watch out for possible logical fallacy.' },
  { id: 3, timestamp: '00:04:15', text: 'Good use of evidence here.' },
];

const AICommentaryTrack: React.FC = () => {
  const [entries, setEntries] = useState<CommentaryEntry[]>(mockEntries);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Example: Auto-scroll to the latest commentary
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [entries]);

  return (
    <div
      ref={containerRef}
      className="max-w-md mx-auto p-4 bg-zinc-900 rounded-lg shadow-lg text-white overflow-y-auto max-h-48 select-none"
    >
      <h3 className="text-lg font-semibold mb-3">AI Commentary Track</h3>
      <ul className="space-y-2">
        {entries.map(({ id, timestamp, text }) => (
          <li key={id} className="bg-zinc-800 rounded-md p-2 text-sm">
            <span className="font-mono text-cyan-400 mr-2">{timestamp}</span>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AICommentaryTrack;
