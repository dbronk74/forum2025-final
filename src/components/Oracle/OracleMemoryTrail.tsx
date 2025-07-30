// src/components/Oracle/OracleMemoryTrail.tsx
import React from 'react';

interface MemoryTrailEntry {
  timestamp: string;
  message: string;
}

interface OracleMemoryTrailProps {
  trail: MemoryTrailEntry[];
}

const OracleMemoryTrail: React.FC<OracleMemoryTrailProps> = ({ trail }) => {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 max-h-64 overflow-y-auto shadow-inner">
      <h4 className="text-indigo-300 text-sm font-semibold mb-2">Memory Trail</h4>
      <ul className="space-y-1 text-sm text-slate-300">
        {trail.map((entry, index) => (
          <li key={index} className="flex justify-between">
            <span className="text-slate-500">{entry.timestamp}</span>
            <span className="ml-2">{entry.message}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OracleMemoryTrail;
