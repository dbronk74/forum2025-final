import React from 'react';
import { motion } from 'framer-motion';
import { GaugeCircle } from 'lucide-react';

type Sentiment = {
  label: string;
  value: number; // Range from -100 to 100
  color: string;
};

const sentimentData: Sentiment[] = [
  { label: 'Rational', value: 70, color: 'bg-sky-500' },
  { label: 'Emotional', value: -40, color: 'bg-rose-500' },
  { label: 'Moral', value: 85, color: 'bg-amber-500' },
  { label: 'Pragmatic', value: 20, color: 'bg-lime-500' },
];

const CouncilSentimentAxis: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-indigo-950 to-indigo-900 rounded-xl shadow-md border border-indigo-800">
      <div className="flex items-center gap-3 mb-4">
        <GaugeCircle className="h-6 w-6 text-indigo-300" />
        <h2 className="text-xl font-bold text-indigo-100">Council Sentiment Axis</h2>
      </div>
      <div className="space-y-4">
        {sentimentData.map((sentiment, index) => {
          const percent = Math.abs(sentiment.value);
          const isPositive = sentiment.value >= 0;
          return (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-indigo-200 text-sm">{sentiment.label}</span>
                <span className="text-indigo-400 text-sm">{sentiment.value > 0 ? '+' : ''}{sentiment.value}</span>
              </div>
              <div className="relative w-full h-3 bg-indigo-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percent}%` }}
                  transition={{ duration: 1 }}
                  className={`absolute top-0 h-full ${sentiment.color} ${isPositive ? 'left-0' : 'right-0'}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CouncilSentimentAxis;
