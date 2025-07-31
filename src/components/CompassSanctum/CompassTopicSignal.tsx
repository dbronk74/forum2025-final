import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaBullhorn, FaComments, FaExclamationCircle } from 'react-icons/fa';

const topicSignals = [
  {
    icon: <FaLightbulb size={20} />,
    topic: 'Innovation',
    strength: 'High',
    description: 'Frequent breakthroughs and forward-thinking ideas detected.',
  },
  {
    icon: <FaBullhorn size={20} />,
    topic: 'Advocacy',
    strength: 'Moderate',
    description: 'Rising presence of persuasive arguments and moral appeals.',
  },
  {
    icon: <FaComments size={20} />,
    topic: 'Dialogue',
    strength: 'Stable',
    description: 'Balanced conversation patterns with reciprocal flow.',
  },
  {
    icon: <FaExclamationCircle size={20} />,
    topic: 'Conflict',
    strength: 'Elevated',
    description: 'Increased disagreement and tension within active threads.',
  },
];

const CompassTopicSignal: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-xl shadow-lg border border-slate-800 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Compass Topic Signals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {(topicSignals ?? []).map((signal, idx) => (
          <motion.div
            key={idx}
            className="bg-slate-800 p-5 rounded-lg flex flex-col gap-2 hover:bg-slate-700 transition"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 130 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-yellow-300">
              {signal.icon}
              <span className="text-lg font-semibold">{signal.topic}</span>
            </div>
            <div className="text-white text-sm font-bold">Strength: {signal.strength}</div>
            <p className="text-sm text-slate-300">{signal.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompassTopicSignal;
