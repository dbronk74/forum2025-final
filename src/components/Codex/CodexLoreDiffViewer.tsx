import React from 'react';
import { motion } from 'framer-motion';

interface LoreVersion {
  title: string;
  lines: string[];
}

const versionA: LoreVersion = {
  title: 'Original Scroll',
  lines: [
    'In the beginning, silence shaped the stars.',
    'From void came vision.',
    'Balance was the first law.',
  ],
};

const versionB: LoreVersion = {
  title: 'Refined Fragment',
  lines: [
    'In the dawn, silence summoned stars.',
    'From emptiness came revelation.',
    'Balance remains the prime law.',
  ],
};

function diffLine(original: string, modified: string): JSX.Element {
  if (original === modified) return <span>{original}</span>;

  return (
    <span>
      <span className="line-through text-red-500 mr-2">{original}</span>
      <span className="text-green-400">{modified}</span>
    </span>
  );
}

export default function CodexLoreDiffViewer() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-slate-900 text-white rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-indigo-300">Lore Diff Viewer</h2>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-indigo-400 mb-2">{versionA.title}</h3>
          <ul className="space-y-2 text-sm">
            {versionA.lines.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-green-300 mb-2">{versionB.title}</h3>
          <ul className="space-y-2 text-sm">
            {versionB.lines.map((line, i) => (
              <li key={i}>{diffLine(versionA.lines[i], line)}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
