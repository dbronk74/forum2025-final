import React from 'react';
import { Chart } from 'chart.js/auto';

const MonetizationDashboard: React.FC = () => {
  return (
    <div>
      <canvas id="earningsChart"></canvas>
      <div>
        <button>Ad Revenue</button>
        <button>Bets</button>
        <button>Donations</button>
      </div>
      <button>Withdrawal Request</button>
      <ul>Transaction History</ul>
    </div>
  );
};

export default MonetizationDashboard;