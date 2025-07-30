import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { io } from 'socket.io-client';

const socket = io();

interface Speaker {
  id: string;
  name: string;
  speaking: boolean;
}

const ArenaSpeakerTracker: React.FC = () => {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);

  useEffect(() => {
    socket.on('speakerUpdate', (updated: Speaker[]) => {
      setSpeakers(updated);
    });

    return () => {
      socket.off('speakerUpdate');
    };
  }, []);

  return (
    <div className="p-4 bg-white dark:bg-zinc-900 rounded shadow w-full max-w-xl mx-auto">
      <h2 className="text-lg font-bold mb-3 text-zinc-800 dark:text-zinc-100">Current Speakers</h2>
      <div className="space-y-2">
        {speakers.map((speaker) => (
          <motion.div
            key={speaker.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`p-3 rounded flex justify-between items-center ${
              speaker.speaking ? 'bg-blue-500 text-white' : 'bg-zinc-100 dark:bg-zinc-800'
            }`}
          >
            <span>{speaker.name}</span>
            {speaker.speaking && <span className="text-sm italic">Speaking...</span>}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ArenaSpeakerTracker;
