import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin, ShieldCheck, Truck, Wrench } from 'lucide-react';
import { OFFICIAL_WHATSAPP_DISPLAY, OFFICIAL_WHATSAPP_NUMBER, OFFICIAL_EMAIL, OFFICIAL_LOCATION } from '../../lib/products-data';

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

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-[#E4E4E7] bg-white text-[#18181B] pt-16 pb-12 px-6 md:px-12 lg:px-20 font-sans">
      
      {/* Brand Value Pillars */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 mb-12 border-b border-[#E4E4E7] text-xs">
        <div className="flex items-center gap-3 p-4 bg-[#FAF9F6] rounded-2xl border border-[#E4E4E7]">
          <div className="w-10 h-10 rounded-xl bg-[#FEF2F0] flex items-center justify-center text-[#E54827] flex-shrink-0">
            <Wrench className="w-5 h-5" />
          </div>
          <div>
            <h5 className="font-bold text-[#18181B] text-sm">Tailored Craftsmanship</h5>
            <p className="text-[#52525B]">Custom size, lighting & finish options on every piece</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-[#FAF9F6] rounded-2xl border border-[#E4E4E7]">
          <div className="w-10 h-10 rounded-xl bg-[#FEF2F0] flex items-center justify-center text-[#E54827] flex-shrink-0">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <h5 className="font-bold text-[#18181B] text-sm">Safe Delivery & Installation</h5>
            <p className="text-[#52525B]">Wooden-crate shipping & professional Lagos fitting</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-[#FAF9F6] rounded-2xl border border-[#E4E4E7]">
          <div className="w-10 h-10 rounded-xl bg-[#FEF2F0] flex items-center justify-center text-[#E54827] flex-shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h5 className="font-bold text-[#18181B] text-sm">Verified Quality</h5>
            <p className="text-[#52525B]">5mm HD copper-free glass & solid seasoned hardwoods</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Col 1: About */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="https://i.postimg.cc/c19q2DWJ/file.jpg"
              alt="Aplund Company Logo"
              className="w-10 h-10 rounded-full object-cover border border-[#E4E4E7]"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            <h3 className="font-sans font-black text-xl tracking-wider text-[#18181B]">APLUND</h3>
          </div>
          <p className="text-[#52525B] text-xs leading-relaxed max-w-xs">
            Lagos-based bespoke custom furniture atelier. Crafting luxury aura mirrors, fitted drip wardrobes, and physical wooden savings boxes with personal digital tracking.
          </p>
          <div className="text-xs text-[#52525B] space-y-2 pt-2">
            <p className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#E54827]" /> {OFFICIAL_LOCATION}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#E54827]" /> {OFFICIAL_WHATSAPP_DISPLAY}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#E54827]" /> {OFFICIAL_EMAIL}
            </p>
          </div>
        </div>

        {/* Col 2: Storefront Categories */}
        <div className="space-y-4">
          <h4 className="font-sans font-bold text-xs tracking-widest text-[#E54827] uppercase">
            Product Collections
          </h4>
          <ul className="text-xs text-[#52525B] space-y-2.5 font-medium">
            <li>
              <Link to="/shop/mirrors" className="hover:text-[#E54827] transition-colors">
                Custom LED & Aura Mirrors
              </Link>
            </li>
            <li>
              <Link to="/shop/wardrobes" className="hover:text-[#E54827] transition-colors">
                Fitted Luxury Drip Wardrobes
              </Link>
            </li>
            <li>
              <Link to="/shop/mirrors" className="hover:text-[#E54827] transition-colors">
                Snapchat & TikTok LED Mirrors
              </Link>
            </li>
            <li>
              <Link to="/shop/vault" className="hover:text-[#E54827] transition-colors text-[#E54827] font-bold flex items-center gap-1.5">
                The Vault Physical Savings Box <span className="bg-[#FEF2F0] text-[#E54827] px-1.5 py-0.5 rounded text-[8px] border border-[#E54827]/30 font-bold">HOT</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Company Sitemap */}
        <div className="space-y-4">
          <h4 className="font-sans font-bold text-xs tracking-widest text-[#E54827] uppercase">
            Explore Aplund
          </h4>
          <ul className="text-xs text-[#52525B] space-y-2.5 font-medium">
            <li>
              <Link to="/shop" className="hover:text-[#E54827] transition-colors">
                All Products
              </Link>
            </li>
            <li>
              <Link to="/our-work" className="hover:text-[#E54827] transition-colors">
                Our Work Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#E54827] transition-colors">
                About Our Atelier
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="hover:text-[#E54827] transition-colors">
                Verified Client Reviews
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#E54827] transition-colors">
                Request Custom Consultation
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Support & WhatsApp */}
        <div className="space-y-4">
          <h4 className="font-sans font-bold text-xs tracking-widest text-[#E54827] uppercase">
            Order Support
          </h4>
          <p className="text-[#52525B] text-xs leading-relaxed">
            Have custom measurements or need a fast design quote? Chat with our Lagos master craft team directly.
          </p>
          <a
            href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER.replace('+', '')}?text=Hello%20Aplund%20Company!%20I%20have%20an%20inquiry%20regarding%20a%20custom%20mirror%20or%20wardrobe.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4" /> Chat on WhatsApp
          </a>

          <div className="flex gap-4 pt-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#71717A] hover:text-[#E54827] transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-[#71717A] hover:text-[#E54827] transition-colors" aria-label="Pinterest">
              <PinterestIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Footer Bar */}
      <div className="max-w-7xl mx-auto border-t border-[#E4E4E7] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-[#71717A]">
        <p>© {new Date().getFullYear()} Aplund Company. Handcrafted with uncompromising precision in Lagos, Nigeria.</p>
        <div className="flex gap-4 font-medium">
          <span className="hover:text-[#18181B] transition-colors cursor-pointer">Delivery & Installation Info</span>
          <span className="text-[#E4E4E7]">|</span>
          <span className="hover:text-[#18181B] transition-colors cursor-pointer">Privacy Policy</span>
          <span className="text-[#E4E4E7]">|</span>
          <span className="hover:text-[#18181B] transition-colors cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};
