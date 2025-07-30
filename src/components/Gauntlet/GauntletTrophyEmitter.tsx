import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GauntletTrophyEmitter: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return show ? (
    <motion.div
      className="absolute top-10 left-1/2 transform -translate-x-1/2 text-yellow-300 text-4xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: -10 }}
      transition={{ duration: 1.5 }}
    >
      🏆
    </motion.div>
  ) : null;
};

export default GauntletTrophyEmitter;
