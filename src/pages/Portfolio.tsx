import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, X, Award, Hammer, MapPin, Sparkles } from "lucide-react";
import { projects, Project } from "../lib/projects-data";
import { useNavigate } from "react-router-dom";

export const Portfolio: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeModalImageIdx, setActiveModalImageIdx] = useState(0);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="relative min-h-screen bg-black text-white pt-28 pb-20 px-6 md:px-12 lg:px-24">
      {/* Background Radial Glow */}
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Hand-Crafted Collection
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans text-4xl md:text-6xl font-black mb-4 tracking-tight"
          >
            Our <span className="text-gold">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-xl text-sm md:text-base leading-relaxed"
          >
            Explore recent bespoke commissions, full-length illuminated mirrors, and hand-fitted wardrobe installations across Lagos and nationwide.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/5 pb-6"
        >
          {["All", "Wardrobes", "Mirrors", "Walk-in Closets"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-5 py-2.5 rounded-full font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === tab 
                  ? "bg-gold text-black shadow-[0_0_15px_rgba(197,168,128,0.4)]" 
                  : "bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:bg-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="group relative h-[420px] rounded-2xl overflow-hidden border border-white/10 cursor-pointer flex flex-col justify-end"
                onClick={() => {
                  setSelectedProject(project);
                  setActiveModalImageIdx(0);
                }}
              >
                <img 
                  src={project.img} 
                  alt={`${project.title} - Custom handcrafted piece`} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-0" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>

                <div className="relative p-6 z-20 w-full">
                  <span className="px-3 py-0.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-wider w-fit block mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-sans text-xl font-bold mb-2 text-white group-hover:text-gold transition-colors">{project.title}</h3>
                  <p className="text-gray-300 text-xs mb-4 line-clamp-2">{project.desc}</p>
                  <span className="text-xs font-bold uppercase tracking-widest text-gold inline-flex items-center gap-1 group-hover:underline">
                    View Project Details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-zinc-900/20 rounded-2xl border border-white/5">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Portfolio Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-zinc-950 border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white z-10 transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                {/* Images View */}
                <div>
                  <div className="relative h-[280px] md:h-[360px] rounded-xl overflow-hidden border border-white/10 mb-4 bg-black">
                    <img 
                      src={selectedProject.images[activeModalImageIdx]} 
                      alt={`${selectedProject.title} detail view ${activeModalImageIdx + 1}`} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Left/Right Buttons */}
                    <button 
                      onClick={() => {
                        setActiveModalImageIdx(prev => prev === 0 ? selectedProject.images.length - 1 : prev - 1);
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black text-gold border border-white/10 z-10 cursor-pointer"
                      aria-label="Previous Image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => {
                        setActiveModalImageIdx(prev => prev === selectedProject.images.length - 1 ? 0 : prev + 1);
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black text-gold border border-white/10 z-10 cursor-pointer"
                      aria-label="Next Image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Thumbnails */}
                  <div className="flex gap-2 justify-center flex-wrap">
                    {selectedProject.images.map((thumb, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveModalImageIdx(idx)}
                        className={`w-14 h-11 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                          activeModalImageIdx === idx ? "border-gold scale-105" : "border-white/10 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={thumb}
                          alt="thumbnail"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          decoding="async"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-wider w-fit inline-block mb-3">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-sans text-2xl md:text-3xl font-black text-white mb-4">{selectedProject.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">{selectedProject.story}</p>

                    <div className="space-y-3 bg-white/5 border border-white/5 p-4 rounded-xl mb-6">
                      <div className="flex items-center gap-2 text-xs text-gray-300">
                        <Award className="w-4 h-4 text-gold flex-shrink-0" />
                        <span>Premium Grade Materials & Finishes</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-300">
                        <Hammer className="w-4 h-4 text-gold flex-shrink-0" />
                        <span>100% Handcrafted and Fitted Bespoke Piece</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-300">
                        <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                        <span>Designed and Built locally in our Lagos Workshop</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      setSelectedProject(null);
                      navigate("/contact", { state: { projectType: selectedProject.category === "Mirrors" ? "Mirror" : "Wardrobe" } });
                    }}
                    className="w-full bg-gold hover:bg-gold-hover text-black py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] cursor-pointer text-center"
                  >
                    Request a Quote For This Piece
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
