import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag, Sparkles, MessageSquare } from 'lucide-react';
import { Product } from '../../types/products';
import { formatNaira } from '../../lib/format-utils';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.price !== null) {
      addToCart(product, [], 1);
    } else {
      navigate(`/product/${product.slug}`);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white border border-[#E4E4E7] hover:border-[#E54827]/40 rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 shadow-sm hover:shadow-md"
    >
      {/* Product Image Container */}
      <Link to={`/product/${product.slug}`} className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-[#F4F3EF] block cursor-pointer">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
          {product.customMade && (
            <span className="bg-[#18181B]/80 backdrop-blur-md text-white border border-white/20 text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#E54827]" /> Custom Made
            </span>
          )}
          {product.isVault && (
            <span className="bg-[#E54827] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
              The Vault Box
            </span>
          )}
        </div>

        {/* Hover Quick View Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-xs text-white font-bold flex items-center gap-1.5 bg-[#18181B]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
            View Details & Custom Options <ArrowRight className="w-3.5 h-3.5 text-[#E54827]" />
          </span>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-5 flex-1 flex flex-col justify-between font-sans space-y-4">
        <div>
          <span className="text-[10px] text-[#E54827] uppercase tracking-widest font-bold">
            {product.categoryLabel}
          </span>

          <Link to={`/product/${product.slug}`}>
            <h3 className="text-[#18181B] font-bold text-base mt-1 line-clamp-1 group-hover:text-[#E54827] transition-colors">
              {product.name}
            </h3>
          </Link>

          <p className="text-[#52525B] text-xs mt-1.5 line-clamp-2 leading-relaxed font-normal">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-[#E4E4E7] flex items-center justify-between gap-2">
          <div>
            <p className="text-[10px] text-[#52525B] uppercase font-medium">Pricing</p>
            <p className="text-[#18181B] font-mono text-sm font-bold">
              {product.price !== null ? formatNaira(product.price) : 'Quote Required'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {product.price !== null ? (
              <button
                onClick={handleQuickAdd}
                className="bg-[#E54827] hover:bg-[#C22E14] text-white font-bold px-3.5 py-2 rounded-xl text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                title="Add to Cart"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Add</span>
              </button>
            ) : (
              <Link
                to={`/product/${product.slug}`}
                className="bg-[#F4F3EF] hover:bg-[#E54827] text-[#18181B] hover:text-white border border-[#E4E4E7] font-bold px-3 py-2 rounded-xl text-xs transition-all flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Quote</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
