import React, { useEffect, useRef } from 'react';

const AmbientChime: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.4;
      audio.loop = true;
      audio.play().catch(() => {
        // Auto-play may be blocked
        console.log('Ambient chime auto-play blocked.');
      });
    }
    return () => {
      audio?.pause();
    };
  }, []);

  return (
    <audio ref={audioRef} preload="auto" src="/audio/deep-chime-loop.mp3" />
  );
};

export default AmbientChime;
