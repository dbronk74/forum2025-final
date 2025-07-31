// src/components/ForumMisc/SocraticThreadGuide.tsx

import React, { useState } from 'react';
import { ChevronRight, ChevronDown, CornerDownRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type ThreadNode = {
  id: number;
  question: string;
  children?: ThreadNode[];
};

const sampleThread: ThreadNode[] = [
  {
    id: 1,
    question: 'What is justice?',
    children: [
      {
        id: 2,
        question: 'Is justice the same as fairness?',
        children: [
          {
            id: 3,
            question: 'Can fairness exist without equality?',
          },
          {
            id: 4,
            question: 'Should outcomes or intentions define fairness?',
          },
        ],
      },
      {
        id: 5,
        question: 'Does justice require universal moral standards?',
      },
    ],
  },
];

const ThreadItem: React.FC<{ node: ThreadNode }> = ({ node }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="ml-4 mt-2">
      <div
        onClick={() => setExpanded(!expanded)}
        className="cursor-pointer flex items-center text-blue-200 hover:text-blue-100 transition"
      >
        {node.children ? (
          expanded ? <ChevronDown size={16} className="mr-1" /> : <ChevronRight size={16} className="mr-1" />
        ) : (
          <CornerDownRight size={14} className="mr-2 text-blue-300" />
        )}
        <span className="text-sm">{node.question}</span>
      </div>
      <AnimatePresence>
        {expanded &&
          node.children?.map((child) => (
            <motion.div
              key={child.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <ThreadItem node={child} />
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

export default function SocraticThreadGuide() {
  return (
    <div className="bg-slate-900 border border-blue-500 rounded-xl p-4 max-w-lg mx-auto shadow-md">
      <h3 className="text-blue-300 text-sm font-semibold mb-2 uppercase tracking-wider flex items-center">
        Socratic Thread Guide
      </h3>
      <div className="text-xs text-slate-400 mb-2">
        Tap a question to expand its follow-ups. Tracks nested inquiry paths.
      </div>
      {(sampleThread ?? []).map((node) => (
        <ThreadItem key={node.id} node={node} />
      ))}
    </div>
  );
}
