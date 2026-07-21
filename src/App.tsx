import React, { useState } from "react";
import { Routes, Route, useLocation, Link, useNavigate, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Instagram, Twitter } from "lucide-react";

// Page Imports
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { Testimonials } from "./pages/Testimonials";
import { Contact } from "./pages/Contact";
import { SavingsLanding } from "./pages/SavingsLanding";
import { SavingsBoxLanding } from "./pages/SavingsBoxLanding";
import { SavingsPINSetup } from "./pages/SavingsPINSetup";
import { SavingsDashboard } from "./pages/SavingsDashboard";
import { SavingsAdminDashboard } from "./pages/SavingsAdminDashboard";

// Custom Pinterest SVG Icon
const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.16-.1-.95-.2-2.4.04-3.43.22-.93 1.4-5.93 1.4-5.93s-.36-.72-.36-1.77c0-1.66.96-2.9 2.16-2.9 1.02 0 1.51.77 1.51 1.68 0 1.03-.65 2.56-.99 3.98-.28 1.18.59 2.15 1.76 2.15 2.11 0 3.73-2.23 3.73-5.44 0-2.84-2.04-4.83-4.96-4.83-3.38 0-5.36 2.54-5.36 5.15 0 1.02.39 2.12.88 2.72.1.12.11.23.08.35-.1.38-.3 1.2-.35 1.4-.06.26-.2.31-.47.19-1.77-.82-2.87-3.41-2.87-5.48 0-4.46 3.24-8.56 9.35-8.56 4.9 0 8.72 3.5 8.72 8.17 0 4.88-3.08 8.8-7.35 8.8-1.44 0-2.8-0.75-3.26-1.63 0 0-.71 2.72-.89 3.39-.32 1.24-1.2 2.79-1.79 3.75 1.12.35 2.31.54 3.54.54 6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
  </svg>
);

// Custom WhatsApp SVG Icon
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 11.968.01c3.182.001 6.173 1.24 8.421 3.492 2.249 2.251 3.486 5.244 3.484 8.425-.004 6.619-5.34 11.957-11.91 11.957-2.005-.001-3.973-.507-5.729-1.467L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.864-9.843.002-2.63-1.023-5.101-2.886-6.967C16.783 1.94 14.316.916 11.97.915 6.533.915 2.11 5.328 2.106 10.76c-.001 1.772.463 3.504 1.344 5.034l-.196-.948-1.127 4.116 4.221-1.107.9 1.339zm11.302-3.11c-.312-.156-1.848-.911-2.136-1.015-.288-.104-.497-.156-.706.156-.208.312-.807 1.015-.989 1.223-.182.208-.364.234-.676.078a11.168 11.168 0 0 1-2.518-1.55 12.33 12.33 0 0 1-1.743-2.17c-.182-.312-.019-.481.137-.636.141-.14.312-.364.468-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.706-1.7-.967-2.327-.254-.611-.513-.526-.706-.536-.183-.009-.391-.011-.6-.011-.208 0-.547.078-.833.39-.286.312-1.092 1.066-1.092 2.6s1.118 3.016 1.274 3.224c.156.208 2.19 3.344 5.305 4.688.74.32 1.319.51 1.77.653.743.236 1.42.203 1.954.123.595-.089 1.848-.755 2.11-1.446.26-.692.26-1.288.182-1.41-.078-.122-.288-.195-.6-.351z"/>
  </svg>
);

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Determine if we should hide the header/footer (for deep hardware simulation screens like box dashboard or pin setup)
  const isDeepSavingsPage = 
    (location.pathname.startsWith("/save/") && location.pathname !== "/save") ||
    location.pathname.includes("/setup") || 
    location.pathname.includes("/dashboard");

  return (
    <div className="relative min-h-screen bg-[#050505] font-body text-white selection:bg-gold selection:text-black overflow-x-hidden">
      {/* Grain Texture Overlay */}
      <div className="bg-noise"></div>

      {/* Navigation (Only visible on high-level pages, hidden on deep savings panels) */}
      {!isDeepSavingsPage && (
        <header className="fixed top-4 left-4 right-4 md:left-8 md:right-8 lg:left-12 lg:right-12 z-50 flex items-center justify-between px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
          <Link 
            to="/" 
            className="flex items-center gap-3 z-50 cursor-pointer group"
            onClick={() => setIsMenuOpen(false)}
          >
            <img 
              src="https://i.postimg.cc/c19q2DWJ/file.jpg" 
              alt="Aplund Company Logo" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-white/10"
              referrerPolicy="no-referrer"
            />
            <span className="font-sans font-bold text-lg md:text-xl tracking-tight text-white group-hover:text-gold transition-colors">APLUND</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <NavLink 
              to="/" 
              className={({ isActive }) => `hover:text-gold transition-colors font-semibold ${isActive ? "text-gold" : "text-gray-300"}`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => `hover:text-gold transition-colors font-semibold ${isActive ? "text-gold" : "text-gray-300"}`}
            >
              Portfolio
            </NavLink>
            <NavLink 
              to="/testimonials" 
              className={({ isActive }) => `hover:text-gold transition-colors font-semibold ${isActive ? "text-gold" : "text-gray-300"}`}
            >
              Testimonials
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `hover:text-gold transition-colors font-semibold ${isActive ? "text-gold" : "text-gray-300"}`}
            >
              Contact
            </NavLink>
            <NavLink 
              to="/save" 
              className={({ isActive }) => `hover:text-gold transition-colors font-semibold ${isActive ? "text-[#c9a96e]" : "text-[#c9a96e]"}`}
            >
              Savings Box
            </NavLink>
          </nav>

          <div className="hidden md:block">
            <Link 
              to="/contact"
              className="px-5 py-2.5 text-sm font-bold bg-white/5 hover:bg-gold hover:text-black border border-white/10 rounded-full backdrop-blur-md transition-all duration-300 inline-block"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 p-2 text-white cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>
      )}

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && !isDeepSavingsPage && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8"
          >
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="font-sans text-3xl font-bold text-white hover:text-gold transition-colors">Home</Link>
            <Link to="/portfolio" onClick={() => setIsMenuOpen(false)} className="font-sans text-3xl font-bold text-white hover:text-gold transition-colors">Portfolio</Link>
            <Link to="/testimonials" onClick={() => setIsMenuOpen(false)} className="font-sans text-3xl font-bold text-white hover:text-gold transition-colors">Testimonials</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="font-sans text-3xl font-bold text-white hover:text-gold transition-colors">Contact</Link>
            <Link to="/save" onClick={() => setIsMenuOpen(false)} className="font-sans text-3xl font-bold text-[#c9a96e] hover:text-white transition-colors">Savings Box</Link>
            
            <Link 
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 px-8 py-4 text-lg font-bold bg-gold text-black rounded-full shadow-[0_0_20px_rgba(197,168,128,0.4)] hover:bg-gold-hover transition-all"
            >
              Request My Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Render */}
      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Savings Box Pages */}
          <Route path="/save" element={<SavingsLanding />} />
          <Route path="/save/:boxId" element={<SavingsBoxLanding />} />
          <Route path="/save/:boxId/setup" element={<SavingsPINSetup />} />
          <Route path="/save/:boxId/dashboard" element={<SavingsDashboard />} />
          <Route path="/admin/savings" element={<SavingsAdminDashboard />} />
        </Routes>
      </main>

      {/* Footer */}
      {!isDeepSavingsPage && (
        <footer className="relative z-10 border-t border-white/10 bg-[#070707] pt-16 pb-8 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Col 1 */}
            <div className="space-y-4">
              <h3 className="font-sans font-black text-xl tracking-wider text-white">APLUND</h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                Lagos-based bespoke custom design furniture atelier. Specializing in luxury wardrobes, aura mirrors, handcrafted dressers, and smart physical savings boxes with secure online ledgers.
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>📍 Lagos, Nigeria</p>
                <p>📞 +234 707 027 6427</p>
                <p>✉️ hello@aplund.com</p>
              </div>
            </div>
            
            {/* Col 2 */}
            <div className="space-y-4">
              <h4 className="font-sans font-bold text-sm tracking-widest text-[#c9a96e] uppercase">Creations</h4>
              <ul className="text-xs text-gray-400 space-y-2.5">
                <li><Link to="/portfolio" className="hover:text-white transition-colors">Aura & Instagram Mirrors</Link></li>
                <li><Link to="/portfolio" className="hover:text-white transition-colors">Premium Drip Wardrobes</Link></li>
                <li><Link to="/portfolio" className="hover:text-white transition-colors">Snapchat & TikTok Mirrors</Link></li>
                <li><Link to="/save" className="hover:text-white transition-colors text-[#c9a96e] font-semibold flex items-center gap-1">Physical Savings Box <span className="bg-[#c9a96e]/10 px-1.5 py-0.5 rounded text-[8px] border border-[#c9a96e]/20">NEW</span></Link></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="space-y-4">
              <h4 className="font-sans font-bold text-sm tracking-widest text-[#c9a96e] uppercase">Sitemap</h4>
              <ul className="text-xs text-gray-400 space-y-2.5">
                <li><Link to="/portfolio" className="hover:text-white transition-colors">Our Portfolio</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Crafting Process</Link></li>
                <li><Link to="/testimonials" className="hover:text-white transition-colors">Client Reviews</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Book Consultation</Link></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="space-y-4">
              <h4 className="font-sans font-bold text-sm tracking-widest text-[#c9a96e] uppercase">Follow Us</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Stay inspired. Watch our handcrafting stories on Instagram, TikTok, and Pinterest.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="https://wa.me/2347070276427" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#c9a96e] transition-colors" aria-label="WhatsApp"><WhatsAppIcon className="w-5 h-5" /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#c9a96e] transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#c9a96e] transition-colors" aria-label="Pinterest"><PinterestIcon className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-gray-600">
            <p>© {new Date().getFullYear()} Aplund Company. Handcrafted with uncompromising detail in Lagos.</p>
            <div className="flex gap-4">
              <Link to="/admin/savings" className="hover:text-white transition-colors">Admin Area</Link>
              <span className="text-gray-800">|</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-gray-800">|</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </footer>
      )}

      {/* Floating WhatsApp Action Button */}
      {!isDeepSavingsPage && (
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
      )}
    </div>
  );
}
