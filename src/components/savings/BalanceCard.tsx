import React from 'react';
import { formatCurrency } from '../../lib/savings-utils';

interface BalanceCardProps {
  balance: number;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({ balance }) => {
  return (
    <div className="bg-[#171717] border border-[#262626] rounded-xl p-6">
      <h3 className="text-gray-400 text-sm mb-2">Total Savings</h3>
      <p className="text-gold text-4xl font-bold">{formatCurrency(balance)}</p>
    </div>
  );
};
