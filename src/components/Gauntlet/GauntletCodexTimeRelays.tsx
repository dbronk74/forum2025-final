import React from 'react';
import { motion } from 'framer-motion';

interface TimeRelayEntry {
  year: string;
  event: string;
  faction?: string;
}

interface GauntletCodexTimeRelaysProps {
  relays: TimeRelayEntry[];
  title?: string;
}

const GauntletCodexTimeRelays: React.FC<GauntletCodexTimeRelaysProps> = ({
  relays,
  title = 'Codex Time Relays'
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6 bg-gradient-to-br from-gray-100 to-yellow-50 rounded-lg shadow-lg border border-yellow-300">
      <h2 className="text-2xl font-bold text-yellow-900 mb-4 text-center tracking-wide">{title}</h2>

      <div className="relative pl-6 border-l-4 border-yellow-700 space-y-6">
        {relays.map((entry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-4 top-1 w-3 h-3 bg-yellow-700 rounded-full shadow" />
            <div className="ml-2">
              <p className="text-sm text-yellow-600 font-semibold">{entry.year}</p>
              <p className="text-yellow-900 text-lg font-medium">{entry.event}</p>
              {entry.faction && (
                <p className="text-yellow-700 italic text-sm mt-1">↳ Faction: {entry.faction}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GauntletCodexTimeRelays;
