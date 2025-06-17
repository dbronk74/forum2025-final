import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  oracleImage,
  gauntletImage,
  roundtableImage,
  sanctumImage,
  forumtubeImage,
  innerTempleImage,
  compassImage
} from '@/assets';

const branches = [
  { name: 'The Oracle', image: oracleImage, route: '/oracle' },
  { name: 'The Gauntlet', image: gauntletImage, route: '/gauntlet' },
  { name: 'The Round Table', image: roundtableImage, route: '/roundtable' },
  { name: 'Codex Sanctum', image: sanctumImage, route: '/sanctum' },
  { name: 'ForumTube', image: forumtubeImage, route: '/forumtube' },
  { name: 'The Inner Temple', image: innerTempleImage, route: '/innertemple' },
  { name: 'Council of Compass', image: compassImage, route: '/compass' }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Welcome to The Forum 2025</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {branches.map(({ name, image, route }) => (
          <motion.div
            key={name}
            className="relative w-full max-w-xs cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl border border-white/10"
            onClick={() => navigate(route)}
            whileHover={{ scale: 1.05 }}
          >
            <img src={image} alt={name} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-xl font-semibold">
              {name}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
