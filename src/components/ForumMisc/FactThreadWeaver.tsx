import React from 'react';
import { motion } from 'framer-motion';

type FactNode = {
  id: string;
  label: string;
  type: 'claim' | 'evidence' | 'rebuttal';
  confidence: number; // 0–1
};

type Props = {
  nodes: FactNode[];
  connections: { from: string; to: string }[];
};

const typeColor: Record<FactNode['type'], string> = {
  claim: 'bg-blue-500',
  evidence: 'bg-green-500',
  rebuttal: 'bg-red-500',
};

const FactThreadWeaver: React.FC<Props> = ({ nodes, connections }) => {
  return (
    <div className="relative w-full h-[400px] bg-neutral-900 rounded-xl overflow-hidden p-4 shadow-inner">
      <svg className="absolute inset-0 w-full h-full z-0">
        {connections.map((link, i) => {
          const fromIndex = nodes.findIndex(n => n.id === link.from);
          const toIndex = nodes.findIndex(n => n.id === link.to);
          if (fromIndex === -1 || toIndex === -1) return null;

          const x1 = 100 + fromIndex * 150;
          const y1 = 80;
          const x2 = 100 + toIndex * 150;
          const y2 = 280;

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#8884"
              strokeWidth={2}
              strokeDasharray="4 4"
            />
          );
        })}
      </svg>

      <div className="absolute top-12 left-0 w-full flex justify-evenly z-10">
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className={`rounded-full px-4 py-2 text-sm text-white shadow-md ${typeColor[node.type]}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {node.label}
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-12 left-0 w-full flex justify-evenly z-10">
        {nodes.map((node) => (
          <div key={node.id} className="text-xs text-center text-white/60 w-32 truncate">
            Confidence: {(node.confidence * 100).toFixed(0)}%
          </div>
        ))}
      </div>
    </div>
  );
};

export default FactThreadWeaver;
