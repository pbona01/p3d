import React from 'react';
import { formatCurrency } from '../../lib/savings-utils';
import { SavingsBox } from '../../types/savings';

interface TransactionListProps {
  transactions: SavingsBox['transactions'];
}

export const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="bg-[#171717] border border-[#262626] rounded-xl p-6">
      <h3 className="text-white font-bold mb-4">Transactions</h3>
      <div className="space-y-4 max-h-60 overflow-y-auto">
        {transactions.length === 0 ? (
          <p className="text-gray-500 text-sm">No transactions yet.</p>
        ) : (
          transactions.map((t) => (
            <div key={t.id} className="flex justify-between items-center border-b border-white/5 pb-2">
              <div>
                <p className="text-white text-sm">{t.note || 'Transaction'}</p>
                <p className="text-gray-500 text-xs">{new Date(t.date).toLocaleDateString()}</p>
              </div>
              <p className={`font-bold ${t.type === 'deposit' ? 'text-green-500' : 'text-red-500'}`}>
                {t.type === 'deposit' ? '+' : '-'}{formatCurrency(t.amount)}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
