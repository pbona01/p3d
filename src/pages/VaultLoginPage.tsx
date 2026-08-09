import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, ArrowLeft, Key, Eye, Info, Sparkles } from 'lucide-react';

export const VaultLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [previewNotice, setPreviewNotice] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPassword('');
    setPreviewNotice('Preview mode: account login will be enabled when the Vault backend is connected.');
  };

  return (
    <div className="min-h-[85vh] bg-[#FAF9F6] text-[#18181B] font-sans py-10 px-4 md:px-8 flex flex-col justify-between selection:bg-[#E54827] selection:text-white max-w-md mx-auto">
      
      {/* Top Breadcrumb Header */}
      <div className="flex items-center justify-between text-xs text-[#52525B] mb-6">
        <div className="flex items-center gap-2 font-medium">
          <Link to="/" className="hover:text-[#18181B] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/vault" className="hover:text-[#18181B] transition-colors">My Vault</Link>
          <span>/</span>
          <span className="text-[#E54827] font-bold">Sign In</span>
        </div>
        <Link to="/vault" className="text-xs text-[#52525B] hover:text-[#18181B] transition-colors flex items-center gap-1 font-semibold">
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Link>
      </div>

      {/* Main Login Card */}
      <div className="bg-white border border-[#E4E4E7] rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 my-auto">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-[#E54827]/10 border border-[#E54827]/30 flex items-center justify-center mx-auto text-[#E54827] shadow-sm">
            <Lock className="w-6 h-6" />
          </div>
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E54827]">
            THE VAULT
          </p>
          <h1 className="text-2xl font-black text-[#18181B] tracking-tight">
            Welcome back
          </h1>
          <p className="text-xs text-[#52525B] leading-relaxed">
            Log in to record your savings and follow your goals.
          </p>
        </div>

        {/* Preview Notice Banner */}
        {previewNotice && (
          <div 
            aria-live="polite"
            className="p-4 bg-[#FEF2F0] border border-[#E54827]/30 rounded-2xl text-xs text-[#18181B] space-y-3 animate-fadeIn"
          >
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-[#E54827] shrink-0 mt-0.5" />
              <p className="text-[11px] leading-relaxed font-semibold text-[#18181B]">
                {previewNotice}
              </p>
            </div>
            
            <button
              type="button"
              onClick={() => navigate('/vault/dashboard-preview')}
              className="w-full bg-[#E54827] hover:bg-[#C22E14] text-white font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <Eye className="w-4 h-4" /> VIEW DASHBOARD PREVIEW
            </button>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-[#52525B] font-bold mb-1.5">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="owner@example.com"
              className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-3 text-[#18181B] placeholder-[#A1A1AA] focus:outline-none focus:border-[#E54827]"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-[#52525B] font-bold">
                Password
              </label>
              <span className="text-[10px] text-[#A1A1AA] cursor-not-allowed font-medium">
                Forgot password?
              </span>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-3 text-[#18181B] placeholder-[#A1A1AA] focus:outline-none focus:border-[#E54827]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#E54827] hover:bg-[#C22E14] text-white font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
          >
            <Key className="w-4 h-4" /> LOG IN
          </button>
        </form>

        {/* Quick Demo Option if notice not shown yet */}
        {!previewNotice && (
          <div className="pt-2 border-t border-[#E4E4E7] text-center space-y-2">
            <button
              type="button"
              onClick={() => navigate('/vault/dashboard-preview')}
              className="w-full bg-[#FAF9F6] hover:bg-white text-[#18181B] border border-[#E4E4E7] font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-[#E54827]" /> Explore Dashboard Demo Directly
            </button>
          </div>
        )}

        {/* Links */}
        <div className="text-[11px] text-[#52525B] text-center space-y-2 pt-2 border-t border-[#E4E4E7]">
          <p>
            New Vault owner?{' '}
            <Link to="/vault/setup-preview" className="text-[#E54827] underline font-bold">
              Activate your Vault
            </Link>
          </p>
          <p>
            <Link to="/" className="text-[#52525B] hover:text-[#18181B] transition-colors">
              Back to Aplund
            </Link>
          </p>
        </div>

      </div>

      {/* Footer Clarification Disclaimer */}
      <div className="mt-6 text-center text-[10px] text-[#71717A]">
        Recorded savings are based on the amounts you enter manually.
      </div>

    </div>
  );
};
