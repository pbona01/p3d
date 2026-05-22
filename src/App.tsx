/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowRight, Play, Menu, X, Mail, Palette, Hammer, Truck, Instagram, Twitter } from "lucide-react";
import { useRef, useState } from "react";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  // Parallax for hero images
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const y3 = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="relative min-h-screen font-body selection:bg-neon-orange selection:text-white overflow-hidden" ref={containerRef}>
      {/* Grain Texture Overlay */}
      <div className="bg-noise"></div>

      {/* Navigation */}
      <header className="fixed top-4 left-4 right-4 md:left-8 md:right-8 lg:left-12 lg:right-12 z-50 flex items-center justify-between px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 z-50"
        >
          <img 
            src="https://i.postimg.cc/N0w5D1Gv/Screenshot-20260522-142444-Tik-Tok.jpg" 
            alt="Aplund Company Logo" 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-white/10"
            referrerPolicy="no-referrer"
          />
          <span className="font-sans font-bold text-lg md:text-xl tracking-tight">APLUND</span>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300"
        >
          <a href="#collections" className="hover:text-white transition-colors">Collections</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#join" className="hover:text-neon-orange transition-colors">Join the Culture</a>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block"
        >
          <button className="px-5 py-2.5 text-sm font-bold bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-md transition-all">
            Contact Us
          </button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-50 p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8"
          >
            <a href="#collections" onClick={() => setIsMenuOpen(false)} className="font-sans text-3xl font-bold text-white hover:text-neon-orange transition-colors">Collections</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)} className="font-sans text-3xl font-bold text-white hover:text-neon-orange transition-colors">Process</a>
            <a href="#join" onClick={() => setIsMenuOpen(false)} className="font-sans text-3xl font-bold text-white hover:text-neon-orange transition-colors">Join the Culture</a>
            <button className="mt-8 px-8 py-4 text-lg font-bold bg-neon-orange text-white rounded-full">
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Section */}
      <section className="relative flex flex-col justify-center min-h-screen px-6 md:px-12 lg:px-24 pt-32 pb-20 overflow-hidden">
        {/* Background Image with Blur and Fade */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/pLQ223xr/Screenshot-20260522-142556-Tik-Tok.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover blur-[8px] opacity-40 scale-110"
            referrerPolicy="no-referrer"
          />
          {/* Gradient fade to background color (#050505) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#050505]/80 to-[#050505]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent opacity-80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mt-10 md:mt-0">
          <h2 className="sr-only">Insta Mirror available for orders, neon mirrors, custom designs Mushin Fadeyi</h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon-orange/30 bg-neon-orange/10 text-neon-orange text-xs font-bold uppercase tracking-wider w-fit mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-neon-orange animate-pulse"></span>
            Designs For Impact
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter mb-6"
          >
            Custom Mirrors That Design For <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-orange to-neon-red">Impact</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mb-8 md:mb-10 leading-relaxed"
          >
            Premium handcrafted Insta Mirrors, glowing neon silhouettes, and statement mirrors. Delivered nationwide. Call/WhatsApp: 07070276427
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button className="group relative w-full sm:w-auto flex items-center justify-center gap-2 bg-neon-orange text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,69,0,0.4)]">
              <span className="relative z-10">Order Custom Piece</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-neon-orange to-neon-red opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm tracking-wide border border-white/20 hover:bg-white hover:text-black transition-all backdrop-blur-md">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                <Play className="w-3 h-3 ml-0.5" />
              </div>
              View Gallery
            </button>
          </motion.div>

          {/* Social Proof / Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 md:mt-16 flex items-center gap-6 md:gap-8 border-t border-white/10 pt-8 max-w-xl"
          >
            <div>
              <p className="font-sans font-bold text-xl md:text-2xl text-white">1000+</p>
              <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mt-1">Custom Mirrors</p>
            </div>
            <div className="w-px h-8 md:h-10 bg-white/10"></div>
            <div>
              <p className="font-sans font-bold text-xl md:text-2xl text-white">Mushin Fadeyi</p>
              <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mt-1">Based Studio</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section id="collections" className="relative z-10 py-24 px-6 md:px-12 lg:px-24 bg-black/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-sans text-3xl md:text-5xl font-black mb-4">Our <span className="text-neon-orange">Collections</span></h2>
              <p className="text-gray-400 max-w-md">Handcrafted pieces designed to make a statement. Choose your medium.</p>
            </div>
            <button className="text-sm font-bold uppercase tracking-wider text-white hover:text-neon-orange transition-colors flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Insta Mirrors", desc: "Life-sized Smartphone Mirrors", img: "https://i.postimg.cc/N0w5D1Gv/Screenshot-20260522-142444-Tik-Tok.jpg" },
              { title: "Neon Silhouettes", desc: "Character & Pop Art LEDs", img: "https://i.postimg.cc/rmfsq31y/Screenshot-20260522-142514-Tik-Tok.jpg" },
              { title: "Wavy Aesthetics", desc: "Modern Glowing Edges", img: "https://i.postimg.cc/ZKBnhf02/Screenshot-20260522-142551-Tik-Tok.jpg" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative h-[400px] rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-sans text-2xl font-bold mb-1">{item.title}</h3>
                  <p className="text-neon-orange text-sm font-medium mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infinite Marquee */}
      <div className="relative z-10 w-full overflow-hidden bg-neon-orange py-4 border-y border-white/10 flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex items-center gap-8 font-sans font-black text-xl md:text-2xl text-black uppercase tracking-widest"
        >
          {Array(10).fill("INSTA MIRRORS • CUSTOM LED • DESIGNS FOR IMPACT • NATIONWIDE DELIVERY • ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>

      {/* Gallery Section */}
      <section id="gallery" className="relative z-10 py-24 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-5xl font-black mb-4">The <span className="text-neon-red">Archive</span></h2>
            <p className="text-gray-400 max-w-lg mx-auto">A glimpse into our recent custom commissions and studio pieces.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { img: "https://i.postimg.cc/pLQ223xr/Screenshot-20260522-142556-Tik-Tok.jpg", span: "col-span-2 row-span-2" },
              { img: "https://i.postimg.cc/N0w5D1Gv/Screenshot-20260522-142444-Tik-Tok.jpg", span: "col-span-2 md:col-span-1 row-span-1" },
              { img: "https://i.postimg.cc/ZKBnhf02/Screenshot-20260522-142551-Tik-Tok.jpg", span: "col-span-2 md:col-span-1 row-span-1" },
              { img: "https://i.postimg.cc/rmfsq31y/Screenshot-20260522-142514-Tik-Tok.jpg", span: "col-span-2 row-span-1" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl overflow-hidden border border-white/10 group ${item.span} min-h-[200px] md:min-h-[300px]`}
              >
                <img 
                  src={item.img} 
                  alt="Gallery Piece" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="font-sans font-bold text-white tracking-widest uppercase text-sm border border-white/20 px-4 py-2 rounded-full">View Piece</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section id="process" className="relative z-10 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-5xl font-black mb-4">How It <span className="text-neon-red">Works</span></h2>
            <p className="text-gray-400 max-w-lg mx-auto">From your imagination to your living room. We handle the entire creative process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            {[
              { icon: Palette, title: "1. The Vision", desc: "Share your idea, reference images, or let our artists design something completely unique for you." },
              { icon: Hammer, title: "2. The Craft", desc: "Our Mushin Fadeyi artisans cut, frame, and wire your custom mirror with high-quality LEDs and reflective glass." },
              { icon: Truck, title: "3. The Culture", desc: "Securely packaged and delivered straight to your door, ready to elevate your space anywhere nationwide." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_30px_rgba(255,69,0,0.1)]">
                  <step.icon className="w-10 h-10 text-neon-orange" />
                </div>
                <h3 className="font-sans text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Collector Section */}
      <section id="join" className="relative z-10 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto relative">
          {/* Glow behind form */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-orange/20 to-neon-red/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-orange to-neon-red"></div>
            
            <Mail className="w-12 h-12 text-neon-orange mx-auto mb-6" />
            <h2 className="font-sans text-3xl md:text-5xl font-black mb-4">Join The Inner Circle</h2>
            <p className="text-gray-300 mb-10 max-w-md mx-auto">
              Drop your email to get exclusive access to limited drops, behind-the-scenes content, and <span className="text-neon-orange font-bold">10% off your first custom piece</span>.
            </p>

            {isSubscribed ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-xl inline-flex items-center gap-2 font-bold"
              >
                Welcome to the culture. Check your inbox.
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address" 
                  className="flex-1 bg-black/50 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-orange transition-colors"
                />
                <button 
                  type="submit"
                  className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
                >
                  Get 10% Off
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black pt-16 pb-8 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img 
              src="https://i.postimg.cc/N0w5D1Gv/Screenshot-20260522-142444-Tik-Tok.jpg" 
              alt="Aplund Logo" 
              className="w-8 h-8 rounded-full object-cover border border-white/10"
              referrerPolicy="no-referrer"
            />
            <span className="font-sans font-bold text-lg tracking-tight">APLUND</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Shipping</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-orange hover:text-white transition-all text-gray-400">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-orange hover:text-white transition-all text-gray-400">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center mt-12 text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Aplund Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
