import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, BookOpen, Feather, Scale } from 'lucide-react';

interface DiscourseBranchIndicatorProps {
  branch: 'Philosophical' | 'Empirical' | 'Spiritual' | 'Emotional' | 'Legal' | 'Creative';
}

const branchMap: Record<string, { icon: JSX.Element; color: string }> = {
  Philosophical: {
    icon: <BookOpen className="w-5 h-5 mr-1" />,
    color: 'text-yellow-400 border-yellow-500 bg-yellow-800/10',
  },
  Empirical: {
    icon: <Brain className="w-5 h-5 mr-1" />,
    color: 'text-blue-400 border-blue-500 bg-blue-800/10',
  },
  Spiritual: {
    icon: <Feather className="w-5 h-5 mr-1" />,
    color: 'text-purple-400 border-purple-500 bg-purple-800/10',
  },
  Emotional: {
    icon: <Sparkles className="w-5 h-5 mr-1" />,
    color: 'text-pink-400 border-pink-500 bg-pink-800/10',
  },
  Legal: {
    icon: <Scale className="w-5 h-5 mr-1" />,
    color: 'text-green-400 border-green-500 bg-green-800/10',
  },
  Creative: {
    icon: <Sparkles className="w-5 h-5 mr-1 rotate-45" />,
    color: 'text-indigo-400 border-indigo-500 bg-indigo-800/10',
  },
};

const DiscourseBranchIndicator: React.FC<DiscourseBranchIndicatorProps> = ({ branch }) => {
  const branchInfo = branchMap[branch] || branchMap['Philosophical'];

  return (
    <motion.div
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${branchInfo.color}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {branchInfo.icon}
      {branch}
    </motion.div>
  );
};

export default DiscourseBranchIndicator;
