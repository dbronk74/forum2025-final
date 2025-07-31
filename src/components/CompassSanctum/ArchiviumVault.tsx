import React from 'react';
import { motion } from 'framer-motion';
import { FaArchive, FaKey, FaBook, FaLockOpen } from 'react-icons/fa';

const archiveItems = [
  { icon: <FaBook size={28} />, title: 'Philosophical Records' },
  { icon: <FaKey size={28} />, title: 'Ethical Keys' },
  { icon: <FaArchive size={28} />, title: 'Council Archives' },
  { icon: <FaLockOpen size={28} />, title: 'Unlocked Insights' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } },
};

const ArchiviumVault: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white rounded-xl p-8 shadow-lg border border-slate-800 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center tracking-wide">Archivium Vault</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {(archiveItems ?? []).map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-slate-800 rounded-lg p-5 flex items-center gap-4 hover:bg-slate-700 transition duration-300"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-yellow-300">{item.icon}</div>
            <div className="text-lg font-medium">{item.title}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ArchiviumVault;
