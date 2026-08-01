import React from 'react';
import { ShoppingBag, MessageSquare } from 'lucide-react';
import { Product } from '../../types/products';
import { formatNaira } from '../../lib/format-utils';

interface MobileProductBarProps {
  product: Product;
  onAddToCart: () => void;
  onWhatsAppQuote: () => void;
}

export const MobileProductBar: React.FC<MobileProductBarProps> = ({
  product,
  onAddToCart,
  onWhatsAppQuote
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#E4E4E7] p-3.5 px-4 flex items-center justify-between gap-3 shadow-lg">
      <div>
        <p className="text-[10px] text-[#52525B] font-mono uppercase">Price</p>
        <p className="text-[#18181B] font-mono text-sm font-bold">
          {product.price !== null ? formatNaira(product.price) : 'Quote Required'}
        </p>
      </div>

      <div className="flex items-center gap-2">
        {product.price !== null && (
          <button
            onClick={onAddToCart}
            className="bg-[#E54827] hover:bg-[#C22E14] text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <ShoppingBag className="w-4 h-4" /> Add
          </button>
        )}

        <button
          onClick={onWhatsAppQuote}
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
        >
          <MessageSquare className="w-4 h-4" /> WhatsApp
        </button>
      </div>
    </div>
  );
};
