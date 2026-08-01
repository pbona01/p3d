import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../../lib/products-data';
import { formatNaira } from '../../lib/format-utils';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return productsData.filter(product => {
      return (
        product.name.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        product.categoryLabel.toLowerCase().includes(q) ||
        product.features?.some(f => f.toLowerCase().includes(q))
      );
    });
  }, [query]);

  const handleSelectProduct = (slug: string) => {
    onClose();
    setQuery('');
    navigate(`/product/${slug}`);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="w-full max-w-2xl bg-[#FAF9F6] border border-[#E4E4E7] rounded-2xl shadow-2xl overflow-hidden font-sans text-[#18181B]"
        >
          {/* Input Header */}
          <div className="flex items-center px-4 py-3.5 border-b border-[#E4E4E7] gap-3 bg-white">
            <Search className="w-5 h-5 text-[#71717A]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search mirrors, wardrobes, savings box..."
              className="flex-1 bg-transparent text-[#18181B] placeholder-[#71717A] focus:outline-none text-base"
            />
            {query && (
              <button onClick={() => setQuery('')} className="p-1 text-[#71717A] hover:text-[#18181B]">
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="text-xs bg-[#F4F3EF] hover:bg-[#E4E4E7] px-3 py-1.5 rounded-lg text-[#52525B] font-bold transition-colors"
            >
              ESC
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
            {!query ? (
              <div className="py-8 text-center text-[#52525B] text-sm">
                <p className="font-bold text-[#18181B] mb-2">Popular Searches</p>
                <div className="flex flex-wrap gap-2 justify-center max-w-sm mx-auto">
                  {['Aura Mirror', 'Drip Wardrobe', 'The Vault', 'Snapchat Mirror', 'Walk-In Closet'].map(term => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1 bg-white hover:bg-[#FEF2F0] hover:text-[#E54827] border border-[#E4E4E7] rounded-full text-xs font-semibold transition-colors shadow-sm"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="py-12 text-center text-[#52525B]">
                <Package className="w-10 h-10 mx-auto text-[#71717A] mb-3" />
                <p className="text-sm font-semibold text-[#18181B]">No products found matching "{query}"</p>
                <p className="text-xs text-[#71717A] mt-1">Try searching for "Mirror", "Wardrobe", or "Vault"</p>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="text-xs text-[#52525B] font-medium px-2">
                  Found {filteredProducts.length} product{filteredProducts.length > 1 ? 's' : ''}
                </p>
                {filteredProducts.map(product => (
                  <button
                    key={product.id}
                    onClick={() => handleSelectProduct(product.slug)}
                    className="w-full text-left flex items-center gap-4 p-3 rounded-xl bg-white hover:bg-[#FEF2F0] border border-[#E4E4E7] transition-colors group cursor-pointer shadow-sm"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-14 h-14 object-cover rounded-lg border border-[#E4E4E7]"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-[#E54827] uppercase tracking-wider font-extrabold">
                          {product.categoryLabel}
                        </span>
                      </div>
                      <h4 className="text-[#18181B] text-sm font-bold truncate group-hover:text-[#E54827] transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-xs text-[#52525B] font-mono font-bold">
                        {product.price !== null ? formatNaira(product.price) : product.priceLabel}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#71717A] group-hover:text-[#E54827] transition-colors" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
