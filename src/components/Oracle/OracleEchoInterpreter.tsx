// src/components/Oracle/OracleEchoInterpreter.tsx
import React from 'react';

interface OracleEchoInterpreterProps {
  echoes: string[];
}

const OracleEchoInterpreter: React.FC<OracleEchoInterpreterProps> = ({ echoes }) => {
  return (
    <div className="bg-slate-900 border border-slate-600 rounded-lg p-4 text-slate-200 space-y-2">
      <h3 className="text-lg font-semibold text-indigo-400">Echo Interpretations</h3>
      <ul className="list-disc list-inside text-sm">
        {echoes.map((echo, idx) => (
          <li key={idx} className="opacity-80">
            {echo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OracleEchoInterpreter;
