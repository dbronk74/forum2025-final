// src/components/Gauntlet/RadialFeatureWheel.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  ScrollText,
  Star,
  LucideIcon,
  Compass,
  Radar,
  Eye,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

type FeatureItem = {
  label: string;
  icon: LucideIcon;
  route: string;
};

const features: FeatureItem[] = [
  { label: 'User Map', icon: MapPin, route: '/hud/map' },
  { label: 'Scroll', icon: ScrollText, route: '/hud/scroll' },
  { label: 'Favorites', icon: Star, route: '/hud/favorites' },
  { label: 'Compass', icon: Compass, route: '/hud/compass' },
  { label: 'Pulse', icon: Radar, route: '/hud/pulse' },
  { label: 'Focus', icon: Eye, route: '/hud/focus' },
];

const RadialFeatureWheel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleWheel = () => setIsOpen(!isOpen);

  const radius = 100;

  return (
    <div className="fixed bottom-10 left-10 z-50">
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-700 to-indigo-500 text-white shadow-xl flex items-center justify-center"
        onClick={toggleWheel}
      >
        ☰
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="absolute top-1/2 left-1/2"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          {features.map((feature, index) => {
            const angle = (index / features.length) * 2 * Math.PI;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.button
                key={feature.label}
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ x, y, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  'absolute w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-800 text-white flex items-center justify-center shadow-md transition-all'
                )}
                title={feature.label}
                onClick={() => navigate(feature.route)}
              >
                <feature.icon className="w-5 h-5" />
              </motion.button>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

export default RadialFeatureWheel;
