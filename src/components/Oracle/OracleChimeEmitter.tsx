// src/components/Oracle/OracleChimeEmitter.tsx
import React, { useEffect } from 'react';

const OracleChimeEmitter: React.FC<{ src: string; volume?: number }> = ({ src, volume = 0.3 }) => {
  useEffect(() => {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play().catch((e) => console.error('Chime play error:', e));
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [src, volume]);

  return null;
};

export default OracleChimeEmitter;
