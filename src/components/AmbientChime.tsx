import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const AudioContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

interface AmbientChimeProps {
  agreed: boolean;
}

const AmbientChime: React.FC<AmbientChimeProps> = ({ agreed }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
      audioRef.current.volume = 0.4;
    }
  }, []);

  useEffect(() => {
    if (agreed && audioRef.current) {
      const fadeOut = setInterval(() => {
        if (audioRef.current && audioRef.current.volume > 0) {
          audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.05);
        } else {
          clearInterval(fadeOut);
          audioRef.current?.pause();
        }
      }, 100);
      return () => clearInterval(fadeOut);
    }
  }, [agreed]);

  return (
    <AudioContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <audio ref={audioRef} loop>
        <source src="/assets/deep-chime-loop.mp3" type="audio/mpeg" />
      </audio>
    </AudioContainer>
  );
};

export default AmbientChime;
