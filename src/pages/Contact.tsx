import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Sparkles, Upload, MessageSquare, Instagram, Twitter } from "lucide-react";
import { useLocation } from "react-router-dom";

export const Contact: React.FC = () => {
  const location = useLocation();
  const state = location.state as { projectType?: string } | null;

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "Bedroom",
    projectType: "Wardrobe",
    stylePreference: "Modern Minimal",
    dimensions: "",
    budgetRange: "₦75k-₦100k",
    timeline: "ASAP",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  // Pre-fill project type if coming from portfolio page link
  useEffect(() => {
    if (state?.projectType) {
      setFormData(prev => ({
        ...prev,
        projectType: state.projectType === "Mirror" ? "Mirror" : "Wardrobe"
      }));
    }
  }, [state]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0].name);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Format WhatsApp message with user details
    const text = `Hi Aplund! I would like to request a layout consultation.
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Room Type: ${formData.roomType}
Project Type: ${formData.projectType}
Style Preference: ${formData.stylePreference}
Approx. Dimensions: ${formData.dimensions || "Not specified"}
Budget Range: ${formData.budgetRange}
Timeline: ${formData.timeline}
Message: ${formData.message || "None"}`;

    const whatsappUrl = `https://wa.me/2347070276427?text=${encodeURIComponent(text)}`;
    
    // Open in a new tab
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }, 1200);
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      roomType: "Bedroom",
      projectType: "Wardrobe",
      stylePreference: "Modern Minimal",
      dimensions: "",
      budgetRange: "₦75k-₦100k",
      timeline: "ASAP",
      message: "",
    });
    setUploadedFile(null);
    setIsSubmitted(false);
  };

  return (
    <div className="relative min-h-screen bg-black text-white pt-28 pb-20 px-6 md:px-12 lg:px-24">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-gold/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a96e]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Get a Handcrafted Quote
          </motion.div>
          
          <h1 className="font-sans text-4xl md:text-6xl font-black mb-4 tracking-tight">
            Contact <span className="text-gold">Aplund</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Ready to remodel your space? Reach out using our design consultation form, or connect with our workshop artisans directly.
          </p>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-zinc-950 border border-white/5 rounded-2xl p-6">
              <h3 className="font-sans font-bold text-[#c9a96e] text-xs uppercase tracking-widest mb-6">Lagos Headquarters</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 text-gold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Our Workshop</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">Lekki-Epe Expressway, Lekki, Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 text-gold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Artisan Direct</h4>
                    <p className="text-xs text-gray-400 font-mono">+234 707 027 6427</p>
                    <p className="text-[10px] text-gold font-bold uppercase mt-1">Available on WhatsApp & Calls</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 text-gold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Client Relations</h4>
                    <p className="text-xs text-gray-400 font-mono">hello@aplund.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-white/5 rounded-2xl p-6">
              <h3 className="font-sans font-bold text-[#c9a96e] text-xs uppercase tracking-widest mb-4">Artisan Hours</h3>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Monday — Friday</span>
                  <span className="font-bold text-white">8:00 AM — 6:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Saturday</span>
                  <span className="font-bold text-white">9:00 AM — 4:00 PM</span>
                </li>
                <li className="flex justify-between text-gray-500">
                  <span>Sunday</span>
                  <span className="italic">Closed (Online intake open)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Dynamic Form Card */}
          <div className="lg:col-span-8 bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-gold to-white"></div>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gold/10 border border-gold/30 text-gold p-8 rounded-2xl text-center flex flex-col items-center gap-4 max-w-lg mx-auto my-10"
              >
                <Sparkles className="w-12 h-12 text-gold animate-bounce" />
                <h3 className="font-sans font-bold text-xl text-white">Consultation Form Sent!</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. We are initiating your quotation based on your preferences (<em>{formData.stylePreference} {formData.projectType}</em>).
                </p>
                <p className="text-xs text-gray-400">
                  Opening WhatsApp to instantly connect with our workshop lead at <strong>+234 707 027 6427</strong>...
                </p>
                {uploadedFile && (
                  <p className="text-[11px] text-gray-400 italic">Attached Idea: {uploadedFile}</p>
                )}
                <button 
                  onClick={handleResetForm}
                  className="mt-4 px-6 py-2 rounded-full border border-gold text-gold hover:bg-gold hover:text-black transition-colors font-bold text-xs cursor-pointer"
                >
                  Submit Another Specification
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2" htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Robert Sterling" 
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2" htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. robert@example.com" 
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2" htmlFor="phone">Phone / WhatsApp</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +234 707 027 6427" 
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    />
                  </div>
                  {/* Room Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2" htmlFor="roomType">Room Layout Type</label>
                    <select
                      id="roomType"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    >
                      <option value="Bedroom">Bedroom</option>
                      <option value="Hallway">Hallway</option>
                      <option value="Living Room">Living Room</option>
                      <option value="Walk-in Closet">Walk-in Closet</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2" htmlFor="projectType">Piece Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    >
                      <option value="Wardrobe">Wardrobe</option>
                      <option value="Mirror">Mirror</option>
                      <option value="Both">Both</option>
                      <option value="Unsure">Unsure</option>
                    </select>
                  </div>

                  {/* Style Preference */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2" htmlFor="stylePreference">Style</label>
                    <select
                      id="stylePreference"
                      name="stylePreference"
                      value={formData.stylePreference}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    >
                      <option value="Modern Minimal">Modern Minimal</option>
                      <option value="Classic">Classic</option>
                      <option value="Industrial">Industrial</option>
                      <option value="Art Deco">Art Deco</option>
                      <option value="Unsure">Unsure</option>
                    </select>
                  </div>

                  {/* Approx Dimensions */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2" htmlFor="dimensions">Approx. Dimensions</label>
                    <input 
                      type="text" 
                      id="dimensions"
                      name="dimensions"
                      value={formData.dimensions}
                      onChange={handleInputChange}
                      placeholder="e.g. 2.5m x 3.0m" 
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2" htmlFor="budgetRange">Budget Range</label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    >
                      <option value="₦30k-₦50k">₦30k-₦50k</option>
                      <option value="₦50k-₦75k">₦50k-₦75k</option>
                      <option value="₦75k-₦100k">₦75k-₦100k</option>
                      <option value="₦100k+">₦100k+</option>
                      <option value="Prefer to discuss">Prefer to discuss</option>
                    </select>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2" htmlFor="timeline">Desired Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    >
                      <option value="ASAP">ASAP</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="Just exploring">Just exploring</option>
                    </select>
                  </div>
                </div>

                {/* Upload Inspiration */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">Inspiration Image (Optional)</label>
                  <div className="relative border border-dashed border-white/20 hover:border-gold rounded-xl p-6 transition-colors duration-300 bg-black/30 flex flex-col items-center justify-center cursor-pointer">
                    <input 
                      type="file" 
                      id="inspiration-file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                    />
                    <Upload className="w-8 h-8 text-gold mb-2" />
                    <span className="text-xs text-gray-400 font-bold">
                      {uploadedFile ? `Attached: ${uploadedFile}` : "Drag & Drop or click to attach drawing/photo"}
                    </span>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2" htmlFor="message">Message Details</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about wood type, mirror frames, handles, LEDs, or other requirements..." 
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-hover text-black px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.01] shadow-[0_0_20px_rgba(197,168,128,0.3)] cursor-pointer"
                >
                  Send Consultation Spec to WhatsApp
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
