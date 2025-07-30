import React from 'react';
import { motion } from 'framer-motion';

interface CodexLoreGlyphSparkProps {
  delay?: number;
  color?: string;
  size?: number;
}

const CodexLoreGlyphSpark: React.FC<CodexLoreGlyphSparkProps> = ({
  delay = 0,
  color = 'rgba(255, 255, 150, 0.7)',
  size = 6,
}) => {
  const randomX = Math.random() * 200 - 100;
  const randomY = Math.random() * 200 - 100;
  const randomDuration = 1.5 + Math.random();

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      initial={{
        opacity: 0,
        scale: 0.5,
        x: 0,
        y: 0,
      }}
      animate={{
        opacity: [0, 1, 0],
        x: [0, randomX],
        y: [0, randomY],
        scale: [0.5, 1, 0.5],
      }}
      transition={{
        duration: randomDuration,
        delay,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        boxShadow: `0 0 6px ${color}`,
        left: '50%',
        top: '50%',
      }}
    />
  );
};

export default CodexLoreGlyphSpark;
