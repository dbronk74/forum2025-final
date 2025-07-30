import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface EchoTile {
  id: string;
  faction: string;
  symbol: string;
  color: string;
  pulseLevel: number; // Ranges 0–100
}

interface GauntletFactionEchoMosaicProps {
  tiles: EchoTile[];
  size?: number;
  columns?: number;
}

const GauntletFactionEchoMosaic: React.FC<GauntletFactionEchoMosaicProps> = ({
  tiles,
  size = 48,
  columns = 6,
}) => {
  return (
    <div
      className={cn(
        'grid gap-2 p-3 rounded-lg border border-gray-700 bg-black/30 shadow-inner',
        `grid-cols-${columns}`
      )}
      style={{ maxWidth: columns * (size + 8) }}
    >
      {tiles.map((tile) => (
        <motion.div
          key={tile.id}
          className="flex items-center justify-center rounded-md"
          style={{
            width: size,
            height: size,
            backgroundColor: tile.color,
            fontSize: size * 0.4,
            boxShadow: `0 0 ${tile.pulseLevel / 4}px ${tile.color}`,
          }}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: Math.random() * 0.4 }}
          title={`${tile.faction} echo • Pulse ${tile.pulseLevel}`}
        >
          {tile.symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default GauntletFactionEchoMosaic;
