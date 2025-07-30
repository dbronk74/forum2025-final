import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const NUM_ECHOES = 12;

const generateEchoes = () => {
  return Array.from({ length: NUM_ECHOES }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 6,
    blur: Math.random() * 8 + 4,
  }));
};

const GauntletWanderingEchoes: React.FC = () => {
  const echoes = useRef(generateEchoes());
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      x: ['0%', `${Math.random() * 100}%`],
      y: ['0%', `${Math.random() * 100}%`],
      transition: {
        duration: echoes.current[i].duration,
        delay: echoes.current[i].delay,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    }));
  }, [controls]);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {echoes.current.map((echo, i) => (
        <motion.div
          key={echo.id}
          custom={i}
          animate={controls}
          className="absolute rounded-full bg-cyan-300 opacity-10"
          style={{
            width: echo.size,
            height: echo.size,
            top: `${echo.y}%`,
            left: `${echo.x}%`,
            filter: `blur(${echo.blur}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default GauntletWanderingEchoes;
