import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

import stoneRumble from '/audio/stone_rumble.ogg';
import swordScrape from '/audio/sword_scrape.ogg';
import eyeHum from '/audio/eye_glow_loop.ogg';
import portalWhoosh from '/audio/portal_whoosh.ogg';

function Sentinel({ url, position, isVIP }: { url: string; position: [number, number, number]; isVIP: boolean }) {
  const group = useRef<THREE.Group>(null!);
  const { scene, animations } = useGLTF(url);
  useAnimations(animations, group);

  return <primitive ref={group} object={scene} position={position} dispose={null} />;
}

function Portal() {
  return (
    <mesh position={[0, 2, 0]}>
      <planeGeometry args={[2, 2]} />
      <meshStandardMaterial color="#1E90FF" emissive="#1E90FF" emissiveIntensity={0.5} />
    </mesh>
  );
}

export default function SentinelGate() {
  const navigate = useNavigate();
  const [openPlayed, setOpenPlayed] = useState(false);
  const isVIP = useState(() => Math.random() < 0.05)[0];

  const [playStone] = useSound(stoneRumble, { volume: 0.8 });
  const [playScrape] = useSound(swordScrape, { volume: 0.6 });
  const [playHum, { stop }] = useSound(eyeHum, { loop: true, volume: 0.4 });
  const [playWhoosh] = useSound(portalWhoosh, { volume: 0.7 });

  useEffect(() => {
    playHum();
    return () => stop();
  }, [playHum, stop]);

  const handleEnter = () => {
    if (openPlayed) return;
    setOpenPlayed(true);

    playStone();
    setTimeout(() => playScrape(), 600);
    setTimeout(() => playWhoosh(), 1200);

    setTimeout(() => {
      document.dispatchEvent(new CustomEvent('open_gate'));
      navigate('/forum');
    }, 1800);
  };

  return (
    <div className="relative h-screen bg-black">
      <Canvas frameloop="always" gl={{ antialias: true }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Sentinel url="/models/sentinelgate/sentinel_left.glb" position={[-2.2, 0, 0]} isVIP={isVIP} />
          <Sentinel url="/models/sentinelgate/sentinel_right.glb" position={[2.2, 0, 0]} isVIP={isVIP} />
          <Portal />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      <button
        className="absolute bottom-12 left-1/2 -translate-x-1/2 rounded-xl bg-blue-600 px-8 py-4 text-white text-xl font-bold transition hover:bg-blue-700"
        onClick={handleEnter}
        aria-label="Enter The Forum"
      >
        Enter The Forum
      </button>
    </div>
  );
}
