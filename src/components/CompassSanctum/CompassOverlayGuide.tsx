import React from 'react';
import { motion } from 'framer-motion';
import { FaInfoCircle, FaLayerGroup, FaQuestionCircle, FaRegCompass } from 'react-icons/fa';

const guideItems = [
  { icon: <FaRegCompass size={22} />, title: 'Navigate Paths', description: 'Use the compass to explore different argument vectors and perspectives.' },
  { icon: <FaLayerGroup size={22} />, title: 'Layer Insights', description: 'Overlay moral, logical, and emotional layers to gain deeper understanding.' },
  { icon: <FaInfoCircle size={22} />, title: 'Interpret Signals', description: 'Read live signals from speakers and participants in real time.' },
  { icon: <FaQuestionCircle size={22} />, title: 'Seek Clarity', description: 'Use prompts and context maps to reframe or clarify emerging tensions.' },
];

const CompassOverlayGuide: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white rounded-xl shadow-lg p-8 border border-slate-800 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Compass Overlay Guide</h2>
      <div className="space-y-5">
        {(guideItems ?? []).map((item, idx) => (
          <motion.div
            key={idx}
            className="flex items-start gap-4 bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.12, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
          >
            <div className="text-yellow-300 mt-1">{item.icon}</div>
            <div>
              <div className="text-base font-semibold">{item.title}</div>
              <p className="text-sm text-slate-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompassOverlayGuide;
