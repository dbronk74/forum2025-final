// src/components/Oracle/OracleSymbolicOverlay.tsx
import React from 'react';

const OracleSymbolicOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:16px_16px] z-0" />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <span className="text-indigo-700/20 text-[8rem] font-serif select-none">✶</span>
      </div>
    </div>
  );
};

export default OracleSymbolicOverlay;
