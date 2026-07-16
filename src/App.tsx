/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Play, 
  Menu, 
  X, 
  Mail, 
  Palette, 
  Hammer, 
  Truck, 
  Instagram, 
  Twitter,
  Award,
  Briefcase,
  Sparkles,
  MapPin,
  Upload,
  ChevronLeft,
  ChevronRight,
  Phone
} from "lucide-react";
import React, { useRef, useState } from "react";

// Custom Pinterest SVG Icon
const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.16-.1-.95-.2-2.4.04-3.43.22-.93 1.4-5.93 1.4-5.93s-.36-.72-.36-1.77c0-1.66.96-2.9 2.16-2.9 1.02 0 1.51.77 1.51 1.68 0 1.03-.65 2.56-.99 3.98-.28 1.18.59 2.15 1.76 2.15 2.11 0 3.73-2.23 3.73-5.44 0-2.84-2.04-4.83-4.96-4.83-3.38 0-5.36 2.54-5.36 5.15 0 1.02.39 2.12.88 2.72.1.12.11.23.08.35-.1.38-.3 1.2-.35 1.4-.06.26-.2.31-.47.19-1.77-.82-2.87-3.41-2.87-5.48 0-4.46 3.24-8.56 9.35-8.56 4.9 0 8.72 3.5 8.72 8.17 0 4.88-3.08 8.8-7.35 8.8-1.44 0-2.8-0.75-3.26-1.63 0 0-.71 2.72-.89 3.39-.32 1.24-1.2 2.79-1.79 3.75 1.12.35 2.31.54 3.54.54 6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
  </svg>
);

// Custom TikTok SVG Icon
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.95 1.2 2.27 2 3.75 2.3v3.83c-1.84-.02-3.61-.64-5.07-1.75-.1-.08-.18-.08-.18.06-.02 2.22 0 4.43-.01 6.65-.05 1.51-.43 3.01-1.12 4.35-.97 1.89-2.58 3.39-4.57 4.21-1.99.82-4.22.95-6.29.37-2.07-.58-3.92-1.92-5.18-3.69C-.45 18.23-.74 15.65-.24 13.25c.5-2.39 1.94-4.52 4.01-5.83 1.76-1.11 3.86-1.63 5.92-1.46.01 1.34 0 2.68.01 4.02-.13-.03-.26-.04-.39-.04-1.21-.01-2.43.43-3.34 1.23-.9.81-1.41 1.99-1.39 3.2.02 1.22.56 2.39 1.48 3.17.92.77 2.14 1.16 3.35 1.07 1.21-.08 2.33-.71 3.04-1.7.53-.74.79-1.63.79-2.53.02-3.51.01-7.02.02-10.53V.02z"/>
  </svg>
);

// Custom WhatsApp SVG Icon
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 11.968.01c3.182.001 6.173 1.24 8.421 3.492 2.249 2.251 3.486 5.244 3.484 8.425-.004 6.619-5.34 11.957-11.91 11.957-2.005-.001-3.973-.507-5.729-1.467L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.864-9.843.002-2.63-1.023-5.101-2.886-6.967C16.783 1.94 14.316.916 11.97.915 6.533.915 2.11 5.328 2.106 10.76c-.001 1.772.463 3.504 1.344 5.034l-.196-.948-1.127 4.116 4.221-1.107.9 1.339zm11.302-3.11c-.312-.156-1.848-.911-2.136-1.015-.288-.104-.497-.156-.706.156-.208.312-.807 1.015-.989 1.223-.182.208-.364.234-.676.078a11.168 11.168 0 0 1-2.518-1.55 12.33 12.33 0 0 1-1.743-2.17c-.182-.312-.019-.481.137-.636.141-.14.312-.364.468-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.706-1.7-.967-2.327-.254-.611-.513-.526-.706-.536-.183-.009-.391-.011-.6-.011-.208 0-.547.078-.833.39-.286.312-1.092 1.066-1.092 2.6s1.118 3.016 1.274 3.224c.156.208 2.19 3.344 5.305 4.688.74.32 1.319.51 1.77.653.743.236 1.42.203 1.954.123.595-.089 1.848-.755 2.11-1.446.26-.692.26-1.288.182-1.41-.078-.122-.288-.195-.6-.351z"/>
  </svg>
);

interface Project {
  title: string;
  desc: string;
  img: string;
  category: string; // "Wardrobes" | "Mirrors" | "Walk-in Closets"
  story: string;
  images: string[];
}

const projects: Project[] = [
  {
    title: "The Ultimate Aura Mirror",
    desc: "A custom full-length interactive lighting piece crafted with dynamic aura-glow projection.",
    img: "https://i.postimg.cc/vB2PqNnm/a5164097-dd7b-4477-ae33-c34845983535.jpg",
    category: "Mirrors",
    story: "Individually shaped and polished in our Lagos workshop, our premium Aura Mirror creates the ultimate aesthetic vibe with halo illumination and high-grade glass.",
    images: [
      "https://i.postimg.cc/vB2PqNnm/a5164097-dd7b-4477-ae33-c34845983535.jpg",
      "https://i.postimg.cc/d04n3x4h/f8e41194-bf0b-4826-8a41-4076e72b6095.jpg",
      "https://i.postimg.cc/N0w5D1Gv/Screenshot-20260522-142444-Tik-Tok.jpg"
    ]
  },
  {
    title: "Signature Instagram Mirror",
    desc: "Designed with smart edge lighting, perfect for modern bedrooms and gorgeous content creation.",
    img: "https://i.postimg.cc/d04n3x4h/f8e41194-bf0b-4826-8a41-4076e72b6095.jpg",
    category: "Mirrors",
    story: "Crafted with dynamic edge illumination, this high-fidelity Instagram Mirror elevates any room and guarantees flawless lighting for selfie videos and outfit checks.",
    images: [
      "https://i.postimg.cc/d04n3x4h/f8e41194-bf0b-4826-8a41-4076e72b6095.jpg",
      "https://i.postimg.cc/vB2PqNnm/a5164097-dd7b-4477-ae33-c34845983535.jpg",
      "https://i.postimg.cc/ZKBnhf02/Screenshot-20260522-142551-Tik-Tok.jpg"
    ]
  },
  {
    title: "Luxury Fitted Drip Wardrobes",
    desc: "Bespoke dual-tone wardrobe units styled with customized drawers, gold trims, and motion LEDs.",
    img: "https://i.postimg.cc/pLQ223xr/Screenshot-20260522-142556-Tik-Tok.jpg",
    category: "Wardrobes",
    story: "Tailored to your room layout, our luxury Drip Wardrobes incorporate personalized soft-close cabinets, rich gold handle finishes, and motion-activated inner lighting.",
    images: [
      "https://i.postimg.cc/pLQ223xr/Screenshot-20260522-142556-Tik-Tok.jpg",
      "https://i.postimg.cc/d04n3x4h/f8e41194-bf0b-4826-8a41-4076e72b6095.jpg",
      "https://i.postimg.cc/vB2PqNnm/a5164097-dd7b-4477-ae33-c34845983535.jpg"
    ]
  },
  {
    title: "Viral Snapchat Mirrors",
    desc: "Custom outline mirror designed with rich, glowing neon backlighting.",
    img: "https://i.postimg.cc/rmfsq31y/Screenshot-20260522-142514-Tik-Tok.jpg",
    category: "Mirrors",
    story: "Featuring customizable RGB backing, this Snapchat Mirror is a favourite for daily streaks and high-fidelity snaps.",
    images: [
      "https://i.postimg.cc/rmfsq31y/Screenshot-20260522-142514-Tik-Tok.jpg",
      "https://i.postimg.cc/ZKBnhf02/Screenshot-20260522-142551-Tik-Tok.jpg",
      "https://i.postimg.cc/N0w5D1Gv/Screenshot-20260522-142444-Tik-Tok.jpg"
    ]
  },
  {
    title: "Interactive TikTok Mirrors",
    desc: "Smartphone style interface with warm intelligent backlighting.",
    img: "https://i.postimg.cc/N0w5D1Gv/Screenshot-20260522-142444-Tik-Tok.jpg",
    category: "Mirrors",
    story: "Designed in the classic style of dynamic mobile interfaces, our TikTok Mirrors combine high-definition glass with a playful retro-tech display.",
    images: [
      "https://i.postimg.cc/N0w5D1Gv/Screenshot-20260522-142444-Tik-Tok.jpg",
      "https://i.postimg.cc/rmfsq31y/Screenshot-20260522-142514-Tik-Tok.jpg",
      "https://i.postimg.cc/vB2PqNnm/a5164097-dd7b-4477-ae33-c34845983535.jpg"
    ]
  },
  {
    title: "Bespoke Wavy LED Mirror",
    desc: "Art deco inspired wavy border mirror perfect for contemporary closets.",
    img: "https://i.postimg.cc/ZKBnhf02/Screenshot-20260522-142551-Tik-Tok.jpg",
    category: "Mirrors",
    story: "Undulating organic shape meet warm-white neon strip lights to create a beautifully glowing focal point.",
    images: [
      "https://i.postimg.cc/ZKBnhf02/Screenshot-20260522-142551-Tik-Tok.jpg",
      "https://i.postimg.cc/vB2PqNnm/a5164097-dd7b-4477-ae33-c34845983535.jpg",
      "https://i.postimg.cc/d04n3x4h/f8e41194-bf0b-4826-8a41-4076e72b6095.jpg"
    ]
  }
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State for Portfolio Filters and Modal
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeModalImageIdx, setActiveModalImageIdx] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "Bedroom",
    projectType: "Wardrobe",
    stylePreference: "Modern Minimal",
    dimensions: "",
    budgetRange: "₦30k-₦50k",
    timeline: "ASAP",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0].name);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    const textMessage = `Hello Aplund Company! I would like to request a quote. Here are my project details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone/WhatsApp: ${formData.phone}
- Room Type: ${formData.roomType}
- Project Type: ${formData.projectType}
- Style Preference: ${formData.stylePreference}
- Approx. Dimensions: ${formData.dimensions || 'Not specified'}
- Budget Range: ${formData.budgetRange}
- Timeline: ${formData.timeline}
- Message: ${formData.message || 'None'}`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/2347070276427?text=${encodedMessage}`;
    
    window.location.href = whatsappUrl;
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      roomType: "Bedroom",
      projectType: "Wardrobe",
      stylePreference: "Modern Minimal",
      dimensions: "",
      budgetRange: "₦30k-₦50k",
      timeline: "ASAP",
      message: "",
    });
    setUploadedFile(null);
    setIsSubmitted(false);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="relative min-h-screen font-body selection:bg-gold selection:text-black overflow-hidden" ref={containerRef}>
      {/* Grain Texture Overlay */}
      <div className="bg-noise"></div>

      {/* Navigation */}
      <header className="fixed top-4 left-4 right-4 md:left-8 md:right-8 lg:left-12 lg:right-12 z-50 flex items-center justify-between px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 z-50 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img 
            src="https://i.postimg.cc/c19q2DWJ/file.jpg" 
            alt="Aplund Company Logo" 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-white/10"
            referrerPolicy="no-referrer"
          />
          <span className="font-sans font-bold text-lg md:text-xl tracking-tight text-white hover:text-gold transition-colors">APLUND</span>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300"
        >
          <button onClick={() => scrollTo("portfolio")} className="hover:text-gold transition-colors font-semibold">Portfolio</button>
          <button onClick={() => scrollTo("process")} className="hover:text-gold transition-colors font-semibold">Our Process</button>
          <button onClick={() => scrollTo("testimonials")} className="hover:text-gold transition-colors font-semibold">Testimonials</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-gold transition-colors font-semibold">Contact</button>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block"
        >
          <button 
            onClick={() => scrollTo("contact")}
            className="px-5 py-2.5 text-sm font-bold bg-white/5 hover:bg-gold hover:text-black border border-white/10 rounded-full backdrop-blur-md transition-all duration-300"
          >
            Request a Quote
          </button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-50 p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
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
            <button onClick={() => scrollTo("portfolio")} className="font-sans text-3xl font-bold text-white hover:text-gold transition-colors">Portfolio</button>
            <button onClick={() => scrollTo("process")} className="font-sans text-3xl font-bold text-white hover:text-gold transition-colors">Our Process</button>
            <button onClick={() => scrollTo("testimonials")} className="font-sans text-3xl font-bold text-white hover:text-gold transition-colors">Testimonials</button>
            <button onClick={() => scrollTo("contact")} className="font-sans text-3xl font-bold text-white hover:text-gold transition-colors">Contact</button>
            <button 
              onClick={() => scrollTo("contact")}
              className="mt-8 px-8 py-4 text-lg font-bold bg-gold text-black rounded-full shadow-[0_0_20px_rgba(197,168,128,0.4)] hover:bg-gold-hover transition-all"
            >
              Request My Consultation
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
            <button 
              onClick={() => scrollTo("portfolio")}
              className="group relative w-full sm:w-auto flex items-center justify-center gap-2 bg-gold text-black px-8 py-4 rounded-full font-bold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(197,168,128,0.4)]"
            >
              <span className="relative z-10">Explore Our Work</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => scrollTo("contact")}
              className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm tracking-wide border border-white/20 hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md"
            >
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                <Play className="w-3 h-3 ml-0.5" />
              </div>
              Request a Quote
            </button>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar Section (compact, below hero with gold dividers) */}
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

      {/* Portfolio Section (existing - with added filter tabs, short descriptions, and view project modal) */}
      <section id="portfolio" className="relative z-10 py-24 px-6 md:px-12 lg:px-24 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-sans text-3xl md:text-5xl font-black mb-4">Our <span className="text-gold">Portfolio</span></h2>
              <p className="text-gray-400 max-w-md">Explore recent bespoke commissions and hand-fitted collections across Lagos.</p>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/5 pb-6">
            {["All", "Wardrobes", "Mirrors", "Walk-in Closets"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-5 py-2.5 rounded-full font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === tab 
                    ? "bg-gold text-black shadow-[0_0_15px_rgba(197,168,128,0.4)]" 
                    : "bg-white/5 text-gray-400 hover:text-white border border-white/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={project.title}
                  className="group relative h-[450px] rounded-2xl overflow-hidden border border-white/10 cursor-pointer flex flex-col justify-end"
                  onClick={() => {
                    setSelectedProject(project);
                    setActiveModalImageIdx(0);
                  }}
                >
                  <img 
                    src={project.img} 
                    alt={`${project.title} - Custom handcrafted piece`} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-0" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10"></div>
                  
                  <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>

                  <div className="relative p-8 z-20 w-full">
                    <span className="px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-wider w-fit block mb-3">
                      {project.category}
                    </span>
                    <h3 className="font-sans text-2xl font-bold mb-2 text-white group-hover:text-gold transition-colors">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.desc}</p>
                    <span className="text-xs font-bold uppercase tracking-widest text-gold inline-flex items-center gap-1 group-hover:underline">
                      View Project <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Infinite Marquee */}
      <div className="relative z-10 w-full overflow-hidden bg-gold py-4 border-y border-white/10 flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex items-center gap-8 font-sans font-black text-lg md:text-xl text-black uppercase tracking-widest"
        >
          {Array(10).fill("AURA MIRRORS • INSTAGRAM MIRRORS • DRIP WARDROBES • SNAPCHAT MIRRORS • TIKTOK MIRRORS • LAGOS WORKSHOP • ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>

      {/* Our Process Section ("How We Work") */}
      <section id="process" className="relative z-10 py-24 px-6 md:px-12 lg:px-24 bg-black/60 border-t border-white/5">
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
            <button 
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 bg-gold hover:bg-gold-hover text-black font-bold rounded-full text-sm tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(197,168,128,0.3)]"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 py-24 px-6 md:px-12 lg:px-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-5xl font-black mb-4 tracking-tight">What Our <span className="text-gold">Clients Say</span></h2>
            <p className="text-gray-400 max-w-lg mx-auto">Our commitment to exceptional craft and seamless installation leaves a lasting impression.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The craftsmanship is exceptional. Every detail was perfectly considered, and the custom brass handles match our aesthetic flawlessly.",
                client: "James",
                location: "Lekki, Lagos",
                project: "Master Bedroom Wardrobe"
              },
              {
                quote: "Their full-length backlit mirror is the absolute highlight of my new walk-in closet. The light temperature is absolutely spot on.",
                client: "Sarah",
                location: "Ikeja, Lagos",
                project: "Custom Backlit LED Mirror"
              },
              {
                quote: "From the initial consultation drawings to the final fitted result, the process was incredibly professional. A masterpiece in our hallway.",
                client: "Robert",
                location: "Accra, Ghana",
                project: "Walk-in Dressing Closet"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 relative flex flex-col justify-between"
              >
                <div className="mb-6">
                  <span className="text-6xl text-gold/20 font-serif absolute top-4 left-4 pointer-events-none">“</span>
                  <p className="text-gray-300 italic text-base leading-relaxed relative z-10">{testimonial.quote}</p>
                </div>
                <div className="border-t border-white/5 pt-4 flex flex-col gap-1">
                  <h4 className="font-sans font-bold text-white text-sm">— {testimonial.client}, <span className="text-gray-400">{testimonial.location}</span></h4>
                  <span className="inline-block mt-1 text-[11px] font-bold tracking-widest text-gold uppercase">{testimonial.project}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Consultation Request Contact Form */}
      <section id="contact" className="relative z-10 py-24 px-6 md:px-12 lg:px-24 bg-black/40 border-t border-white/5">
        <div className="max-w-4xl mx-auto relative">
          {/* Glow behind form */}
          <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-white"></div>
            
            <div className="text-center mb-10">
              <Mail className="w-12 h-12 text-gold mx-auto mb-4" />
              <h2 className="font-sans text-3xl md:text-5xl font-black mb-4 tracking-tight">Request a Consultation</h2>
              <p className="text-gray-300 max-w-md mx-auto">
                Fill in your project specifications and receive a free personalized layout plan and quotation tailored to your dimensions.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gold/10 border border-gold/30 text-gold p-8 rounded-2xl text-center flex flex-col items-center gap-4 max-w-lg mx-auto"
              >
                <Sparkles className="w-12 h-12 text-gold animate-bounce" />
                <h3 className="font-sans font-bold text-xl text-white">Consultation Request Received!</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our custom artisan will review your style preference (<em>{formData.stylePreference}</em>) and approximate space measurements. We are redirecting you to WhatsApp at <strong>+234 707 027 6427</strong> to complete your quote, and we will also follow up at <strong>{formData.email}</strong>.
                </p>
                {uploadedFile && (
                  <p className="text-xs text-gray-400 italic">Inspiration file uploaded: {uploadedFile}</p>
                )}
                <button 
                  onClick={handleResetForm}
                  className="mt-4 px-6 py-2 rounded-full border border-gold text-gold hover:bg-gold hover:text-black transition-colors font-bold text-xs"
                >
                  Submit Another Project
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2" htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Robert Sterling" 
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    />
                  </div>
                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2" htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. robert@example.com" 
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    />
                  </div>
                  {/* Phone/WhatsApp field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2" htmlFor="phone">Phone / WhatsApp</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +234 707 027 6427" 
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Room Type Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2" htmlFor="roomType">Room Type</label>
                    <select
                      id="roomType"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    >
                      <option value="Bedroom">Bedroom</option>
                      <option value="Hallway">Hallway</option>
                      <option value="Living Room">Living Room</option>
                      <option value="Walk-in Closet">Walk-in Closet</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Project Type Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2" htmlFor="projectType">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    >
                      <option value="Wardrobe">Wardrobe</option>
                      <option value="Mirror">Mirror</option>
                      <option value="Both">Both</option>
                      <option value="Unsure">Unsure</option>
                    </select>
                  </div>

                  {/* Style Preference Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2" htmlFor="stylePreference">Style Preference</label>
                    <select
                      id="stylePreference"
                      name="stylePreference"
                      value={formData.stylePreference}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    >
                      <option value="Modern Minimal">Modern Minimal</option>
                      <option value="Classic">Classic</option>
                      <option value="Industrial">Industrial</option>
                      <option value="Art Deco">Art Deco</option>
                      <option value="Unsure">Unsure</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Approximate Dimensions */}
                  <div className="md:col-span-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2" htmlFor="dimensions">Approx. Dimensions</label>
                    <input 
                      type="text" 
                      id="dimensions"
                      name="dimensions"
                      value={formData.dimensions}
                      onChange={handleInputChange}
                      placeholder="e.g. 2.4m x 3.1m" 
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    />
                  </div>

                  {/* Budget Range Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2" htmlFor="budgetRange">Budget Range</label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    >
                      <option value="₦30k-₦50k">₦30k-₦50k</option>
                      <option value="₦50k-₦75k">₦50k-₦75k</option>
                      <option value="₦75k-₦100k">₦75k-₦100k</option>
                      <option value="₦100k+">₦100k+</option>
                      <option value="Prefer to discuss">Prefer to discuss</option>
                    </select>
                  </div>

                  {/* Timeline Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2" htmlFor="timeline">Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    >
                      <option value="ASAP">ASAP</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="Just exploring">Just exploring</option>
                    </select>
                  </div>
                </div>

                {/* Upload Inspiration */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">Upload Inspiration (Optional)</label>
                  <div className="relative border border-dashed border-white/20 hover:border-gold rounded-xl p-6 transition-colors duration-300 bg-black/30 flex flex-col items-center justify-center cursor-pointer">
                    <input 
                      type="file" 
                      id="inspiration-file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                    />
                    <Upload className="w-8 h-8 text-gold mb-2" />
                    <span className="text-xs text-gray-400 font-bold">
                      {uploadedFile ? `Selected: ${uploadedFile}` : "Drag & Drop or Click to browse inspiration photos"}
                    </span>
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2" htmlFor="message">Message & Details</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your space, material preference or special requests..." 
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-hover text-black px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(197,168,128,0.3)] cursor-pointer"
                >
                  Request My Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Portfolio Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-zinc-950 border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white z-10 transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                {/* Images View */}
                <div>
                  <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-white/10 mb-4 bg-black">
                    <img 
                      src={selectedProject.images[activeModalImageIdx]} 
                      alt={`${selectedProject.title} detail view ${activeModalImageIdx + 1}`} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />

                    {/* Left/Right Buttons */}
                    <button 
                      onClick={() => {
                        setActiveModalImageIdx(prev => prev === 0 ? selectedProject.images.length - 1 : prev - 1);
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black text-gold border border-white/10 z-10"
                      aria-label="Previous Image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => {
                        setActiveModalImageIdx(prev => prev === selectedProject.images.length - 1 ? 0 : prev + 1);
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black text-gold border border-white/10 z-10"
                      aria-label="Next Image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Thumbnails */}
                  <div className="flex gap-2 justify-center">
                    {selectedProject.images.map((thumb, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveModalImageIdx(idx)}
                        className={`w-16 h-12 rounded-lg overflow-hidden border transition-all ${
                          activeModalImageIdx === idx ? "border-gold scale-105" : "border-white/10 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img src={thumb} alt="thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-wider w-fit inline-block mb-3">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-sans text-3xl font-black text-white mb-4">{selectedProject.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">{selectedProject.story}</p>

                    <div className="space-y-3 bg-white/5 border border-white/5 p-4 rounded-xl mb-6">
                      <div className="flex items-center gap-2 text-xs text-gray-300">
                        <Award className="w-4 h-4 text-gold flex-shrink-0" />
                        <span>Premium Grade Oak & Brass Accents</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-300">
                        <Hammer className="w-4 h-4 text-gold flex-shrink-0" />
                        <span>100% Handcrafted and Fitted</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-300">
                        <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                        <span>Designed and Built locally in Lagos</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      setSelectedProject(null);
                      scrollTo("contact");
                      setFormData(prev => ({
                        ...prev,
                        projectType: selectedProject.category === "Mirrors" ? "Mirror" : (selectedProject.category === "Wardrobes" ? "Wardrobe" : "Both")
                      }));
                    }}
                    className="w-full bg-gold hover:bg-gold-hover text-black py-3 rounded-full font-bold text-sm tracking-wide transition-colors"
                  >
                    Request a Similar Piece
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black pt-16 pb-8 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img 
              src="https://i.postimg.cc/c19q2DWJ/file.jpg" 
              alt="Aplund Logo" 
              className="w-8 h-8 rounded-full object-cover border border-white/10"
              referrerPolicy="no-referrer"
            />
            <span className="font-sans font-bold text-lg tracking-tight">APLUND</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-gray-400 text-center md:text-left">
            <span>Hand-crafted in Lagos, Nigeria</span>
            <span className="hidden md:inline">•</span>
            <a href="tel:+2347070276427" className="hover:text-gold flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> +234 707 027 6427</a>
            <span className="hidden md:inline">•</span>
            <a href="mailto:hello@aplund.com" className="hover:text-gold flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> hello@aplund.com</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.tiktok.com/@aplundcompany" target="_blank" rel="noopener noreferrer" aria-label="TikTok Profile" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all text-gray-400">
              <TikTokIcon className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/reel/DXUv0IWijYy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all text-gray-400">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest Profile" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all text-gray-400">
              <PinterestIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center mt-12 text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Aplund Company. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <motion.a 
        href="https://wa.me/2347070276427?text=Hello%20Aplund%20Company!%20I%20have%20a%20quick%20inquiry%20regarding%20wardrobes%20or%20mirrors."
        target="_blank" 
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
        aria-label="Contact us on WhatsApp"
      >
        <span className="absolute right-16 bg-black/90 border border-white/10 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none tracking-wide font-sans shadow-xl">
          Chat with us
        </span>
        <WhatsAppIcon className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
