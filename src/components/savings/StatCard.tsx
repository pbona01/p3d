import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value }) => {
  return (
    <div className="bg-[#171717] border border-[#262626] rounded-xl p-6">
      <h3 className="text-gray-400 text-sm mb-2">{label}</h3>
      <p className="text-white text-2xl font-bold">{value}</p>
    </div>
  );
};
