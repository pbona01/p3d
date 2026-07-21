import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useSavingsBox } from '../hooks/useSavingsBox';
import { BalanceCard } from '../components/savings/BalanceCard';
import { TransactionList } from '../components/savings/TransactionList';
import { GoalProgress } from '../components/savings/GoalProgress';
import { AddMoneyModal } from '../components/savings/AddMoneyModal';
import { formatCurrency } from '../lib/savings-utils';
import { 
  ChevronLeft, 
  Edit3, 
  Check, 
  Plus, 
  Minus, 
  Target, 
  Award, 
  QrCode, 
  TrendingUp, 
  LogOut,
  Calendar,
  Sparkles
} from 'lucide-react';

export const SavingsDashboard: React.FC = () => {
  const { boxId } = useParams<{ boxId: string }>();
  const navigate = useNavigate();
  const { box, updateBox } = useSavingsBox(boxId || '');
  
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'deposit' | 'withdrawal'>('deposit');
  
  // Box name editing state
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState('');
  
  // Goal editing state
  const [isEditingGoal, setIsEditingGoal] = useState(false);
  const [goalName, setGoalName] = useState('');
  const [goalTarget, setGoalTarget] = useState('');

  useEffect(() => {
    if (!boxId) return;
    
    // Check if box exists
    const storedBox = localStorage.getItem(`aplund_box_${boxId}`);
    if (!storedBox) {
      navigate(`/save/${boxId}`);
      return;
    }

    // Check if session is unlocked
    const unlocked = sessionStorage.getItem(`aplund_unlocked_${boxId}`) === 'true';
    if (!unlocked) {
      navigate(`/save/${boxId}`);
    } else {
      setIsUnlocked(true);
    }
  }, [boxId, navigate]);

  useEffect(() => {
    if (box) {
      setTempName(box.owner.name + "'s Wooden Box");
      if (box.goal) {
        setGoalName(box.goal.name);
        setGoalTarget(box.goal.targetAmount.toString());
      } else {
        setGoalName('Dream Closet Fund');
        setGoalTarget('500000');
      }
    }
  }, [box]);

  if (!isUnlocked || !box) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center font-sans">
        <div className="w-8 h-8 border-4 border-[#c9a96e] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const handleTransaction = (amount: number, note: string, type: 'deposit' | 'withdrawal') => {
    if (amount <= 0 || isNaN(amount)) return;
    
    // Safety check for withdrawal excess
    if (type === 'withdrawal' && amount > box.balance) {
      alert('Insufficient balance. You cannot log a withdrawal larger than your current balance.');
      return;
    }

    const newBalance = type === 'deposit' ? box.balance + amount : box.balance - amount;
    const newTransaction = {
      id: Date.now().toString(),
      type,
      amount,
      note: note.trim() || (type === 'deposit' ? 'Cash Saved' : 'Cash Withdrawn'),
      date: new Date().toISOString()
    };
    
    updateBox({
      ...box,
      balance: newBalance,
      transactions: [newTransaction, ...box.transactions]
    });
  };

  const handleSaveName = () => {
    setIsEditingName(false);
    updateBox({
      ...box,
      owner: {
        ...box.owner,
        name: tempName.replace("'s Wooden Box", "").trim() || box.owner.name
      }
    });
  };

  const handleSaveGoal = (e: React.FormEvent) => {
    e.preventDefault();
    const targetVal = parseFloat(goalTarget);
    if (!goalName.trim() || isNaN(targetVal) || targetVal <= 0) return;
    
    updateBox({
      ...box,
      goal: {
        name: goalName.trim(),
        targetAmount: targetVal
      }
    });
    setIsEditingGoal(false);
  };

  const handleLockSession = () => {
    sessionStorage.removeItem(`aplund_unlocked_${boxId}`);
    navigate(`/save/${boxId}`);
  };

  const displayBoxName = box.owner.name + "'s Savings Box";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 font-sans relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,169,110,0.05)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="max-w-xl mx-auto space-y-8 pt-8 pb-16 relative z-10">
        
        {/* Navigation & Lock Button */}
        <div className="flex justify-between items-center">
          <button 
            onClick={() => navigate('/save')}
            className="flex items-center gap-1.5 text-gray-400 hover:text-[#c9a96e] transition-colors text-sm font-semibold"
          >
            <ChevronLeft className="w-4 h-4" /> About Savings
          </button>
          
          <button 
            onClick={handleLockSession}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-all text-xs font-semibold"
          >
            <LogOut className="w-3.5 h-3.5" /> Lock Ledger
          </button>
        </div>

        {/* Editable Header */}
        <div className="bg-[#171717] border border-[#262626] rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a96e]/5 blur-[40px] rounded-full pointer-events-none"></div>
          
          {isEditingName ? (
            <div className="flex gap-2">
              <input 
                type="text" 
                value={tempName} 
                onChange={(e) => setTempName(e.target.value)}
                className="bg-black/60 border border-[#c9a96e]/50 rounded-xl px-4 py-2 text-white text-lg font-bold flex-1 focus:outline-none"
              />
              <button 
                onClick={handleSaveName}
                className="p-2 bg-green-500 text-black rounded-xl hover:scale-105 transition-transform"
              >
                <Check className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  {displayBoxName}
                  <button 
                    onClick={() => {
                      setTempName(displayBoxName);
                      setIsEditingName(true);
                    }}
                    className="text-gray-500 hover:text-[#c9a96e] transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  Registered: {new Date(box.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="p-3 bg-[#c9a96e]/10 border border-[#c9a96e]/20 rounded-full">
                <Sparkles className="w-5 h-5 text-[#c9a96e]" />
              </div>
            </div>
          )}
        </div>

        {/* Large Balance Card */}
        <BalanceCard balance={box.balance} />

        {/* Quick Deposit/Withdraw Action Panel */}
        <div className="grid grid-cols-2 gap-4">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => { setModalType('deposit'); setIsAddModalOpen(true); }}
            className="flex items-center justify-center gap-2 bg-[#c9a96e] text-black font-bold py-4 rounded-xl shadow-lg shadow-[#c9a96e]/20 transition-all cursor-pointer"
          >
            <Plus className="w-5 h-5 stroke-[2.5]" /> Add Money
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => { setModalType('withdrawal'); setIsAddModalOpen(true); }}
            className="flex items-center justify-center gap-2 bg-[#171717] hover:bg-[#202020] text-white border border-[#262626] font-semibold py-4 rounded-xl transition-all cursor-pointer"
          >
            <Minus className="w-5 h-5 stroke-[2.5]" /> Withdraw
          </motion.button>
        </div>

        {/* Goal Progress Section */}
        <div className="bg-[#171717] border border-[#262626] rounded-2xl p-6 relative">
          {box.goal ? (
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold flex items-center gap-1">
                    <Target className="w-3.5 h-3.5 text-[#c9a96e]" /> Savings Goal
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">{box.goal.name}</h3>
                </div>
                <button 
                  onClick={() => setIsEditingGoal(true)}
                  className="text-xs text-[#c9a96e] hover:underline flex items-center gap-1 font-semibold"
                >
                  <Edit3 className="w-3 h-3" /> Edit Goal
                </button>
              </div>

              <GoalProgress goalName={box.goal.name} current={box.balance} target={box.goal.targetAmount} />
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-[#c9a96e]/10 border border-[#c9a96e]/20 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-6 h-6 text-[#c9a96e]" />
              </div>
              <div>
                <h3 className="text-white font-bold">No Goal Set</h3>
                <p className="text-gray-400 text-xs mt-1">Set a goal to visualize your savings target.</p>
              </div>
              <button 
                onClick={() => setIsEditingGoal(true)}
                className="px-4 py-2 rounded-lg bg-[#c9a96e]/10 border border-[#c9a96e]/20 text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black transition-all text-xs font-bold"
              >
                Create First Goal
              </button>
            </div>
          )}
        </div>

        {/* Transaction History Section */}
        <TransactionList transactions={box.transactions} />

        {/* QR Re-access reminder */}
        <div className="text-center pt-4 space-y-1">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
            <QrCode className="w-4 h-4 text-gray-600" /> Scan physical QR on your box to access this ledger anytime.
          </p>
        </div>

        {/* Add/Withdraw Money Modal */}
        <AddMoneyModal 
          isOpen={isAddModalOpen} 
          onClose={() => setIsAddModalOpen(false)} 
          onConfirm={handleTransaction} 
          type={modalType} 
        />

        {/* Goal Setup/Edit Modal */}
        <AnimatePresence>
          {isEditingGoal && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#171717] border border-[#262626] rounded-2xl p-6 w-full max-w-md shadow-2xl relative"
              >
                <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#c9a96e]" /> Set Savings Goal
                </h3>
                
                <form onSubmit={handleSaveGoal} className="space-y-4">
                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5 uppercase font-semibold">Goal Name</label>
                    <input 
                      type="text"
                      placeholder="e.g. Master Bedroom Closet"
                      value={goalName}
                      onChange={(e) => setGoalName(e.target.value)}
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#c9a96e] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5 uppercase font-semibold">Target Amount (₦)</label>
                    <input 
                      type="number"
                      placeholder="e.g. 250000"
                      value={goalTarget}
                      onChange={(e) => setGoalTarget(e.target.value)}
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#c9a96e] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div className="flex gap-4 pt-2">
                    <button 
                      type="button" 
                      onClick={() => setIsEditingGoal(false)} 
                      className="flex-1 px-4 py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-semibold"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="flex-1 px-4 py-3 rounded-xl bg-[#c9a96e] text-black font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform text-sm"
                    >
                      Save Goal
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
