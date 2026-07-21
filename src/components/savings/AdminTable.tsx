import React from 'react';
import { SavingsBox } from '../../types/savings';

interface AdminTableProps {
  boxes: SavingsBox[];
}

export const AdminTable: React.FC<AdminTableProps> = ({ boxes }) => {
  return (
    <div className="bg-[#171717] border border-[#262626] rounded-xl p-6 overflow-x-auto">
      <table className="w-full text-left text-white">
        <thead>
          <tr className="border-b border-white/10">
            <th className="py-2">Box ID</th>
            <th className="py-2">Owner</th>
            <th className="py-2">Balance</th>
          </tr>
        </thead>
        <tbody>
          {boxes.map(box => (
            <tr key={box.boxId} className="border-b border-white/5">
              <td className="py-2">{box.boxId}</td>
              <td className="py-2">{box.owner.name}</td>
              <td className="py-2">₦{box.balance.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
