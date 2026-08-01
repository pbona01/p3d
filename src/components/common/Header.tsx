import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { SearchModal } from './SearchModal';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { itemCount, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E4E4E7] px-4 md:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 z-50 group cursor-pointer"
          >
            <img
              src="https://i.postimg.cc/c19q2DWJ/file.jpg"
              alt="Aplund Logo"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover border border-[#E54827]/30 group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <span className="font-sans font-black text-xl tracking-tight text-[#18181B] group-hover:text-[#E54827] transition-colors">
              APLUND
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#52525B]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-[#E54827] transition-colors py-1 ${
                  isActive ? 'text-[#E54827] font-bold border-b-2 border-[#E54827]' : 'text-[#52525B]'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              end
              className={({ isActive }) =>
                `hover:text-[#E54827] transition-colors py-1 ${
                  isActive ? 'text-[#E54827] font-bold border-b-2 border-[#E54827]' : 'text-[#52525B]'
                }`
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/shop/mirrors"
              className={({ isActive }) =>
                `hover:text-[#E54827] transition-colors py-1 ${
                  isActive ? 'text-[#E54827] font-bold border-b-2 border-[#E54827]' : 'text-[#52525B]'
                }`
              }
            >
              Mirrors
            </NavLink>

            <NavLink
              to="/shop/wardrobes"
              className={({ isActive }) =>
                `hover:text-[#E54827] transition-colors py-1 ${
                  isActive ? 'text-[#E54827] font-bold border-b-2 border-[#E54827]' : 'text-[#52525B]'
                }`
              }
            >
              Wardrobes
            </NavLink>

            <NavLink
              to="/vault"
              className={({ isActive }) =>
                `hover:text-[#E54827] transition-colors py-1 flex items-center gap-1 ${
                  isActive ? 'text-[#E54827] font-bold border-b-2 border-[#E54827]' : 'text-[#52525B]'
                }`
              }
            >
              The Vault
            </NavLink>

            <NavLink
              to="/our-work"
              className={({ isActive }) =>
                `hover:text-[#E54827] transition-colors py-1 ${
                  isActive ? 'text-[#E54827] font-bold border-b-2 border-[#E54827]' : 'text-[#52525B]'
                }`
              }
            >
              Our Work
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-[#E54827] transition-colors py-1 ${
                  isActive ? 'text-[#E54827] font-bold border-b-2 border-[#E54827]' : 'text-[#52525B]'
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-[#E54827] transition-colors py-1 ${
                  isActive ? 'text-[#E54827] font-bold border-b-2 border-[#E54827]' : 'text-[#52525B]'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Right Header Controls */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-[#18181B] hover:text-[#E54827] hover:bg-[#F4F3EF] rounded-full transition-colors cursor-pointer"
              title="Search products"
              aria-label="Search products"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#18181B] hover:text-[#E54827] hover:bg-[#F4F3EF] rounded-full transition-colors cursor-pointer"
              title="View Cart"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#E54827] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Consultation CTA */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#E54827] hover:bg-[#C22E14] text-white rounded-full transition-all duration-300 shadow-sm cursor-pointer"
            >
              Request Quote
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-[#18181B] hover:text-[#E54827] transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-30 bg-[#FAF9F6] pt-20 px-6 pb-10 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-6">
              <div className="text-xs text-[#E54827] uppercase tracking-widest font-bold border-b border-[#E4E4E7] pb-2">
                Categories & Navigation
              </div>
              <nav className="flex flex-col gap-5 text-xl font-bold text-[#18181B]">
                <Link to="/" onClick={closeMenu} className="hover:text-[#E54827] transition-colors">
                  Home
                </Link>
                <Link to="/shop" onClick={closeMenu} className="hover:text-[#E54827] transition-colors">
                  Shop
                </Link>
                <Link to="/vault" onClick={closeMenu} className="hover:text-[#E54827] transition-colors">
                  Vault
                </Link>
                <Link to="/our-work" onClick={closeMenu} className="hover:text-[#E54827] transition-colors">
                  Our Work
                </Link>
                <Link to="/about" onClick={closeMenu} className="hover:text-[#E54827] transition-colors">
                  About
                </Link>
                <Link to="/contact" onClick={closeMenu} className="hover:text-[#E54827] transition-colors">
                  Contact
                </Link>
              </nav>
            </div>

            <div className="pt-8 border-t border-[#E4E4E7] space-y-4">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="w-full bg-[#E54827] hover:bg-[#C22E14] text-white font-bold py-3.5 rounded-full text-sm flex items-center justify-center gap-2 shadow-md"
              >
                Request Custom Design Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-center text-xs text-[#52525B]">
                Lagos, Nigeria • Direct WhatsApp Support Available
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
