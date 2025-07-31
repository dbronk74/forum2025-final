import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Map, Book, Eye, Layers } from 'lucide-react';

interface SanctumOption {
  id: string;
  label: string;
  icon: React.ReactNode;
  onSelect: () => void;
}

const sanctumOptions: SanctumOption[] = [
  {
    id: 'codex',
    label: 'Codex',
    icon: <Book size={24} />,
    onSelect: () => console.log('Codex selected'),
  },
  {
    id: 'map',
    label: 'Map',
    icon: <Map size={24} />,
    onSelect: () => console.log('Map selected'),
  },
  {
    id: 'insight',
    label: 'Insight',
    icon: <Eye size={24} />,
    onSelect: () => console.log('Insight selected'),
  },
  {
    id: 'chambers',
    label: 'Chambers',
    icon: <Layers size={24} />,
    onSelect: () => console.log('Chambers selected'),
  },
  {
    id: 'navigation',
    label: 'Compass',
    icon: <Compass size={24} />,
    onSelect: () => console.log('Compass selected'),
  },
];

const SanctumSteeringWheel: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="relative w-64 h-64 mx-auto rounded-full border-4 border-slate-700 bg-slate-900 shadow-2xl flex items-center justify-center">
      {(sanctumOptions ?? []).map((option, index) => {
        const angle = (360 / sanctumOptions.length) * index;
        const radius = 100;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <motion.button
            key={option.id}
            className={`absolute flex flex-col items-center justify-center p-2 rounded-full text-slate-200 transition duration-300 ${
              activeId === option.id ? 'bg-slate-700 scale-110' : 'hover:bg-slate-800'
            }`}
            style={{
              top: `calc(50% + ${y}px - 24px)`,
              left: `calc(50% + ${x}px - 24px)`,
              transform: 'translate(-50%, -50%)',
            }}
            onClick={() => {
              setActiveId(option.id);
              option.onSelect();
            }}
            whileTap={{ scale: 0.9 }}
          >
            {option.icon}
            <span className="text-xs mt-1">{option.label}</span>
          </motion.button>
        );
      })}
      <div className="absolute text-center text-xs bottom-4 left-1/2 -translate-x-1/2 text-slate-400">
        Sanctum Steering Wheel
      </div>
    </div>
  );
};

export default SanctumSteeringWheel;
