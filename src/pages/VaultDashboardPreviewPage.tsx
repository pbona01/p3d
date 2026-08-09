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
  X,
  Target,
  ChevronRight,
  Calendar,
  History,
  MoreHorizontal
} from 'lucide-react';
import { formatNaira } from '../lib/format-utils';

interface ActivityEntry {
  id: string;
  date: string;
  note: string;
  type: 'add' | 'remove';
  amount: number;
}

export const VaultDashboardPreviewPage: React.FC = () => {
  // Goal State (In-Memory Only)
  const [goalName, setGoalName] = useState('New Laptop');
  const [targetAmount, setTargetAmount] = useState(150000);
  const [targetDate] = useState('2026-12-31');

  // Initial Demo Ledger Entries
  const [activity, setActivity] = useState<ActivityEntry[]>([
    { id: '1', date: 'Today', note: 'Salary savings deposit', type: 'add', amount: 5000 },
    { id: '2', date: '5 Aug', note: 'Weekly cash addition', type: 'add', amount: 10000 },
    { id: '3', date: '2 Aug', note: 'Project freelance cash', type: 'add', amount: 2000 },
    { id: '4', date: '28 Jul', note: 'Emergency cash removal', type: 'remove', amount: 5000 },
    { id: '5', date: '20 Jul', note: 'Initial Vault deposit', type: 'add', amount: 73000 }
  ]);

  // Modal / Bottom Sheet States
  const [activeModal, setActiveModal] = useState<'add' | 'remove' | 'manage' | 'history' | null>(null);
  const [amountInput, setAmountInput] = useState('5000');
  const [noteInput, setNoteInput] = useState('');
  const [toastNotice, setToastNotice] = useState<string | null>(null);
  const [historyFilter, setHistoryFilter] = useState<'all' | 'add' | 'remove'>('all');

  // Calculate Recorded Savings
  const totalRecorded = activity.reduce((sum, item) => {
    return item.type === 'add' ? sum + item.amount : sum - item.amount;
  }, 0);

  const progressPercent = Math.min(100, Math.max(0, Math.round((totalRecorded / targetAmount) * 100)));

  // Quick Amount Presets
  const quickAmounts = [500, 1000, 2000, 5000, 10000];

  const handleLogAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseInt(amountInput, 10);
    if (isNaN(val) || val <= 0) return;

    const newEntry: ActivityEntry = {
      id: Date.now().toString(),
      date: 'Today',
      note: noteInput.trim() || 'Money added to Vault',
      type: 'add',
      amount: val
    };

    setActivity([newEntry, ...activity]);
    setActiveModal(null);
    setAmountInput('5000');
    setNoteInput('');
    showToast('Preview updated for this session only. No information has been saved.');
  };

  const handleLogRemoveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseInt(amountInput, 10);
    if (isNaN(val) || val <= 0) return;

    const newEntry: ActivityEntry = {
      id: Date.now().toString(),
      date: 'Today',
      note: noteInput.trim() || 'Money removed from Vault',
      type: 'remove',
      amount: val
    };

    setActivity([newEntry, ...activity]);
    setActiveModal(null);
    setAmountInput('5000');
    setNoteInput('');
    showToast('Preview updated for this session only. No information has been saved.');
  };

  const handleResetDemoData = () => {
    setGoalName('New Laptop');
    setTargetAmount(150000);
    setActivity([
      { id: '1', date: 'Today', note: 'Salary savings deposit', type: 'add', amount: 5000 },
      { id: '2', date: '5 Aug', note: 'Weekly cash addition', type: 'add', amount: 10000 },
      { id: '3', date: '2 Aug', note: 'Project freelance cash', type: 'add', amount: 2000 },
      { id: '4', date: '28 Jul', note: 'Emergency cash removal', type: 'remove', amount: 5000 },
      { id: '5', date: '20 Jul', note: 'Initial Vault deposit', type: 'add', amount: 73000 }
    ]);
    setActiveModal(null);
    showToast('Demo data reset to default example state.');
  };

  const showToast = (msg: string) => {
    setToastNotice(msg);
    setTimeout(() => setToastNotice(null), 5000);
  };

  const filteredHistory = activity.filter(item => {
    if (historyFilter === 'add') return item.type === 'add';
    if (historyFilter === 'remove') return item.type === 'remove';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#18181B] font-sans py-6 px-4 md:px-8 selection:bg-[#E54827] selection:text-white">
      
      {/* Centered App-Like Dashboard Container (520px–760px) */}
      <div className="max-w-[620px] mx-auto space-y-5">
        
        {/* Top App Header & Breadcrumb */}
        <div className="flex items-center justify-between text-xs text-[#52525B]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E54827]" />
            <span className="font-extrabold uppercase tracking-wider text-[#18181B] text-xs">
              My Vault
            </span>
          </div>

          <Link 
            to="/vault" 
            className="text-xs text-[#52525B] hover:text-[#18181B] transition-colors flex items-center gap-1 font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Entry
          </Link>
        </div>

        {/* PREVIEW MODE BANNERS */}
        <div className="flex items-center justify-between bg-white border border-[#E4E4E7] p-3 rounded-2xl text-[11px] shadow-sm">
          <span className="bg-[#E54827] text-white font-extrabold uppercase tracking-widest text-[9px] px-2.5 py-0.5 rounded">
            PREVIEW MODE
          </span>
          <span className="text-[#52525B] font-semibold flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#E54827]" /> Example data — not a live account
          </span>
        </div>

        {/* Feedback Toast Notification */}
        {toastNotice && (
          <div 
            aria-live="polite"
            className="p-3.5 bg-[#FEF2F0] border border-[#E54827]/30 text-[#18181B] rounded-2xl text-xs font-bold flex items-center justify-between animate-fadeIn"
          >
            <span>{toastNotice}</span>
            <button 
              type="button" 
              onClick={() => setToastNotice(null)}
              className="text-[#E54827] hover:text-black p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Welcome Greeting Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-[#18181B] tracking-tight">
              Good morning, David
            </h1>
            <p className="text-xs text-[#52525B] mt-0.5 font-medium">
              Vault Companion Ledger #8492
            </p>
          </div>

          <button
            type="button"
            onClick={() => setActiveModal('manage')}
            className="text-xs text-[#52525B] hover:text-[#18181B] p-2 bg-white border border-[#E4E4E7] rounded-xl flex items-center gap-1 shadow-sm font-semibold cursor-pointer"
          >
            <MoreHorizontal className="w-4 h-4 text-[#E54827]" /> Options
          </button>
        </div>

        {/* MAIN SAVINGS GOAL CARD */}
        <div className="bg-white border border-[#E4E4E7] rounded-3xl p-6 sm:p-7 space-y-6 shadow-xl relative overflow-hidden">
          
          {/* Goal Label & Target Header */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-extrabold text-[#E54827] uppercase tracking-widest">
                Saving For
              </span>
              <h2 className="text-2xl font-black text-[#18181B] mt-0.5">
                {goalName.toUpperCase()}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setActiveModal('manage')}
              className="text-[11px] font-bold text-[#E54827] bg-[#E54827]/10 border border-[#E54827]/20 px-3 py-1 rounded-full hover:bg-[#E54827]/20 transition-colors"
            >
              Change Goal
            </button>
          </div>

          {/* Main Recorded Amount Display */}
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-mono font-black text-[#18181B]">
                {formatNaira(totalRecorded)}
              </span>
              <span className="text-xs sm:text-sm text-[#52525B] font-semibold">
                of {formatNaira(targetAmount)}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs font-bold text-[#52525B] pt-1">
              <span className="text-[#E54827] font-mono">{progressPercent}% complete</span>
              {progressPercent >= 50 && progressPercent < 100 && (
                <span className="text-[#10B981] text-[11px]">Halfway there!</span>
              )}
              {progressPercent >= 100 && (
                <span className="text-[#10B981] text-[11px]">🎉 Goal Reached!</span>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3.5 bg-[#FAF9F6] border border-[#E4E4E7] rounded-full overflow-hidden p-0.5">
            <div 
              className="h-full bg-[#E54827] rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* DOMINANT PRIMARY CTA: LOG MONEY ADDED */}
          <div className="pt-2 space-y-3">
            <button
              type="button"
              onClick={() => {
                setAmountInput('5000');
                setNoteInput('');
                setActiveModal('add');
              }}
              className="w-full bg-[#E54827] hover:bg-[#C22E14] text-white font-black py-4 px-6 rounded-2xl text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer transform active:scale-[0.99]"
            >
              <PlusCircle className="w-5 h-5" /> + LOG MONEY ADDED
            </button>

            {/* Secondary Option: Record Money Removed */}
            <div className="flex justify-center items-center text-xs">
              <button
                type="button"
                onClick={() => {
                  setAmountInput('5000');
                  setNoteInput('');
                  setActiveModal('remove');
                }}
                className="text-[#52525B] hover:text-[#18181B] font-semibold underline flex items-center gap-1 cursor-pointer py-1"
              >
                <MinusCircle className="w-3.5 h-3.5 text-[#F59E0B]" /> Record money removed
              </button>
            </div>
          </div>

        </div>

        {/* RECENT ACTIVITY SECTION */}
        <div className="bg-white border border-[#E4E4E7] rounded-3xl p-5 sm:p-6 space-y-4 shadow-md">
          <div className="flex items-center justify-between border-b border-[#E4E4E7] pb-3">
            <h3 className="text-sm font-extrabold text-[#18181B] uppercase tracking-wider">
              Recent Activity
            </h3>

            <button
              type="button"
              onClick={() => setActiveModal('history')}
              className="text-xs text-[#E54827] font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <History className="w-3.5 h-3.5" /> View Full History
            </button>
          </div>

          {/* Activity List */}
          <div className="space-y-2.5">
            {activity.slice(0, 4).map((item) => (
              <div 
                key={item.id}
                className="p-3.5 bg-[#FAF9F6] border border-[#E4E4E7] rounded-2xl flex items-center justify-between text-xs"
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
                    <p className="text-[10px] text-[#52525B] font-medium">{item.date}</p>
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

        {/* DISCLAIMER FOOTER */}
        <div className="p-4 bg-[#FEF2F0] border border-[#E54827]/20 rounded-2xl flex items-start gap-3 text-xs text-[#52525B] leading-relaxed shadow-sm">
          <Info className="w-4 h-4 text-[#E54827] shrink-0 mt-0.5" />
          <p className="text-[11px]">
            Recorded savings are based on the amounts you enter manually. The Vault does not automatically detect or verify the cash inside it.
          </p>
        </div>

      </div>

      {/* --- LOG MONEY ADDED BOTTOM SHEET / MODAL --- */}
      {activeModal === 'add' && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-white border-t sm:border border-[#E4E4E7] rounded-t-3xl sm:rounded-3xl p-6 max-w-md w-full space-y-5 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E4E4E7] pb-3">
              <div className="flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-[#10B981]" />
                <h3 className="text-base font-black text-[#18181B]">
                  Log Money Added
                </h3>
              </div>
              <button 
                type="button" 
                onClick={() => setActiveModal(null)}
                className="text-[#52525B] hover:text-[#18181B] p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleLogAddSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#52525B] font-bold mb-1">
                  How much did you add? (₦)
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  required
                  value={amountInput}
                  onChange={(e) => setAmountInput(e.target.value)}
                  placeholder="5000"
                  className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-3 text-lg font-mono font-bold text-[#18181B] placeholder-[#A1A1AA] focus:outline-none focus:border-[#E54827]"
                />

                {/* Quick Amount Taps */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {quickAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setAmountInput(amt.toString())}
                      className="text-[11px] font-mono font-bold px-3 py-1.5 rounded-lg bg-[#FAF9F6] hover:bg-[#FEF2F0] hover:text-[#E54827] text-[#52525B] border border-[#E4E4E7] transition-colors cursor-pointer"
                    >
                      +{formatNaira(amt)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[#52525B] font-bold mb-1">
                  Date
                </label>
                <input
                  type="text"
                  disabled
                  value="Today"
                  className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-2.5 text-[#52525B] font-semibold cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-[#52525B] font-bold mb-1">
                  Optional Note
                </label>
                <input
                  type="text"
                  value={noteInput}
                  onChange={(e) => setNoteInput(e.target.value)}
                  placeholder="e.g. Salary savings"
                  className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-3 text-[#18181B] placeholder-[#A1A1AA] focus:outline-none focus:border-[#E54827]"
                />
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full bg-[#E54827] hover:bg-[#C22E14] text-white font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  ADD TO MY RECORD
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="w-full bg-white text-[#52525B] font-bold py-2.5 rounded-xl text-xs"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- RECORD MONEY REMOVED BOTTOM SHEET / MODAL --- */}
      {activeModal === 'remove' && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-white border-t sm:border border-[#E4E4E7] rounded-t-3xl sm:rounded-3xl p-6 max-w-md w-full space-y-5 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E4E4E7] pb-3">
              <div className="flex items-center gap-2">
                <MinusCircle className="w-5 h-5 text-[#F59E0B]" />
                <h3 className="text-base font-black text-[#18181B]">
                  Record Money Removed
                </h3>
              </div>
              <button 
                type="button" 
                onClick={() => setActiveModal(null)}
                className="text-[#52525B] hover:text-[#18181B] p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleLogRemoveSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#52525B] font-bold mb-1">
                  How much did you remove? (₦)
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  required
                  value={amountInput}
                  onChange={(e) => setAmountInput(e.target.value)}
                  placeholder="5000"
                  className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-3 text-lg font-mono font-bold text-[#18181B] placeholder-[#A1A1AA] focus:outline-none focus:border-[#E54827]"
                />

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {quickAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setAmountInput(amt.toString())}
                      className="text-[11px] font-mono font-bold px-3 py-1.5 rounded-lg bg-[#FAF9F6] hover:bg-[#FEF2F0] text-[#52525B] border border-[#E4E4E7] transition-colors cursor-pointer"
                    >
                      -{formatNaira(amt)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[#52525B] font-bold mb-1">
                  Date
                </label>
                <input
                  type="text"
                  disabled
                  value="Today"
                  className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-2.5 text-[#52525B] font-semibold cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-[#52525B] font-bold mb-1">
                  Optional Reason
                </label>
                <input
                  type="text"
                  value={noteInput}
                  onChange={(e) => setNoteInput(e.target.value)}
                  placeholder="e.g. Emergency cash withdrawal"
                  className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-3 text-[#18181B] placeholder-[#A1A1AA] focus:outline-none focus:border-[#E54827]"
                />
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  UPDATE MY RECORD
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="w-full bg-white text-[#52525B] font-bold py-2.5 rounded-xl text-xs"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- MANAGE GOAL MODAL --- */}
      {activeModal === 'manage' && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-white border border-[#E4E4E7] rounded-3xl p-6 max-w-md w-full space-y-5 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E4E4E7] pb-3">
              <h3 className="text-base font-black text-[#18181B] flex items-center gap-2">
                <Target className="w-5 h-5 text-[#E54827]" />
                <span>Manage Savings Goal</span>
              </h3>
              <button 
                type="button" 
                onClick={() => setActiveModal(null)}
                className="text-[#52525B] hover:text-[#18181B] p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-[#52525B] font-bold mb-1">
                  Goal Name
                </label>
                <input
                  type="text"
                  value={goalName}
                  onChange={(e) => setGoalName(e.target.value)}
                  className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-3 text-[#18181B] font-bold focus:outline-none focus:border-[#E54827]"
                />
              </div>

              <div>
                <label className="block text-[#52525B] font-bold mb-1">
                  Target Amount (₦)
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  value={targetAmount}
                  onChange={(e) => setTargetAmount(parseInt(e.target.value, 10) || 0)}
                  className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-3 text-[#18181B] font-mono font-bold focus:outline-none focus:border-[#E54827]"
                />
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setActiveModal(null);
                    showToast('Goal updated for this preview session.');
                  }}
                  className="w-full bg-[#E54827] hover:bg-[#C22E14] text-white font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  SAVE GOAL CHANGES
                </button>

                <button
                  type="button"
                  onClick={handleResetDemoData}
                  className="w-full bg-[#FAF9F6] text-[#52525B] hover:text-[#18181B] border border-[#E4E4E7] font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset Demo Data
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- HISTORY MODAL --- */}
      {activeModal === 'history' && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-white border border-[#E4E4E7] rounded-3xl p-6 max-w-lg w-full space-y-5 shadow-2xl relative max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E4E4E7] pb-3">
              <h3 className="text-base font-black text-[#18181B] flex items-center gap-2">
                <History className="w-5 h-5 text-[#E54827]" />
                <span>Recorded Savings History</span>
              </h3>
              <button 
                type="button" 
                onClick={() => setActiveModal(null)}
                className="text-[#52525B] hover:text-[#18181B] p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 text-xs">
              {(['all', 'add', 'remove'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setHistoryFilter(tab)}
                  className={`px-3 py-1.5 rounded-full capitalize font-bold transition-all cursor-pointer ${
                    historyFilter === tab
                      ? 'bg-[#E54827] text-white shadow-sm'
                      : 'bg-[#FAF9F6] text-[#52525B] border border-[#E4E4E7]'
                  }`}
                >
                  {tab === 'all' ? 'All Records' : tab === 'add' ? 'Added (+)' : 'Removed (−)'}
                </button>
              ))}
            </div>

            {/* Scrollable History List */}
            <div className="space-y-2.5 overflow-y-auto max-h-80 pr-1 flex-1">
              {filteredHistory.map((item) => (
                <div 
                  key={item.id}
                  className="p-3.5 bg-[#FAF9F6] border border-[#E4E4E7] rounded-2xl flex items-center justify-between text-xs"
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

            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="w-full bg-white border border-[#E4E4E7] text-[#52525B] font-bold py-3 rounded-xl text-xs uppercase"
            >
              Close History
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
