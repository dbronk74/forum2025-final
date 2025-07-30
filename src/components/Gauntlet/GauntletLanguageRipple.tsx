import React, { useEffect, useRef } from 'react';

interface GauntletLanguageRippleProps {
  pulseColor?: string;
  rippleCount?: number;
  rippleInterval?: number;
  size?: number;
}

const GauntletLanguageRipple: React.FC<GauntletLanguageRippleProps> = ({
  pulseColor = '#3B82F6', // Tailwind blue-500
  rippleCount = 4,
  rippleInterval = 800,
  size = 200,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const createRipple = () => {
      const ripple = document.createElement('div');
      ripple.className = 'absolute rounded-full opacity-60 pointer-events-none';
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = '50%';
      ripple.style.top = '50%';
      ripple.style.transform = 'translate(-50%, -50%)';
      ripple.style.border = `2px solid ${pulseColor}`;
      ripple.style.animation = 'ripple-animate 2s ease-out forwards';
      container.appendChild(ripple);
      setTimeout(() => ripple.remove(), 2000);
    };

    const interval = setInterval(createRipple, rippleInterval);
    return () => clearInterval(interval);
  }, [pulseColor, rippleInterval, size]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ width: size * 2, height: size * 2 }}
    >
      <div className="z-10 text-center text-white font-semibold">Language Ripple</div>
      <style>{`
        @keyframes ripple-animate {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default GauntletLanguageRipple;
