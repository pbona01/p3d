import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, ArrowLeft, Target, Sparkles, Info, CheckCircle2 } from 'lucide-react';

export const VaultSetupPreviewPage: React.FC = () => {
  const [goalName, setGoalName] = useState('New Laptop');
  const [targetAmount, setTargetAmount] = useState('150000');
  const [targetDate, setTargetDate] = useState('2026-12-31');
  const navigate = useNavigate();

  const presetGoals = [
    'New Laptop',
    'Rent & Apartment',
    'Emergency Fund',
    'New Phone',
    'Business Tools',
    'School Fees'
  ];

  const handleStartGoal = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to dashboard preview
    navigate('/vault/dashboard-preview');
  };

  return (
    <div className="min-h-[85vh] bg-[#FAF9F6] text-[#18181B] font-sans py-10 px-4 md:px-8 flex flex-col justify-between selection:bg-[#E54827] selection:text-white max-w-md mx-auto">
      
      {/* Header Breadcrumbs */}
      <div className="flex items-center justify-between text-xs text-[#52525B] mb-6">
        <div className="flex items-center gap-2 font-medium">
          <Link to="/" className="hover:text-[#18181B] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/vault" className="hover:text-[#18181B] transition-colors">My Vault</Link>
          <span>/</span>
          <span className="text-[#E54827] font-bold">Activate Vault</span>
        </div>
        <Link to="/vault" className="text-xs text-[#52525B] hover:text-[#18181B] transition-colors flex items-center gap-1 font-semibold">
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Link>
      </div>

      {/* Form Card */}
      <div className="bg-white border border-[#E4E4E7] rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 my-auto">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-[#E54827]/10 border border-[#E54827]/30 flex items-center justify-center mx-auto text-[#E54827] shadow-sm">
            <Target className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E54827] bg-[#E54827]/10 border border-[#E54827]/20 px-3 py-1 rounded-full inline-block">
            FIRST-TIME GOAL SETUP
          </span>
          <h1 className="text-2xl font-black text-[#18181B] tracking-tight">
            What are you saving for?
          </h1>
          <p className="text-xs text-[#52525B]">
            Set your target goal and amount to begin manual tracking.
          </p>
        </div>

        {/* Quick Goal Presets */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-bold text-[#52525B] uppercase tracking-wider">
            Quick Suggestions
          </label>
          <div className="flex flex-wrap gap-1.5">
            {presetGoals.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setGoalName(preset)}
                className={`text-[11px] px-3 py-1.5 rounded-full border transition-all cursor-pointer font-medium ${
                  goalName === preset
                    ? 'bg-[#E54827] text-white border-[#E54827] font-bold shadow-sm'
                    : 'bg-[#FAF9F6] text-[#52525B] border-[#E4E4E7] hover:border-[#A1A1AA]'
                }`}
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleStartGoal} className="space-y-4 text-xs">
          <div>
            <label className="block text-[#52525B] font-bold mb-1.5">
              Savings Goal Name
            </label>
            <input
              type="text"
              required
              value={goalName}
              onChange={(e) => setGoalName(e.target.value)}
              placeholder="e.g. New Laptop"
              className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-3 text-[#18181B] placeholder-[#A1A1AA] focus:outline-none focus:border-[#E54827]"
            />
          </div>

          <div>
            <label className="block text-[#52525B] font-bold mb-1.5">
              Target Amount (₦)
            </label>
            <input
              type="number"
              inputMode="decimal"
              required
              value={targetAmount}
              onChange={(e) => setTargetAmount(e.target.value)}
              placeholder="150000"
              className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-3 text-[#18181B] placeholder-[#A1A1AA] focus:outline-none focus:border-[#E54827]"
            />
          </div>

          <div>
            <label className="block text-[#52525B] font-bold mb-1.5">
              Target Date (Optional)
            </label>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-3 text-[#18181B] focus:outline-none focus:border-[#E54827]"
            />
          </div>

          <div className="p-3 bg-[#FEF2F0] border border-[#E54827]/20 rounded-xl flex items-start gap-2 text-[11px] text-[#52525B]">
            <Info className="w-4 h-4 text-[#E54827] shrink-0 mt-0.5" />
            <span>Preview only — this information has not been saved to a server.</span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#E54827] hover:bg-[#C22E14] text-white font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
          >
            START MY GOAL
          </button>
        </form>

        <div className="text-[11px] text-[#52525B] text-center pt-2 border-t border-[#E4E4E7]">
          <Link to="/vault" className="hover:text-[#18181B] transition-colors">
            Cancel and Return to My Vault
          </Link>
        </div>

      </div>

      <div className="mt-6 text-center text-[10px] text-[#71717A]">
        The Vault does not hold or transfer money. All cash stays in your physical box.
      </div>

    </div>
  );
};
