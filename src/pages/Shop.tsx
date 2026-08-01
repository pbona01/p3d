import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { ProductGrid } from '../components/products/ProductGrid';
import { productsData } from '../lib/products-data';
import { ProductCategory } from '../types/products';
import { Search, SlidersHorizontal } from 'lucide-react';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // Determine initial category from URL path or search param
  const getCategoryFromLocation = (): ProductCategory | 'all' => {
    if (location.pathname.includes('/mirrors')) return 'mirrors';
    if (location.pathname.includes('/wardrobes')) return 'wardrobes';
    if (location.pathname.includes('/vault')) return 'vault';
    return (searchParams.get('category') as ProductCategory | 'all') || 'all';
  };

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>(getCategoryFromLocation());
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');

  useEffect(() => {
    setSelectedCategory(getCategoryFromLocation());
  }, [location.pathname, searchParams]);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'mirrors', label: 'Custom Mirrors' },
    { id: 'wardrobes', label: 'Custom Wardrobes' },
    { id: 'vault', label: 'The Vault Box' }
  ];

  const handleCategoryChange = (cat: ProductCategory | 'all') => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    return productsData
      .filter((p) => {
        if (selectedCategory !== 'all' && p.category !== selectedCategory) {
          return false;
        }
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = p.name.toLowerCase().includes(q);
          const matchDesc = p.shortDescription.toLowerCase().includes(q);
          const matchCat = p.categoryLabel.toLowerCase().includes(q);
          if (!matchName && !matchDesc && !matchCat) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') {
          const priceA = a.price ?? 99999999;
          const priceB = b.price ?? 99999999;
          return priceA - priceB;
        }
        if (sortBy === 'price-desc') {
          const priceA = a.price ?? -1;
          const priceB = b.price ?? -1;
          return priceB - priceA;
        }
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        }
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#18181B] font-sans py-10 px-4 md:px-8 max-w-7xl mx-auto selection:bg-[#E54827] selection:text-white">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs text-[#E54827] uppercase tracking-widest font-extrabold">
          Aplund Product Catalog
        </span>
        <h1 className="text-3xl sm:text-5xl font-black mt-1 tracking-tight text-[#18181B]">
          Explore Our Collection
        </h1>
        <p className="text-[#52525B] text-sm mt-2 leading-relaxed">
          Browse luxury LED mirrors, bespoke fitted wardrobes, and our physical savings box handcrafted in Lagos.
        </p>
      </div>

      {/* Filter Controls Bar */}
      <div className="bg-white border border-[#E4E4E7] rounded-2xl p-4 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
        
        {/* Category Pill Filters */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id as ProductCategory | 'all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#E54827] text-white shadow-sm'
                  : 'bg-[#F4F3EF] text-[#52525B] hover:bg-[#E4E4E7] hover:text-[#18181B]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search & Sort Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          {/* Search Input */}
          <div className="relative w-full sm:w-60">
            <Search className="w-4 h-4 text-[#71717A] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl pl-9 pr-3 py-2 text-xs text-[#18181B] placeholder-[#71717A] focus:outline-none focus:border-[#E54827]"
            />
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <SlidersHorizontal className="w-4 h-4 text-[#71717A] flex-shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#FAF9F6] border border-[#E4E4E7] rounded-xl px-3 py-2 text-xs text-[#18181B] focus:outline-none focus:border-[#E54827] cursor-pointer"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name: A - Z</option>
            </select>
          </div>
        </div>

      </div>

      {/* Product Count indicator */}
      <div className="flex justify-between items-center mb-6 text-xs text-[#52525B]">
        <p>Showing <span className="text-[#18181B] font-bold">{filteredProducts.length}</span> products</p>
        {(selectedCategory !== 'all' || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
              searchParams.delete('category');
              setSearchParams(searchParams);
            }}
            className="text-[#E54827] hover:underline font-bold"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Main Product Grid */}
      <ProductGrid
        products={filteredProducts}
        emptyMessage="No products match your selected category or search query. Try clearing filters to view all products."
      />

    </div>
  );
};
