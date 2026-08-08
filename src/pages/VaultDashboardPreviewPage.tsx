import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock, 
  ArrowLeft, 
  PlusCircle, 
  MinusCircle, 
  RotateCcw, 
  Info, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Tag, 
  X,
  Target,
  ChevronRight
} from 'lucide-react';
import { formatNaira } from '../lib/format-utils';

interface DemoLedgerEntry {
  id: string;
  date: string;
  note: string;
  type: 'add' | 'remove';
  amount: number;
}

interface DemoGoal {
  id: string;
  name: string;
  targetAmount: number;
  recordedEntries: DemoLedgerEntry[];
}

export const VaultDashboardPreviewPage: React.FC = () => {
  const initialGoals: DemoGoal[] = [
    {
      id: 'g1',
      name: 'New Workspace Setup',
      targetAmount: 500000,
      recordedEntries: [
        { id: 'e1', date: '2026-07-25', note: 'Initial Physical Deposit', type: 'add', amount: 100000 },
        { id: 'e2', date: '2026-07-28', note: 'Weekly Cash Addition', type: 'add', amount: 50000 },
        { id: 'e3', date: '2026-08-01', note: 'Project Freelance Cash Deposit', type: 'add', amount: 35000 }
      ]
    },
    {
      id: 'g2',
      name: 'Custom Drip Wardrobe',
      targetAmount: 650000,
      recordedEntries: [
        { id: 'e201', date: '2026-07-15', note: 'First Physical Box Deposit', type: 'add', amount: 200000 },
        { id: 'e202', date: '2026-07-22', note: 'Monthly Savings Addition', type: 'add', amount: 138000 }
      ]
    },
    {
      id: 'g3',
      name: 'Emergency Reserve Fund',
      targetAmount: 300000,
      recordedEntries: [
        { id: 'e301', date: '2026-07-10', note: 'Safety Fund Deposit', type: 'add', amount: 150000 }
      ]
    }
  ];

  const [goals, setGoals] = useState<DemoGoal[]>(initialGoals);
  const [activeGoalId, setActiveGoalId] = useState<string>('g1');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'add' | 'remove'>('add');
  const [modalAmount, setModalAmount] = useState('20000');
  const [modalNote, setModalNote] = useState('Weekly cash addition');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const activeGoal = goals.find(g => g.id === activeGoalId) || goals[0];

  const totalRecorded = activeGoal.recordedEntries.reduce((sum, entry) => {
    return entry.type === 'add' ? sum + entry.amount : sum - entry.amount;
  }, 0);

  const progressPercent = Math.min(100, Math.max(0, Math.round((totalRecorded / activeGoal.targetAmount) * 100)));
  const remainingTarget = Math.max(0, activeGoal.targetAmount - totalRecorded);

  const handleOpenModal = (type: 'add' | 'remove') => {
    setModalType(type);
    setModalAmount(type === 'add' ? '25000' : '10000');
    setModalNote(type === 'add' ? 'Manual cash deposit' : 'Emergency cash withdrawal');
    setIsModalOpen(true);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseInt(modalAmount, 10);
    if (isNaN(val) || val <= 0) return;

    const newEntry: DemoLedgerEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      note: modalNote.trim() || (modalType === 'add' ? 'Money Added' : 'Money Removed'),
      type: modalType,
      amount: val
    };

    setGoals(prev => prev.map(g => {
      if (g.id === activeGoal.id) {
        return {
          ...g,
          recordedEntries: [newEntry, ...g.recordedEntries]
        };
      }
      return g;
    }));

    setIsModalOpen(false);
    setToastMessage('Preview updated for this session only. No information has been saved.');
    setTimeout(() => setToastMessage(null), 5000);
  };

  const handleResetDemoData = () => {
    setGoals(initialGoals);
    setToastMessage('Demo data reset to initial example state.');
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#18181B] font-sans py-8 px-4 md:px-8 max-w-7xl mx-auto selection:bg-[#E54827] selection:text-white">
      
      {/* Top Banner Badges */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-white border border-[#E4E4E7] p-4 rounded-2xl text-xs shadow-sm">
        <div className="flex items-center gap-2">
          <span className="bg-[#E54827] text-white font-extrabold uppercase tracking-widest text-[10px] px-2.5 py-1 rounded-md">
            PRODUCT PREVIEW
          </span>
          <span className="bg-[#FAF9F6] text-[#10B981] border border-[#E4E4E7] font-extrabold uppercase tracking-widest text-[10px] px-2.5 py-1 rounded-md flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> EXAMPLE DATA — NOT A LIVE ACCOUNT
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/vault" className="text-xs text-[#52525B] hover:text-[#18181B] transition-colors flex items-center gap-1 font-semibold">
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Vault Entry
          </Link>
        </div>
      </div>

      {/* Permanent Visible Clarification Note */}
      <div className="mb-8 p-4 bg-[#FEF2F0] border border-[#E54827]/20 rounded-2xl flex items-start gap-3 text-xs text-[#52525B] leading-relaxed shadow-sm animate-fadeIn">
        <Info className="w-5 h-5 text-[#E54827] shrink-0 mt-0.5" />
        <div>
          <p className="font-extrabold text-[#18181B] mb-0.5">Note on Demonstration Data:</p>
          <p>
            This preview uses example data. The future Vault companion will display amounts entered manually by the owner. It will not detect or verify the physical cash inside the box.
          </p>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div 
          aria-live="polite"
          className="mb-6 p-4 bg-[#FEF2F0] border border-[#E54827]/40 text-[#18181B] rounded-2xl text-xs font-bold flex items-center justify-between animate-fadeIn"
        >
          <span>{toastMessage}</span>
          <button type="button" onClick={() => setToastMessage(null)} className="text-[#E54827] hover:text-black">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Dashboard Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Goal Switcher & Goal Summary */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Active Goal Card */}
          <div className="bg-white border border-[#E4E4E7] rounded-3xl p-6 space-y-5 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#E54827]">
                Active Savings Goal
              </span>
              <span className="text-xs font-mono font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded">
                {progressPercent}% Saved
              </span>
            </div>

            <div>
              <h2 className="text-xl font-black text-[#18181B]">{activeGoal.name}</h2>
              <p className="text-xs text-[#52525B] mt-0.5">Target Goal: {formatNaira(activeGoal.targetAmount)}</p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1.5">
              <div className="w-full h-3 bg-[#FAF9F6] rounded-full overflow-hidden border border-[#E4E4E7]">
                <div 
                  className="h-full bg-[#E54827] transition-all duration-500 rounded-full" 
                  style={{ width: `${progressPercent}%` }} 
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono text-[#52525B] font-medium">
                <span>Recorded: {formatNaira(totalRecorded)}</span>
                <span>Target: {formatNaira(activeGoal.targetAmount)}</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#E4E4E7] text-xs">
              <div className="p-3 bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl space-y-0.5">
                <p className="text-[10px] text-[#52525B] uppercase font-bold">Amount Recorded</p>
                <p className="font-mono font-extrabold text-[#E54827]">{formatNaira(totalRecorded)}</p>
              </div>
              <div className="p-3 bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl space-y-0.5">
                <p className="text-[10px] text-[#52525B] uppercase font-bold">Remaining to Target</p>
                <p className="font-mono font-extrabold text-[#F59E0B]">{formatNaira(remainingTarget)}</p>
              </div>
            </div>

            {/* Interactive Demo Action Buttons */}
            <div className="space-y-2 pt-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleOpenModal('add')}
                  className="bg-[#E54827] hover:bg-[#C22E14] text-white font-extrabold py-3 px-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
                >
                  <PlusCircle className="w-4 h-4" /> Money Added
                </button>
                <button
                  type="button"
                  onClick={() => handleOpenModal('remove')}
                  className="bg-white hover:bg-[#FAF9F6] text-[#18181B] border border-[#E4E4E7] font-extrabold py-3 px-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm"
                >
                  <MinusCircle className="w-4 h-4 text-[#F59E0B]" /> Money Removed
                </button>
              </div>

              <button
                type="button"
                onClick={handleResetDemoData}
                className="w-full bg-[#FAF9F6] hover:bg-white text-[#52525B] hover:text-[#18181B] border border-[#E4E4E7] font-bold py-2.5 rounded-xl text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Demo Data
              </button>
            </div>

          </div>

          {/* Goal Selector Switcher */}
          <div className="bg-white border border-[#E4E4E7] rounded-3xl p-5 space-y-3 shadow-md">
            <h3 className="text-xs font-bold text-[#18181B] uppercase tracking-wider">
              Select Demo Goal
            </h3>
            <div className="space-y-2">
              {goals.map(g => {
                const isSelected = g.id === activeGoal.id;
                const gTotal = g.recordedEntries.reduce((s, e) => e.type === 'add' ? s + e.amount : s - e.amount, 0);
                const gPct = Math.min(100, Math.round((gTotal / g.targetAmount) * 100));

                return (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setActiveGoalId(g.id)}
                    className={`w-full p-3 rounded-2xl text-left border transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'border-[#E54827] bg-[#E54827]/10 text-[#E54827] font-extrabold'
                        : 'border-[#E4E4E7] bg-[#FAF9F6] text-[#52525B] hover:border-[#D4D4D8]'
                    }`}
                  >
                    <div>
                      <p className="text-xs font-black text-[#18181B]">{g.name}</p>
                      <p className="text-[10px] font-mono text-[#52525B]">
                        {formatNaira(gTotal)} / {formatNaira(g.targetAmount)} ({gPct}%)
                      </p>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-[#E54827]' : 'text-[#A1A1AA]'}`} />
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column: Manually Recorded Ledger Entries */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="bg-white border border-[#E4E4E7] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-[#E4E4E7] pb-4">
              <div>
                <h3 className="text-lg font-black text-[#18181B]">
                  Manually Recorded Entries Ledger
                </h3>
                <p className="text-xs text-[#52525B]">
                  Showing recorded cash entries for: <strong className="text-[#18181B]">{activeGoal.name}</strong>
                </p>
              </div>

              <span className="text-[10px] font-mono text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded border border-[#10B981]/20 font-bold">
                {activeGoal.recordedEntries.length} Records Logged
              </span>
            </div>

            {/* Entries Table / List */}
            <div className="space-y-3">
              {activeGoal.recordedEntries.length === 0 ? (
                <div className="text-center py-12 text-xs text-[#52525B] space-y-2">
                  <p>No manual recorded entries yet for this goal.</p>
                  <button
                    type="button"
                    onClick={() => handleOpenModal('add')}
                    className="text-[#E54827] underline font-bold"
                  >
                    + Record your first cash addition
                  </button>
                </div>
              ) : (
                activeGoal.recordedEntries.map((entry) => (
                  <div
                    key={entry.id}
                    className="p-4 bg-[#FAF9F6] border border-[#E4E4E7] rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs transition-all hover:border-[#D4D4D8]"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black ${
                        entry.type === 'add'
                          ? 'bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30'
                          : 'bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30'
                      }`}>
                        {entry.type === 'add' ? '+' : '-'}
                      </div>

                      <div>
                        <p className="font-bold text-[#18181B] text-sm">{entry.note}</p>
                        <div className="flex items-center gap-3 text-[11px] text-[#52525B] mt-0.5">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-[#A1A1AA]" /> {entry.date}
                          </span>
                          <span>•</span>
                          <span className="capitalize font-semibold">
                            {entry.type === 'add' ? 'Money Added' : 'Money Removed'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="font-mono text-sm font-extrabold text-right sm:text-right">
                      <span className={entry.type === 'add' ? 'text-[#10B981]' : 'text-[#F59E0B]'}>
                        {entry.type === 'add' ? '+' : '-'}{formatNaira(entry.amount)}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="pt-4 border-t border-[#E4E4E7] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#52525B]">
              <p className="font-medium">Looking to purchase a physical Vault?</p>
              <Link
                to="/products/the-vault"
                className="bg-[#E54827] hover:bg-[#C22E14] text-white font-extrabold px-5 py-2.5 rounded-xl transition-all shadow-sm"
              >
                Buy The Vault (₦35,000)
              </Link>
            </div>

          </div>

        </div>

      </div>

      {/* --- DEMO MODAL / DIALOG FOR RECORDING ENTRIES --- */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white border border-[#E4E4E7] rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-5 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E4E4E7] pb-3">
              <h3 className="text-base font-black text-[#18181B] flex items-center gap-2">
                {modalType === 'add' ? (
                  <PlusCircle className="w-5 h-5 text-[#10B981]" />
                ) : (
                  <MinusCircle className="w-5 h-5 text-[#F59E0B]" />
                )}
                <span>Record Demo Entry: {modalType === 'add' ? 'Money Added' : 'Money Removed'}</span>
              </h3>
              <button 
                type="button" 
                onClick={() => setIsModalOpen(false)}
                className="text-[#52525B] hover:text-[#18181B]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleModalSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#52525B] font-bold mb-1">
                  Amount (₦)
                </label>
                <input
                  type="number"
                  required
                  value={modalAmount}
                  onChange={(e) => setModalAmount(e.target.value)}
                  placeholder="e.g. 25000"
                  className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-3 text-[#18181B] placeholder-[#A1A1AA] focus:outline-none focus:border-[#E54827]"
                />
              </div>

              <div>
                <label className="block text-[#52525B] font-bold mb-1">
                  Entry Note or Purpose
                </label>
                <input
                  type="text"
                  required
                  value={modalNote}
                  onChange={(e) => setModalNote(e.target.value)}
                  placeholder="e.g. Weekly cash savings deposit"
                  className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-3 text-[#18181B] placeholder-[#A1A1AA] focus:outline-none focus:border-[#E54827]"
                />
              </div>

              <div className="p-3 bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl text-[11px] text-[#52525B] leading-relaxed">
                <strong>Notice:</strong> This update applies to your local browser session demo preview only. No credentials or financial records are transmitted.
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-[#FAF9F6] text-[#52525B] hover:bg-[#E4E4E7] font-bold py-3 rounded-xl border border-[#E4E4E7]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#E54827] hover:bg-[#C22E14] text-white font-extrabold py-3 rounded-xl uppercase tracking-wider"
                >
                  Save Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
