import React from 'react';
import { motion } from 'framer-motion';

interface GauntletAchievementBadgeGlowProps {
  title: string;
  icon?: string; // optional icon path
  glowColor?: string; // fallback: 'rgba(255, 215, 0, 0.6)' (golden glow)
}

const GauntletAchievementBadgeGlow: React.FC<GauntletAchievementBadgeGlowProps> = ({
  title,
  icon,
  glowColor = 'rgba(255, 215, 0, 0.6)',
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center p-4">
      <motion.div
        className="absolute inset-0 rounded-full blur-2xl opacity-70"
        style={{
          background: glowColor,
          zIndex: 0,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      <div className="relative z-10 w-20 h-20 rounded-full bg-gray-900 border-2 border-yellow-400 flex items-center justify-center shadow-lg">
        {icon ? (
          <img src={icon} alt={title} className="w-10 h-10" />
        ) : (
          <span className="text-yellow-300 text-xl font-bold">{title.charAt(0)}</span>
        )}
      </div>
      <div className="relative z-10 mt-2 text-sm text-yellow-200 font-semibold">
        {title}
      </div>
    </div>
  );
};

export default GauntletAchievementBadgeGlow;
