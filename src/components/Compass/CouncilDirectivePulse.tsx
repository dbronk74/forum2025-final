import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon } from 'lucide-react';
import clsx from 'clsx';

type Directive = {
  id: string;
  label: string;
  status: 'active' | 'pending' | 'resolved' | 'expired';
  pulseLevel: number; // 1–5
  issuedAt: string;
};

const mockDirectives: Directive[] = [
  {
    id: 'cd001',
    label: 'Preservation of Debate Archives',
    status: 'active',
    pulseLevel: 5,
    issuedAt: '2025-07-27',
  },
  {
    id: 'cd002',
    label: 'Faction Emblem Standardization',
    status: 'pending',
    pulseLevel: 3,
    issuedAt: '2025-07-24',
  },
  {
    id: 'cd003',
    label: 'Lore Glyph Canon Audit',
    status: 'resolved',
    pulseLevel: 2,
    issuedAt: '2025-07-21',
  },
];

const getStatusColor = (status: Directive['status']) => {
  switch (status) {
    case 'active':
      return 'border-indigo-500 bg-indigo-700/20';
    case 'pending':
      return 'border-yellow-500 bg-yellow-700/20';
    case 'resolved':
      return 'border-green-500 bg-green-700/20';
    case 'expired':
    default:
      return 'border-gray-500 bg-gray-700/20';
  }
};

const pulseAnimation = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const CouncilDirectivePulse: React.FC = () => {
  const [directives, setDirectives] = useState<Directive[]>([]);

  useEffect(() => {
    // Simulate async fetch
    setTimeout(() => {
      setDirectives(mockDirectives);
    }, 500);
  }, []);

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg border border-gray-700">
      <h2 className="text-xl font-semibold text-indigo-300 mb-4 text-center">
        Council Directive Pulse
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {directives.map((directive) => (
          <motion.div
            key={directive.id}
            className={clsx(
              'relative rounded-lg p-4 border',
              getStatusColor(directive.status),
              'transition-all duration-300'
            )}
            {...pulseAnimation}
          >
            <div className="flex items-center gap-2 mb-2">
              <SparklesIcon className="h-4 w-4 text-indigo-400" />
              <h3 className="text-md font-medium text-gray-200">{directive.label}</h3>
            </div>

            <div className="text-xs text-gray-400 mb-2">
              Status:{' '}
              <span className="capitalize text-white font-semibold">{directive.status}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">
                Issued: {directive.issuedAt}
              </span>

              <div className="flex gap-1">
                {[...Array(directive.pulseLevel)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-2 w-2 rounded-full bg-indigo-400"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      delay: i * 0.2,
                      duration: 1.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CouncilDirectivePulse;
