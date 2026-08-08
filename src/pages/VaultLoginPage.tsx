import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, ArrowLeft, Key, Eye, Info } from 'lucide-react';

export const VaultLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [previewNotice, setPreviewNotice] = useState<string | null>(null);

  const handleDemoSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setPassword('');
    setPreviewNotice('This is a preview of the upcoming Vault owner experience. No account information has been submitted.');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#18181B] font-sans py-10 px-4 md:px-8 selection:bg-[#E54827] selection:text-white">
      
      {/* Top Breadcrumbs & Back Link */}
      <div className="max-w-md mx-auto mb-8">
        <div className="flex items-center justify-between text-xs text-[#52525B]">
          <div className="flex items-center gap-2 font-medium">
            <Link to="/" className="hover:text-[#18181B] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/vault" className="hover:text-[#18181B] transition-colors">The Vault</Link>
            <span>/</span>
            <span className="text-[#E54827] font-bold">Owner Access</span>
          </div>
          <Link to="/vault" className="text-xs text-[#52525B] hover:text-[#18181B] transition-colors flex items-center gap-1 font-semibold">
            <ArrowLeft className="w-3.5 h-3.5" /> Back
          </Link>
        </div>
      </div>

      {/* Main Login Card */}
      <div className="max-w-md mx-auto bg-white border border-[#E4E4E7] rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#E54827]/10 border border-[#E54827]/30 flex items-center justify-center mx-auto text-[#E54827]">
            <Lock className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E54827] bg-[#E54827]/10 border border-[#E54827]/30 px-3 py-1 rounded-full inline-block">
            Frontend Access Preview
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-[#18181B] tracking-tight">
            Welcome Back to The Vault
          </h1>
          <p className="text-xs text-[#52525B] leading-relaxed">
            Access your personal web-based manual savings tracker.
          </p>
        </div>

        {/* Demo Notification Banner */}
        {previewNotice && (
          <div 
            aria-live="polite"
            className="p-4 bg-[#FEF2F0] border border-[#E54827]/40 rounded-2xl text-xs text-[#18181B] space-y-1 animate-fadeIn"
          >
            <div className="flex items-center gap-2 font-bold text-[#E54827]">
              <Info className="w-4 h-4" />
              <span>Preview Notice</span>
            </div>
            <p className="text-[11px] leading-relaxed font-medium">
              {previewNotice}
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleDemoSignIn} className="space-y-4 text-xs">
          <div>
            <label className="block text-[#52525B] font-bold mb-1.5">
              Vault Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="owner@aplund.com"
              className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-3 text-[#18181B] placeholder-[#A1A1AA] focus:outline-none focus:border-[#E54827]"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-[#52525B] font-bold">
                Security Password
              </label>
              <span className="text-[10px] text-[#52525B] cursor-not-allowed font-medium">
                Forgot Password?
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
            <Key className="w-4 h-4" /> Sign In To Vault
          </button>
        </form>

        {/* Demo Dashboard Direct Link */}
        <div className="pt-2 border-t border-[#E4E4E7] space-y-3">
          <div className="text-center text-[11px] text-[#52525B] font-medium">
            Want to test the interactive savings dashboard directly?
          </div>

          <Link
            to="/vault/dashboard-preview"
            className="w-full bg-white hover:bg-[#FAF9F6] text-[#18181B] border border-[#E4E4E7] font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-center shadow-sm"
          >
            <Eye className="w-4 h-4 text-[#E54827]" /> Explore Interactive Demo Dashboard
          </Link>
        </div>

        {/* Footer info */}
        <div className="text-[11px] text-[#71717A] text-center space-y-1 pt-2 border-t border-[#E4E4E7]">
          <p>Don't own The Vault yet? <Link to="/products/the-vault" className="text-[#E54827] underline font-semibold">Buy The Vault physical box</Link></p>
          <p className="text-[10px] italic">Note: The digital companion is for manual recording. Cash remains in your physical box.</p>
        </div>

      </div>

    </div>
  );
};
