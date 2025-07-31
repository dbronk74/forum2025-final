// WorldSpeakArena/ArenaParticipantList.tsx

import React from 'react';

interface Participant {
  name: string;
  status: 'speaking' | 'waiting' | 'disconnected';
  faction?: string;
}

interface ArenaParticipantListProps {
  participants: Participant[];
}

const statusColorMap = {
  speaking: 'text-green-500',
  waiting: 'text-yellow-400',
  disconnected: 'text-gray-500',
};

const ArenaParticipantList: React.FC<ArenaParticipantListProps> = ({ participants }) => {
  return (
    <div className="bg-zinc-900 rounded-lg shadow-md p-4 w-full max-w-md">
      <h2 className="text-lg font-semibold text-white mb-3">Arena Participants</h2>
      <ul className="divide-y divide-zinc-700">
        {(participants ?? []).map((p, idx) => (
          <li key={idx} className="flex justify-between items-center py-2">
            <span className="text-white font-medium">{p.name}</span>
            <span className={`${statusColorMap[p.status]} text-sm capitalize`}>
              {p.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArenaParticipantList;
