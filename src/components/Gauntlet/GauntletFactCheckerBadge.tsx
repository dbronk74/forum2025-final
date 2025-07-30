import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface GauntletFactCheckerBadgeProps {
  issuer: string;
  verified: boolean;
  timestamp: string;
}

const GauntletFactCheckerBadge: React.FC<GauntletFactCheckerBadgeProps> = ({
  issuer,
  verified,
  timestamp,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`flex items-center gap-2 px-3 py-2 rounded-md shadow-md border ${
        verified ? 'bg-green-800 border-green-500' : 'bg-yellow-800 border-yellow-500'
      } text-white cursor-pointer hover:scale-105 transition-transform duration-300`}
      title={`Issued by ${issuer} at ${timestamp}`}
    >
      <ShieldCheck className="w-5 h-5 text-white" />
      <span className="text-sm font-medium">
        {verified ? 'Verified Fact-Check' : 'Pending Review'}
      </span>
    </motion.div>
  );
};

export default GauntletFactCheckerBadge;
