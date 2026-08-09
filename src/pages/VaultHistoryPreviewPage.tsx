import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, History, Info, Filter, Lock } from 'lucide-react';
import { formatNaira } from '../lib/format-utils';

export const VaultHistoryPreviewPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'add' | 'remove'>('all');

  const historyData = [
    { id: '1', date: 'Today', note: 'Salary savings deposit', type: 'add' as const, amount: 5000 },
    { id: '2', date: '5 Aug 2026', note: 'Weekly cash addition', type: 'add' as const, amount: 10000 },
    { id: '3', date: '2 Aug 2026', note: 'Project freelance cash', type: 'add' as const, amount: 2000 },
    { id: '4', date: '28 Jul 2026', note: 'Emergency cash removal', type: 'remove' as const, amount: 5000 },
    { id: '5', date: '20 Jul 2026', note: 'Initial Vault deposit', type: 'add' as const, amount: 73000 }
  ];

  const filteredData = historyData.filter(item => {
    if (filter === 'add') return item.type === 'add';
    if (filter === 'remove') return item.type === 'remove';
    return true;
  });

  return (
    <div className="min-h-[85vh] bg-[#FAF9F6] text-[#18181B] font-sans py-8 px-4 md:px-8 max-w-xl mx-auto space-y-6">
      
      {/* Top Header Breadcrumb */}
      <div className="flex items-center justify-between text-xs text-[#52525B]">
        <div className="flex items-center gap-2 font-medium">
          <Link to="/" className="hover:text-[#18181B]">Home</Link>
          <span>/</span>
          <Link to="/vault" className="hover:text-[#18181B]">My Vault</Link>
          <span>/</span>
          <span className="text-[#E54827] font-bold">History Preview</span>
        </div>

        <Link to="/vault/dashboard-preview" className="text-xs text-[#52525B] hover:text-[#18181B] flex items-center gap-1 font-semibold">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
        </Link>
      </div>

      {/* Main History Card */}
      <div className="bg-white border border-[#E4E4E7] rounded-3xl p-6 shadow-xl space-y-5">
        
        <div className="flex items-center justify-between border-b border-[#E4E4E7] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E54827]/10 border border-[#E54827]/30 text-[#E54827] flex items-center justify-center">
              <History className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-black text-[#18181B]">
                Activity History
              </h1>
              <p className="text-xs text-[#52525B]">
                Recorded entries for New Laptop goal
              </p>
            </div>
          </div>

          <span className="bg-[#E54827] text-white text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded">
            PREVIEW
          </span>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 text-xs">
          {(['all', 'add', 'remove'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3.5 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                filter === tab
                  ? 'bg-[#E54827] text-white shadow-sm'
                  : 'bg-[#FAF9F6] text-[#52525B] border border-[#E4E4E7]'
              }`}
            >
              {tab === 'all' ? 'All Records' : tab === 'add' ? 'Added (+)' : 'Removed (−)'}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="space-y-3">
          {filteredData.map((item) => (
            <div 
              key={item.id}
              className="p-4 bg-[#FAF9F6] border border-[#E4E4E7] rounded-2xl flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm ${
                  item.type === 'add'
                    ? 'bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30'
                    : 'bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30'
                }`}>
                  {item.type === 'add' ? '+' : '−'}
                </span>

                <div>
                  <p className="font-bold text-[#18181B]">{item.note}</p>
                  <p className="text-[10px] text-[#52525B]">{item.date}</p>
                </div>
              </div>

              <div className="text-right font-mono font-black text-sm">
                <span className={item.type === 'add' ? 'text-[#10B981]' : 'text-[#F59E0B]'}>
                  {item.type === 'add' ? '+' : '−'}{formatNaira(item.amount)}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Footer Notice */}
      <div className="p-4 bg-[#FEF2F0] border border-[#E54827]/20 rounded-2xl flex items-start gap-3 text-xs text-[#52525B]">
        <Info className="w-4 h-4 text-[#E54827] shrink-0 mt-0.5" />
        <p className="text-[11px]">
          This page displays demonstration entries only. No actual financial records or customer data are stored.
        </p>
      </div>

    </div>
  );
};
