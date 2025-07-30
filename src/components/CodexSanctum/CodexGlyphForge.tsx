import React, { useState } from 'react';
import { motion } from 'framer-motion';

const baseFragments = ['𓆣', '⟁', '⟁', '✶', '∞', '☉', '⟁', '⟁'];
const overlays = ['✧', '☽', '➶', '⚚', '⟁'];

export default function CodexGlyphForge() {
  const [base, setBase] = useState<string | null>(null);
  const [overlay, setOverlay] = useState<string | null>(null);

  const forgedGlyph = base && overlay ? `${base}${overlay}` : null;

  return (
    <div className="max-w-3xl mx-auto mt-12 p-8 rounded-xl bg-gradient-to-br from-slate-900 via-black to-zinc-800 shadow-lg border border-purple-700 text-white">
      <h2 className="text-2xl font-bold text-purple-300 mb-6">Codex Glyph Forge</h2>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-purple-400 mb-2">Base Fragments</h3>
          <div className="flex flex-wrap gap-3">
            {baseFragments.map((frag, idx) => (
              <motion.button
                key={idx}
                onClick={() => setBase(frag)}
                whileHover={{ scale: 1.2 }}
                className={`text-3xl px-3 py-2 rounded ${
                  base === frag ? 'bg-purple-700' : 'bg-zinc-800'
                }`}
              >
                {frag}
              </motion.button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-purple-400 mb-2">Overlay Sigils</h3>
          <div className="flex flex-wrap gap-3">
            {overlays.map((sigil, idx) => (
              <motion.button
                key={idx}
                onClick={() => setOverlay(sigil)}
                whileHover={{ scale: 1.2 }}
                className={`text-3xl px-3 py-2 rounded ${
                  overlay === sigil ? 'bg-purple-700' : 'bg-zinc-800'
                }`}
              >
                {sigil}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-slate-400 mb-2">Forged Symbol</p>
        {forgedGlyph ? (
          <motion.div
            className="text-5xl text-purple-300 font-bold"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            {forgedGlyph}
          </motion.div>
        ) : (
          <p className="text-slate-600 italic">Select a base and overlay to forge a glyph.</p>
        )}
      </div>
    </div>
  );
}
