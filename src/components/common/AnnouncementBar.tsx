import React from 'react';
import { Sparkles, PhoneCall } from 'lucide-react';
import { OFFICIAL_WHATSAPP_DISPLAY } from '../../lib/products-data';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#18181B] text-white border-b border-[#27272A] text-xs py-2.5 px-4 font-sans">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 text-gray-200 truncate">
          <span className="inline-flex items-center gap-1 bg-[#E54827]/20 text-[#E54827] border border-[#E54827]/30 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-[#E54827]" /> Handcrafted In Lagos
          </span>
          <span className="truncate text-gray-300 font-medium">Bespoke LED Mirrors, Fitted Wardrobes & The Vault Box</span>
        </div>
        
        <a 
          href={`https://wa.me/2347070276427`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 text-xs text-[#E54827] hover:text-[#C22E14] font-bold whitespace-nowrap transition-colors"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Direct WhatsApp: {OFFICIAL_WHATSAPP_DISPLAY}</span>
        </a>
      </div>
    </div>
  );
};
