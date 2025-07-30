import React from 'react';
export default function LoreRippleOverlay() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="w-full h-full animate-pulseSlow bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-black/0 to-black" />
    </div>
  );
}