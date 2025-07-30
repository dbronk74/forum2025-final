// src/components/Gauntlet/HUDUserTrackerMap.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';

type UserLocation = {
  id: string;
  name: string;
  x: number;
  y: number;
};

const mockUserData: UserLocation[] = [
  { id: '1', name: 'OracleSeer42', x: 40, y: 60 },
  { id: '2', name: 'LogicKnight', x: 70, y: 30 },
  { id: '3', name: 'EchoVerse99', x: 20, y: 80 },
];

const HUDUserTrackerMap: React.FC = () => {
  const [users, setUsers] = useState<UserLocation[]>([]);

  useEffect(() => {
    // Simulate fetching data
    const interval = setInterval(() => {
      setUsers(mockUserData.map(user => ({
        ...user,
        x: Math.min(100, Math.max(0, user.x + Math.random() * 10 - 5)),
        y: Math.min(100, Math.max(0, user.y + Math.random() * 10 - 5)),
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-6 right-6 w-64 h-64 bg-black bg-opacity-80 border border-indigo-500 rounded-xl shadow-lg p-3 z-50">
      <h3 className="text-white text-sm font-semibold mb-2">User Activity Map</h3>
      <div className="relative w-full h-full bg-gray-900 rounded-lg overflow-hidden">
        {users.map(user => (
          <motion.div
            key={user.id}
            className="absolute flex items-center justify-center w-5 h-5 bg-indigo-400 rounded-full text-white text-xs"
            style={{
              left: `${user.x}%`,
              top: `${user.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            title={user.name}
            whileHover={{ scale: 1.3 }}
          >
            <FaUser />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HUDUserTrackerMap;
