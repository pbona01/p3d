import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const HowItWorksStep = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center p-6 bg-[#171717] rounded-xl border border-[#262626]">
    <div className="w-12 h-12 flex items-center justify-center bg-[#c9a96e] text-black rounded-full font-bold text-xl mb-4">
      {number}
    </div>
    <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

export const SavingsLanding: React.FC = () => {
  const navigate = useNavigate();

  const pricing = [
    { name: 'Small', price: '₦15,000' },
    { name: 'Medium', price: '₦25,000' },
    { name: 'Large', price: '₦35,000' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* Hero */}
        <section className="text-center pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Save in <span className="text-[#c9a96e]">Style</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full h-64 bg-[#171717] rounded-xl border border-[#262626] mb-8 flex items-center justify-center"
          >
            <span className="text-gray-500">Box Image Placeholder</span>
          </motion.div>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-[#c9a96e] text-black font-bold py-3 px-8 rounded-xl hover:scale-105 transition-transform"
          >
            Get Your Box
          </button>
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <HowItWorksStep number="1" title="Buy Box" description="Choose your premium wooden savings box." />
            <HowItWorksStep number="2" title="Scan QR" description="Scan the code to set up your account." />
            <HowItWorksStep number="3" title="Track Savings" description="Log every deposit digitally." />
          </div>
        </section>

        {/* Pricing */}
        <section className="pb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div key={p.name} className="p-6 bg-[#171717] rounded-xl border border-[#262626] text-center">
                <h3 className="text-gray-400 mb-2">{p.name}</h3>
                <p className="text-[#c9a96e] text-3xl font-bold mb-6">{p.price}</p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="w-full border border-[#c9a96e] text-[#c9a96e] py-2 rounded-lg hover:bg-[#c9a96e] hover:text-black transition-colors"
                >
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
