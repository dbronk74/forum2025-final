import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF, useAnimations, Html } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'
import { Howl } from 'howler'

const audio = {
  rumble: new Howl({ src: ['/audio/stone_rumble.ogg'], volume: 0.6 }),
  sword: new Howl({ src: ['/audio/sword_scrape.ogg'], volume: 0.8 }),
  whoosh: new Howl({ src: ['/audio/portal_whoosh.ogg'], volume: 1 }),
}

function Sentinel({ path, position, scale, rotation, playAnim = false }) {
  const ref = useRef()
  const { scene, animations } = useGLTF(path)
  const { actions } = useAnimations(animations, ref)

  useEffect(() => {
    if (playAnim && actions['Action']) {
      actions['Action'].reset().fadeIn(0.5).play()
    }
  }, [playAnim])

  return (
    <primitive
      object={scene}
      ref={ref}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  )
}

function Portal({ path, position, scale }) {
  const { scene } = useGLTF(path)
  return <primitive object={scene} position={position} scale={scale} />
}

function EnterButton({ onClick }) {
  return (
    <Html center>
      <button
        onClick={onClick}
        className="px-6 py-3 text-lg bg-black/70 text-white border border-white rounded-xl hover:bg-white hover:text-black transition-all shadow-lg backdrop-blur"
        style={{ marginTop: '20vh' }}
      >
        ENTER
      </button>
    </Html>
  )
}

function CameraDrift({ enabled }) {
  const ref = useRef()
  useFrame((state) => {
    if (!enabled) return
    const t = state.clock.getElapsedTime()
    const x = Math.sin(t * 0.4) * 1.2
    const y = Math.sin(t * 0.3) * 0.5 + 4
    const z = Math.cos(t * 0.3) * 1.2 + 10
    state.camera.position.set(x, y, z)
    state.camera.lookAt(0, 3, 0)
  })
  return null
}

export default function SentinelGateScene() {
  const [unlocked, setUnlocked] = useState(false)
  const [playAnim, setPlayAnim] = useState(false)
  const navigate = useNavigate()

  const handleEnter = () => {
    if (!unlocked) {
      audio.rumble.play()
      audio.sword.play()
      setPlayAnim(true)
      setTimeout(() => {
        audio.whoosh.play()
        setUnlocked(true)
        setTimeout(() => {
          navigate('/forum')
        }, 1200)
      }, 2000)
    }
  }

  return (
    <div className="w-screen h-screen bg-black">
      <Canvas shadows camera={{ fov: 40, position: [0, 4, 12] }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          intensity={1}
          position={[5, 10, 5]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Environment preset="sunset" />
        <CameraDrift enabled={!unlocked} />

        {/* Sentinels */}
        <Sentinel
          path="/models/sentinelgate/sentinel_models/sentinel_left.glb"
          position={[-2.7, 0, 0]}
          rotation={[0, Math.PI / 12, 0]}
          scale={[2.5, 2.5, 2.5]}
          playAnim={playAnim}
        />
        <Sentinel
          path="/models/sentinelgate/sentinel_models/sentinel_right.glb"
          position={[2.7, 0, 0]}
          rotation={[0, -Math.PI / 12, 0]}
          scale={[2.5, 2.5, 2.5]}
          playAnim={playAnim}
        />

        {/* Portal */}
        <Portal
          path="/models/sentinelgate/sentinel_models/portal_gate.glb"
          position={[0, 0.5, 0]}
          scale={[2.5, 2.5, 2.5]}
        />

        {!unlocked && <EnterButton onClick={handleEnter} />}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}
