import React from 'react';
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';

type Brief = {
  title: string;
  summary: string;
  date: string;
  verdict?: string;
};

const sampleBriefs: Brief[] = [
  {
    title: 'On the Ethics of Surveillance Capitalism',
    summary:
      'Council voted 5-2 in favor of stricter user data protections. A call for digital rights declaration was issued.',
    date: '2025-07-24',
    verdict: 'Passed with Amendments',
  },
  {
    title: 'Debate Sanction: Emotional Appeals',
    summary:
      'A review of recent appeals to emotion led to new guidelines for pathos-heavy arguments.',
    date: '2025-07-21',
    verdict: 'Guidance Issued',
  },
  {
    title: 'Emergent Topic: Post-Scarcity Economies',
    summary:
      'Council designated this topic as high-priority for next deliberation cycle due to rising interest.',
    date: '2025-07-19',
    verdict: 'Deferred to Round Table',
  },
];

const CouncilBriefs: React.FC = () => {
  return (
    <div className="w-full max-w-xl mx-auto p-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-lg font-semibold text-indigo-300 mb-3 text-center">
        Compass Council Briefs
      </h2>

      <ScrollArea className="h-72 pr-2">
        <div className="space-y-4">
          {(sampleBriefs ?? []).map((brief, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-md p-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-sm font-medium text-indigo-400">{brief.title}</h3>
              <p className="text-gray-300 text-sm mt-1">{brief.summary}</p>
              <div className="mt-2 text-xs text-gray-500 flex justify-between">
                <span>{brief.date}</span>
                <span>{brief.verdict}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CouncilBriefs;
