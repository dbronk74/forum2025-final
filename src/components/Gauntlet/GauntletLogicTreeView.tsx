import React, { useState } from 'react';

interface LogicNode {
  id: string;
  label: string;
  children?: LogicNode[];
}

interface GauntletLogicTreeViewProps {
  treeData: LogicNode;
}

const TreeNode: React.FC<{ node: LogicNode; depth?: number }> = ({ node, depth = 0 }) => {
  const [expanded, setExpanded] = useState(true);

  const toggleExpand = () => setExpanded((prev) => !prev);

  return (
    <div className="ml-4 mt-2">
      <div
        onClick={toggleExpand}
        className={`cursor-pointer text-sm font-medium ${
          depth === 0 ? 'text-yellow-400' : 'text-white'
        }`}
      >
        {node.children && (
          <span className="mr-1">
            {expanded ? '▼' : '▶'}
          </span>
        )}
        {node.label}
      </div>
      {expanded && node.children && (
        <div className="ml-4 border-l border-gray-600 pl-2">
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const GauntletLogicTreeView: React.FC<GauntletLogicTreeViewProps> = ({ treeData }) => {
  return (
    <div className="p-4 bg-zinc-900 rounded-lg shadow-md border border-yellow-500 max-w-3xl mx-auto overflow-x-auto">
      <h2 className="text-lg font-bold text-yellow-400 mb-3">Logic Tree View</h2>
      <TreeNode node={treeData} />
    </div>
  );
};

export default GauntletLogicTreeView;
