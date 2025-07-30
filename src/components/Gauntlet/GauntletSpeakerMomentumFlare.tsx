import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { motion, useAnimation } from 'framer-motion';

const GauntletSpeakerMomentumFlare: React.FC = () => {
  const activeSpeaker = useSelector((state: RootState) => state.gauntlet.activeSpeaker);
  const resonance = useSelector((state: RootState) => state.gauntlet.resonanceLevel);
  const controls = useAnimation();
  const flareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeSpeaker) {
      controls.start({
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.3, 1],
        transition: {
          duration: 1.5,
          ease: 'easeInOut',
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [activeSpeaker, controls]);

  const dynamicColor = `rgba(255, ${Math.floor(resonance * 2.5)}, 100, 0.5)`;

  return (
    <motion.div
      ref={flareRef}
      animate={controls}
      className="absolute z-10 rounded-full pointer-events-none"
      style={{
        width: 240,
        height: 240,
        background: `radial-gradient(circle, ${dynamicColor} 0%, transparent 70%)`,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        filter: 'blur(12px)',
        borderRadius: '50%',
      }}
    />
  );
};

export default GauntletSpeakerMomentumFlare;
