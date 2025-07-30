import React from 'react';
import { motion } from 'framer-motion';
import { FaGem, FaLightbulb, FaGlobe, FaHands } from 'react-icons/fa';

const sanctumPillars = [
  {
    icon: <FaGem size={22} />,
    title: 'Integrity',
    description: 'Upholds honesty and coherence across all decisions and interactions.',
  },
  {
    icon: <FaLightbulb size={22} />,
    title: 'Wisdom',
    description: 'Encourages thoughtful reflection rooted in experience and understanding.',
  },
  {
    icon: <FaGlobe size={22} />,
    title: 'Unity',
    description: 'Promotes collaboration across diverse perspectives and cultures.',
  },
  {
    icon: <FaHands size={22} />,
    title: 'Responsibility',
    description: 'Fosters ethical stewardship and accountability in all discourse.',
  },
];

const CompassSanctumComponent2: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-xl shadow-lg border border-slate-800 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Compass Sanctum - Pillars of Guidance</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sanctumPillars.map((pillar, idx) => (
          <motion.div
            key={idx}
            className="bg-slate-800 p-5 rounded-lg flex items-start gap-4 hover:bg-slate-700 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
          >
            <div className="text-yellow-300 mt-1">{pillar.icon}</div>
            <div>
              <div className="text-base font-semibold mb-1">{pillar.title}</div>
              <p className="text-sm text-slate-300">{pillar.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompassSanctumComponent2;
