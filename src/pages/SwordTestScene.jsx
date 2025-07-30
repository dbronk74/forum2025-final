// SwordTestScene.jsx
import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations, Environment } from '@react-three/drei';

function AnimatedSword({ url }) {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions['Action']) {
      actions['Action'].play();
    } else {
      const first = Object.values(actions)[0];
      if (first) first.play();
    }
  }, [actions]);

  return <primitive ref={group} object={scene} position={[0, 0, 0]} dispose={null} />;
}

export default function SwordTestScene() {
  return (
    <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
      <color attach="background" args={['#000']} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} />
      <Environment preset="sunset" />
      <AnimatedSword url="/models/sentinelgate/sentinel_models/sentinel_sword.glb" />
      <OrbitControls />
    </Canvas>
  );
}
