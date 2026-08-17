import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Ruler, Wrench, ArrowRight } from 'lucide-react';
import { OFFICIAL_LOCATION } from '../lib/products-data';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#18181B] font-sans py-12 px-4 md:px-8 max-w-6xl mx-auto selection:bg-[#FEF2F0] selection:text-[#E54827]">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs text-[#E54827] uppercase tracking-widest font-extrabold">
          Our Story & Atelier
        </span>
        <h1 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight text-[#18181B]">
          About Aplund Company
        </h1>
        <p className="text-[#52525B] text-sm mt-3 leading-relaxed">
          Lagos-based bespoke custom furniture studio specializing in statement LED aura mirrors, fitted drip wardrobes, and physical savings craftsmanship.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-5 text-sm text-[#52525B] leading-relaxed font-normal">
          <h2 className="text-2xl font-black text-[#18181B]">Uncompromising Craft In Lagos</h2>
          <p>
            Founded in Lagos, Nigeria, Aplund Company emerged from a passion for elevated living spaces. Standard store furniture often fails to account for unique wall dimensions, lighting atmospheres, or local interior aesthetics.
          </p>
          <p>
            We bridge that gap by offering full customization: from custom-cut 5mm copper-free HD mirrors with ambient LED backlighting to fitted executive wardrobes designed specifically around your room architecture.
          </p>
          <p>
            Every piece is constructed in our workshop by skilled Lagos woodworkers, glass artisans, and finish masters, using solid hardwoods, Blum soft-close fittings, and moisture-resistant boards.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-[#E4E4E7] aspect-[4/3] bg-white shadow-sm">
          <img
            src="https://i.postimg.cc/vB2PqNnm/a5164097-dd7b-4477-ae33-c34845983535.jpg"
            alt="Aplund Craft Workshop"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-[#E4E4E7] text-xs shadow-md">
            <span className="text-[#E54827] font-bold uppercase text-[10px]">Atelier Location</span>
            <p className="text-[#18181B] font-bold mt-0.5">{OFFICIAL_LOCATION}</p>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="p-6 bg-white border border-[#E4E4E7] rounded-2xl space-y-3 shadow-sm">
          <Ruler className="w-8 h-8 text-[#E54827]" />
          <h3 className="font-bold text-[#18181B] text-base">Custom Sizing</h3>
          <p className="text-xs text-[#52525B] leading-relaxed">
            Every mirror or wardrobe is built to your exact wall measurements so it fits seamlessly into your room.
          </p>
        </div>

        <div className="p-6 bg-white border border-[#E4E4E7] rounded-2xl space-y-3 shadow-sm">
          <ShieldCheck className="w-8 h-8 text-[#E54827]" />
          <h3 className="font-bold text-[#18181B] text-base">Verified Materials</h3>
          <p className="text-xs text-[#52525B] leading-relaxed">
            We exclusively use 5mm copper-free HD glass, seasoned solid hardwoods, and Blum soft-close drawer slides.
          </p>
        </div>

        <div className="p-6 bg-white border border-[#E4E4E7] rounded-2xl space-y-3 shadow-sm">
          <Wrench className="w-8 h-8 text-[#E54827]" />
          <h3 className="font-bold text-[#18181B] text-base">Professional Fitting</h3>
          <p className="text-xs text-[#52525B] leading-relaxed">
            Our team handles site measurement, safe delivery, electrical fitting, and wall mounting in Lagos.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-white border border-[#E4E4E7] rounded-3xl p-10 space-y-4 shadow-sm">
        <h2 className="text-2xl font-black text-[#18181B]">Let's Craft Your Next Interior Statement</h2>
        <p className="text-xs text-[#52525B] max-w-md mx-auto">
          Explore our store collection or reach out directly to schedule a custom consultation.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <Link
            to="/shop"
            className="bg-[#E54827] hover:bg-[#C22E14] text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all shadow-md"
          >
            Browse Products
          </Link>
          <Link
            to="/contact"
            className="bg-[#FAF9F6] hover:bg-[#E4E4E7] text-[#18181B] border border-[#E4E4E7] font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all"
          >
            Contact Atelier
          </Link>
        </div>
      </div>

    </div>
  );
};
