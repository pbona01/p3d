import React from 'react';
import { testimonials } from '../lib/testimonials-data';
import { Star, Quote, MessageSquare, CheckCircle } from 'lucide-react';
import { OFFICIAL_WHATSAPP_NUMBER } from '../lib/products-data';
import { Link } from 'react-router-dom';

export const TestimonialsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans py-12 px-4 md:px-8 max-w-7xl mx-auto selection:bg-[#c5a880] selection:text-black">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs text-[#c5a880] uppercase tracking-widest font-bold">
          Verified Reviews
        </span>
        <h1 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight">
          What Our Clients Say
        </h1>
        <p className="text-gray-400 text-sm mt-3 leading-relaxed">
          Read genuine feedback from homeowners, interior designers, and creators who transformed their space with Aplund.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {testimonials.map((review) => (
          <div
            key={review.id}
            className="p-6 bg-[#121212] border border-white/10 rounded-3xl space-y-4 flex flex-col justify-between hover:border-[#c5a880]/40 transition-all shadow-xl"
          >
            <div className="space-y-3">
              {/* Star rating */}
              <div className="flex items-center gap-1 text-[#c5a880]">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-xs text-gray-300 leading-relaxed italic">
                "{review.comment}"
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div>
                <p className="font-bold text-white text-xs flex items-center gap-1">
                  {review.name} <CheckCircle className="w-3.5 h-3.5 text-[#c5a880]" />
                </p>
                <p className="text-[10px] text-gray-500">{review.location}</p>
              </div>

              <span className="text-[10px] bg-[#c5a880]/15 text-[#c5a880] border border-[#c5a880]/20 font-bold px-2 py-0.5 rounded-full">
                {review.productPurchased}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Trust CTA */}
      <div className="bg-[#121212] border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          Join Hundreds of Satisfied Lagos Homeowners
        </h2>
        <p className="text-xs text-gray-400 max-w-xl mx-auto leading-relaxed">
          Ready for your own custom LED aura mirror, executive wardrobe, or savings box? Contact our craft team on WhatsApp.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/shop"
            className="bg-[#c5a880] text-black font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider"
          >
            Explore Store Catalog
          </Link>

          <a
            href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER.replace('+', '')}?text=Hello%20Aplund!%20I%20read%20your%20client%20reviews%20and%20would%20like%20to%20order.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" /> Speak with Craft Team
          </a>
        </div>
      </div>

    </div>
  );
};
