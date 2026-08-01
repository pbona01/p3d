import React, { useState } from 'react';
import { 
  Lock, ShieldCheck, Target, MessageSquare, ArrowRight, CheckCircle, HelpCircle, Sparkles, PlusCircle 
} from 'lucide-react';
import { OFFICIAL_WHATSAPP_NUMBER } from '../lib/products-data';
import { useCart } from '../context/CartContext';
import { productsData } from '../lib/products-data';
import { formatNaira } from '../lib/format-utils';

export const VaultPage: React.FC = () => {
  const { addToCart } = useCart();
  const vaultProduct = productsData.find(p => p.isVault);

  // Interactive Preview State (Explicitly labeled "Product preview" and "Example data")
  const [demoDepositAmount, setDemoDepositAmount] = useState('10000');
  const [demoLogs, setDemoLogs] = useState([
    { date: '2026-07-28', note: 'Initial Box Deposit', amount: 50000 },
    { date: '2026-07-30', note: 'Weekly Savings Addition', amount: 25000 }
  ]);
  const [demoGoalTarget, setDemoGoalTarget] = useState(200000);

  const demoTotalRecorded = demoLogs.reduce((s, l) => s + l.amount, 0);
  const demoProgressPercent = Math.min(100, Math.round((demoTotalRecorded / demoGoalTarget) * 100));

  const handleSimulateDeposit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseInt(demoDepositAmount, 10);
    if (!isNaN(val) && val > 0) {
      const newEntry = {
        date: new Date().toISOString().split('T')[0],
        note: 'Manual Demo Record Entry',
        amount: val
      };
      setDemoLogs([newEntry, ...demoLogs]);
      setDemoDepositAmount('');
    }
  };

  const handleAddToCart = () => {
    if (vaultProduct) {
      addToCart(vaultProduct, [], 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#18181B] font-sans py-10 px-4 md:px-8 max-w-7xl mx-auto selection:bg-[#E54827] selection:text-white">
      
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16 pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E54827]/30 bg-[#FEF2F0] text-[#E54827] text-xs font-bold uppercase tracking-wider mb-6">
          <Lock className="w-3.5 h-3.5 text-[#E54827]" /> Signature Hardwood Savings Box
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4 text-[#18181B]">
          The Vault: <span className="text-[#E54827]">Save Physically.</span> Track Digitally.
        </h1>

        <p className="text-[#52525B] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          A handcrafted solid hardwood savings box paired with a private web-based manual deposit ledger. Designed for tangible savings discipline in Nigeria.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={handleAddToCart}
            className="bg-[#E54827] hover:bg-[#C22E14] text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            Order The Vault (₦35,000)
          </button>

          <a
            href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER.replace('+', '')}?text=Hello%20Aplund!%20I%20am%20interested%20in%20ordering%20The%20Vault%20Physical%20Savings%20Box.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-[#F4F3EF] text-[#18181B] border border-[#E4E4E7] font-bold px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" /> Order via WhatsApp
          </a>
        </div>
      </div>

      {/* Main Grid: Product Specs & Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-center">
        <div className="lg:col-span-6 relative">
          <div className="rounded-3xl overflow-hidden border border-[#E4E4E7] bg-white p-3 shadow-md aspect-[4/3] relative">
            <img
              src="https://i.postimg.cc/pLQ223xr/Screenshot-20260522-142556-Tik-Tok.jpg"
              alt="The Vault Physical Hardwood Box"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-x-7 bottom-7 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-white/60 shadow-lg text-xs">
              <span className="text-[#E54827] font-extrabold uppercase tracking-wider block">Solid Hardwood Craft</span>
              <p className="text-[#18181B] font-extrabold mt-0.5">Teak, Seasoned Oak & Polished Brass Lock</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-[#18181B]">What Is The Vault?</h2>
          <p className="text-[#52525B] text-sm leading-relaxed font-normal">
            The Vault is a premium physical wooden box designed to give your physical cash savings a secure, beautiful place in your home. Each Vault is crafted in our Lagos workshop using seasoned teak or mahogany, fitted with a heavy brass lock, and engraved with a unique QR code plate.
          </p>

          <div className="space-y-3 text-xs text-[#18181B]">
            <div className="flex items-start gap-3 p-4 bg-white border border-[#E4E4E7] rounded-2xl shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#E54827] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#18181B]">Physical Hardwood & Heavy Brass Lock</p>
                <p className="text-[#52525B]">Solid wood construction with dual keys and velvet interior lining.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white border border-[#E4E4E7] rounded-2xl shadow-sm">
              <Target className="w-5 h-5 text-[#E54827] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#18181B]">QR Code Manual Savings Ledger</p>
                <p className="text-[#52525B]">Scan the unique brass code plate on your box to access your private web manual deposit log.</p>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-[#52525B] bg-[#F4F3EF] p-4 rounded-2xl border border-[#E4E4E7] leading-relaxed">
            <strong>Disclaimer:</strong> The Vault is a physical storage product and manual deposit tracking companion. It is not a bank, financial institution, or digital payment platform. It relies on manual record entries by the user.
          </p>
        </div>
      </div>

      {/* Workflow / How Physical Saving Works */}
      <div className="mb-16 pt-12 border-t border-[#E4E4E7]">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs text-[#E54827] uppercase tracking-widest font-bold">
            Workflow Guide
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-1 text-[#18181B]">How The Vault Experience Works</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white border border-[#E4E4E7] rounded-2xl space-y-3 shadow-sm">
            <span className="text-xl font-black text-[#E54827] font-mono">01</span>
            <h4 className="font-bold text-[#18181B] text-sm">Order Physical Vault</h4>
            <p className="text-[#52525B] text-xs leading-relaxed">
              Receive your handcrafted hardwood savings box delivered directly to your doorstep in Nigeria.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#E4E4E7] rounded-2xl space-y-3 shadow-sm">
            <span className="text-xl font-black text-[#E54827] font-mono">02</span>
            <h4 className="font-bold text-[#18181B] text-sm">Scan QR Code</h4>
            <p className="text-[#52525B] text-xs leading-relaxed">
              Use your phone camera to scan the brass QR plate on your box to access your personal web deposit tracker.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#E4E4E7] rounded-2xl space-y-3 shadow-sm">
            <span className="text-xl font-black text-[#E54827] font-mono">03</span>
            <h4 className="font-bold text-[#18181B] text-sm">Set Savings Target</h4>
            <p className="text-[#52525B] text-xs leading-relaxed">
              Define your personal savings goal (e.g. ₦500,000 for a custom wardrobe or emergency fund).
            </p>
          </div>

          <div className="p-6 bg-white border border-[#E4E4E7] rounded-2xl space-y-3 shadow-sm">
            <span className="text-xl font-black text-[#E54827] font-mono">04</span>
            <h4 className="font-bold text-[#18181B] text-sm">Log Deposits Manually</h4>
            <p className="text-[#52525B] text-xs leading-relaxed">
              Whenever you place cash inside your box, record the amount in your ledger to see your progress bar grow.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Demonstration Section (Explicitly labelled "Product preview" and "Example data") */}
      <div className="mb-16 bg-[#18181B] text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#27272A] pb-6 mb-8">
          <div>
            <span className="bg-[#E54827]/20 text-[#E54827] border border-[#E54827]/30 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-2">
              Product Preview • Example Data
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Interactive Web Tracker Companion Preview
            </h2>
          </div>
          <p className="text-xs text-gray-300 max-w-xs">
            Test how the manual savings ledger works below using example data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Preview Controls */}
          <div className="lg:col-span-5 bg-[#27272A] border border-[#3F3F46] rounded-2xl p-6 space-y-4">
            <h3 className="font-bold text-white text-sm border-b border-[#3F3F46] pb-2">
              Simulate Manual Deposit Entry
            </h3>

            <form onSubmit={handleSimulateDeposit} className="space-y-3 text-xs">
              <div>
                <label className="block text-gray-300 mb-1">Deposit Amount (₦)</label>
                <input
                  type="number"
                  value={demoDepositAmount}
                  onChange={(e) => setDemoDepositAmount(e.target.value)}
                  placeholder="e.g. 20000"
                  className="w-full bg-[#18181B] border border-[#3F3F46] rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#E54827]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#E54827] hover:bg-[#C22E14] text-white font-bold py-2.5 rounded-xl transition-all cursor-pointer shadow-sm"
              >
                + Log Simulated Cash Entry
              </button>
            </form>

            <div className="pt-2 text-[11px] text-gray-300 space-y-1">
              <p>• Example Goal Target: {formatNaira(demoGoalTarget)}</p>
              <p>• Recorded Total: {formatNaira(demoTotalRecorded)}</p>
              <p>• Remaining to Goal: {formatNaira(Math.max(0, demoGoalTarget - demoTotalRecorded))}</p>
            </div>
          </div>

          {/* Right Preview Display */}
          <div className="lg:col-span-7 bg-[#27272A] border border-[#3F3F46] rounded-2xl p-6 space-y-6">
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-2">
                <span className="text-white">Goal Progress: Custom Wardrobe Savings</span>
                <span className="text-[#E54827] font-mono">{demoProgressPercent}%</span>
              </div>
              <div className="w-full h-3 bg-[#18181B] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#E54827] transition-all duration-500"
                  style={{ width: `${demoProgressPercent}%` }}
                />
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Recent Recorded Deposit Ledger
              </h4>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {demoLogs.map((log, index) => (
                  <div
                    key={index}
                    className="p-3 bg-[#18181B] border border-[#3F3F46] rounded-xl flex items-center justify-between text-xs"
                  >
                    <div>
                      <p className="font-bold text-white">{log.note}</p>
                      <p className="text-[10px] text-gray-400">{log.date}</p>
                    </div>
                    <span className="font-mono text-[#E54827] font-bold">
                      +{formatNaira(log.amount)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-16 pt-12 border-t border-[#E4E4E7] max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-[#18181B] mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4 text-xs">
          <div className="p-5 bg-white border border-[#E4E4E7] rounded-2xl space-y-1 shadow-sm">
            <h4 className="font-bold text-[#18181B] text-sm">Does The Vault automatically scan cash inside?</h4>
            <p className="text-[#52525B] leading-relaxed">
              No. The Vault is a physical hardwood box. The web deposit tracker allows you to manually record what you put in or take out so you can track your goal progress easily.
            </p>
          </div>

          <div className="p-5 bg-white border border-[#E4E4E7] rounded-2xl space-y-1 shadow-sm">
            <h4 className="font-bold text-[#18181B] text-sm">How do I access my web tracker ledger?</h4>
            <p className="text-[#52525B] leading-relaxed">
              Each Vault comes with a brass plate featuring a unique QR code. Simply scan it with your smartphone camera to access your private ledger page.
            </p>
          </div>

          <div className="p-5 bg-white border border-[#E4E4E7] rounded-2xl space-y-1 shadow-sm">
            <h4 className="font-bold text-[#18181B] text-sm">Can I request custom wood finishes or custom name engraving?</h4>
            <p className="text-[#52525B] leading-relaxed">
              Yes! You can choose Royal Mahogany, Heritage Oak, or Obsidian Stain, and request a personalized laser-engraved nameplate when placing your order.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
