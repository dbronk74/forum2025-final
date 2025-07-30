import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpenCheck, Eye, Sparkles } from 'lucide-react';

interface NarrativeLayer {
  id: string;
  glyph: string;
  decoded: string;
  insight: string;
}

const narrativeLayers: NarrativeLayer[] = [
  {
    id: 'NL-01',
    glyph: '𓂀',
    decoded: 'Perception of Truth',
    insight: 'This glyph symbolizes the awakening of one’s inner sight to hidden knowledge.',
  },
  {
    id: 'NL-02',
    glyph: '☯',
    decoded: 'Duality of Understanding',
    insight: 'All stories contain mirrored truths; embrace tension to find harmony.',
  },
  {
    id: 'NL-03',
    glyph: '✶',
    decoded: 'Celestial Memory',
    insight: 'Memories carried by stars shape myth and meaning in the present.',
  },
];

const NarrativeDecoder: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedLayer = narrativeLayers.find(layer => layer.id === selectedId);

  return (
    <div className="bg-slate-900 border border-purple-600 rounded-xl p-6 max-w-3xl mx-auto shadow-lg">
      <div className="flex items-center gap-3 mb-5 text-purple-300">
        <BookOpenCheck className="w-6 h-6" />
        <h2 className="text-2xl font-bold">Narrative Decoder</h2>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {narrativeLayers.map(layer => (
          <motion.button
            key={layer.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedId(layer.id)}
            className={`p-4 text-3xl border rounded-lg ${
              selectedId === layer.id
                ? 'bg-purple-700 text-white border-white'
                : 'bg-slate-800 text-purple-300 border-purple-500'
            }`}
          >
            {layer.glyph}
          </motion.button>
        ))}
      </div>

      {selectedLayer && (
        <motion.div
          className="bg-slate-800 rounded-lg p-4 border border-purple-500"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2 text-xl font-semibold text-purple-200 mb-2">
            <Eye className="w-5 h-5" />
            {selectedLayer.decoded}
          </div>
          <div className="text-slate-300 text-sm">{selectedLayer.insight}</div>
        </motion.div>
      )}

      <div className="flex justify-end mt-6 text-purple-400 text-xs items-center gap-1">
        <Sparkles className="w-3 h-3" />
        Lore threads shimmer where meaning hides.
      </div>
    </div>
  );
};

export default NarrativeDecoder;
