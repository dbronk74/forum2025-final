import React from 'react';

export default function SoftFogOverlay() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute w-[200%] h-full animate-fogDrift bg-[url('/images/shared/fog-texture.png')] bg-repeat opacity-10 mix-blend-screen" />
    </div>
  );
}
