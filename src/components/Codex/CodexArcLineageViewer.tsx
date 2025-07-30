import React from 'react';
import { motion } from 'framer-motion';

interface LineageNode {
  id: string;
  label: string;
  depth: number;
  parentId?: string;
}

const mockLineageData: LineageNode[] = [
  { id: 'root', label: 'Origin Doctrine', depth: 0 },
  { id: 'ethics', label: 'Ethical Expansion', depth: 1, parentId: 'root' },
  { id: 'duality', label: 'Dualism Philosophy', depth: 2, parentId: 'ethics' },
  { id: 'synthesis', label: 'Modern Synthesis', depth: 3, parentId: 'duality' },
];

const getIndent = (depth: number) => `ml-${depth * 4}`;

export default function CodexArcLineageViewer() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-slate-800 to-black p-6 rounded-xl shadow-lg text-white max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-purple-300">Arc Lineage</h2>
      <div className="space-y-2">
        {mockLineageData.map((node) => (
          <motion.div
            key={node.id}
            className={`border-l-4 border-purple-600 pl-4 ${getIndent(node.depth)}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: node.depth * 0.2, duration: 0.6 }}
          >
            <div className="text-sm uppercase tracking-wide text-purple-400">
              {node.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
