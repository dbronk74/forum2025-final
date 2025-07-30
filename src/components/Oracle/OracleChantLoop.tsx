// src/components/Oracle/OracleChantLoop.tsx
import React, { useEffect, useRef } from 'react';

const OracleChantLoop: React.FC<{ src: string; volume?: number }> = ({ src, volume = 0.2 }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;
    audio.play().catch((err) => console.warn('Audio playback failed:', err));

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [src, volume]);

  return null;
};

export default OracleChantLoop;
