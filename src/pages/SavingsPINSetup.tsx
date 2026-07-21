import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PinInput } from '../components/savings/PinInput';
import { hashPin, saveBox } from '../lib/savings-utils';
import { Lock, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';
import { SavingsBox } from '../types/savings';

export const SavingsPINSetup: React.FC = () => {
  const { boxId } = useParams<{ boxId: string }>();
  const navigate = useNavigate();
  
  const [step, setStep] = useState<'create' | 'confirm'>('create');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const [ownerData, setOwnerData] = useState<{ name: string; phone: string; email: string } | null>(null);

  useEffect(() => {
    if (boxId) {
      const stored = localStorage.getItem(`aplund_temp_owner_${boxId}`);
      if (stored) {
        setOwnerData(JSON.parse(stored));
      } else {
        // If they bypass lead capture, redirect back to register
        navigate(`/save/${boxId}`);
      }
    }
  }, [boxId, navigate]);

  const handleCreateComplete = (enteredPin: string) => {
    setPin(enteredPin);
    setStep('confirm');
    setError('');
  };

  const handleConfirmComplete = (confirmPin: string) => {
    if (confirmPin !== pin) {
      setError('PINs do not match. Please start over.');
      setStep('create');
      setPin('');
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    if (!boxId || !ownerData) {
      setError('Missing setup information. Please try again.');
      return;
    }

    // Successfully matching! Let's hash PIN and save the new box
    const finalPinHash = hashPin(pin, boxId);
    
    const newBox: SavingsBox = {
      boxId,
      owner: {
        name: ownerData.name,
        phone: ownerData.phone,
        email: ownerData.email,
      },
      pinHash: finalPinHash,
      balance: 0,
      goal: null,
      transactions: [],
      createdAt: new Date().toISOString(),
    };

    // Save box
    saveBox(newBox);

    // Clean up temporary owner store
    localStorage.removeItem(`aplund_temp_owner_${boxId}`);

    // Mark session as unlocked
    sessionStorage.setItem(`aplund_unlocked_${boxId}`, 'true');

    // Go to dashboard
    navigate(`/save/${boxId}/dashboard`);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6 relative font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.08)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c9a96e]/30 bg-[#c9a96e]/10 text-[#c9a96e] text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Lock className="w-3.5 h-3.5" />
            Security Setup
          </motion.div>
          <h1 className="text-3xl font-bold text-white">
            Secure Your <span className="text-[#c9a96e]">Box</span>
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Set up a passcode to lock your digital transactions.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`bg-[#171717] border border-[#262626] rounded-2xl p-8 shadow-2xl transition-all duration-300 flex flex-col items-center text-center ${shake ? 'animate-shake' : ''}`}
        >
          <AnimatePresence mode="wait">
            {step === 'create' ? (
              <motion.div
                key="create-step"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-6 flex flex-col items-center"
              >
                <div className="p-4 bg-[#c9a96e]/10 border border-[#c9a96e]/20 rounded-full">
                  <Lock className="w-8 h-8 text-[#c9a96e]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Create your 4-digit PIN</h2>
                  <p className="text-gray-400 text-sm mt-1">
                    Enter a 4-digit security number of your choice.
                  </p>
                </div>

                <div className="py-2">
                  <PinInput onComplete={handleCreateComplete} key="create-pin" />
                </div>

                {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}
                
                <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
                  This PIN is for quick access to your savings box only and is encrypted securely on your device.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="confirm-step"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6 flex flex-col items-center"
              >
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-full">
                  <CheckCircle2 className="w-8 h-8 text-green-500 animate-pulse" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Confirm your PIN</h2>
                  <p className="text-gray-400 text-sm mt-1">
                    Re-enter your 4-digit security PIN to confirm.
                  </p>
                </div>

                <div className="py-2">
                  <PinInput onComplete={handleConfirmComplete} key="confirm-pin" />
                </div>

                <button
                  onClick={() => {
                    setStep('create');
                    setPin('');
                    setError('');
                  }}
                  className="text-xs text-gray-400 hover:text-[#c9a96e] transition-colors underline"
                >
                  Start over
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
