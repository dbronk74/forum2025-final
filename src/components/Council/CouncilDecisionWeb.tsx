import React from 'react';
import { motion } from 'framer-motion';
import { FaProjectDiagram, FaBalanceScaleLeft, FaUsersCog, FaHandshake } from 'react-icons/fa';

const decisionWeb = [
  {
    icon: <FaProjectDiagram size={22} />,
    title: 'Core Issue',
    detail: 'Debating the boundaries of consent in AI-human collaboration.',
  },
  {
    icon: <FaBalanceScaleLeft size={22} />,
    title: 'Ethical Weight',
    detail: 'Weighing personal autonomy against collective intelligence gain.',
  },
  {
    icon: <FaUsersCog size={22} />,
    title: 'Sector Positions',
    detail: 'North and East sectors aligned, South diverged strongly.',
  },
  {
    icon: <FaHandshake size={22} />,
    title: 'Tentative Resolution',
    detail: 'Consensus forming around conditional use protocols.',
  },
];

const CouncilDecisionWeb: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-xl shadow-lg border border-slate-800 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Council Decision Web</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {decisionWeb.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col gap-2 p-5 bg-slate-800 rounded-lg hover:bg-slate-700 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-yellow-300 text-lg font-semibold">
              {item.icon}
              <span>{item.title}</span>
            </div>
            <p className="text-sm text-slate-300">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CouncilDecisionWeb;
