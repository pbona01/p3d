import React from 'react';
import { formatCurrency } from '../../lib/savings-utils';

interface GoalProgressProps {
  goalName: string;
  current: number;
  target: number;
}

export const GoalProgress: React.FC<GoalProgressProps> = ({ goalName, current, target }) => {
  const percentage = Math.min((current / target) * 100, 100);
  return (
    <div className="bg-[#171717] border border-[#262626] rounded-xl p-6">
      <div className="flex justify-between mb-2">
        <h3 className="text-gray-400 text-sm">{goalName}</h3>
        <span className="text-white text-sm">{Math.round(percentage)}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5">
        <div className="bg-gold h-2.5 rounded-full transition-all duration-500" style={{ width: `${percentage}%` }}></div>
      </div>
      <p className="text-gray-500 text-xs mt-2">{formatCurrency(current)} / {formatCurrency(target)}</p>
    </div>
  );
};
