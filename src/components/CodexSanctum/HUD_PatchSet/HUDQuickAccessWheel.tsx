import React from 'react';
import { motion } from 'framer-motion';
import { FaScroll, FaMapMarkedAlt, FaVault, FaBookOpen, FaEye } from 'react-icons/fa';

const tools = [
  { icon: <FaScroll />, label: 'Scroll', angle: 270 },
  { icon: <FaMapMarkedAlt />, label: 'Map', angle: 210 },
  { icon: <FaVault />, label: 'Vault', angle: 150 },
  { icon: <FaBookOpen />, label: 'Codex', angle: 90 },
  { icon: <FaEye />, label: 'Lens', angle: 30 },
];

const radius = 100;
const center = 128;

export default function HUDQuickAccessWheel() {
  return (
    <div className="fixed top-8 right-8 w-64 h-64 z-50">
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-zinc-900 via-black to-zinc-800 border border-indigo-700 shadow-lg">
        {/* Radial buttons */}
        {(tools ?? []).map((tool, index) => {
          const angleRad = (tool.angle * Math.PI) / 180;
          const x = center + radius * Math.cos(angleRad) - 20;
          const y = center + radius * Math.sin(angleRad) - 20;

          return (
            <motion.button
              key={index}
              className="absolute w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow hover:scale-110 hover:bg-indigo-500 transition"
              style={{ left: `${x}px`, top: `${y}px` }}
              whileTap={{ scale: 0.9 }}
              title={tool.label}
              onClick={() => alert(`${tool.label} accessed`)} // Replace with real logic
            >
              {tool.icon}
            </motion.button>
          );
        })}

        {/* Center logo */}
        <div className="absolute top-1/2 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 bg-indigo-700 text-white flex items-center justify-center rounded-full font-bold text-sm">
          +
        </div>
      </div>
    </div>
  );
}
