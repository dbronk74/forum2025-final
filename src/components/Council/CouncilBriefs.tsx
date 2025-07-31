import React from 'react';
import { motion } from 'framer-motion';
import { FaFeatherAlt, FaBalanceScale, FaComments, FaUserFriends } from 'react-icons/fa';

const briefs = [
  {
    icon: <FaFeatherAlt size={22} />,
    title: 'Moral Summary',
    content: 'Today’s deliberations focused on balancing autonomy with societal obligation.',
  },
  {
    icon: <FaBalanceScale size={22} />,
    title: 'Ethical Consensus',
    content: 'Three out of five council sectors leaned toward restorative approaches.',
  },
  {
    icon: <FaComments size={22} />,
    title: 'Dissenting Voice',
    content: 'Sector South expressed concern over precedent and long-term integrity.',
  },
  {
    icon: <FaUserFriends size={22} />,
    title: 'Public Alignment',
    content: 'External observers showed 68% agreement with Council’s majority position.',
  },
];

const CouncilBriefs: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white rounded-xl shadow-lg border border-slate-800 p-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Council Briefs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {(briefs ?? []).map((brief, index) => (
          <motion.div
            key={index}
            className="bg-slate-800 p-5 rounded-lg flex flex-col gap-2 hover:bg-slate-700 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 130 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-yellow-300">
              {brief.icon}
              <span className="text-lg font-semibold">{brief.title}</span>
            </div>
            <p className="text-sm text-slate-300">{brief.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CouncilBriefs;
