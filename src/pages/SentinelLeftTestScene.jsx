// pages/SentinelLeftTestScene.jsx
import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations, Environment } from '@react-three/drei';

function SentinelModel() {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/sentinelgate/sentinel_models/sentinel_left.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions['Action']) {
      actions['Action'].play();
    } else if (animations.length > 0) {
      actions[Object.keys(actions)[0]]?.play();
    }
  }, [actions]);

  return (
    <primitive
      ref={group}
      object={scene}
      scale={[1.5, 1.5, 1.5]}
      position={[0, -1, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
}

export default function SentinelLeftTestScene() {
  return (
    <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
      <color attach="background" args={['#000']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} />
      <Environment preset="sunset" />
      <SentinelModel />
      <OrbitControls />
    </Canvas>
  );
}
