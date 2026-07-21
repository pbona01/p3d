import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { LeadForm } from '../components/savings/LeadForm';
import { PinInput } from '../components/savings/PinInput';
import { getBox, addLead, verifyPin } from '../lib/savings-utils';
import { Mail, Phone, User, Lock, Award, Sparkles } from 'lucide-react';

export const SavingsBoxLanding: React.FC = () => {
  const { boxId } = useParams<{ boxId: string }>();
  const navigate = useNavigate();
  const [hasAccount, setHasAccount] = useState(false);
  const [showPinLogin, setShowPinLogin] = useState(false);
  const [pinError, setPinError] = useState('');
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (boxId) {
      const box = getBox(boxId);
      if (box && box.pinHash) {
        setHasAccount(true);
        setShowPinLogin(true);
      }
    }
  }, [boxId]);

  const handleLeadSubmit = (data: { name: string; phone: string; email: string }) => {
    if (!boxId) return;
    
    const leadData = {
      boxId,
      name: data.name,
      phone: data.phone,
      email: data.email,
      capturedAt: new Date().toISOString(),
      converted: false,
    };
    
    // Save lead
    addLead(leadData);
    
    // Store owner info temporarily in localStorage to pass to setup page
    localStorage.setItem(`aplund_temp_owner_${boxId}`, JSON.stringify(data));
    
    // Navigate to setup
    navigate(`/save/${boxId}/setup`);
  };

  const handlePinComplete = (pin: string) => {
    if (!boxId) return;
    const box = getBox(boxId);
    if (box && verifyPin(pin, boxId, box.pinHash)) {
      // Save session in sessionStorage so dashboard is unlocked
      sessionStorage.setItem(`aplund_unlocked_${boxId}`, 'true');
      navigate(`/save/${boxId}/dashboard`);
    } else {
      setPinError('Incorrect PIN. Please try again.');
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6 relative font-sans">
      {/* Background radial gradient for high-end luxury feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.08)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo and Brand Header */}
        <div className="text-center mb-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c9a96e]/30 bg-[#c9a96e]/10 text-[#c9a96e] text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Aplund Savings Box
          </motion.div>
          <h1 className="text-3xl font-bold tracking-tight text-white font-sans">
            Welcome to <span className="text-[#c9a96e]">Aplund</span>
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Box ID: <span className="font-mono text-[#c9a96e] font-semibold">{boxId}</span>
          </p>
        </div>

        {/* Dynamic Card Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`bg-[#171717] border border-[#262626] rounded-2xl p-8 shadow-2xl transition-all duration-300 ${shake ? 'animate-shake' : ''}`}
          id="savings-card"
        >
          <AnimatePresence mode="wait">
            {showPinLogin ? (
              <motion.div
                key="pin-login"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-6 flex flex-col items-center text-center"
              >
                <div className="p-4 bg-[#c9a96e]/10 border border-[#c9a96e]/20 rounded-full">
                  <Lock className="w-8 h-8 text-[#c9a96e]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Enter Your PIN</h2>
                  <p className="text-gray-400 text-sm mt-1">
                    Please enter your 4-digit security PIN to access this box dashboard.
                  </p>
                </div>

                <div className="py-4">
                  <PinInput onComplete={handlePinComplete} />
                </div>

                {pinError && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm font-semibold"
                  >
                    {pinError}
                  </motion.p>
                )}

                {!hasAccount ? (
                  <button 
                    onClick={() => {
                      setShowPinLogin(false);
                      setPinError('');
                    }}
                    className="text-xs text-gray-400 hover:text-[#c9a96e] transition-colors underline"
                  >
                    Register new savings box
                  </button>
                ) : (
                  <p className="text-xs text-gray-500 mt-4 max-w-xs">
                    This PIN protects your digital tracking ledger. If you forgot your PIN, please contact hello@aplund.com
                  </p>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="lead-capture"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">Set Up Your Box</h2>
                  <p className="text-gray-400 text-sm">
                    Enter your contact details to register this handcrafted wooden box and activate your digital tracker.
                  </p>
                </div>

                <LeadForm onSubmit={handleLeadSubmit} />

                {hasAccount && (
                  <div className="text-center pt-2">
                    <button 
                      onClick={() => {
                        setShowPinLogin(true);
                        setPinError('');
                      }}
                      className="text-xs text-gray-400 hover:text-[#c9a96e] transition-colors underline"
                    >
                      Already registered? Enter PIN
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
