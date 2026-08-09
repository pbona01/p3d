import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, ArrowRight, ShoppingBag, Info, Key, Sparkles, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const VaultPage: React.FC = () => {
  return (
    <div className="min-h-[85vh] bg-[#FAF9F6] text-[#18181B] font-sans flex flex-col justify-between py-10 px-4 md:px-8 max-w-3xl mx-auto selection:bg-[#E54827] selection:text-white">
      
      {/* Top Header Navigation */}
      <div className="flex items-center justify-between text-xs text-[#52525B] mb-8">
        <div className="flex items-center gap-2 font-medium">
          <Link to="/" className="hover:text-[#18181B] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#E54827] font-bold">My Vault</span>
        </div>
        <Link 
          to="/shop" 
          className="text-xs text-[#52525B] hover:text-[#18181B] transition-colors flex items-center gap-1 font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Return to Store
        </Link>
      </div>

      {/* Main Entry Card */}
      <div className="my-auto space-y-8 text-center">
        
        {/* Badge & Icon */}
        <div className="inline-flex flex-col items-center justify-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-[#E54827]/10 border border-[#E54827]/30 text-[#E54827] flex items-center justify-center shadow-sm">
            <Lock className="w-8 h-8" />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E54827] bg-[#E54827]/10 border border-[#E54827]/20 px-3.5 py-1 rounded-full">
            THE VAULT BY APLUND
          </span>
        </div>

        {/* Headline */}
        <div className="space-y-3 max-w-lg mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#18181B] leading-tight">
            Your savings. Your goal. <span className="text-[#E54827]">Your progress.</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
            The personal savings companion for owners of The Aplund Vault physical box.
          </p>
        </div>

        {/* Actions Box */}
        <div className="bg-white border border-[#E4E4E7] rounded-3xl p-6 sm:p-8 shadow-xl max-w-md mx-auto space-y-5">
          
          <div className="space-y-3">
            <p className="text-xs font-extrabold text-[#18181B] uppercase tracking-wider">
              Already have a Vault?
            </p>
            <Link
              to="/vault/login"
              className="w-full bg-[#E54827] hover:bg-[#C22E14] text-white font-extrabold py-4 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer text-center"
            >
              <Key className="w-4 h-4" /> LOG MY SAVINGS
            </Link>
          </div>

          <div className="relative flex items-center justify-center my-2">
            <div className="border-t border-[#E4E4E7] w-full" />
            <span className="bg-white px-3 text-[10px] uppercase font-bold text-[#A1A1AA] absolute">
              OR
            </span>
          </div>

          <div className="space-y-3 pt-1">
            <p className="text-xs font-bold text-[#52525B]">
              Don’t have a Vault yet?
            </p>
            <Link
              to="/products/the-vault"
              className="w-full bg-white hover:bg-[#FAF9F6] text-[#18181B] border border-[#E4E4E7] font-extrabold py-3.5 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer text-center"
            >
              <ShoppingBag className="w-4 h-4 text-[#E54827]" /> BUY THE VAULT
            </Link>
          </div>

        </div>

        {/* Simple 3-step usage summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto text-left pt-2">
          <div className="bg-white border border-[#E4E4E7] p-3.5 rounded-2xl space-y-1 shadow-sm">
            <div className="text-[#E54827] font-black text-xs">01</div>
            <p className="font-bold text-[#18181B] text-xs">Scan QR Code</p>
            <p className="text-[11px] text-[#52525B]">Locate the brass plate on your physical box.</p>
          </div>

          <div className="bg-white border border-[#E4E4E7] p-3.5 rounded-2xl space-y-1 shadow-sm">
            <div className="text-[#E54827] font-black text-xs">02</div>
            <p className="font-bold text-[#18181B] text-xs">Sign In</p>
            <p className="text-[11px] text-[#52525B]">Open your private recorded ledger companion.</p>
          </div>

          <div className="bg-white border border-[#E4E4E7] p-3.5 rounded-2xl space-y-1 shadow-sm">
            <div className="text-[#E54827] font-black text-xs">03</div>
            <p className="font-bold text-[#18181B] text-xs">Log Money Added</p>
            <p className="text-[11px] text-[#52525B]">Record cash placed inside in seconds.</p>
          </div>
        </div>

      </div>

      {/* Footer Clarification Disclaimer */}
      <div className="mt-10 max-w-lg mx-auto bg-[#FEF2F0] border border-[#E54827]/20 rounded-2xl p-4 flex items-start gap-3 text-xs text-[#52525B] leading-relaxed text-left shadow-sm">
        <Info className="w-4 h-4 text-[#E54827] shrink-0 mt-0.5" />
        <p className="text-[11px]">
          Recorded savings are based on the amounts you enter manually. The Vault does not automatically detect or verify the cash inside it.
        </p>
      </div>

    </div>
  );
};
