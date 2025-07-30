import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaFlag, FaExclamationTriangle, FaBullhorn } from 'react-icons/fa';

const topics = [
  {
    icon: <FaLightbulb size={22} />,
    label: 'Emerging Insight',
    signal: 'High',
    description: 'A novel concept is gaining traction among multiple council sectors.',
  },
  {
    icon: <FaBullhorn size={22} />,
    label: 'Directive Debate',
    signal: 'Moderate',
    description: 'New policy proposal under critical review from opposing alignments.',
  },
  {
    icon: <FaExclamationTriangle size={22} />,
    label: 'Conflict Escalation',
    signal: 'Elevated',
    description: 'Heated disagreement detected with potential ideological fracture.',
  },
  {
    icon: <FaFlag size={22} />,
    label: 'Stabilized Focus',
    signal: 'Balanced',
    description: 'Consensus building around previously disputed terminology.',
  },
];

const CouncilTopicBeacon: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-xl border border-slate-800 shadow-lg max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Council Topic Beacon</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {topics.map((topic, idx) => (
          <motion.div
            key={idx}
            className="bg-slate-800 p-5 rounded-lg hover:bg-slate-700 transition flex flex-col gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-yellow-300 font-semibold text-lg">
              {topic.icon}
              <span>{topic.label}</span>
            </div>
            <div className="text-sm text-white font-bold">Signal: {topic.signal}</div>
            <p className="text-sm text-slate-300">{topic.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CouncilTopicBeacon;
