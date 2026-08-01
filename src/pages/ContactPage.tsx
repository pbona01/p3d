import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, MessageSquare, Clock, CheckCircle2, Send 
} from 'lucide-react';
import { 
  OFFICIAL_WHATSAPP_NUMBER, OFFICIAL_WHATSAPP_DISPLAY, OFFICIAL_EMAIL, OFFICIAL_LOCATION 
} from '../lib/products-data';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Custom Mirrors');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    let text = `Hello Aplund Company! I am reaching out from your website contact page.\n\n`;
    text += `*Name:* ${name.trim()}\n`;
    text += `*Phone:* ${phone.trim()}\n`;
    text += `*Interest:* ${category}\n`;
    if (message.trim()) {
      text += `*Project Details / Dimensions:* ${message.trim()}\n`;
    }
    text += `\nPlease guide me on design, pricing, and Lagos site measurement.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER.replace('+', '')}?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#18181B] font-sans py-12 px-4 md:px-8 max-w-6xl mx-auto selection:bg-[#FEF2F0] selection:text-[#E54827]">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs text-[#E54827] uppercase tracking-widest font-extrabold">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight text-[#18181B]">
          Contact Our Atelier
        </h1>
        <p className="text-[#52525B] text-sm mt-3 leading-relaxed">
          Have questions about custom sizing, LED lighting choices, or Lagos site measurements? We're here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 bg-white border border-[#E4E4E7] rounded-3xl space-y-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#18181B] border-b border-[#E4E4E7] pb-3">
              Direct Contact Details
            </h2>

            <div className="space-y-5 text-xs text-[#52525B]">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEF2F0] text-[#E54827] flex items-center justify-center flex-shrink-0 border border-[#E54827]/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[#18181B] text-sm">Phone & WhatsApp</p>
                  <p className="text-[#52525B] mt-0.5">{OFFICIAL_WHATSAPP_DISPLAY}</p>
                  <p className="text-[10px] text-[#71717A]">Mon - Sat: 8:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEF2F0] text-[#E54827] flex items-center justify-center flex-shrink-0 border border-[#E54827]/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[#18181B] text-sm">Email Support</p>
                  <p className="text-[#52525B] mt-0.5">{OFFICIAL_EMAIL}</p>
                  <p className="text-[10px] text-[#71717A]">24/7 Response for Design Enquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEF2F0] text-[#E54827] flex items-center justify-center flex-shrink-0 border border-[#E54827]/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[#18181B] text-sm">Atelier & Showroom</p>
                  <p className="text-[#52525B] mt-0.5">{OFFICIAL_LOCATION}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E4E4E7]">
              <a
                href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER.replace('+', '')}?text=Hello%20Aplund!%20I%20want%20to%20ask%20a%20quick%20question.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4" /> Start Direct WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Consultation Form */}
        <div className="lg:col-span-7 bg-white border border-[#E4E4E7] rounded-3xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-lg font-bold text-[#18181B] border-b border-[#E4E4E7] pb-3 mb-6">
            Send Design Inquiry
          </h2>

          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
              <h3 className="text-xl font-bold text-[#18181B]">Inquiry Prepared!</h3>
              <p className="text-xs text-[#52525B] max-w-sm mx-auto leading-relaxed">
                Your consultation request has been formatted and opened in WhatsApp. Our craft team will respond shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#E54827] font-bold underline pt-4"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#18181B] font-bold mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Amaka Williams"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-3 text-[#18181B] placeholder-[#71717A] focus:outline-none focus:border-[#E54827]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#18181B] font-bold mb-1">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 08012345678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-3 text-[#18181B] placeholder-[#71717A] focus:outline-none focus:border-[#E54827]"
                  />
                </div>

                <div>
                  <label className="block text-[#18181B] font-bold mb-1">Product Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-3 text-[#18181B] focus:outline-none focus:border-[#E54827] cursor-pointer"
                  >
                    <option value="Custom Mirrors">Custom LED Aura Mirrors</option>
                    <option value="Custom Wardrobes">Custom Fitted Wardrobes</option>
                    <option value="The Vault Savings Box">The Vault Savings Box</option>
                    <option value="General Consultation">General Interior Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#18181B] font-bold mb-1">Project Details or Custom Sizing</label>
                <textarea
                  rows={4}
                  placeholder="Describe your desired style, dimensions, lighting color, or room location..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-4 py-3 text-[#18181B] placeholder-[#71717A] focus:outline-none focus:border-[#E54827]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#E54827] hover:bg-[#C22E14] text-white font-bold py-4 rounded-xl uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Send className="w-4 h-4" /> Send Consultation Request via WhatsApp
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};
