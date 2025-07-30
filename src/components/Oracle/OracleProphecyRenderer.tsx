// src/components/Oracle/OracleProphecyRenderer.tsx
import React from 'react';

const OracleProphecyRenderer: React.FC<{ prophecy: string }> = ({ prophecy }) => {
  return (
    <div className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 text-white p-4 rounded-xl shadow-lg border border-white/10">
      <h2 className="text-xl font-semibold mb-2">Prophetic Insight</h2>
      <blockquote className="italic text-lg tracking-wide leading-relaxed">
        “{prophecy}”
      </blockquote>
    </div>
  );
};

export default OracleProphecyRenderer;
