// src/components/InnerTemple/AmbientChime.tsx

import React, { useEffect, useRef } from 'react';

const AmbientChime: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playChime = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {
          // Handle play promise rejection silently (e.g., user hasn't interacted yet)
        });
      }
    };

    const interval = setInterval(() => {
      playChime();
    }, 15000); // Play every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/sounds/ambient-chime.mp3"
        preload="auto"
        aria-hidden="true"
      />
    </>
  );
};

export default AmbientChime;
