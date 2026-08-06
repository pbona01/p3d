import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Lock, 
  ShieldCheck, 
  Target, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  TrendingUp, 
  Info, 
  PlusCircle, 
  ArrowLeft,
  Smartphone,
  Eye,
  Key,
  FolderPlus
} from 'lucide-react';
import { productsData, OFFICIAL_WHATSAPP_NUMBER } from '../lib/products-data';
import { formatNaira } from '../lib/format-utils';

export const VaultPage: React.FC = () => {
  const vaultProduct = productsData.find(p => p.isVault);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: 'What is The Vault?',
      a: 'The Vault is a handcrafted physical solid hardwood savings box created by Aplund in Lagos. It gives your cash savings a safe, elegant home in your room and comes paired with an optional digital web companion to manually log your savings progress.'
    },
    {
      q: 'Does the website automatically know how much cash is inside?',
      a: 'No. Recorded savings shown in the digital companion are based strictly on deposits and withdrawals entered manually by the owner. The physical Vault does not contain electronic sensors or automatic cash detection.'
    },
    {
      q: 'Does Aplund hold my money or savings?',
      a: 'No. Aplund never holds or manages your funds. Your physical cash remains strictly inside your personal physical Vault in your home. The digital companion is purely a visual progress tracker.'
    },
    {
      q: 'Do I need an account to buy The Vault?',
      a: 'No. Anyone can order The Vault through our standard store or directly via WhatsApp. An account will only be used to access the optional web companion for manually tracking savings.'
    },
    {
      q: 'Can I use The Vault without the website?',
      a: 'Yes, absolutely. The physical box functions completely independently with its solid wood construction, heavy brass lock, and physical keys. The digital companion is an optional tool for goal setting.'
    },
    {
      q: 'Can I record money removed from the box?',
      a: 'Yes. The digital companion allows you to record both money added and money removed so your displayed target progress stays accurate to what you manually log.'
    }
  ];

  const exampleGoals = [
    { name: 'Rent & Living Space', target: 800000, current: 350000, color: '#E54827' },
    { name: 'Business Equipment & Tools', target: 500000, current: 220000, color: '#3B82F6' },
    { name: 'Emergency Safety Fund', target: 300000, current: 150000, color: '#10B981' },
    { name: 'New Phone / Tech Upgrade', target: 450000, current: 200000, color: '#8B5CF6' },
    { name: 'Home Renovation & Wardrobe', target: 650000, current: 280000, color: '#F59E0B' },
    { name: 'School Fees & Learning', target: 400000, current: 180000, color: '#EC4899' }
  ];

  const howItWorksSteps = [
    { step: '01', title: 'Buy The Vault', desc: 'Order your handcrafted physical hardwood savings box online or via WhatsApp.' },
    { step: '02', title: 'Receive Your Physical Box', desc: 'Delivered securely in a wooden crate to your doorstep in Lagos or nationwide.' },
    { step: '03', title: 'Scan Unique QR Code', desc: 'Locate the laser-engraved brass plate on your box and scan it with your phone.' },
    { step: '04', title: 'Sign In or Create Profile', desc: 'Access your private Vault space on the web companion.' },
    { step: '05', title: 'Set a Savings Goal', desc: 'Define your milestone target amount and target date.' },
    { step: '06', title: 'Manually Record Money Added', desc: 'Log cash deposits whenever you place notes into your physical box.' },
    { step: '07', title: 'Follow Recorded Progress', desc: 'Watch your visual progress bar grow as you save toward your milestone.' },
    { step: '08', title: 'Record Money Removed', desc: 'Log withdrawals whenever you take cash out for your planned goal.' }
  ];

  return (
    <div className="min-h-screen bg-[#121214] text-[#F4F4F5] font-sans selection:bg-[#E54827] selection:text-white">
      
      {/* Top Breadcrumb Header Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-2">
        <div className="flex items-center justify-between text-xs text-[#A1A1AA]">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#E54827] font-bold">The Vault</span>
          </div>
          <Link 
            to="/shop" 
            className="text-xs text-[#A1A1AA] hover:text-white transition-colors flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Store
          </Link>
        </div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative py-10 md:py-16 px-4 md:px-8 border-b border-[#27272A] overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-[#E54827]/10 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-10 relative z-10">
          
          {/* Header Title & Intro */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E54827]/40 bg-[#E54827]/10 text-[#E54827] text-xs font-extrabold uppercase tracking-widest"
            >
              <Lock className="w-3.5 h-3.5" /> THE VAULT BY APLUND
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]"
            >
              A physical home for <span className="text-[#E54827]">your savings.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            >
              Buy The Vault and save toward what matters. Already own one? Access your space to manually record your savings and follow your progress.
            </motion.p>
          </div>

          {/* DUAL-PATH CHOICES (DESKTOP SPLIT & MOBILE STACKED) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            
            {/* PATH 1: BUY THE VAULT (New Customers) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#18181B] border-2 border-[#E54827] rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl hover:border-[#F97316] transition-all group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="bg-[#E54827] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                    Path 01 • New Customer
                  </span>
                  <span className="text-sm font-mono font-bold text-[#E54827]">₦35,000</span>
                </div>

                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#27272A] bg-black">
                  <img
                    src="https://i.postimg.cc/pLQ223xr/Screenshot-20260522-142556-Tik-Tok.jpg"
                    alt="The Vault Physical Savings Box"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs text-white">
                    <p className="font-bold">Handcrafted Solid Teak & Oak</p>
                    <p className="text-[11px] text-[#A1A1AA]">Heavy Brass Lock • Velvet Interior • QR Plate</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-white group-hover:text-[#E54827] transition-colors">
                    Buy The Vault
                  </h2>
                  <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed">
                    Explore the product, wood finishes, laser engraving options, dimensions, and complete order details.
                  </p>
                </div>

                <div className="space-y-2 text-xs text-[#D4D4D8]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E54827]" />
                    <span>In stock for immediate dispatch across Nigeria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E54827]" />
                    <span>Includes brass QR code plate for optional digital companion</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#27272A] space-y-2">
                <Link
                  to="/products/the-vault"
                  className="w-full bg-[#E54827] hover:bg-[#C22E14] text-white font-extrabold py-4 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer text-center"
                >
                  Buy The Vault Now <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-[11px] text-center text-[#A1A1AA]">
                  View full specs, image gallery, and add to shopping cart
                </p>
              </div>
            </motion.div>

            {/* PATH 2: LOG MY SAVINGS (Existing Vault Owners) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-[#18181B] border border-[#3F3F46] rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative shadow-xl hover:border-[#E54827]/60 transition-all group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="bg-[#27272A] border border-[#3F3F46] text-[#A1A1AA] text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                    Path 02 • Existing Owner
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#10B981] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Web Companion
                  </span>
                </div>

                {/* Dashboard Graphic Mockup */}
                <div className="relative aspect-[16/10] rounded-2xl border border-[#27272A] bg-[#09090B] p-4 flex flex-col justify-between overflow-hidden">
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                      <span className="font-mono text-[11px] text-[#A1A1AA]">Vault Ledger #8492</span>
                    </div>
                    <span className="text-[10px] bg-[#27272A] px-2 py-0.5 rounded text-[#A1A1AA]">Manual Ledger</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[10px] text-[#A1A1AA] uppercase tracking-wider">Active Target</p>
                        <p className="text-sm font-bold text-white">New Workspace Setup</p>
                      </div>
                      <p className="text-base font-mono font-bold text-[#E54827]">37%</p>
                    </div>

                    <div className="w-full h-2.5 bg-[#27272A] rounded-full overflow-hidden">
                      <div className="h-full bg-[#E54827] rounded-full" style={{ width: '37%' }} />
                    </div>

                    <div className="flex justify-between text-[11px] font-mono text-[#A1A1AA] pt-1">
                      <span>Recorded: ₦185,000</span>
                      <span>Target: ₦500,000</span>
                    </div>
                  </div>

                  <div className="text-[10px] text-[#71717A] italic border-t border-[#27272A] pt-2">
                    Log deposits manually when cash is added to your box.
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-white group-hover:text-[#E54827] transition-colors">
                    Log My Savings
                  </h2>
                  <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed">
                    Access your private Vault space to record new deposits, track active milestones, and view your manual ledger.
                  </p>
                </div>

                <div className="space-y-2 text-xs text-[#D4D4D8]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span>Sign in or test the owner access experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span>Interactive dashboard preview available</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#27272A] space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Link
                    to="/vault/login"
                    className="bg-[#27272A] hover:bg-[#3F3F46] text-white border border-[#3F3F46] font-extrabold py-3.5 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer text-center"
                  >
                    <Key className="w-3.5 h-3.5 text-[#E54827]" /> Owner Access
                  </Link>
                  <Link
                    to="/vault/dashboard-preview"
                    className="bg-white hover:bg-[#E4E4E7] text-[#18181B] font-extrabold py-3.5 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer text-center shadow-md"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#E54827]" /> Demo Dashboard
                  </Link>
                </div>
                <p className="text-[11px] text-center text-[#A1A1AA]">
                  For owners who already possess a physical Vault box
                </p>
              </div>
            </motion.div>

          </div>

          {/* VISIBLE MANUAL RECORDING CLARIFICATION */}
          <div className="max-w-4xl mx-auto bg-[#18181B] border border-[#27272A] rounded-2xl p-4 sm:p-5 flex items-start gap-3 text-xs text-[#A1A1AA] leading-relaxed shadow-sm">
            <Info className="w-5 h-5 text-[#E54827] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white text-xs mb-0.5">Important Clarification on Recorded Savings:</p>
              <p>
                Savings shown in the digital companion are based strictly on deposits and withdrawals entered manually by the user. The physical Vault box does not automatically detect the cash inside it, and Aplund does not hold or manage customer funds.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 2: WHAT IS THE VAULT --- */}
      <section className="py-16 px-4 md:px-8 border-b border-[#27272A] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold text-[#E54827] uppercase tracking-widest">
              Physical Craft & Discipline
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Reclaiming the power of physical discipline.
            </h2>
            <p className="text-[#A1A1AA] text-sm leading-relaxed font-normal">
              In an era of instant digital spending, saving physical cash offers unmatched psychological weight. The Aplund Vault brings tangible discipline back to personal financial goals. Each box is individually carved in our Lagos workshop from solid hardwood, fitted with heavy brass hardware, and built to last generations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
              <div className="p-4 bg-[#18181B] border border-[#27272A] rounded-2xl space-y-1">
                <ShieldCheck className="w-5 h-5 text-[#E54827]" />
                <p className="font-bold text-white">Solid Teak & Oak</p>
                <p className="text-[11px] text-[#A1A1AA]">Durable seasoned timber crafted to resist wear.</p>
              </div>

              <div className="p-4 bg-[#18181B] border border-[#27272A] rounded-2xl space-y-1">
                <Lock className="w-5 h-5 text-[#E54827]" />
                <p className="font-bold text-white">Heavy Brass Lock</p>
                <p className="text-[11px] text-[#A1A1AA]">Supplied with twin physical keys for privacy.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#27272A] bg-[#18181B] p-3 shadow-2xl aspect-[4/3]">
              <img
                src="https://i.postimg.cc/vB2PqNnm/a5164097-dd7b-4477-ae33-c34845983535.jpg"
                alt="Aplund Craft Workshop"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-x-7 bottom-7 p-4 bg-[#18181B]/90 backdrop-blur-md rounded-2xl border border-[#3F3F46] text-xs">
                <span className="text-[#E54827] font-extrabold uppercase tracking-wider block text-[10px]">Atelier Quality</span>
                <p className="text-white font-extrabold mt-0.5">Handcrafted in Lagos, Nigeria</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 3: HOW PHYSICAL SAVING WORKS (8 STEPS) --- */}
      <section className="py-16 px-4 md:px-8 border-b border-[#27272A] bg-[#18181B]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-extrabold text-[#E54827] uppercase tracking-widest">
              Simple Step-by-Step Flow
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              How The Vault Experience Works
            </h2>
            <p className="text-xs text-[#A1A1AA]">
              From receiving your physical box to tracking your manual progress on your smartphone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksSteps.map((item, idx) => (
              <div key={idx} className="p-6 bg-[#121214] border border-[#27272A] rounded-2xl space-y-3 shadow-sm hover:border-[#E54827]/50 transition-colors">
                <span className="text-xl font-black text-[#E54827] font-mono block">
                  {item.step}
                </span>
                <h3 className="font-bold text-white text-sm">
                  {item.title}
                </h3>
                <p className="text-[#A1A1AA] text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECTION 4: DASHBOARD PREVIEW CALLOUT BANNER --- */}
      <section className="py-16 px-4 md:px-8 border-b border-[#27272A] max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#18181B] via-[#27272A] to-[#18181B] border border-[#3F3F46] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="bg-[#E54827]/20 text-[#E54827] border border-[#E54827]/40 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full inline-block">
                Interactive Companion Demonstration
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Experience the Digital Savings Companion
              </h2>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed max-w-xl">
                Curious how the web deposit tracker works? Explore our interactive demonstration dashboard using example data. Test logging manual cash entries, defining milestone targets, and viewing progress indicators.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/vault/dashboard-preview"
                  className="bg-[#E54827] hover:bg-[#C22E14] text-white font-extrabold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
                >
                  <Eye className="w-4 h-4" /> Open Interactive Demo
                </Link>
                <Link
                  to="/vault/login"
                  className="bg-[#121214] hover:bg-black text-white border border-[#3F3F46] font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all"
                >
                  View Owner Sign-In Preview
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#121214] border border-[#3F3F46] rounded-2xl p-5 space-y-3">
              <div className="flex justify-between items-center text-xs border-b border-[#27272A] pb-2">
                <span className="font-bold text-white text-xs">Example Savings Milestone</span>
                <span className="text-[#10B981] font-mono text-[11px]">DEMO DATA</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-[#A1A1AA]">
                  <span>Goal: Custom Drip Wardrobe</span>
                  <span className="font-mono text-[#E54827] font-bold">52%</span>
                </div>
                <div className="w-full h-3 bg-[#27272A] rounded-full overflow-hidden">
                  <div className="h-full bg-[#E54827]" style={{ width: '52%' }} />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-[#71717A]">
                  <span>Recorded: ₦338,000</span>
                  <span>Target: ₦650,000</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 5: EXAMPLE SAVINGS GOALS --- */}
      <section className="py-16 px-4 md:px-8 border-b border-[#27272A] max-w-7xl mx-auto">
        <div className="space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-extrabold text-[#E54827] uppercase tracking-widest">
              Tangible Goals
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Save Toward What Truly Matters
            </h2>
            <p className="text-xs text-[#A1A1AA]">
              Define clear personal targets and manually record your cash progress step by step.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exampleGoals.map((goal, idx) => {
              const pct = Math.round((goal.current / goal.target) * 100);
              return (
                <div key={idx} className="p-6 bg-[#18181B] border border-[#27272A] rounded-2xl space-y-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-white text-sm">{goal.name}</h3>
                    <span className="text-xs font-mono font-bold text-[#E54827]">{pct}%</span>
                  </div>

                  <div className="w-full h-2 bg-[#27272A] rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: goal.color }} />
                  </div>

                  <div className="flex justify-between text-xs font-mono text-[#A1A1AA]">
                    <span>Recorded: {formatNaira(goal.current)}</span>
                    <span>Target: {formatNaira(goal.target)}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- SECTION 6: FREQUENTLY ASKED QUESTIONS --- */}
      <section className="py-16 px-4 md:px-8 border-b border-[#27272A] max-w-4xl mx-auto space-y-10">
        
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold text-[#E54827] uppercase tracking-widest">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-[#18181B] border border-[#27272A] rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex justify-between items-center text-sm font-bold text-white hover:text-[#E54827] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#E54827] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#A1A1AA] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-[#A1A1AA] leading-relaxed border-t border-[#27272A] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </section>

      {/* --- SECTION 7: FINAL DUAL CTA --- */}
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto text-center space-y-8">
        
        <div className="space-y-3">
          <span className="text-xs font-extrabold text-[#E54827] uppercase tracking-widest">
            Start Your Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready to bring discipline to your savings?
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-md mx-auto">
            Choose whether to explore and purchase the physical Vault or test the owner companion experience.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/products/the-vault"
            className="w-full sm:w-auto bg-[#E54827] hover:bg-[#C22E14] text-white font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-wider shadow-lg transition-all text-center"
          >
            Buy The Vault (₦35,000)
          </Link>

          <Link
            to="/vault/login"
            className="w-full sm:w-auto bg-[#18181B] hover:bg-[#27272A] text-white border border-[#3F3F46] font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all text-center"
          >
            Log My Savings (Owner Access)
          </Link>
        </div>

        <div className="pt-4">
          <Link 
            to="/shop" 
            className="text-xs text-[#A1A1AA] hover:text-white transition-colors underline"
          >
            Explore Full Aplund Store Collection
          </Link>
        </div>

      </section>

    </div>
  );
};
