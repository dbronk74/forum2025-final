import React from 'react';
import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';

interface GauntletGlyphEngravingProps {
  glyphSymbol: string;
  color?: string;
  size?: number;
  pulse?: boolean;
}

const GauntletGlyphEngraving: React.FC<GauntletGlyphEngravingProps> = ({
  glyphSymbol,
  color = '#FACC15', // default gold-yellow
  size = 120,
  pulse = true,
}) => {
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Sparkle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SparklesCore
          id="glyph-sparkle"
          background="transparent"
          minSize={1}
          maxSize={3}
          particleDensity={60}
          className="w-full h-full"
          particleColor={color}
        />
      </div>

      {/* Glyph Container */}
      <motion.div
        className="rounded-full border border-dashed flex items-center justify-center font-mono"
        style={{
          width: size,
          height: size,
          borderColor: color,
          color,
          fontSize: size * 0.5,
          textShadow: `0 0 4px ${color}`,
        }}
        animate={
          pulse
            ? {
                scale: [1, 1.06, 1],
                rotate: [0, 1.2, 0],
                opacity: [0.9, 1, 0.9],
              }
            : {}
        }
        transition={
          pulse
            ? {
                repeat: Infinity,
                duration: 2.4,
                ease: 'easeInOut',
              }
            : {}
        }
      >
        {glyphSymbol}
      </motion.div>
    </div>
  );
};

export default GauntletGlyphEngraving;
