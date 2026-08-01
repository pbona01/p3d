import React, { useState } from 'react';
import { projects } from '../lib/projects-data';
import { Sparkles, ArrowRight, MessageSquare } from 'lucide-react';
import { OFFICIAL_WHATSAPP_NUMBER } from '../lib/products-data';
import { Link } from 'react-router-dom';

export const OurWorkPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans py-12 px-4 md:px-8 max-w-7xl mx-auto selection:bg-[#c5a880] selection:text-black">
      
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs text-[#c5a880] uppercase tracking-widest font-bold">
          Lagos Atelier Showcase
        </span>
        <h1 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight">
          Our Craft & Installed Work
        </h1>
        <p className="text-gray-400 text-sm mt-3 leading-relaxed">
          Explore real client installations, aura mirror setups, and fitted drip wardrobes handcrafted in Lagos.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {['All', 'Mirrors', 'Wardrobes'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#c5a880] text-black shadow-lg'
                : 'bg-[#121212] text-gray-400 border border-white/10 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-[#121212] border border-white/10 rounded-3xl overflow-hidden group hover:border-[#c5a880]/50 transition-all duration-300 flex flex-col"
          >
            <div className="aspect-[4/3] relative overflow-hidden bg-black/40">
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-[#c5a880] border border-[#c5a880]/30 text-[10px] uppercase font-bold px-2.5 py-1 rounded-full">
                {proj.category}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#c5a880] transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                  {proj.story}
                </p>
              </div>

              <a
                href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER.replace('+', '')}?text=Hello%20Aplund!%20I%20saw%20"${encodeURIComponent(proj.title)}"%20in%20your%20portfolio%20and%20would%20like%20a%20similar%20design%20quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#c5a880] hover:underline pt-2 border-t border-white/5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" /> Request Similar Design Quote
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
