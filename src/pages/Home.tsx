import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Award, Briefcase, Sparkles, MapPin } from "lucide-react";
import { projects } from "../lib/projects-data";

export const Home: React.FC = () => {
  // Take first 3 projects as a teaser
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
      
      {/* Main Hero Section */}
      <section className="relative flex flex-col justify-center min-h-screen px-6 md:px-12 lg:px-24 pt-32 pb-20 overflow-hidden">
        {/* Background Image with Blur and Fade */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/pLQ223xr/Screenshot-20260522-142556-Tik-Tok.jpg" 
            alt="Fitted dual-tone modern wardrobes backplane" 
            className="w-full h-full object-cover blur-[8px] opacity-40 scale-110"
            referrerPolicy="no-referrer"
          />
          {/* Gradient fade to background color (#050505) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#050505]/80 to-[#050505]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent opacity-80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold uppercase tracking-wider w-fit mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            Designs For Impact
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter mb-6"
          >
            Aplund Wardrobes & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">Mirrors</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mb-8 md:mb-10 leading-relaxed"
          >
            Hand-crafted in Lagos | Shipping Nationwide & Ghana
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link 
              to="/portfolio"
              className="group relative w-full sm:w-auto flex items-center justify-center gap-2 bg-gold text-black px-8 py-4 rounded-full font-bold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(197,168,128,0.4)]"
            >
              <span className="relative z-10">Explore Our Work</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/contact"
              className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm tracking-wide border border-white/20 hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md"
            >
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                <Play className="w-3 h-3 ml-0.5" />
              </div>
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="relative z-10 py-8 border-y border-gold/20 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center md:text-left">
            {[
              { label: "15+ Years Experience", icon: Award, stat: "15+ Years" },
              { label: "500+ Projects Fitted", icon: Briefcase, stat: "500+ Built" },
              { label: "100% Bespoke Designs", icon: Sparkles, stat: "Bespoke" },
              { label: "Lagos Workshop", icon: MapPin, stat: "Local Craft" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 md:gap-4">
                <div className="p-3 rounded-full bg-gold/10 border border-gold/20 flex-shrink-0">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-white text-sm md:text-base leading-tight">{item.label}</h4>
                  <p className="text-[10px] md:text-xs text-gold font-semibold uppercase tracking-widest mt-0.5">{item.stat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Portfolio Preview */}
      <section className="relative z-10 py-24 px-6 md:px-12 lg:px-24 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-sans text-3xl md:text-5xl font-black mb-4">Featured <span className="text-gold">Creations</span></h2>
              <p className="text-gray-400 max-w-md">Get a glimpse of our handcrafted furniture fitted inside Nigeria’s finest properties.</p>
            </div>
            <Link 
              to="/portfolio"
              className="text-gold font-bold text-sm tracking-wider uppercase inline-flex items-center gap-2 hover:underline cursor-pointer group"
            >
              View Full Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={project.title}
                className="group relative h-[360px] rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-end"
              >
                <img 
                  src={project.img} 
                  alt={`${project.title} - Custom handcrafted piece`} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-0" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent z-10"></div>
                <div className="relative p-6 z-20">
                  <span className="px-2.5 py-0.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-[9px] font-bold uppercase tracking-wider w-fit block mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-sans text-lg font-bold mb-1 text-white group-hover:text-gold transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-xs mb-3 line-clamp-1">{project.desc}</p>
                  <Link to="/portfolio" className="text-[10px] font-bold uppercase tracking-widest text-gold inline-flex items-center gap-1">
                    Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="relative z-10 py-24 px-6 md:px-12 lg:px-24 bg-black/60 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-5xl font-black mb-2 tracking-tight">How We <span className="text-gold">Work</span></h2>
            <div className="w-24 h-1 bg-gold mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-400 max-w-lg mx-auto mt-6">From consultation to installation, we handcraft premium tailored furniture to make your home uniquely yours.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mb-16">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent z-0"></div>

            {[
              { num: "01", title: "CONSULTATION", desc: "We visit your space and understand your needs" },
              { num: "02", title: "DESIGN", desc: "Custom drawings tailored to your room" },
              { num: "03", title: "CRAFT", desc: "Hand-built in our Lagos workshop" },
              { num: "04", title: "INSTALL", desc: "Fitted perfectly, down to the millimetre" }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center z-10 group"
              >
                <div className="w-16 h-16 rounded-full bg-black border-2 border-gold flex items-center justify-center mb-6 relative z-10 font-sans font-black text-xl text-gold shadow-[0_0_20px_rgba(197,168,128,0.2)] group-hover:scale-110 transition-transform duration-300">
                  {step.num}
                </div>
                <h3 className="font-sans text-base font-bold text-white mb-3 uppercase tracking-wider">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gold hover:bg-gold-hover text-black font-bold rounded-full text-sm tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(197,168,128,0.3)] inline-block"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Introducing Aplund Savings Box Section */}
      <section className="relative z-10 py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
        {/* Background ambient gold radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c9a96e]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Details */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#c9a96e]/30 bg-[#c9a96e]/10 text-[#c9a96e] text-[10px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 animate-pulse" /> New Launch
            </span>
            
            <h2 className="font-sans text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Introducing the Handcrafted <br className="hidden md:inline" />
              <span className="text-gold">Aplund Savings Box</span>
            </h2>
            
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              We believe daily rituals should be elegant. Meet our physical, hand-carved wooden lock boxes—meticulously crafted from Lagos’s finest hardwoods and equipped with personalized, secure digital tracking ledgers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20 text-gold font-bold">✓</div>
                <span>Premium Oak & Teak finishing</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20 text-gold font-bold">✓</div>
                <span>Polished heavy brass locks</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20 text-gold font-bold">✓</div>
                <span>Engraved secure QR tracking plate</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20 text-gold font-bold">✓</div>
                <span>Private 4-digit security PIN ledger</span>
              </div>
            </div>

            <div className="pt-4">
              <Link 
                to="/save" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-gold-hover text-black font-bold rounded-full text-sm tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(197,168,128,0.3)] cursor-pointer"
              >
                Learn More & Buy Box
              </Link>
            </div>
          </div>

          {/* Interactive Visual/Image Box Mock */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              whileHover={{ rotateY: -10, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="relative aspect-square max-w-[360px] mx-auto bg-gradient-to-tr from-[#121212] to-[#262626] border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,168,128,0.06)_0%,transparent_60%)] pointer-events-none"></div>
              
              <div className="flex justify-between items-center relative z-10">
                <span className="font-mono text-[9px] text-[#c9a96e] border border-[#c9a96e]/30 px-2 py-0.5 rounded uppercase tracking-wider font-semibold">APLUND L.01</span>
                <div className="w-3.5 h-3.5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div></div>
              </div>

              <div className="my-auto flex flex-col items-center justify-center space-y-4 relative z-10" style={{ transform: "translateZ(30px)" }}>
                <div className="w-24 h-24 bg-gradient-to-b from-[#8f6e3c] to-[#4a3416] rounded-xl border border-gold/30 shadow-inner flex items-center justify-center relative">
                  <div className="w-8 h-8 rounded-full bg-[#1c1204] flex items-center justify-center border border-gold/40 text-[#c9a96e] shadow-md">
                    🔒
                  </div>
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20"></div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-white tracking-wide">Master Bedroom Vault</p>
                  <p className="text-[10px] text-gray-500 font-mono mt-0.5">Lagos, NG • 100% Solid Oak</p>
                </div>
              </div>

              <div className="flex justify-between items-end relative z-10" style={{ transform: "translateZ(10px)" }}>
                <div>
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold">Tracked Balance</p>
                  <p className="text-base font-bold text-gold">₦450,000</p>
                </div>
                <div className="w-8 h-8 rounded bg-black/60 border border-white/10 flex items-center justify-center text-xs text-[#c9a96e] font-bold">
                  QR
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};
