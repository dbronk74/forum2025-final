import React from 'react';

export default function PersonalThinkAdvisorGrid() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-zinc-900 text-white p-6 rounded-lg">
      <div className="col-span-3 text-center font-bold text-lg mb-4">Advisor Grid</div>
      <div className="bg-zinc-800 p-4 rounded">Strategist</div>
      <div className="bg-zinc-800 p-4 rounded">Optimist</div>
      <div className="bg-zinc-800 p-4 rounded">Skeptic</div>
    </div>
  );
}