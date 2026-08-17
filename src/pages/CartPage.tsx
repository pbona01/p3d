import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatNaira } from '../lib/format-utils';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ArrowLeft } from 'lucide-react';

export const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, clearCart, cartSubtotal, itemCount } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] bg-[#050505] text-white flex flex-col items-center justify-center p-6 text-center font-sans">
        <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 mb-6">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Your Shopping Cart is Empty</h2>
        <p className="text-gray-400 text-sm max-w-sm mb-8 leading-relaxed">
          Discover our bespoke aura mirrors, luxury fitted wardrobes, or physical wooden savings box.
        </p>
        <Link
          to="/shop"
          className="bg-[#c5a880] hover:bg-[#b8985f] text-black font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-lg"
        >
          Explore Shop Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans py-12 px-4 md:px-8 max-w-6xl mx-auto selection:bg-[#c5a880] selection:text-black">
      
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
        <div>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight">Shopping Cart</h1>
          <p className="text-xs text-gray-400 mt-1">{itemCount} item{itemCount > 1 ? 's' : ''} in your cart</p>
        </div>
        <button
          onClick={clearCart}
          className="text-xs text-gray-500 hover:text-red-400 transition-colors flex items-center gap-1 cursor-pointer"
        >
          <Trash2 className="w-3.5 h-3.5" /> Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Cart Items List */}
        <div className="lg:col-span-8 space-y-4">
          {items.map((item) => (
            <div
              key={item.cartItemId}
              className="p-4 sm:p-5 bg-[#121212] border border-white/10 rounded-2xl flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between"
            >
              <div className="flex gap-4 items-center flex-1 min-w-0">
                <img
                  src={item.image}
                  alt={item.productName}
                  className="w-20 h-20 object-cover rounded-xl border border-white/10 bg-black/40 flex-shrink-0"
                  loading="lazy"
                  decoding="async"
                />
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] text-[#c5a880] font-mono uppercase font-bold">
                    {item.categoryLabel}
                  </span>
                  <Link to={`/product/${item.productSlug}`}>
                    <h3 className="text-white font-bold text-sm sm:text-base truncate hover:text-[#c5a880] transition-colors">
                      {item.productName}
                    </h3>
                  </Link>

                  {item.selectedOptions && item.selectedOptions.length > 0 && (
                    <div className="mt-1 space-y-0.5 text-[11px] text-gray-400">
                      {item.selectedOptions.map((opt, i) => (
                        <p key={i}>
                          <span className="text-gray-500">{opt.optionName}:</span> {opt.choiceLabel}
                        </p>
                      ))}
                    </div>
                  )}

                  {item.customDimensions && (
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      <span className="text-gray-500">Dimensions:</span> {item.customDimensions}
                    </p>
                  )}
                </div>
              </div>

              {/* Quantity Controls & Price */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-white/5">
                <div className="flex items-center border border-white/15 rounded-xl bg-white/5">
                  <button
                    onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                    className="p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold font-mono text-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                    className="p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="text-right">
                  <p className="text-white font-mono text-sm font-bold">
                    {item.unitPrice !== null ? formatNaira(item.unitPrice * item.quantity) : 'Quote Required'}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.cartItemId)}
                    className="text-[11px] text-gray-500 hover:text-red-400 transition-colors mt-1 inline-block cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="pt-4">
            <Link
              to="/shop"
              className="text-xs text-[#c5a880] hover:underline inline-flex items-center gap-1.5 font-bold"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Continue Shopping
            </Link>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-4">
          <div className="p-6 bg-[#121212] border border-white/10 rounded-2xl space-y-5 sticky top-24">
            <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3">Order Summary</h3>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-gray-400">
                <span>Items Count</span>
                <span className="text-white font-bold">{itemCount}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Estimated Subtotal</span>
                <span className="text-white font-mono font-bold">
                  {cartSubtotal > 0 ? formatNaira(cartSubtotal) : 'Quote Required'}
                </span>
              </div>
            </div>

            <p className="text-[10px] text-gray-500 leading-relaxed pt-2 border-t border-white/10">
              * Delivery, site measurement & installation costs will be confirmed directly on WhatsApp before order finalization.
            </p>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-[#c5a880] hover:bg-[#b8985f] text-black font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              Proceed to Order Summary <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
