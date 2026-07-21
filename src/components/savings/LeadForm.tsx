import React, { useState } from 'react';

interface LeadFormProps {
  onSubmit: (data: { name: string; phone: string; email: string }) => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="Full Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white" />
      <input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white" />
      <input type="email" placeholder="Email Address" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white" />
      <button type="submit" className="w-full bg-gold text-black font-bold py-3 rounded-xl">Start Saving</button>
    </form>
  );
};
