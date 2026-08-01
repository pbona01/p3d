import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] bg-[#050505] text-white flex flex-col items-center justify-center p-6 text-center font-sans">
      <span className="text-6xl font-black text-[#c5a880] font-mono mb-2">404</span>
      <h1 className="text-2xl sm:text-3xl font-bold mb-3">Page Not Found</h1>
      <p className="text-gray-400 text-sm max-w-md mb-8 leading-relaxed">
        The requested page or collection could not be located. Explore our storefront or return to the main catalog.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="bg-[#c5a880] text-black font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Return Home
        </Link>
        <Link
          to="/shop"
          className="bg-white/10 text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider flex items-center gap-2"
        >
          <Search className="w-4 h-4" /> Browse Shop Catalog
        </Link>
      </div>
    </div>
  );
};
