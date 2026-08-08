import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { formatNaira } from '../lib/format-utils';
import { OFFICIAL_WHATSAPP_NUMBER } from '../lib/products-data';
import { CustomerOrderDetails } from '../types/cart';
import { MessageSquare, ArrowLeft, CheckCircle2, ShieldAlert, Truck, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CheckoutPage: React.FC = () => {
  const { items, cartSubtotal, itemCount } = useCart();

  const [formData, setFormData] = useState<CustomerOrderDetails>({
    fullName: '',
    phone: '',
    email: '',
    deliveryLocation: '',
    preferredContact: 'whatsapp',
    orderNotes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hasSentWhatsApp, setHasSentWhatsApp] = useState(false);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required.';
    if (!formData.deliveryLocation.trim()) errs.deliveryLocation = 'Delivery location/address is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    let msg = `Hello Aplund Company! I would like to place an order from your store.\n\n`;
    msg += `*CUSTOMER DETAILS*\n`;
    msg += `• Name: ${formData.fullName.trim()}\n`;
    msg += `• Phone: ${formData.phone.trim()}\n`;
    if (formData.email?.trim()) msg += `• Email: ${formData.email.trim()}\n`;
    msg += `• Delivery Location: ${formData.deliveryLocation.trim()}\n`;
    msg += `• Preferred Contact: ${formData.preferredContact.toUpperCase()}\n\n`;

    msg += `*ORDERED ITEMS (${itemCount})*\n`;
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
        msg += `   Subtotal: ${formatNaira(item.unitPrice * item.quantity)}\n`;
      } else {
        msg += `   Price: Quote Required\n`;
      }
      msg += `\n`;
    });

    if (cartSubtotal > 0) {
      msg += `*ESTIMATED SUBTOTAL:* ${formatNaira(cartSubtotal)}\n\n`;
    }

    if (formData.orderNotes?.trim()) {
      msg += `*ADDITIONAL NOTES:*\n${formData.orderNotes.trim()}\n\n`;
    }

    msg += `Please confirm availability, custom dimensions, delivery cost, and next steps for my order.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER.replace('+', '')}?text=${encoded}`, '_blank');
    setHasSentWhatsApp(true);
  };

  if (items.length === 0 && !hasSentWhatsApp) {
    return (
      <div className="min-h-[70vh] bg-[#FAF9F6] text-[#18181B] flex flex-col items-center justify-center p-6 text-center font-sans">
        <h2 className="text-2xl font-black mb-2 text-[#18181B]">No Items in Order Summary</h2>
        <p className="text-[#52525B] text-sm mb-6">Please add items to your cart before proceeding to checkout.</p>
        <Link
          to="/shop"
          className="bg-[#E54827] hover:bg-[#C22E14] text-white font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#18181B] font-sans py-12 px-4 md:px-8 max-w-6xl mx-auto selection:bg-[#E54827] selection:text-white">
      
      <div className="mb-8">
        <Link to="/cart" className="text-xs text-[#52525B] hover:text-[#18181B] inline-flex items-center gap-1 mb-2 font-semibold">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Cart
        </Link>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#18181B]">Order Summary & Confirmation</h1>
        <p className="text-xs text-[#52525B] mt-1">
          Complete your contact details below to send your structured order directly to Aplund on WhatsApp.
        </p>
      </div>

      {hasSentWhatsApp ? (
        <div className="bg-white border border-[#E4E4E7] shadow-sm rounded-3xl p-8 max-w-2xl mx-auto text-center space-y-4 my-8">
          <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-[#18181B]">Order Summary Prepared!</h2>
          <p className="text-[#52525B] text-sm leading-relaxed">
            Your order summary has been prepared. Complete the conversation with Aplund on WhatsApp to confirm custom dimensions, delivery, and installation schedule.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={handleSendWhatsAppOrder}
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <MessageSquare className="w-4 h-4" /> Re-Open WhatsApp Message
            </button>
            <Link
              to="/shop"
              className="bg-white hover:bg-[#F4F3EF] text-[#18181B] border border-[#E4E4E7] font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              Return to Store
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Customer Form */}
          <div className="lg:col-span-7 bg-white border border-[#E4E4E7] shadow-sm rounded-3xl p-6 sm:p-8 space-y-6">
            <h2 className="text-lg font-black text-[#18181B] border-b border-[#E4E4E7] pb-3">
              Customer & Delivery Details
            </h2>

            <form onSubmit={handleSendWhatsAppOrder} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#52525B] font-bold mb-1">Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Chukwudi Okafor"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full bg-[#FAF9F6] border rounded-xl px-4 py-3 text-xs text-[#18181B] placeholder-[#A1A1AA] focus:outline-none ${
                    errors.fullName ? 'border-red-500' : 'border-[#E4E4E7] focus:border-[#E54827]'
                  }`}
                />
                {errors.fullName && <p className="text-red-500 text-[11px] mt-1 font-semibold">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#52525B] font-bold mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="e.g. 08012345678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-[#FAF9F6] border rounded-xl px-4 py-3 text-xs text-[#18181B] placeholder-[#A1A1AA] focus:outline-none ${
                      errors.phone ? 'border-red-500' : 'border-[#E4E4E7] focus:border-[#E54827]'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-[11px] mt-1 font-semibold">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-[#52525B] font-bold mb-1">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="e.g. name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-3 text-xs text-[#18181B] placeholder-[#A1A1AA] focus:outline-none focus:border-[#E54827]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#52525B] font-bold mb-1">Delivery Location / City *</label>
                <input
                  type="text"
                  placeholder="e.g. Admiralty Way, Lekki Phase 1, Lagos"
                  value={formData.deliveryLocation}
                  onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                  className={`w-full bg-[#FAF9F6] border rounded-xl px-4 py-3 text-xs text-[#18181B] placeholder-[#A1A1AA] focus:outline-none ${
                    errors.deliveryLocation ? 'border-red-500' : 'border-[#E4E4E7] focus:border-[#E54827]'
                  }`}
                />
                {errors.deliveryLocation && <p className="text-red-500 text-[11px] mt-1 font-semibold">{errors.deliveryLocation}</p>}
              </div>

              <div>
                <label className="block text-[#52525B] font-bold mb-1">Preferred Contact Method</label>
                <div className="flex gap-4 pt-1 text-sm font-medium">
                  <label className="flex items-center gap-2 cursor-pointer text-[#18181B]">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="whatsapp"
                      checked={formData.preferredContact === 'whatsapp'}
                      onChange={() => setFormData({ ...formData, preferredContact: 'whatsapp' })}
                      className="accent-[#E54827]"
                    />
                    <span>WhatsApp Chat</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-[#18181B]">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="call"
                      checked={formData.preferredContact === 'call'}
                      onChange={() => setFormData({ ...formData, preferredContact: 'call' })}
                      className="accent-[#E54827]"
                    />
                    <span>Phone Call</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-[#52525B] font-bold mb-1">Additional Order Notes</label>
                <textarea
                  rows={3}
                  placeholder="Include any specific customization preferences, wall installation requirements, or preferred delivery dates..."
                  value={formData.orderNotes}
                  onChange={(e) => setFormData({ ...formData, orderNotes: e.target.value })}
                  className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-3 text-xs text-[#18181B] placeholder-[#A1A1AA] focus:outline-none focus:border-[#E54827]"
                />
              </div>

              <div className="pt-4 border-t border-[#E4E4E7]">
                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold py-4 px-6 rounded-2xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" /> Send Order Summary to Aplund on WhatsApp
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Order Items Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#E4E4E7] shadow-sm rounded-3xl p-6 space-y-4">
              <h3 className="text-base font-black text-[#18181B] border-b border-[#E4E4E7] pb-3">
                Items In Summary ({itemCount})
              </h3>

              <div className="space-y-3 max-h-80 overflow-y-auto pr-1 divide-y divide-[#E4E4E7]/50">
                {items.map((item) => (
                  <div key={item.cartItemId} className="pt-3 first:pt-0 flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="w-12 h-12 object-cover rounded-lg border border-[#E4E4E7] flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="font-bold text-[#18181B] truncate">{item.productName}</p>
                        <p className="text-[10px] text-[#52525B]">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-mono font-extrabold text-[#18181B] flex-shrink-0">
                      {item.unitPrice !== null ? formatNaira(item.unitPrice * item.quantity) : 'Quote'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#E4E4E7] pt-4 space-y-2 text-xs">
                <div className="flex justify-between font-extrabold text-sm text-[#18181B]">
                  <span>Estimated Total</span>
                  <span className="text-[#E54827] font-mono">
                    {cartSubtotal > 0 ? formatNaira(cartSubtotal) : 'Quote Required'}
                  </span>
                </div>
              </div>

              <div className="p-3 bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl text-[11px] text-[#52525B] space-y-1">
                <p className="font-extrabold text-[#18181B] flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-[#E54827]" /> Delivery & Installation Notice
                </p>
                <p className="leading-relaxed">
                  Final shipping fees, wall measurements, and installation costs are confirmed during your WhatsApp consultation. No automatic card charges are made on this site.
                </p>
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
