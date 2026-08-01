import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../../types/products';
import { Package } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  emptyMessage = 'No products available in this collection.'
}) => {
  if (products.length === 0) {
    return (
      <div className="py-16 text-center bg-[#121212] border border-white/10 rounded-3xl p-8 max-w-lg mx-auto">
        <Package className="w-12 h-12 mx-auto text-gray-600 mb-4" />
        <h4 className="text-white font-bold text-lg mb-2">No Products Found</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
