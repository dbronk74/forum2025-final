import React, { useState } from 'react';

interface DivergenceNode {
  id: string;
  interpretation: string;
  branchPoints: DivergenceNode[];
}

interface GauntletLoreDivergenceEngineProps {
  rootLore: DivergenceNode;
}

const renderBranch = (node: DivergenceNode, depth: number = 0): JSX.Element => {
  return (
    <div className="ml-4 border-l border-yellow-400 pl-4 mt-2" key={node.id}>
      <div
        className={`text-sm ${
          depth === 0 ? 'font-bold text-yellow-300' : 'text-zinc-100'
        }`}
      >
        {node.interpretation}
      </div>
      {(node.branchPoints ?? []).map((child) => renderBranch(child, depth + 1))}
    </div>
  );
};

const GauntletLoreDivergenceEngine: React.FC<GauntletLoreDivergenceEngineProps> = ({ rootLore }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-zinc-900 border border-yellow-600 rounded-lg p-4 shadow-xl">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg text-yellow-200 font-semibold">🧭 Lore Divergence Engine</h3>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-yellow-400 underline hover:text-yellow-300"
        >
          {expanded ? 'Collapse' : 'Explore'}
        </button>
      </div>
      {expanded && (
        <div className="overflow-y-auto max-h-64">
          {renderBranch(rootLore)}
        </div>
      )}
    </div>
  );
};

export default GauntletLoreDivergenceEngine;
