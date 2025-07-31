import React from 'react';

interface SessionEntry {
  timestamp: string;
  speaker: string;
  message: string;
}

const mockData: SessionEntry[] = [
  { timestamp: '00:01', speaker: 'User1', message: 'I believe our policies must change.' },
  { timestamp: '00:03', speaker: 'User2', message: 'Change is inevitable, but how?' },
  { timestamp: '00:04', speaker: 'User1', message: 'Through open dialogue like this.' },
];

const WorldSpeakSessionLog: React.FC = () => {
  return (
    <div className="bg-neutral-800 text-white p-4 rounded-lg shadow-md max-h-72 overflow-y-auto">
      <h3 className="text-lg font-semibold mb-2">WorldSpeak Session Log</h3>
      <ul className="space-y-1 text-sm">
        {(mockData ?? []).map((entry, index) => (
          <li key={index} className="border-b border-neutral-700 pb-1">
            <span className="text-teal-400">{entry.timestamp}</span>{' '}
            <strong>{entry.speaker}:</strong> {entry.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorldSpeakSessionLog;
