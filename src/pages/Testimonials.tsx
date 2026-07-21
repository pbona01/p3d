import React from "react";
import { motion } from "motion/react";
import { Sparkles, Star, Quote, Award, CheckCircle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

interface TestimonialItem {
  quote: string;
  client: string;
  location: string;
  project: string;
  rating: number;
  date: string;
  avatarLetter: string;
}

export const Testimonials: React.FC = () => {
  const verifiedReviews: TestimonialItem[] = [
    {
      quote: "The craftsmanship is exceptional. Every detail was perfectly considered, and the custom brass handles match our aesthetic flawlessly. The dual-tone wood is stunning.",
      client: "James",
      location: "Lekki Phase 1, Lagos",
      project: "Master Bedroom Fitted Wardrobe",
      rating: 5,
      date: "June 2026",
      avatarLetter: "J"
    },
    {
      quote: "Their full-length backlit mirror is the absolute highlight of my new walk-in closet. The light temperature is absolutely spot on and there's no reflection distortion.",
      client: "Sarah",
      location: "Ikeja GRA, Lagos",
      project: "Custom Backlit LED Mirror",
      rating: 5,
      date: "May 2026",
      avatarLetter: "S"
    },
    {
      quote: "From the initial consultation drawings to the final fitted result, the process was incredibly professional. It fits perfectly to the millimeter.",
      client: "Robert",
      location: "East Legon, Accra, Ghana",
      project: "Walk-in Dressing Closet",
      rating: 5,
      date: "April 2026",
      avatarLetter: "R"
    },
    {
      quote: "Absolutely blown away by the heavy-duty physical oak savings box. It's built like a tank but looks like a luxury decoration. The digital tracking works wonderfully.",
      client: "Emeka",
      location: "Victoria Island, Lagos",
      project: "Aplund Solid Oak Savings Box",
      rating: 5,
      date: "July 2026",
      avatarLetter: "E"
    },
    {
      quote: "I ordered the snapchat halo mirror for my salon. Every single customer takes photos in it. The neon branding on the top is super crisp and beautiful.",
      client: "Tobi",
      location: "Surulere, Lagos",
      project: "Neon Branding Snapchat Mirror",
      rating: 5,
      date: "March 2026",
      avatarLetter: "T"
    },
    {
      quote: "Professional delivery down to Ghana! They handled customs, crating, and instructions flawlessly. Looking forward to commissioning our kitchen cabinetry next.",
      client: "Ama",
      location: "Airport Residential, Accra",
      project: "Bespoke Dressing Table & Mirror",
      rating: 5,
      date: "February 2026",
      avatarLetter: "A"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white pt-28 pb-20 px-6 md:px-12 lg:px-24">
      {/* Glow highlight background */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold uppercase tracking-wider mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-gold animate-pulse" />
            100% Client Satisfaction
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Client <span className="text-gold">Testimonials</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-sm md:text-base leading-relaxed"
          >
            Discover why home designers, entrepreneurs, and luxury seekers across Nigeria and West Africa rely on Aplund's absolute precision and master carpentry.
          </motion.p>
        </div>

        {/* Highlight Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20 bg-zinc-950 border border-white/5 rounded-2xl p-8 text-center"
        >
          <div className="border-b sm:border-b-0 sm:border-r border-white/10 pb-6 sm:pb-0">
            <h3 className="text-3xl md:text-4xl font-black text-gold">100%</h3>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-2">Bespoke Fitting Guarantee</p>
          </div>
          <div className="border-b sm:border-b-0 sm:border-r border-white/10 py-6 sm:py-0">
            <h3 className="text-3xl md:text-4xl font-black text-gold">500+</h3>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-2">Spaces Upgraded</p>
          </div>
          <div className="pt-6 sm:pt-0">
            <h3 className="text-3xl md:text-4xl font-black text-gold">4.9/5</h3>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-2">Verified Client Rating</p>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verifiedReviews.map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-zinc-950 border border-white/5 hover:border-gold/30 rounded-2xl p-8 relative flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_10px_30px_rgba(197,168,128,0.05)]"
            >
              <div>
                {/* Quote Indicator & Rating */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-gold/15 group-hover:text-gold/20 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-gray-300 italic text-sm md:text-base leading-relaxed relative z-10 mb-6">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="border-t border-white/5 pt-4 mt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center font-bold text-gold text-sm uppercase">
                  {testimonial.avatarLetter}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-white text-sm">
                    {testimonial.client}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {testimonial.location} • {testimonial.date}
                  </p>
                  <span className="inline-block text-[10px] font-bold tracking-widest text-gold uppercase mt-1">
                    {testimonial.project}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 p-8 md:p-12 text-center"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold via-white to-gold"></div>
          
          <h2 className="font-sans text-2xl md:text-4xl font-black mb-4">Ready to Create Your Own <span className="text-gold">Masterpiece</span>?</h2>
          <p className="text-gray-400 max-w-md mx-auto text-sm md:text-base mb-8">
            Let us turn your spatial ideas into fully-fitted premium furniture. Request your layout consultation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-3.5 bg-gold hover:bg-gold-hover text-black rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105"
            >
              Request Free Consultation
            </Link>
            <Link 
              to="/portfolio" 
              className="w-full sm:w-auto px-8 py-3.5 border border-white/20 hover:border-white text-white rounded-full font-bold text-sm tracking-wide transition-all"
            >
              Browse Portfolio
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
