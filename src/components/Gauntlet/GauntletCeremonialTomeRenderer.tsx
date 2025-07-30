import React from 'react';
import { motion } from 'framer-motion';

interface TomePage {
  title: string;
  content: string;
}

interface GauntletCeremonialTomeRendererProps {
  pages: TomePage[];
  currentPage: number;
  onPageChange: (newPage: number) => void;
}

const GauntletCeremonialTomeRenderer: React.FC<GauntletCeremonialTomeRendererProps> = ({
  pages,
  currentPage,
  onPageChange,
}) => {
  const page = pages[currentPage];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto border-4 border-yellow-600 rounded-xl shadow-lg bg-gradient-to-br from-yellow-100 to-yellow-50 p-6">
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center text-yellow-800 drop-shadow">
          {page.title}
        </h2>
        <p className="text-lg text-yellow-900 leading-relaxed whitespace-pre-wrap">
          {page.content}
        </p>
      </motion.div>

      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="bg-yellow-700 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          ◀ Prev
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === pages.length - 1}
          className="bg-yellow-700 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default GauntletCeremonialTomeRenderer;
