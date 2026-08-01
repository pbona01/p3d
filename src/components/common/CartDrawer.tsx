import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatNaira } from '../../lib/format-utils';
import { OFFICIAL_WHATSAPP_NUMBER } from '../../lib/products-data';

export const CartDrawer: React.FC = () => {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartSubtotal, itemCount } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  const handleQuickWhatsApp = () => {
    let msg = `Hello Aplund Company! I would like to order items from my cart:\n\n`;
    items.forEach((item, index) => {
      msg += `${index + 1}. *${item.productName}* (${item.categoryLabel})\n`;
      msg += `   Qty: ${item.quantity}\n`;
      if (item.selectedOptions && item.selectedOptions.length > 0) {
        msg += `   Options: ${item.selectedOptions.map(o => `${o.optionName}: ${o.choiceLabel}`).join(', ')}\n`;
      }
      if (item.customDimensions) {
        msg += `   Dimensions: ${item.customDimensions}\n`;
      }
      if (item.unitPrice !== null) {
        msg += `   Price: ${formatNaira(item.unitPrice * item.quantity)}\n`;
      }
      msg += `\n`;
    });

    if (cartSubtotal > 0) {
      msg += `*Estimated Subtotal:* ${formatNaira(cartSubtotal)}\n\n`;
    }
    msg += `Please confirm availability, custom specs, delivery and final price.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER.replace('+', '')}?text=${encoded}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">
        {/* Backdrop click */}
        <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative z-10 w-full max-w-md bg-[#FAF9F6] border-l border-[#E4E4E7] h-full flex flex-col shadow-2xl font-sans text-[#18181B]"
        >
          {/* Header */}
          <div className="p-5 border-b border-[#E4E4E7] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#E54827]" />
              <h3 className="text-lg font-bold text-[#18181B] tracking-tight">Your Shopping Cart</h3>
              <span className="ml-2 bg-[#FEF2F0] text-[#E54827] border border-[#E54827]/20 text-xs px-2.5 py-0.5 rounded-full font-bold">
                {itemCount}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#52525B] hover:text-[#18181B] rounded-full hover:bg-[#F4F3EF] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-[#E4E4E7]">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#F4F3EF] border border-[#E4E4E7] flex items-center justify-center text-[#71717A] mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-[#18181B] font-bold text-lg mb-1">Your cart is empty</h4>
                <p className="text-[#52525B] text-xs max-w-xs mb-6 leading-relaxed">
                  Explore our luxury LED mirrors, custom fitted wardrobes, or physical savings box.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/shop');
                  }}
                  className="bg-[#E54827] hover:bg-[#C22E14] text-white font-bold px-6 py-2.5 rounded-full text-xs transition-colors shadow-md cursor-pointer"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.cartItemId} className="pt-4 first:pt-0 flex gap-4">
                  <img
                    src={item.image}
                    alt={item.productName}
                    className="w-20 h-20 object-cover rounded-xl border border-[#E4E4E7] bg-white flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="text-[#18181B] text-sm font-bold truncate leading-snug">
                        {item.productName}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-[#71717A] hover:text-[#E54827] transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-[10px] text-[#E54827] uppercase font-bold mt-0.5">
                      {item.categoryLabel}
                    </p>

                    {/* Options list */}
                    {item.selectedOptions && item.selectedOptions.length > 0 && (
                      <div className="mt-1 space-y-0.5 text-[11px] text-[#52525B]">
                        {item.selectedOptions.map((opt, i) => (
                          <p key={i} className="truncate">
                            <span className="text-[#71717A]">{opt.optionName}:</span> {opt.choiceLabel}
                          </p>
                        ))}
                      </div>
                    )}

                    {item.customDimensions && (
                      <p className="text-[11px] text-[#52525B] mt-0.5">
                        <span className="text-[#71717A]">Size:</span> {item.customDimensions}
                      </p>
                    )}

                    <div className="mt-3 flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#E4E4E7] rounded-lg bg-white">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="px-2 py-1 text-[#52525B] hover:text-[#18181B] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#18181B] font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="px-2 py-1 text-[#52525B] hover:text-[#18181B] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Item Price */}
                      <div className="text-right font-mono text-xs font-bold text-[#18181B]">
                        {item.unitPrice !== null ? (
                          formatNaira(item.unitPrice * item.quantity)
                        ) : (
                          <span className="text-[#71717A] text-[10px]">Quote Required</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#E4E4E7] bg-white space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#52525B]">Estimated Subtotal</span>
                <span className="text-lg font-black text-[#18181B] font-mono">
                  {cartSubtotal > 0 ? formatNaira(cartSubtotal) : 'Quote Required'}
                </span>
              </div>

              <p className="text-[10px] text-[#71717A] leading-tight">
                * Final custom dimensions, delivery, and Lagos installation costs will be confirmed directly with you.
              </p>

              <div className="space-y-2">
                <button
                  onClick={handleProceedToCheckout}
                  className="w-full bg-[#E54827] hover:bg-[#C22E14] text-white font-bold py-3 px-4 rounded-xl transition-all text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  Proceed to Order Summary <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleQuickWhatsApp}
                  className="w-full bg-white hover:bg-[#F4F3EF] text-[#18181B] border border-[#E4E4E7] font-bold py-2.5 px-4 rounded-xl transition-all text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" /> Order Directly via WhatsApp
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
