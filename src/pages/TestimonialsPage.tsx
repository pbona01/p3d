import React from 'react';
import { testimonials } from '../lib/testimonials-data';
import { Star, Quote, MessageSquare, CheckCircle } from 'lucide-react';
import { OFFICIAL_WHATSAPP_NUMBER } from '../lib/products-data';
import { Link } from 'react-router-dom';

export const TestimonialsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#18181B] font-sans py-12 px-4 md:px-8 max-w-7xl mx-auto selection:bg-[#FEF2F0] selection:text-[#E54827]">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs text-[#E54827] uppercase tracking-widest font-extrabold">
          Verified Reviews
        </span>
        <h1 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight text-[#18181B]">
          What Our Clients Say
        </h1>
        <p className="text-[#52525B] text-sm mt-3 leading-relaxed">
          Read genuine feedback from homeowners, interior designers, and creators who transformed their space with Aplund.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {testimonials.map((review) => (
          <div
            key={review.id}
            className="p-6 bg-white border border-[#E4E4E7] rounded-3xl space-y-4 flex flex-col justify-between hover:border-[#E54827]/40 transition-all shadow-sm"
          >
            <div className="space-y-3">
              {/* Star rating */}
              <div className="flex items-center gap-1 text-[#E54827]">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-xs text-[#52525B] leading-relaxed italic">
                "{review.comment}"
              </p>
            </div>

            <div className="pt-4 border-t border-[#E4E4E7] flex items-center justify-between">
              <div>
                <p className="font-bold text-[#18181B] text-xs flex items-center gap-1">
                  {review.name} <CheckCircle className="w-3.5 h-3.5 text-[#E54827]" />
                </p>
                <p className="text-[10px] text-[#71717A]">{review.location}</p>
              </div>

              <span className="text-[10px] bg-[#FEF2F0] text-[#E54827] border border-[#E54827]/20 font-bold px-2.5 py-0.5 rounded-full">
                {review.productPurchased}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Trust CTA */}
      <div className="bg-white border border-[#E4E4E7] rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-black text-[#18181B]">
          Join Hundreds of Satisfied Lagos Homeowners
        </h2>
        <p className="text-xs text-[#52525B] max-w-xl mx-auto leading-relaxed">
          Ready for your own custom LED aura mirror, executive wardrobe, or savings box? Contact our craft team on WhatsApp.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/shop"
            className="bg-[#E54827] hover:bg-[#C22E14] text-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-md"
          >
            Explore Store Catalog
          </Link>

          <a
            href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER.replace('+', '')}?text=Hello%20Aplund!%20I%20read%20your%20client%20reviews%20and%20would%20like%20to%20order.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <MessageSquare className="w-4 h-4" /> Speak with Craft Team
          </a>
        </div>
      </div>

    </div>
  );
};
