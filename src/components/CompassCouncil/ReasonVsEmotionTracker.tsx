import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart } from 'lucide-react';

interface ReasonVsEmotionTrackerProps {
  reasonLevel: number; // 0 to 100
  emotionLevel: number; // 0 to 100
}

const ReasonVsEmotionTracker: React.FC<ReasonVsEmotionTrackerProps> = ({ reasonLevel, emotionLevel }) => {
  const total = reasonLevel + emotionLevel || 1;
  const reasonPercent = (reasonLevel / total) * 100;
  const emotionPercent = (emotionLevel / total) * 100;

  return (
    <div className="bg-slate-800 rounded-2xl p-4 shadow-lg w-full max-w-xl mx-auto text-slate-200">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-blue-400">
          <Brain size={20} />
          <span>Reason {reasonPercent.toFixed(1)}%</span>
        </div>
        <div className="flex items-center gap-2 text-rose-400">
          <Heart size={20} />
          <span>Emotion {emotionPercent.toFixed(1)}%</span>
        </div>
      </div>

      <div className="w-full h-5 bg-slate-700 rounded-full overflow-hidden flex">
        <motion.div
          className="bg-blue-500 h-full"
          initial={{ width: 0 }}
          animate={{ width: `${reasonPercent}%` }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="bg-rose-500 h-full"
          initial={{ width: 0 }}
          animate={{ width: `${emotionPercent}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default ReasonVsEmotionTracker;
