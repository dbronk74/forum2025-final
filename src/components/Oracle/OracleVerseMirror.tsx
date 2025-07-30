// src/components/Oracle/OracleVerseMirror.tsx
import React from 'react';

interface OracleVerseMirrorProps {
  verse: string;
}

const OracleVerseMirror: React.FC<OracleVerseMirrorProps> = ({ verse }) => {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-black p-6 rounded-2xl shadow-inner border border-indigo-700/50">
      <div className="text-center text-indigo-300 text-xl italic tracking-wide">
        “{verse}”
      </div>
      <div className="mt-4 text-xs text-right text-slate-500">— Reflected Insight</div>
    </div>
  );
};

export default OracleVerseMirror;
