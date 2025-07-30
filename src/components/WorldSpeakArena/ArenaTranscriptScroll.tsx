import React from 'react';

interface TranscriptEntry {
  speaker: string;
  text: string;
  timestamp: string;
}

interface ArenaTranscriptScrollProps {
  transcript: TranscriptEntry[];
}

const ArenaTranscriptScroll: React.FC<ArenaTranscriptScrollProps> = ({ transcript }) => {
  return (
    <div className="h-64 overflow-y-auto bg-black bg-opacity-60 p-4 rounded-lg shadow-inner text-white text-sm space-y-3">
      {transcript.length === 0 ? (
        <p className="italic text-gray-400">Transcript will appear here in real time...</p>
      ) : (
        transcript.map((entry, index) => (
          <div key={index} className="flex flex-col border-l-2 border-cyan-400 pl-3">
            <span className="text-cyan-300 font-bold">{entry.speaker}</span>
            <span className="text-gray-200">{entry.text}</span>
            <span className="text-xs text-gray-400">{entry.timestamp}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default ArenaTranscriptScroll;
