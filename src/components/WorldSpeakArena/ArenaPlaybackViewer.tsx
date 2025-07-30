import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface PlaybackSegment {
  timestamp: string;
  speaker: string;
  content: string;
}

const sampleSegments: PlaybackSegment[] = [
  { timestamp: '00:12', speaker: 'UserA', content: 'Opening statement on climate policy.' },
  { timestamp: '00:45', speaker: 'UserB', content: 'Counterpoint with economic data.' },
  { timestamp: '01:10', speaker: 'UserA', content: 'Clarification on previous claims.' },
];

const ArenaPlaybackViewer: React.FC = () => {
  const [current, setCurrent] = useState<number | null>(null);

  return (
    <div className="bg-zinc-800 p-4 rounded-lg shadow w-full max-w-3xl mx-auto">
      <h2 className="text-xl text-white font-bold mb-4">Playback Viewer</h2>
      <div className="space-y-3">
        {sampleSegments.map((segment, index) => (
          <motion.div
            key={index}
            className={`p-3 rounded transition-all duration-300 ${
              current === index ? 'bg-blue-700 text-white' : 'bg-zinc-700 text-gray-100'
            }`}
            whileHover={{ scale: 1.02 }}
            onClick={() => setCurrent(index)}
          >
            <p className="text-sm text-gray-300">{segment.timestamp}</p>
            <p className="font-semibold">{segment.speaker}</p>
            <p>{segment.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ArenaPlaybackViewer;
