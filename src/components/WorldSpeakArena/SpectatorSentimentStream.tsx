import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { io } from 'socket.io-client';

const socket = io();

type Sentiment = 'positive' | 'neutral' | 'negative';

interface SentimentPulse {
  id: string;
  sentiment: Sentiment;
  timestamp: number;
}

const SpectatorSentimentStream: React.FC = () => {
  const [pulses, setPulses] = useState<SentimentPulse[]>([]);

  useEffect(() => {
    socket.on('spectatorSentiment', (pulse: SentimentPulse) => {
      setPulses((prev) => [...prev.slice(-20), pulse]);
    });

    return () => {
      socket.off('spectatorSentiment');
    };
  }, []);

  const getColor = (sentiment: Sentiment) => {
    switch (sentiment) {
      case 'positive':
        return 'bg-green-400';
      case 'neutral':
        return 'bg-gray-400';
      case 'negative':
        return 'bg-red-400';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="flex space-x-1 p-2 overflow-x-auto w-full bg-black rounded shadow-inner">
      {(pulses ?? []).map((pulse) => (
        <motion.div
          key={pulse.id}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`w-5 h-5 rounded-full ${getColor(pulse.sentiment)}`}
        />
      ))}
    </div>
  );
};

export default SpectatorSentimentStream;
