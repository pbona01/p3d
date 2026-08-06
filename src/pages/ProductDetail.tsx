import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ShoppingBag, MessageSquare, Check, ArrowLeft, Clock, Truck, Wrench, ShieldCheck, Plus, Minus, Sparkles 
} from 'lucide-react';
import { getProductBySlug, productsData, OFFICIAL_WHATSAPP_NUMBER } from '../lib/products-data';
import { formatNaira } from '../lib/format-utils';
import { useCart } from '../context/CartContext';
import { CartItemOptionSelection } from '../types/cart';
import { ProductCard } from '../components/products/ProductCard';
import { MobileProductBar } from '../components/common/MobileProductBar';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = slug ? getProductBySlug(slug) : undefined;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [customDimensionsInput, setCustomDimensionsInput] = useState('');
  const [customNotesInput, setCustomNotesInput] = useState('');

  // Manage selected choices for each option group
  const [selectedOptionsMap, setSelectedOptionsMap] = useState<Record<string, { choiceLabel: string; priceModifier?: number }>>(() => {
    if (!product || !product.options) return {};
    const initial: Record<string, { choiceLabel: string; priceModifier?: number }> = {};
    product.options.forEach(opt => {
      if (opt.choices.length > 0) {
        initial[opt.name] = {
          choiceLabel: opt.choices[0].label,
          priceModifier: opt.choices[0].priceModifier
        };
      }
    });
    return initial;
  });

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] text-[#18181B] flex flex-col items-center justify-center p-6 text-center font-sans">
        <h2 className="text-3xl font-bold mb-2">Product Not Found</h2>
        <p className="text-[#52525B] text-sm mb-6">The requested product could not be located in our catalog.</p>
        <Link
          to="/shop"
          className="bg-[#E54827] text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-md"
        >
          Return to Storefront
        </Link>
      </div>
    );
  }

  // Calculate adjusted unit price
  let adjustedUnitPrice = product.price;
  if (adjustedUnitPrice !== null) {
    (Object.values(selectedOptionsMap) as Array<{ choiceLabel: string; priceModifier?: number }>).forEach(opt => {
      if (opt.priceModifier) {
        adjustedUnitPrice! += opt.priceModifier;
      }
    });
  }

  const handleOptionSelect = (optionName: string, choiceLabel: string, priceModifier?: number) => {
    setSelectedOptionsMap(prev => ({
      ...prev,
      [optionName]: { choiceLabel, priceModifier }
    }));
  };

  const getOptionSelectionsArray = (): CartItemOptionSelection[] => {
    return (Object.entries(selectedOptionsMap) as Array<[string, { choiceLabel: string; priceModifier?: number }]>).map(([optionName, val]) => ({
      optionName,
      choiceLabel: val.choiceLabel,
      priceModifier: val.priceModifier
    }));
  };

  const handleAddToCart = () => {
    addToCart(
      product,
      getOptionSelectionsArray(),
      quantity,
      customDimensionsInput.trim() || undefined,
      customNotesInput.trim() || undefined
    );
  };

  const handleDirectWhatsAppQuote = () => {
    let msg = `Hello Aplund Company! I would like to enquire about ordering the following product:\n\n`;
    msg += `*Product:* ${product.name}\n`;
    msg += `*Category:* ${product.categoryLabel}\n`;
    msg += `*Quantity:* ${quantity}\n`;

    const optionArr = getOptionSelectionsArray();
    if (optionArr.length > 0) {
      msg += `*Selected Options:*\n`;
      optionArr.forEach(opt => {
        msg += `- ${opt.optionName}: ${opt.choiceLabel}\n`;
      });
    }

    if (customDimensionsInput.trim()) {
      msg += `*Custom Sizing:* ${customDimensionsInput.trim()}\n`;
    }

    if (customNotesInput.trim()) {
      msg += `*Additional Notes:* ${customNotesInput.trim()}\n`;
    }

    if (adjustedUnitPrice !== null) {
      msg += `*Estimated Unit Price:* ${formatNaira(adjustedUnitPrice)}\n`;
      msg += `*Estimated Total:* ${formatNaira(adjustedUnitPrice * quantity)}\n`;
    } else {
      msg += `*Price:* Quote Required on Consultation\n`;
    }

    msg += `\nPlease confirm final pricing, delivery time, and Lagos installation details.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER.replace('+', '')}?text=${encoded}`, '_blank');
  };

  const relatedProducts = product.relatedProductIds
    ? productsData.filter(p => product.relatedProductIds?.includes(p.id))
    : productsData.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#18181B] font-sans py-8 px-4 md:px-8 max-w-7xl mx-auto selection:bg-[#E54827] selection:text-white">
      
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-[#52525B] mb-8 overflow-x-auto whitespace-nowrap">
        <Link to="/" className="hover:text-[#E54827] transition-colors">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-[#E54827] transition-colors">Shop</Link>
        <span>/</span>
        <Link to={`/shop/${product.category}`} className="hover:text-[#E54827] transition-colors uppercase">
          {product.categoryLabel}
        </Link>
        <span>/</span>
        <span className="text-[#E54827] font-bold">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[4/3] md:aspect-square rounded-3xl overflow-hidden border border-[#E4E4E7] bg-[#F4F3EF] shadow-sm">
            <img
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-300"
            />
            {product.customMade && (
              <span className="absolute top-4 left-4 bg-[#18181B]/80 backdrop-blur-md text-white border border-white/20 text-xs uppercase tracking-wider font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#E54827]" /> Tailored Custom Piece
              </span>
            )}
          </div>

          {/* Thumbnail Strip */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-[#E54827] scale-105 shadow-md'
                      : 'border-[#E4E4E7] opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Product Specifications Table */}
          {product.specifications && (
            <div className="pt-6 border-t border-[#E4E4E7] mt-8">
              <h4 className="text-xs font-bold text-[#18181B] uppercase tracking-wider mb-4">
                Technical Specifications
              </h4>
              <div className="bg-white border border-[#E4E4E7] rounded-2xl p-4 divide-y divide-[#E4E4E7] text-xs shadow-sm">
                {product.specifications.map((spec, i) => (
                  <div key={i} className="py-2.5 flex justify-between gap-4">
                    <span className="text-[#52525B] font-medium">{spec.label}</span>
                    <span className="text-[#18181B] font-bold text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Product Info & Purchase Form */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs text-[#E54827] font-mono font-bold uppercase tracking-widest">
              {product.categoryLabel}
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-[#18181B] mt-1 tracking-tight">
              {product.name}
            </h1>
            
            {/* Price Display */}
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-black font-mono text-[#18181B]">
                {adjustedUnitPrice !== null ? formatNaira(adjustedUnitPrice) : 'Quote on Consultation'}
              </span>
              {product.priceLabel && adjustedUnitPrice === product.price && (
                <span className="text-xs text-[#52525B]">({product.priceLabel})</span>
              )}
            </div>
          </div>

          <p className="text-[#52525B] text-sm leading-relaxed border-t border-b border-[#E4E4E7] py-4 font-normal">
            {product.fullDescription}
          </p>

          {/* Digital Companion Box Callout if Vault */}
          {product.isVault && (
            <div className="p-4 bg-[#FEF2F0] border border-[#E54827]/30 rounded-2xl space-y-1 text-xs">
              <span className="text-[#E54827] font-bold uppercase tracking-wider block text-[10px]">Digital Companion & Manual Recording</span>
              <p className="text-[#18181B] font-medium leading-relaxed">
                {product.digitalCompanionDescription}
              </p>
              <p className="text-[11px] text-[#71717A] italic pt-1">
                Note: Savings records are manually entered by the owner. The Vault does not automatically detect cash inside it.
              </p>
            </div>
          )}

          {/* Included Items */}
          {product.includedItems && product.includedItems.length > 0 && (
            <div className="space-y-2 text-xs text-[#18181B]">
              <p className="font-bold uppercase tracking-wider text-[10px] text-[#E54827]">What Is Included:</p>
              <div className="grid grid-cols-1 gap-1.5">
                {product.includedItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E54827]" />
                    <span className="text-[#52525B]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Care Information */}
          {product.careInformation && (
            <div className="text-xs text-[#52525B]">
              <span className="font-bold text-[#18181B]">Care Information: </span>
              <span>{product.careInformation}</span>
            </div>
          )}

          {/* Dynamic Option Selectors */}
          {product.options && product.options.length > 0 && (
            <div className="space-y-5 pt-2">
              {product.options.map((optGroup) => (
                <div key={optGroup.name} className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-[#18181B]">{optGroup.name}</span>
                    <span className="text-[#E54827] font-bold">
                      {selectedOptionsMap[optGroup.name]?.choiceLabel}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {optGroup.choices.map((choice) => {
                      const isSelected =
                        selectedOptionsMap[optGroup.name]?.choiceLabel === choice.label;
                      return (
                        <button
                          key={choice.label}
                          type="button"
                          onClick={() =>
                            handleOptionSelect(optGroup.name, choice.label, choice.priceModifier)
                          }
                          className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#E54827] bg-[#FEF2F0] text-[#18181B] font-bold shadow-sm'
                              : 'border-[#E4E4E7] bg-white text-[#52525B] hover:border-[#E54827]/40'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span>{choice.label}</span>
                            {choice.priceModifier ? (
                              <span className="text-[10px] text-[#E54827] font-mono font-bold">
                                +{formatNaira(choice.priceModifier)}
                              </span>
                            ) : null}
                          </div>
                          {choice.description && (
                            <p className="text-[10px] text-[#52525B] mt-1">{choice.description}</p>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Custom Dimension / Note Input */}
          <div className="space-y-3 pt-2">
            <div>
              <label className="block text-xs font-bold text-[#18181B] mb-1">
                Custom Wall / Room Dimensions (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g., 210cm Height x 120cm Width"
                value={customDimensionsInput}
                onChange={(e) => setCustomDimensionsInput(e.target.value)}
                className="w-full bg-white border border-[#E4E4E7] rounded-xl px-4 py-2.5 text-xs text-[#18181B] placeholder-[#71717A] focus:outline-none focus:border-[#E54827]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#18181B] mb-1">
                Special Requests or Notes (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Please send references of gold handles or warm LED lighting."
                value={customNotesInput}
                onChange={(e) => setCustomNotesInput(e.target.value)}
                className="w-full bg-white border border-[#E4E4E7] rounded-xl px-4 py-2.5 text-xs text-[#18181B] placeholder-[#71717A] focus:outline-none focus:border-[#E54827]"
              />
            </div>
          </div>

          {/* Quantity Selector & Action Buttons */}
          <div className="pt-4 space-y-3">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-[#18181B]">Quantity:</span>
              <div className="flex items-center border border-[#E4E4E7] rounded-xl bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-[#52525B] hover:text-[#18181B] transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm font-bold font-mono text-[#18181B]">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-[#52525B] hover:text-[#18181B] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {adjustedUnitPrice !== null && (
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#E54827] hover:bg-[#C22E14] text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" /> Add To Shopping Cart
                </button>
              )}

              <button
                type="button"
                onClick={handleDirectWhatsAppQuote}
                className="flex-1 bg-white hover:bg-[#F4F3EF] text-[#18181B] border border-[#E4E4E7] font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" /> Direct WhatsApp Enquiry
              </button>
            </div>
          </div>

          {/* Shipping & Support Badges */}
          <div className="p-4 bg-white border border-[#E4E4E7] rounded-2xl space-y-2 text-xs text-[#52525B] shadow-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#E54827]" />
              <span>Production Lead Time: <strong className="text-[#18181B]">{product.leadTime || '5 - 7 business days'}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#E54827]" />
              <span>Delivery: <strong className="text-[#18181B]">{product.deliveryInfo || 'Wooden Crate Shipping Nationwide'}</strong></span>
            </div>
            {product.installationAvailable && (
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#E54827]" />
                <span>Installation: <strong className="text-[#18181B]">Lagos Site Fitting & Mounting Available</strong></span>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="pt-16 border-t border-[#E4E4E7]">
          <div className="mb-8">
            <span className="text-xs text-[#E54827] uppercase tracking-widest font-bold">
              Complementary Pieces
            </span>
            <h3 className="text-2xl font-bold text-[#18181B] mt-1">You May Also Like</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map(rel => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      )}

      {/* Mobile Sticky Bar */}
      <MobileProductBar
        product={product}
        onAddToCart={handleAddToCart}
        onWhatsAppQuote={handleDirectWhatsAppQuote}
      />

    </div>
  );
};
