import React from 'react';

const CreditLedgerDisplay: React.FC = () => {
  return (
    <div className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-emerald-700 to-emerald-900 text-white max-w-3xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Vault Credit Ledger</h2>
      <p className="text-sm">
        This panel displays your complete transaction history of earned and spent Forum Credits. Use this ledger to track debate winnings, ad rewards, vault withdrawals, and challenge entry fees.
      </p>
    </div>
  );
};

export default CreditLedgerDisplay;
