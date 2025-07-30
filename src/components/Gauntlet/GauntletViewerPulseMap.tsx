import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const generateRandomGrid = (rows: number, cols: number) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => Math.random())
  );
};

const GauntletViewerPulseMap: React.FC = () => {
  const [pulseGrid, setPulseGrid] = useState<number[][]>(generateRandomGrid(6, 12));

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseGrid(generateRandomGrid(6, 12));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <h2 className="text-white text-xl mb-2">Viewer Engagement Pulse Map</h2>
      <div className="grid grid-cols-12 gap-1 bg-gray-900 p-2 rounded shadow-inner border border-gray-700">
        {pulseGrid.flat().map((intensity, i) => (
          <motion.div
            key={i}
            className="w-full aspect-square rounded-sm"
            animate={{ backgroundColor: `rgba(0, 255, 180, ${intensity})` }}
            transition={{ duration: 1.2 }}
          />
        ))}
      </div>
    </div>
  );
};

export default GauntletViewerPulseMap;
