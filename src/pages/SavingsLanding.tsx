import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Target, PlusCircle, TrendingUp, DollarSign, History, Sparkles, ArrowRight, Lock } from 'lucide-react';

export const SavingsLanding: React.FC = () => {
  const navigate = useNavigate();
  const [boxIdInput, setBoxIdInput] = useState('');

  const handleStartVault = (e: React.FormEvent) => {
    e.preventDefault();
    const id = boxIdInput.trim() || `vault-${Math.floor(1000 + Math.random() * 9000)}`;
    navigate(`/save/${id}`);
  };

  const handleDemoVault = () => {
    const demoId = 'demo-vault-2026';
    // Create demo box if not exists
    const existing = localStorage.getItem(`aplund_box_${demoId}`);
    if (!existing) {
      const demoBox = {
        boxId: demoId,
        pinHash: btoa('1234' + demoId),
        balance: 150000,
        createdAt: new Date().toISOString(),
        owner: { name: 'Demo User', phone: '+2347070276427', email: 'demo@aplund.com' },
        goal: { name: 'Dream Luxury Closet', targetAmount: 500000 },
        transactions: [
          { id: '1', type: 'deposit' as const, amount: 50000, note: 'Initial Box Deposit', date: new Date(Date.now() - 86400000 * 3).toISOString() },
          { id: '2', type: 'deposit' as const, amount: 100000, note: 'Weekly Savings Target', date: new Date(Date.now() - 86400000).toISOString() }
        ]
      };
      localStorage.setItem(`aplund_box_${demoId}`, JSON.stringify(demoBox));
    }
    sessionStorage.setItem(`aplund_unlocked_${demoId}`, 'true');
    navigate(`/save/${demoId}/dashboard`);
  };

  const steps = [
    {
      num: "01",
      title: "Register your Vault",
      desc: "Claim your unique physical wooden box ID or register online instantly to start tracking.",
      icon: ShieldCheck
    },
    {
      num: "02",
      title: "Set a savings goal",
      desc: "Define what you are saving for (e.g., custom wardrobe, travel, emergency fund) and set your target amount.",
      icon: Target
    },
    {
      num: "03",
      title: "Record deposits",
      desc: "Log physical cash additions securely into your digital ledger with custom notes.",
      icon: PlusCircle
    },
    {
      num: "04",
      title: "See your progress",
      desc: "Visual progress percentage and milestone counters keeping you motivated daily.",
      icon: TrendingUp
    },
    {
      num: "05",
      title: "View remaining balance to your goal",
      desc: "Instantly know the exact remaining amount required to reach your target goal.",
      icon: DollarSign
    },
    {
      num: "06",
      title: "Track savings history",
      desc: "Inspect every past deposit and withdrawal with detailed date stamps and ledger totals.",
      icon: History
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#c9a96e] selection:text-black">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#c9a96e]/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 pt-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c9a96e]/30 bg-[#c9a96e]/10 text-[#c9a96e] text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Aplund Vault Tracker
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight"
          >
            Track Your Physical Savings With <span className="text-[#c9a96e]">Absolute Precision</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed"
          >
            The official digital companion for your handcrafted wooden savings box. Register your vault, set goals, log deposits, and watch your progress unfold.
          </motion.p>

          {/* Quick Action Input / Demo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
          >
            <form onSubmit={handleStartVault} className="flex w-full gap-2">
              <input 
                type="text" 
                placeholder="Enter Box ID (e.g. box-001)"
                value={boxIdInput}
                onChange={(e) => setBoxIdInput(e.target.value)}
                className="flex-1 bg-[#121212] border border-white/10 rounded-full px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#c9a96e] text-sm"
              />
              <button 
                type="submit"
                className="bg-[#c9a96e] hover:bg-[#b8985f] text-black font-bold px-6 py-3.5 rounded-full transition-all text-sm flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(201,169,110,0.3)] whitespace-nowrap"
              >
                Register Vault <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          <div className="mt-4">
            <button 
              onClick={handleDemoVault}
              className="text-xs text-[#c9a96e] hover:underline font-semibold inline-flex items-center gap-1 cursor-pointer"
            >
              <Lock className="w-3 h-3" /> Or launch Live Demo Vault Tracker instantly (PIN: 1234)
            </button>
          </div>
        </div>

        {/* 6 Workflow Steps Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Vault Tracker Workflow</h2>
            <p className="text-gray-400 text-sm">Follow these 6 simple steps to master your savings goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-[#121212] border border-white/5 hover:border-[#c9a96e]/30 rounded-2xl p-6 relative group transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/10 border border-[#c9a96e]/20 flex items-center justify-center text-[#c9a96e]">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-gray-600 group-hover:text-[#c9a96e] transition-colors">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[#121212] via-[#1a1a1a] to-[#121212] border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent"></div>
          <h2 className="text-2xl md:text-3xl font-black mb-3">Ready to Track Your Physical Savings?</h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto mb-8">
            Enter any box ID above or jump into our demo vault to experience seamless financial clarity.
          </p>
          <button 
            onClick={handleDemoVault}
            className="bg-[#c9a96e] hover:bg-[#b8985f] text-black font-bold px-8 py-4 rounded-full transition-all text-sm shadow-[0_0_25px_rgba(201,169,110,0.3)] cursor-pointer inline-flex items-center gap-2"
          >
            Launch Vault Tracker Dashboard <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

