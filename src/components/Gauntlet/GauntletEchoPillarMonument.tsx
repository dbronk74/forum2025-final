import React from 'react';
import { motion } from 'framer-motion';

interface EchoItem {
  id: number;
  speaker: string;
  quote: string;
  tier: number; // 1 = base, 5 = top
}

const mockEchoes: EchoItem[] = [
  { id: 1, speaker: 'Athena', quote: 'Logic without clarity is chaos.', tier: 5 },
  { id: 2, speaker: 'Orion', quote: 'Truth is sharpened by challenge.', tier: 4 },
  { id: 3, speaker: 'Lyra', quote: 'Every silence carries intention.', tier: 3 },
  { id: 4, speaker: 'Caelum', quote: 'The strongest stance invites the strongest test.', tier: 2 },
  { id: 5, speaker: 'Nova', quote: 'Voice wields more than sword.', tier: 1 },
];

const tierColor = (tier: number) => {
  switch (tier) {
    case 5: return 'from-yellow-400 to-purple-500';
    case 4: return 'from-purple-500 to-pink-500';
    case 3: return 'from-pink-500 to-blue-500';
    case 2: return 'from-blue-500 to-teal-400';
    default: return 'from-gray-600 to-gray-800';
  }
};

const GauntletEchoPillarMonument: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-xs mx-auto mt-10">
      <h2 className="text-xl font-bold text-center text-indigo-300 mb-6">
        Echo Pillar Monument
      </h2>
      <div className="flex flex-col-reverse items-center space-y-reverse space-y-4">
        {(mockEchoes ?? []).map((echo) => (
          <motion.div
            key={echo.id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: echo.id * 0.1 }}
            className={`w-full px-4 py-3 rounded-xl shadow-md bg-gradient-to-r ${tierColor(echo.tier)} text-white text-center border border-white/10`}
          >
            <p className="text-sm italic mb-1">“{echo.quote}”</p>
            <p className="text-xs text-gray-200">– {echo.speaker}</p>
          </motion.div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-4 italic">
        Top echoes preserved through trials of logic, clarity, and impact.
      </p>
    </div>
  );
};

export default GauntletEchoPillarMonument;
