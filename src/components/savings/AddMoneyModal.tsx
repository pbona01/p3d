import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (amount: number, note: string, type: 'deposit' | 'withdrawal') => void;
  type: 'deposit' | 'withdrawal';
}

export const AddMoneyModal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm, type }) => {
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-[#171717] border border-[#262626] rounded-xl p-6 w-full max-w-md">
        <h3 className="text-white text-lg font-bold mb-4 capitalize">{type} Money</h3>
        <input 
          type="number"
          placeholder="Amount (₦)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white mb-4"
        />
        <input 
          type="text"
          placeholder="Note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white mb-4"
        />
        <div className="flex gap-4">
          <button onClick={onClose} className="flex-1 px-4 py-3 rounded-xl border border-white/10 text-white">Cancel</button>
          <button onClick={() => { onConfirm(Number(amount), note, type); onClose(); }} className="flex-1 px-4 py-3 rounded-xl bg-gold text-black font-bold">Confirm</button>
        </div>
      </div>
    </div>
  );
};
