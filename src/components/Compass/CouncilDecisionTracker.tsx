import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

type Decision = {
  id: string;
  title: string;
  status: 'In Deliberation' | 'Passed' | 'Rejected' | 'Deferred';
  summary: string;
  votes: {
    for: number;
    against: number;
    abstain: number;
  };
  lastUpdated: string;
};

const mockDecisions: Decision[] = [
  {
    id: 'd001',
    title: 'Ethics of Artificial General Intelligence Deployment',
    status: 'In Deliberation',
    summary: 'Assessing the risks of AGI release and determining acceptable safeguards.',
    votes: { for: 3, against: 2, abstain: 2 },
    lastUpdated: '2025-07-27',
  },
  {
    id: 'd002',
    title: 'Forum Moderation Transparency Log',
    status: 'Passed',
    summary: 'Proposal to publish all moderator actions and justifications.',
    votes: { for: 6, against: 1, abstain: 0 },
    lastUpdated: '2025-07-25',
  },
  {
    id: 'd003',
    title: 'Sanctum Lore Amendments',
    status: 'Deferred',
    summary: 'Reworking mythological framing to include recent canonical inputs.',
    votes: { for: 2, against: 2, abstain: 3 },
    lastUpdated: '2025-07-20',
  },
];

const getBadgeColor = (status: Decision['status']) => {
  switch (status) {
    case 'Passed':
      return 'bg-green-600';
    case 'Rejected':
      return 'bg-red-600';
    case 'Deferred':
      return 'bg-yellow-600';
    case 'In Deliberation':
    default:
      return 'bg-indigo-600';
  }
};

const CouncilDecisionTracker: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 shadow-md">
      <h2 className="text-xl font-semibold text-indigo-300 text-center mb-4">Council Decision Tracker</h2>

      <ScrollArea className="h-80 pr-2">
        <div className="space-y-5">
          {mockDecisions.map((decision, idx) => {
            const totalVotes = decision.votes.for + decision.votes.against + decision.votes.abstain;
            const forPct = (decision.votes.for / totalVotes) * 100;
            const againstPct = (decision.votes.against / totalVotes) * 100;
            const abstainPct = (decision.votes.abstain / totalVotes) * 100;

            return (
              <motion.div
                key={decision.id}
                className="bg-gray-800 p-4 rounded-lg border border-gray-700"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-md font-medium text-indigo-400">{decision.title}</h3>
                  <Badge className={`${getBadgeColor(decision.status)} text-white text-xs`}>
                    {decision.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-300 mb-2">{decision.summary}</p>

                <div className="space-y-2">
                  <div className="text-xs text-gray-400">Votes</div>
                  <div className="flex gap-2 text-xs">
                    <span className="text-green-400">For: {decision.votes.for}</span>
                    <span className="text-red-400">Against: {decision.votes.against}</span>
                    <span className="text-yellow-400">Abstain: {decision.votes.abstain}</span>
                  </div>

                  <div className="space-y-1">
                    <Progress value={forPct} className="h-1.5 bg-gray-700" color="green" />
                    <Progress value={againstPct} className="h-1.5 bg-gray-700" color="red" />
                    <Progress value={abstainPct} className="h-1.5 bg-gray-700" color="yellow" />
                  </div>
                </div>

                <div className="mt-3 text-xs text-gray-500 text-right">
                  Last updated: {decision.lastUpdated}
                </div>
              </motion.div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CouncilDecisionTracker;
