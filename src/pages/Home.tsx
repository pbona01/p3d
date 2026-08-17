import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Ruler, Wrench, MessageSquare, CheckCircle, Lock, Star } from 'lucide-react';
import { ProductGrid } from '../components/products/ProductGrid';
import { productsData, OFFICIAL_WHATSAPP_NUMBER } from '../lib/products-data';

export const Home: React.FC = () => {
  const featuredProducts = productsData.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#18181B] font-sans selection:bg-[#E54827] selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-8 pb-12 md:pt-14 md:pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Hero Left Column */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-extrabold uppercase tracking-widest text-[#E54827]"
            >
              Aplund Atelier · Lagos
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#18181B] leading-[1.1]"
            >
              Crafted for your space.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-[#52525B] text-base sm:text-lg font-normal max-w-lg"
            >
              Custom LED mirrors, fitted wardrobes, and physical savings boxes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="pt-1 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/shop"
                className="bg-[#E54827] hover:bg-[#C22E14] text-white font-bold px-7 py-3.5 rounded-full transition-all text-xs uppercase tracking-wider flex items-center gap-2 shadow-md cursor-pointer"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="bg-white hover:bg-[#F4F3EF] text-[#18181B] border border-[#E4E4E7] font-bold px-7 py-3.5 rounded-full transition-all text-xs uppercase tracking-wider cursor-pointer shadow-sm"
              >
                Get Custom Quote
              </Link>
            </motion.div>
          </div>

          {/* Hero Right Column: Clean Editorial Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#E4E4E7] shadow-sm bg-white p-2">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-xl overflow-hidden">
                <img
                  src="https://i.postimg.cc/sgt79Q5s/goku-mirror.jpg"
                  alt="The Ultimate Aura Mirror by Aplund"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/95 backdrop-blur-md rounded-xl border border-white/50 shadow-md flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-[#18181B] font-bold text-sm">The Ultimate Aura Mirror</h3>
                    <p className="text-xs text-[#52525B]">Custom sizing & LED backlighting</p>
                  </div>
                  <Link
                    to="/product/ultimate-aura-mirror"
                    className="bg-[#E54827] hover:bg-[#C22E14] text-white px-3.5 py-2 rounded-lg font-bold text-xs shrink-0 flex items-center gap-1"
                  >
                    View <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- CATEGORY NAVIGATION --- */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-[#E4E4E7]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs text-[#E54827] uppercase tracking-widest font-bold">
            Curated Collections
          </span>
          <h2 className="text-2xl sm:text-4xl font-black mt-1 text-[#18181B]">Shop By Category</h2>
          <p className="text-[#52525B] text-sm mt-2">
            Discover custom mirrors, tailored fitted wardrobes, and our physical savings box.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Category 1: Mirrors */}
          <Link
            to="/shop/mirrors"
            className="group relative bg-white rounded-3xl overflow-hidden border border-[#E4E4E7] hover:border-[#E54827] transition-all duration-300 shadow-sm hover:shadow-md block"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#F4F3EF]">
              <img
                src="https://i.postimg.cc/d04n3x4h/f8e41194-bf0b-4826-8a41-4076e72b6095.jpg"
                alt="Custom Mirrors Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[10px] text-[#E54827] font-mono font-bold uppercase tracking-wider">01 / Category</span>
              <h3 className="text-xl font-bold text-[#18181B] group-hover:text-[#E54827] transition-colors">Custom Mirrors</h3>
              <p className="text-xs text-[#52525B] leading-relaxed">
                Aura, Instagram, Snapchat & Wavy LED mirrors tailored for bedrooms and closets.
              </p>
              <div className="pt-2 text-xs font-bold text-[#E54827] flex items-center gap-1.5 group-hover:underline">
                Explore Mirrors <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>

          {/* Category 2: Wardrobes */}
          <Link
            to="/shop/wardrobes"
            className="group relative bg-white rounded-3xl overflow-hidden border border-[#E4E4E7] hover:border-[#E54827] transition-all duration-300 shadow-sm hover:shadow-md block"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#F4F3EF]">
              <img
                src="https://i.postimg.cc/pLQ223xr/Screenshot-20260522-142556-Tik-Tok.jpg"
                alt="Custom Wardrobes Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[10px] text-[#E54827] font-mono font-bold uppercase tracking-wider">02 / Category</span>
              <h3 className="text-xl font-bold text-[#18181B] group-hover:text-[#E54827] transition-colors">Custom Wardrobes</h3>
              <p className="text-xs text-[#52525B] leading-relaxed">
                Fitted drip wardrobes & executive walk-in closets made to your wall measurements.
              </p>
              <div className="pt-2 text-xs font-bold text-[#E54827] flex items-center gap-1.5 group-hover:underline">
                Request Wardrobe Quote <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>

          {/* Category 3: The Vault */}
          <Link
            to="/vault"
            className="group relative bg-white rounded-3xl overflow-hidden border border-[#E4E4E7] hover:border-[#E54827] transition-all duration-300 shadow-sm hover:shadow-md block"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#F4F3EF] relative">
              <img
                src="https://i.postimg.cc/pLQ223xr/Screenshot-20260522-142556-Tik-Tok.jpg"
                alt="The Vault Physical Savings Box"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute top-3 left-3 bg-[#E54827] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                Signature Product
              </span>
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[10px] text-[#E54827] font-mono font-bold uppercase tracking-wider">03 / Physical Box</span>
              <h3 className="text-xl font-bold text-[#18181B] group-hover:text-[#E54827] transition-colors">The Vault</h3>
              <p className="text-xs text-[#52525B] leading-relaxed">
                Handcrafted solid hardwood savings box with heavy brass lock & web deposit tracker.
              </p>
              <div className="pt-2 text-xs font-bold text-[#E54827] flex items-center gap-1.5 group-hover:underline">
                View The Vault (₦35,000) <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* --- FEATURED STORE SHOWCASE --- */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-[#E4E4E7]">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs text-[#E54827] uppercase tracking-widest font-bold">
              Featured Creations
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-1 text-[#18181B]">Store Showcase</h2>
          </div>
          <Link
            to="/shop"
            className="text-xs font-bold text-[#E54827] hover:underline flex items-center gap-1.5"
          >
            View All Products ({productsData.length}) <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <ProductGrid products={featuredProducts} />
      </section>

      {/* --- TAILORED FITTING SERVICE PROCESS --- */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto my-8 bg-[#F4F3EF] border border-[#E4E4E7] rounded-3xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs text-[#E54827] uppercase tracking-widest font-bold">
            Tailored Fitting Service
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-1 text-[#18181B]">How Custom Ordering Works</h2>
          <p className="text-[#52525B] text-sm mt-2">
            Simple and structured process for bespoke mirrors and wardrobes in Lagos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white border border-[#E4E4E7] rounded-2xl space-y-3 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-[#FEF2F0] text-[#E54827] flex items-center justify-center font-mono font-extrabold text-xs">
              01
            </div>
            <h4 className="font-bold text-[#18181B] text-sm">Select Your Style</h4>
            <p className="text-[#52525B] text-xs leading-relaxed">
              Browse our catalog or share your reference photos for custom wardrobe or LED mirror layouts.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#E4E4E7] rounded-2xl space-y-3 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-[#FEF2F0] text-[#E54827] flex items-center justify-center font-mono font-extrabold text-xs">
              02
            </div>
            <h4 className="font-bold text-[#18181B] text-sm">Provide Dimensions</h4>
            <p className="text-[#52525B] text-xs leading-relaxed">
              Share exact wall dimensions or request a Lagos site measurement visit from our team.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#E4E4E7] rounded-2xl space-y-3 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-[#FEF2F0] text-[#E54827] flex items-center justify-center font-mono font-extrabold text-xs">
              03
            </div>
            <h4 className="font-bold text-[#18181B] text-sm">Confirm Design & Quote</h4>
            <p className="text-[#52525B] text-xs leading-relaxed">
              Review itemized specs, chosen lighting, finish, hardware, and instant WhatsApp quote.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#E4E4E7] rounded-2xl space-y-3 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-[#FEF2F0] text-[#E54827] flex items-center justify-center font-mono font-extrabold text-xs">
              04
            </div>
            <h4 className="font-bold text-[#18181B] text-sm">Crafted & Installed</h4>
            <p className="text-[#52525B] text-xs leading-relaxed">
              Our workshop builds your piece with precision and handles safe delivery and wall mounting.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E54827] hover:bg-[#C22E14] text-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-md"
          >
            Start Your Custom Order <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* --- THE VAULT EDITORIAL SPOTLIGHT (Selective Dark Section) --- */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto my-12">
        <div className="bg-[#18181B] text-white rounded-3xl p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-xl">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E54827]/40 bg-[#E54827]/15 text-[#E54827] text-xs font-bold uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5 text-[#E54827]" /> Physical Wooden Savings Box
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              Save Physically. <span className="text-[#E54827]">Track Progress Simply.</span>
            </h2>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
              The Vault gives your personal savings a physical, handcrafted home in solid hardwood. Pair your physical wooden box with its dedicated manual web-based deposit tracker.
            </p>

            <div className="space-y-2 text-xs text-gray-300 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#E54827]" />
                <span>Hand-carved solid oak & teak hardwood with heavy brass lock</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#E54827]" />
                <span>QR code plate linking directly to your private manual deposit ledger</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#E54827]" />
                <span>Set personal target goals & monitor savings milestones easily</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap gap-3">
              <Link
                to="/vault"
                className="bg-[#E54827] hover:bg-[#C22E14] text-white font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-md"
              >
                View The Vault (₦35,000)
              </Link>

              <a
                href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER.replace('+', '')}?text=Hello%20Aplund!%20I%20want%20to%20order%20The%20Vault%20Savings%20Box.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-full text-xs transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" /> Order via WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 bg-[#27272A] border border-[#3F3F46] rounded-2xl space-y-4">
              <div className="flex justify-between items-center border-b border-[#3F3F46] pb-3">
                <span className="text-xs text-gray-400 font-mono">VAULT SPECIFICATIONS</span>
                <span className="text-xs text-[#E54827] font-bold font-mono">₦35,000</span>
              </div>
              <div className="space-y-2 text-xs text-gray-300">
                <p><span className="text-gray-400">Material:</span> Solid Hardwood & Heavy Brass Lock</p>
                <p><span className="text-gray-400">Dimensions:</span> 25cm x 18cm x 16cm</p>
                <p><span className="text-gray-400">Capacity:</span> Holds up to ₦1.5M banknotes</p>
                <p><span className="text-gray-400">Ledger Companion:</span> Included via QR Code</p>
              </div>
              <p className="text-[11px] text-gray-400 italic pt-2 border-t border-[#3F3F46] leading-relaxed">
                * Note: Your recorded savings will be based on the deposits and withdrawals you enter manually. The Vault does not automatically detect the cash inside it.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- WHY APLUND CRAFTSMANSHIP --- */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-[#E4E4E7]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs text-[#E54827] uppercase tracking-widest font-bold">
            The Aplund Difference
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-1 text-[#18181B]">Why Choose Our Atelier</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-7 bg-white border border-[#E4E4E7] rounded-3xl space-y-3.5 shadow-sm">
            <div className="w-11 h-11 rounded-2xl bg-[#FEF2F0] flex items-center justify-center text-[#E54827]">
              <Ruler className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#18181B]">Uncompromising Sizing</h3>
            <p className="text-[#52525B] text-xs leading-relaxed">
              Every mirror and wardrobe is constructed to fit your wall space down to the millimeter, eliminating awkward gaps.
            </p>
          </div>

          <div className="p-7 bg-white border border-[#E4E4E7] rounded-3xl space-y-3.5 shadow-sm">
            <div className="w-11 h-11 rounded-2xl bg-[#FEF2F0] flex items-center justify-center text-[#E54827]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#18181B]">High-Grade Materials</h3>
            <p className="text-[#52525B] text-xs leading-relaxed">
              We exclusively utilize 5mm copper-free HD glass, moisture-resistant boards, Blum hinges, and seasoned solid hardwoods.
            </p>
          </div>

          <div className="p-7 bg-white border border-[#E4E4E7] rounded-3xl space-y-3.5 shadow-sm">
            <div className="w-11 h-11 rounded-2xl bg-[#FEF2F0] flex items-center justify-center text-[#E54827]">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#18181B]">Lagos Craft & Installation</h3>
            <p className="text-[#52525B] text-xs leading-relaxed">
              Our local Lagos craft atelier handles everything from site measurement to professional wall mounting and electrical fitting.
            </p>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto text-center">
        <div className="bg-[#18181B] text-white rounded-3xl p-8 md:p-14 space-y-5 shadow-lg">
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Ready To Elevate Your Interior Space?
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Browse our catalog, customize your dimensions, or speak directly with our Lagos craft team on WhatsApp.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              to="/shop"
              className="w-full sm:w-auto bg-[#E54827] hover:bg-[#C22E14] text-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-md"
            >
              Shop All Products
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all border border-white/20"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
